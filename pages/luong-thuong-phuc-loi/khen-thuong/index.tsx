import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import PersonalReward from "@/components/luong-thuong-phuc-loi/khen-thuong/personalReward/PersonalReward";
import CommendationTeam from "@/components/luong-thuong-phuc-loi/khen-thuong/commendationTeam/CommendationTeam";
import AchievementList from "@/components/luong-thuong-phuc-loi/khen-thuong/achievementList/AchievementList";
import { GetDataAchievement } from "@/pages/api/luong-thuong-phuc-loi/reward";
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
      if(tokenType) {
        const fetchData = async () => {
          const response = await getDataAuthentication();
          console.log(response)
          setDisplayIcon(response?.data.data.infoRoleTTVP);
          
        };
        fetchData();
      }
    } catch (error) {}
    finally {
      setIsDataLoaded(true);
      setIsLoading(false);
    }
    
  }, []);

  const perIdArray = displayIcon?.map((item) => item.perId);
  const authen = perIdArray?.includes(1);
  const iconAdd = perIdArray?.includes(2);
  const iconEdit = perIdArray?.includes(3);
  const iconDelete = perIdArray?.includes(4);
  console.log(authen)
  const NavBarList = [
    {
      key: 1,
      header: "CÁ NHÂN",
      component: (
        <PersonalReward iconAdd={iconAdd} iconEdit={iconEdit} tokenType = {tokenType}></PersonalReward>
      ),
    },
    {
      key: 2,
      header: "TẬP THỂ",
      component: (
        <CommendationTeam
          iconAdd={iconAdd}
          iconEdit={iconEdit}
          tokenType = {tokenType}
        ></CommendationTeam>
      ),
    },
    {
      key: 3,
      header: "DANH SÁCH THÀNH TÍCH",
      component: <AchievementList iconEdit={iconEdit} tokenType></AchievementList>,
    },
  ];

  return (
    <>
      <Head>
        <title>Khen thưởng - Quản lý nhân sự - Timviec365.vn</title>
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
