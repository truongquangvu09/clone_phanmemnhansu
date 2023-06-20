import React, { useState } from "react";
import styles from "../../sidebar.module.css";
import Link from "next/link";

export interface SalaryAndBenefits { }

export default function SalaryAndBenefits({ children }: any) {
  const [activeButton, setActiveButton] = useState(null);
  const handleClick = (buttonIndex: number) => {
    // @ts-ignore
    setActiveButton(buttonIndex);
  };

  const submenu = [
    {
      img: "	https://phanmemnhansu.timviec365.vn//assets/images/icon-menu/vn_chamcong.svg",
      title: 'Chấm công',
      href: '',
    },
    {
      img: "		https://phanmemnhansu.timviec365.vn//assets/images/icon-menu/vn_tinhluong.svg",
      title: 'Tính lương',
      href: '',
    },
    {
      img: "	https://phanmemnhansu.timviec365.vn//assets/images/icon-menu/vn_kpi.svg",
      title: 'KPI',
      href: '',
    },
    {
      img: "		https://phanmemnhansu.timviec365.vn//assets/images/l_images/thanhtich.svg",
      title: 'Khen thưởng',
      href: '',
    },
    {
      img: "	https://phanmemnhansu.timviec365.vn//assets/images/l_images/vipham.svg",
      title: 'Kỷ luật( Vi phạm )',
      href: '',
    },
    {
      img: "		https://phanmemnhansu.timviec365.vn//assets/images/icon-menu/vn_phucloi.svg",
      title: 'Phúc lợi',
      href: '',
    },
  ]

  return (
    <>
      {submenu.map((item, index) => (
        <div key={index}>
          <div className={`${styles.subMenu}`}>
            <Link
              className={` ${activeButton === 1 ? styles.clicked : ""}`}
              onClick={() => handleClick(1)}
              href={item.href}
            >
              <div className={`${styles.sidebar_home}`}>
                <div className={`${styles.button2}`}>
                  <img
                    src={
                      item.img
                    }
                    className={`${styles.img_1}`}
                    alt="Index"
                  />
                </div>
                <div className={`${styles.sidebar_text} ${styles.sidebar_text2}`}>{item.title}</div>
              </div>
            </Link>
          </div>
        </div>
      ))}
    </>


  )
}
