import React, { useEffect, useState } from "react";
import styles from './PublicInformation.module.css'

export default function PublicInformation() {
  const data = [
    {
      congty: "Công ty Cổ phần Thanh toán Hưng Hà 2",
      phone: "0356021606",
      linhvuc: "Công nghệ thông tin",
      quymo: "50",
      diachi: "Trần Nguyên Đán, đô thị Định Công, Hoàng Mai, Hà Nội",
      email: "trangchuoi4@gmail.com",
    },
  ];

    return (
        <>
        <div className={`${styles.l_thongtincongty}`}>
                  <div className={`${styles.l_thongtincongty_item}`}>
                    <div
                      className={`${styles.l_thongtincongty_text}`}
                   
                    >
                      <p>{data[0]?.congty}</p>
                    </div>

                    <div
                      className={`${styles.l_thongtincongty_text}`}
                    
                    >
                      <p>Điện thoại: {data[0]?.phone}</p>
                    </div>
                  </div>
                </div>

                <div className={`${styles.l_thongtincongty}`}>
                  <div className={`${styles.l_thongtincongty_item}`}>
                    <div className={`${styles.l_thongtincongty_text}`}>
                      <p>Lĩnh vực hoạt động: {data[0]?.linhvuc}</p>
                    </div>

                    <div className={`${styles.l_thongtincongty_text}`}>
                      <p>Quy mô nhân sự: {data[0]?.quymo}</p>
                    </div>
                  </div>
                </div>

                <div className={`${styles.l_thongtincongty}`}>
                  <div className={`${styles.l_thongtincongty_item}`}>
                    <div className={`${styles.l_thongtincongty_text}`}>
                      <p>Địa chỉ liên lạc: {data[0]?.diachi}</p>
                    </div>

                    <div className={`${styles.l_thongtincongty_text}`}>
                      <p>Email: {data[0]?.email}</p>
                    </div>
                  </div>
                </div>
        </>
    )
}