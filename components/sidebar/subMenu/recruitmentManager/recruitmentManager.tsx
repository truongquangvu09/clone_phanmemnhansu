import React, { useState } from "react";
import styles from "../../sidebar.module.css";
import Link from "next/link";

export interface RecruitmentManager {}

export default function RecruitmentManager({ children }: any) {
  const [activeButton, setActiveButton] = useState(null);
  const handleClick = (buttonIndex: number) => {
    // @ts-ignore
    setActiveButton(buttonIndex);
  };

  return (
    <div className={`${styles.subMenu}`}>
      {/* Quy trình tuyển dụng */}
      <Link
        className={` ${activeButton === 1 ? styles.clicked : ""}`}
        onClick={() => handleClick(1)}
        href="recruitmentProcess"
      >
        <div className={`${styles.sidebar_home}`}>
          <div className={`${styles.button2}`}>
            <picture>
              <img
                src={
                  "https://phanmemnhansu.timviec365.vn/assets/images/l_images/tuyendung.svg"
                }
                className={`${styles.img_1}`}
                alt="Index"
              />
            </picture>
          </div>
          <div className={`${styles.sidebar_text}`}>Quy trình tuyển dụng</div>
        </div>
      </Link>

      {/* Thực hiện tuyển dụng */}
      <Link
        className={` ${activeButton === 2 ? styles.clicked : ""}`}
        onClick={() => handleClick(2)}
        href="/performRecruitment"
      >
        <div className={`${styles.sidebar_home}`}>
          <div className={`${styles.button2}`}>
            <picture>
              <img
                src={
                  "https://phanmemnhansu.timviec365.vn/assets/images/l_images/thanhtich_vipham.svg"
                }
                className={`${styles.img_1}`}
                alt="Index"
              />
            </picture>
          </div>
          <div className={`${styles.sidebar_text}`}>Thực hiện tuyển dụng</div>
        </div>
      </Link>

      {/* Danh sách ứng viên */}
      <Link
        className={` ${activeButton === 2 ? styles.clicked : ""}`}
        onClick={() => handleClick(2)}
        href="/"
      >
        <div className={`${styles.sidebar_home}`}>
          <div className={`${styles.button2}`}>
            <picture>
              <img
                src={
                  "https://phanmemnhansu.timviec365.vn/assets/images/l_images/thanhtich_vipham.svg"
                }
                className={`${styles.img_1}`}
                alt="Index"
              />
            </picture>
          </div>
          <div className={`${styles.sidebar_text}`}>Danh sách ứng viên</div>
        </div>
      </Link>
      {/* Thêm các link menu con khác vào đây */}
    </div>
  );
}
