
import React, { useState } from "react";
import styles from './headerForm.module.css'
import PerformRecruitment from "./PerformRecruitment/PerformRecruitment";
import Recruitment from "./Recruitment/recruitment";


export interface HeaderForm {}

export default function HeaderForm({ children }: any) {
  const [active, setActive] = useState(1);
  const listTab = [
    {
      key: 1,
      header: "TỔNG QUAN",
      component: <PerformRecruitment></PerformRecruitment>,

    },
    {
      key: 2,
      header: "TIN TUYỂN DỤNG",
      component: <Recruitment></Recruitment>,
      
    },
    
  ]
  return (
    <>
       <div className={`${styles.l_body}`}>
       <ul className={`${styles.nav} ${styles.nav_tabs}`}>
        {listTab.map((item)=>(
          <div key={item.key} className={`${styles.mr_5}`}>
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
       {listTab.find(item => item.key === active)?.component } 
    </>
  );
}
