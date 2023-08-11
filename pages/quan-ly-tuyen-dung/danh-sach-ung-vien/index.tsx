import React, { useEffect, useState } from "react";
import styles from "./candidateList.module.css";
import Link from "next/link";
import CandidateListDetail from "./candidateListDetail";
import CandidateRepo from "@/components/quan-ly-tuyen-dung/danh-sach-ung-vien/candidateRepo";
import { getDataAuthentication } from "@/pages/api/Home/HomeService";
import LoadingSpinner from "@/components/loading";
import PageAuthenticator from "@/components/quyen-truy-cap";
import jwt_decode from "jwt-decode";
import { getToken } from "@/pages/api/token";
export interface CandidateList {}

export default function CandidateList({ children }: any) {
  const [active, setActive] = useState(1);
  const [displayIcon, setDisplayIcon] = useState<any>();
  const [isLoading, setIsLoading] = useState(true);
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [tokenType, setTokenType] = useState<any>(null);
  const COOKIE_KEY = "user_365";

  useEffect(() => {
    const currentCookie = getToken(COOKIE_KEY);
    if (currentCookie) {
      const decodedToken: any = jwt_decode(currentCookie);
      setTokenType(decodedToken?.data?.type);
    }
  }, []);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await getDataAuthentication();
        setDisplayIcon(response?.data?.data?.infoRoleTD);
      };
      fetchData();
    } catch (error) {
    } finally {
      setIsDataLoaded(true);
      setIsLoading(false);
    }
  }, []);

  const perIdArray = displayIcon?.map((item) => item.perId);
  const authen = perIdArray?.includes(1);
  const iconAdd = perIdArray?.includes(2);
  const iconEdit = perIdArray?.includes(3);
  const iconDelete = perIdArray?.includes(4);
  return (
    <>
      {tokenType === 1 ? (
        !isDataLoaded ? (
          <LoadingSpinner />
        ): (
          <div className={`${styles.wrapper}`}>
            <ul className={`${styles.nav_tab} ${styles.nav}`}>
              <li
                className={`${active === 1 ? styles.active : ""}`}
                onClick={() => setActive(1)}
              >
                <Link href="">Danh sách ứng viên</Link>
              </li>
              <li
                className={`${active === 2 ? styles.active : ""}`}
                onClick={() => setActive(2)}
              >
                <Link href="">Kho ứng viên</Link>
              </li>
            </ul>
            {active === 1 ? (
              <CandidateListDetail iconAdd = {iconAdd} iconEdit = {iconEdit} iconDelete = {iconDelete} tokenType = {tokenType}></CandidateListDetail>
            ) : (
              <CandidateRepo></CandidateRepo>
            )}
          </div>
        )
      ): (
        (authen ? (
          !isDataLoaded ? (
            <LoadingSpinner />
          ) : (
            <div className={`${styles.wrapper}`}>
              <ul className={`${styles.nav_tab} ${styles.nav}`}>
                <li
                  className={`${active === 1 ? styles.active : ""}`}
                  onClick={() => setActive(1)}
                >
                  <Link href="">Danh sách ứng viên</Link>
                </li>
                <li
                  className={`${active === 2 ? styles.active : ""}`}
                  onClick={() => setActive(2)}
                >
                  <Link href="">Kho ứng viên</Link>
                </li>
              </ul>
              {active === 1 ? (
                <CandidateListDetail iconAdd = {iconAdd} iconEdit = {iconEdit} iconDelete = {iconDelete} tokenType = {tokenType}></CandidateListDetail>
              ) : (
                <CandidateRepo></CandidateRepo>
              )}
            </div>
          )
        ): <PageAuthenticator></PageAuthenticator>)
      )}

    </>
  );
}
