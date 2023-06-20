import React, { useState } from "react";

import styles from "./performRecruitment.module.css";
import { log } from "console";
import Link from "next/link";

export interface PerformRecruitment {}

export default function PerformRecruitment({ children }: any) {
  const [active, setActive] = useState(true);

  const handleActive = () => {};
  const directional = [
    {
      id: 1,
      name: "TỔNG QUAN",
    },
    {
      id: 2,
      name: "TIN TUYỂN DỤNG",
    },
  ];

  return (
    <>
      <div className={`${styles.l_body}`}>
        <ul className={`${styles.nav} ${styles.nav_tabs}`}>
          <li className={`${styles.li_tabs}`}>
            <span
              className={`${active === true ? styles.active : " "} `}
              onChange={handleActive}
            >
              TỔNG QUAN
            </span>
          </li>
          <li className={`${styles.li_tabs}`}>
            <span
              className={`${active === false ? styles.active : " "} `}
              onChange={handleActive}
            >
              TIN TUYỂN DỤNG
            </span>
          </li>
        </ul>
      </div>

      <div className={`${styles.tab_content}`}>
        <div id="tongquan" className={`${styles.fade} ${styles.in} ${styles.active}`}>
          <div className={`${styles.tindangmo}`} id="tindangmo_left">
            {/* title */}
            <div className={`${styles.tin_title}`}>
              <h5>Tin đang mở</h5>
            </div>

            {/* body */}

            <div className={`${styles.tin_all} ${styles.tin_all_t_left}`}>
              <hr></hr>
              <div className={`${styles.tin_item}`}>
                <div className={`${styles.tin_item1}`}>
                  <span>1</span>
                  <p>ứng viên</p>
                </div>

                <div className={`${styles.tin_item2}`}>
                  <h4>
                    <Link
                      href={{
                        pathname: "",
                        query: "",
                      }}
                    >
                      (TD189) it
                    </Link>
                  </h4>
                </div>

                <div className={`${styles.tin_item3}`}>
                  <li className={`${styles.tin_item33}`}>
                    <picture>
                      <img src="https://phanmemnhansu.timviec365.vn/assets/images/l_images/calendar.png"></img>
                      17/06/2023 - 19/06/2023
                    </picture>
                  </li>

                  <li>
                    Est consequatur of
                    <span>.</span>5 - 7 triệu
                  </li>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
