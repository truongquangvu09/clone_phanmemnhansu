import React, { useState } from "react";
import styles from "./styles.module.css";
import PersonalReward from "./personalReward/PersonalReward";
import CommendationTeam from "./commendationTeam/CommendationTeam";
import AchievementList from "./achievementList/AchievementList";

export default function NavBar({ children }: any) {
  const [active, setActive] = useState(1);

  const NavBarList = [
    {
      key: 1,
      header: "CÁ NHÂN",
      component: <PersonalReward></PersonalReward>,
    },
    {
      key: 2,
      header: "TẬP THỂ",
      component: <CommendationTeam></CommendationTeam>,
    },
    {
      key: 3,
      header: "DANH SÁCH THÀNH TÍCH",
      component: <AchievementList></AchievementList>,
    },
  ];

  return (
    <>
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
      </div>
      {NavBarList.find(item => item.key === active)?.component } 
    </>
  );
}
