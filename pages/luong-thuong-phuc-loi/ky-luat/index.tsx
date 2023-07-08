import React, { useState } from "react";
import styles from "./styles.module.css";
import PersonalDiscipline from "@/components/luong-thuong-phuc-loi/ky-luat/personalDiscipline/PersonalDiscipline";
import DisciplineList from "@/components/luong-thuong-phuc-loi/ky-luat/disciplineList/DisciplineList";
import CollectiveDiscipline from "@/components/luong-thuong-phuc-loi/ky-luat/collectiveDiscipline/CollectiveDiscipline";


export default function NavBar({ children }: any) {
  const [active, setActive] = useState(1);

  const NavBarList = [
    {
      key: 1,
      header: "CÁ NHÂN",
      component: <PersonalDiscipline></PersonalDiscipline>,
    },
    {
      key: 2,
      header: "TẬP THỂ",
      component: <CollectiveDiscipline></CollectiveDiscipline>,
    },
    {
      key: 3,
      header: "DANH SÁCH VI PHẠM",
      component: <DisciplineList></DisciplineList>,
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
