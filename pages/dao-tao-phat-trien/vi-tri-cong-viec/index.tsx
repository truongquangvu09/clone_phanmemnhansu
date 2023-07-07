import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import ListJobPosition from "./listJobPosition/ListJobPosition";

export default function JobPosition({ children }: any) {
  const [active, setActive] = useState(1);
  const listTab = [
    {
      key: 1,
      header: "VỊ TRÍ CÔNG VIỆC",
      component: <ListJobPosition></ListJobPosition>,
    },
  ];

  return (
    <>
      <div className={`${styles.l_body}`}>
        <ul className={`${styles.nav} ${styles.nav_tabs}`}>
          {listTab.map((item) => (
            <div key={item.key} className={`${styles.w_480}`}>
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
        {listTab.find((item) => item.key === active)?.component}
      </div>
    </>
  );
}
