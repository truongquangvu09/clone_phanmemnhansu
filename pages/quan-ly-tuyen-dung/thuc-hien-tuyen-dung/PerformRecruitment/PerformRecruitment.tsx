/* eslint-disable react/jsx-key */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";

import styles from "./PerformRecruitment.module.css";
import Link from "next/link";
import BodyFrameFooter from "@/components/bodyFrame/bodyFrame_footer/bodyFrame_footer";

export interface PerformRecruitment {}

export default function PerformRecruitment({ children }: any) {
  const [selectedButton, setSelectedButton] = useState('homnay');

  const handleClickColor = (buttonId: any) => {
    setSelectedButton(buttonId);
  };

  const tindangmodata = [
    {
      id: 1,
      ungvien: "ứng viên",
      title: "(TD189) it",
      date: "17/06/2023 - 19/06/2023",
      company: "Est consequatur of",
      price: "5 - 7 triệu",
      hoso: "4",
      phongvan: "5",
      biloai: "5",
      thuviec: "7",
    },
    {
      id: 2,
      ungvien: "ứng viên",
      title: "(TD189) it",
      date: "17/06/2023 - 19/06/2023",
      company: "Est consequatur of",
      price: "5 - 7 triệu",
      hoso: "4",
      phongvan: "5",
      biloai: "5",
      thuviec: "7",
    },
    {
      id: 3,
      ungvien: "ứng viên",
      title: "(TD189) it",
      date: "17/06/2023 - 19/06/2023",
      company: "Est consequatur of",
      price: "5 - 7 triệu",
      hoso: "4",
      phongvan: "5",
      biloai: "5",
      thuviec: "7",
    },
  ];

  return (
    <>
      <div className={`${styles.tab_content}`}>
        <div
          id="tongquan"
          className={`${styles.fade} ${styles.in} ${styles.active}`}
        >
          <div className={`${styles.tindangmo}`} id="tindangmo_left">
            {/* title */}
            <div className={`${styles.tin_title}`}>
              <h5>Tin đang mở</h5>
            </div>
            <hr></hr>
            {/* body map ở đây */}
            {tindangmodata.map((item, index) => (
              <div
                key={index}
                className={`${styles.tin_all} ${styles.tin_all_t_left}`}
              >
                <div className={`${styles.tin_item}`}>
                  <div className={`${styles.tin_item1}`}>
                    <span>{item.hoso}</span>
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
                        <span>{item.title}</span>
                      </Link>
                    </h4>
                    <div className={`${styles.tin_item3}`}>
                      <li>
                        <picture>
                          <img
                            className={`${styles.tin_item33_img}`}
                            src="https://phanmemnhansu.timviec365.vn/assets/images/l_images/calendar.png"
                          ></img>
                          <span>{item.date}</span>
                        </picture>
                      </li>

                      <li>
                        <span>{item.company}</span>
                        <span>.</span>
                        <span>{item.price}</span>
                      </li>
                    </div>
                    <hr></hr>
                  </div>
                  {/* Hồ sơ */}
                  <div className={`${styles.tin_item4}`}>
                    <li>
                      <span className={`${styles.blue} ${styles.text}`}>
                        {item.hoso}
                      </span>
                      <p>Hồ sơ</p>
                    </li>
                    <li>
                      <span className={`${styles.yellow} ${styles.text}`}>
                        {item.phongvan}
                      </span>
                      <p>Phỏng vấn</p>
                    </li>
                    <li>
                      <span className={`${styles.red} ${styles.text}`}>
                        {item.biloai}
                      </span>
                      <p>Bị loại</p>
                    </li>
                    <li>
                      <span className={`${styles.green} ${styles.text}`}>
                        {item.thuviec}
                      </span>
                      <p>Thử việc</p>
                    </li>
                  </div>
                </div>
                <hr></hr>
              </div>
            ))}

            {/* end ở đây */}
          </div>

          <div className={`${styles.tindangmo}`}>
            <div className={`${styles.tin_title}`}>
              <h5>Tổng số ứng viên</h5>
            </div>
            <hr></hr>
            <div className={`${styles.h_today}`}>
              <li
                className={`${selectedButton === 'homnay' ? styles.active_homnay : ''}`}
                onClick={() => handleClickColor("homnay")}
              >
                <span className={`${styles.green} ${styles.candidate_today}`}>
                  0
                </span>
                <p>Hôm nay</p>
              </li>
              <li
                className={`${selectedButton === 'tuannay' ? styles.active_tuannay : ''}`}
                onClick={() => handleClickColor("tuannay")}
              >
                <span className={`${styles.blue} ${styles.candidate_week}`}>
                  0
                </span>
                <p>Tuần này</p>
              </li>
              <li
                className={`${selectedButton === 'thangnay' ? styles.active_thangnay : ''}`}
                onClick={() => handleClickColor("thangnay")}
              >
                <span className={`${styles.yellow} ${styles.candidate_month}`}>
                  0
                </span>
                <p>Tháng này</p>
              </li>
            </div>
          </div>

          <div className={`${styles.tindangmo}`} style={{ marginTop: "3%" }}>
            <div className={`${styles.tin_title}`}>
              <h5>Đến phỏng vấn</h5>
            </div>
          </div>
        </div>
        <BodyFrameFooter src="https://www.youtube.com/embed/v8FmUlUI1bs"></BodyFrameFooter>
      </div>
    </>
  );
}
