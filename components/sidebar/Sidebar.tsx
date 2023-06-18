import React, { useState } from "react";
import styles from "./sidebar.module.css";
import { number } from "prop-types";
import Link from "next/link";
import RecruitmentManager from "./subMenu/recruitmentManager/recruitmentManager";
import SalaryAndBenefits from "./subMenu/salaryAndBenefits/salaryAndBenefits";


export interface SideBarProp { }

export default function Sidebar(props: SideBarProp) {
  const [activeButton, setActiveButton] = useState(null);
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [subMenuShown, setSubMenuShown] = useState(null);
  console.log({ activeButton });

  const handleClick = (buttonIndex: number) => {
    if (subMenuShown === buttonIndex) {
      setShowSubMenu(!showSubMenu);
    } else {
      setShowSubMenu(true);
    }
    // @ts-ignore
    setActiveButton(buttonIndex);
    // @ts-ignore
    setSubMenuShown(buttonIndex);
  };
  const sidebarItems = [
    {
      label: "Trang chủ",
      icon: "https://phanmemnhansu.timviec365.vn//assets/images/l_images/home.svg",
      href: '/',
      submenu: null
    },
    {
      label: "Quản lý tuyển dụng",
      icon: "https://phanmemnhansu.timviec365.vn//assets/images/l_images/tuyendung.svg",
      href: '',
      submenu: <RecruitmentManager />
    },
    {
      label: "Lương thưởng và phúc lợi",
      icon: "https://phanmemnhansu.timviec365.vn//assets/images/l_images/thanhtich_vipham.svg",
      href: '',
      submenu: <SalaryAndBenefits />
    },
    {
      label: "Quản lý hành chính",
      icon: "		https://phanmemnhansu.timviec365.vn//assets/images/icon-menu/vn-hanhchinh.svg",
      href: '',
      submenu: <SalaryAndBenefits />
    },
    {
      label: "Đào tạo phát triển",
      icon: "	https://phanmemnhansu.timviec365.vn//assets/images/icon-menu/vn_daotao.svg",
      href: '',
      submenu: <SalaryAndBenefits />
    },
    {
      label: "Sơ đồ tổ chức",
      icon: "https://phanmemnhansu.timviec365.vn//assets/images/icon-menu/vn_sodotochuc.svg",
      href: '',
      submenu: <SalaryAndBenefits />
    },
    {
      label: "Báo cáo nhân sự",
      icon: "		https://phanmemnhansu.timviec365.vn//assets/images/l_images/baocao_ns.svg",
      href: '',
      submenu: <SalaryAndBenefits />
    },
    {
      label: "Cài đặt",
      icon: "		https://phanmemnhansu.timviec365.vn//assets/images/icon-menu/vn_icon_setting.svg",
      href: '',
      submenu: <SalaryAndBenefits />
    },
    {
      label: "Dữ liệu gần đây đã xóa",
      icon: "		https://phanmemnhansu.timviec365.vn//assets/images/l_images/daxoa.svg",
      href: '',
      submenu: <SalaryAndBenefits />
    },
    {
      label: "Chuyển đổi số",
      icon: "		https://phanmemnhansu.timviec365.vn//assets/images/icon-menu/vn_chuyendoiso.svg",
      href: '',
      submenu: <SalaryAndBenefits />
    },


  ];

  return (
    <>
      <div className={`${styles.sidebar_wrapper}`}>
        <div className={`${styles.logo}`}>
          <a href="https://https://timviec365.vn/">
            <img
              src="https://phanmemnhansu.timviec365.vn//assets/images/l_images/logo.svg"
              alt="icon"
            />
          </a>
        </div>
        {sidebarItems.map((item, index) => (
          <div key={index}>
            <Link
              key={index}
              className={`${activeButton === index ? styles.clicked : ""}`}
              onClick={() => handleClick(index)}
              href={item.href}
            >
              <div className={`${styles.sidebar_home}`}>
                <div className={`${styles.button1}`}>
                  <img src={item.icon} className={`${styles.img_1}`} alt="Index" />
                </div>
                <div className={`${styles.sidebar_text}`}>{item.label}</div>
              </div>
            </Link>
            {showSubMenu && activeButton === index && item.submenu}
          </div>

        ))}

      </div>
    </>
  );
}
