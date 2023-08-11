import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import PersonalDiscipline from "@/components/luong-thuong-phuc-loi/ky-luat/personalDiscipline/PersonalDiscipline";
import DisciplineList from "@/components/luong-thuong-phuc-loi/ky-luat/disciplineList/DisciplineList";
import CollectiveDiscipline from "@/components/luong-thuong-phuc-loi/ky-luat/collectiveDiscipline/CollectiveDiscipline";
import Head from "next/head";
import { getDataAuthentication } from "@/pages/api/Home/HomeService";
import LoadingSpinner from "@/components/loading";
import PageAuthenticator from "@/components/quyen-truy-cap";
import { getToken } from "@/pages/api/token";
import jwt_decode from "jwt-decode";

export default function NavBar({ children }: any) {
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
        setDisplayIcon(response?.data?.data?.infoRoleTTVP);
        setIsDataLoaded(true); 
        setIsLoading(false); 
      };
      fetchData();
    } catch (error) {}
   
  }, []);

  const perIdArray = displayIcon?.map((item) => item.perId);
  const authen = perIdArray?.includes(1);
  const iconAdd = perIdArray?.includes(2);
  const iconEdit = perIdArray?.includes(3);
  const iconDelete = perIdArray?.includes(4);
  const NavBarList = [
    {
      key: 1,
      header: "CÁ NHÂN",
      component: <PersonalDiscipline iconAdd = {iconAdd} iconEdit = {iconEdit}tokenType = {tokenType}></PersonalDiscipline>,
    },
    {
      key: 2,
      header: "TẬP THỂ",
      component: <CollectiveDiscipline iconAdd = {iconAdd} iconEdit = {iconEdit} tokenType = {tokenType}></CollectiveDiscipline>,
    },
    {
      key: 3,
      header: "DANH SÁCH VI PHẠM",
      component: <DisciplineList iconEdit = {iconEdit} tokenType = {tokenType}></DisciplineList>,
    },
  ];

  return (
    <>
     <Head>
      <title>Kỷ luật - Quản lý nhân sự - Timviec365.vn</title>
    </Head>
    {tokenType === 1 ? (
        isLoading ? (
          <LoadingSpinner />
        ) : (
          
            <div className={`${styles.l_body}`}>
              <ul className={`${styles.nav} ${styles.nav_tabs}`}>
                {NavBarList.map((item) => (
                  <div key={item.key}>
                    <li className={`${styles.li_tabs}`}>
                      <span
                        className={`${
                          active === item?.key ? styles.active : styles.hover
                        } `}
                        onClick={() => setActive(item.key)}
                      >
                        {item.header}
                      </span>
                    </li>
                  </div>
                ))}
              </ul>
              {NavBarList.find((item) => item.key === active)?.component}
            </div>
          
        )
      )  : authen ? (
        isDataLoaded && (
          <div className={`${styles.l_body}`}>
            <ul className={`${styles.nav} ${styles.nav_tabs}`}>
              {NavBarList.map((item) => (
                <div key={item.key}>
                  <li className={`${styles.li_tabs}`}>
                    <span
                      className={`${
                        active === item?.key ? styles.active : styles.hover
                      } `}
                      onClick={() => setActive(item.key)}
                    >
                      {item.header}
                    </span>
                  </li>
                </div>
              ))}
            </ul>
            {NavBarList.find((item) => item.key === active)?.component}
          </div>
        )
      ) : (
        <PageAuthenticator></PageAuthenticator>
      )}
    </>
  );
}
