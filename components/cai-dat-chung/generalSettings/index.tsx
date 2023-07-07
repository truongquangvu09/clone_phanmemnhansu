import React, { useEffect, useState } from "react";
import styles from "./GeneralSettings.module.css";

export default function GeneralSettings() {


    return (
      <>
        <div className={`${styles.tab_content}`}>
          <div className={`${styles.l_content_setting}`}>
            <div className={`${styles.content_1}`}>
              <div className={`${styles.content_1_left}`}>
                <p>THÔNG TIN CÔNG TY</p>
                <picture>
                    <img src={`${'/icon_down.svg'}`} alt=""></img>
                </picture>
              </div>

              <div className={`${styles.content_1_right}`}>
                <button>
                    <p>Chỉnh sửa</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}
