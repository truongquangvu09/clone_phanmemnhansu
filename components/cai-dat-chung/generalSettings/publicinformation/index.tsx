import React, { useEffect, useState } from "react";
import styles from "./PublicInformation.module.css";

export default function PublicInformation({dataDisplay}) {


  return (
    <>
      <div className={`${styles.l_thongtincongty}`}>
        <div className={`${styles.l_thongtincongty_item}`}>
          <div className={`${styles.l_thongtincongty_text}`}>
            <p>{ dataDisplay?.userName}</p>
          </div>

          <div className={`${styles.l_thongtincongty_text}`}>
            <p>Điện thoại: {dataDisplay?.phoneTK}</p>
          </div>
        </div>
      </div>

      <div className={`${styles.l_thongtincongty}`}>
        <div className={`${styles.l_thongtincongty_item}`}>
          <div className={`${styles.l_thongtincongty_text}`}>
            <p>Lĩnh vực hoạt động: </p>
          </div>

          <div className={`${styles.l_thongtincongty_text}`}>
            <p>Quy mô nhân sự: {dataDisplay?.userNum}</p>
          </div>
        </div>
      </div>

      <div className={`${styles.l_thongtincongty}`}>
        <div className={`${styles.l_thongtincongty_item}`}>
          <div className={`${styles.l_thongtincongty_text}`}>
            <p>Địa chỉ liên lạc:{dataDisplay?.address} </p>
          </div>

          <div className={`${styles.l_thongtincongty_text}`}>
            <p>Email: </p>
          </div>
        </div>
      </div>
    </>
  );
}
