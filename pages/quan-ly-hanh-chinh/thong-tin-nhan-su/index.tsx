import React, { useEffect, useState } from "react";
import styles from "./administration.module.css";
import Link from "next/link";
import TabEmployeeManagement from "@/components/quan-ly-hanh-chinh/thong-tin-nhan-su/tab";
import Head from "next/head";
import { getDataAuthentication } from "@/pages/api/Home/HomeService";
import LoadingSpinner from "@/components/loading";
import PageAuthenticator from "@/components/quyen-truy-cap";
import { getToken } from "@/pages/api/token";
import jwt_decode from "jwt-decode";

export interface EmployeeManagement {}

export default function EmployeeManagement({ children }: any) {
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
        setDisplayIcon(response?.data?.data?.infoRoleTTNS);
        setIsDataLoaded(true); // Move this line here
        setIsLoading(false); // Move this line here
      };
      fetchData();
    } catch (error) {}
  }, []);

  const perIdArray = displayIcon?.map((item) => item.perId);
  const authen = perIdArray?.includes(1);
  const iconAdd = perIdArray?.includes(2);
  const iconEdit = perIdArray?.includes(3);
  const iconDelete = perIdArray?.includes(4);

  return (
    <>
      <Head>
        <title>Quản lý nhân viên - Quản lý nhân sự - Timviec365.vn</title>
      </Head>
     {tokenType === 1 ? (
       !isDataLoaded ? (
        <LoadingSpinner />
      ) : authen ? (
        <div className={`${styles.wrapper}`}>
          <ul className={`${styles.nav_tab} ${styles.nav}`}>
            <li
              className={`${active === 1 ? styles.active : ""}`}
              onClick={() => setActive(1)}
            >
              <Link href="">Danh sách nhân viên</Link>
            </li>
            <li
              className={`${active === 2 ? styles.active : ""}`}
              onClick={() => setActive(2)}
            >
              <Link
                target="blank"
                href="https://chamcong.timviec365.vn/quan-ly-cong-ty/nhan-vien.html"
              >
                Nhân viên chờ duyệt
              </Link>
            </li>
          </ul>
          {active === 1 && <TabEmployeeManagement iconAdd = {iconAdd} iconEdit = {iconEdit} tokenType = {tokenType}></TabEmployeeManagement>}
        </div>
      ) : (
        <PageAuthenticator />
      )
     ): authen ? (!isDataLoaded ? (
      <LoadingSpinner />
    ) : authen ? (
      <div className={`${styles.wrapper}`}>
        <ul className={`${styles.nav_tab} ${styles.nav}`}>
          <li
            className={`${active === 1 ? styles.active : ""}`}
            onClick={() => setActive(1)}
          >
            <Link href="">Danh sách nhân viên</Link>
          </li>
          <li
            className={`${active === 2 ? styles.active : ""}`}
            onClick={() => setActive(2)}
          >
            <Link
              target="blank"
              href="https://chamcong.timviec365.vn/quan-ly-cong-ty/nhan-vien.html"
            >
              Nhân viên chờ duyệt
            </Link>
          </li>
        </ul>
        {active === 1 && <TabEmployeeManagement iconAdd = {iconAdd} iconEdit = {iconEdit} tokenType = {tokenType}></TabEmployeeManagement>}
      </div>
    ) : (
      <PageAuthenticator />
    )): <PageAuthenticator></PageAuthenticator>}
    </>
  );
}
