/* eslint-disable react/jsx-key */
import React, { useState } from "react";
import Link from "next/link";
import styles from './headerForm.module.css'
import { useRouter } from "next/router";
import PerformRecruitment from "./Tabs/Overview/Overview";
import Recruitment from "./Tabs/Recruitment/recruitment";

export interface HeaderForm {}

export default function HeaderForm({ children }: any) {
  const [active, setActive] = useState(1);
  const listTab = [
    {
      key: 1,
      header: "TỔNG QUAN",
      compoment: <PerformRecruitment></PerformRecruitment>
    },
    {
      key: 2,
      header: "TIN TUYỂN DỤNG",
      compoment: <Recruitment></Recruitment>
    },

  ]

  return (
    <>
       <div className={`${styles.l_body}`}>
       <ul className={`${styles.nav} ${styles.nav_tabs}`}>
        {listTab.map((item)=>(
          <div key={item.key}>
             <li  className={`${styles.li_tabs}`}>
           <span
             className={`${active === item?.key ? styles.active : styles.hover} `}
             onClick={() => setActive(item.key)}
           >
             {item.header}
           </span>
         </li>
          </div>
        ))}
       </ul>
       </div>
       {listTab.find(item => item.key === active)?.compoment}
    </>
  );
}
