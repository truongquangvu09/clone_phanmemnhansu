import React, { useState } from "react";
import styles from "./sidebar.module.css";
import { number } from "prop-types";
import Link from "next/link";

export interface SideBarProp { }

export default function Sidebar(props: SideBarProp) {
  const [activeButton, setActiveButton] = useState(null);

  const handleClick = (buttonIndex: number) => {
    // @ts-ignore
    setActiveButton(buttonIndex);
  };

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
        <Link
          className={`  ${activeButton === 0 ? styles.clicked : ""}`}
          onClick={() => handleClick(0)}
          href="/"
        >
          <div className={`${styles.sidebar_home}`}>
            <div className={`${styles.button1}`}>
              <img
                src={
                  "	https://phanmemnhansu.timviec365.vn//assets/images/l_images/home.svg"
                }
                className={`${styles.img_1}`}
                alt="Index"
              />
            </div>
            <div className={`${styles.sidebar_text}`}>Trang chủ</div>
          </div>
        </Link>
        <Link
          className={`  ${activeButton === 1 ? styles.clicked : ""}`}
          onClick={() => handleClick(0)}
          href="/"
        >
          <div className={`${styles.sidebar_home}`}>
            <div className={`${styles.button1}`}>
              <img
                src={
                  "		https://phanmemnhansu.timviec365.vn//assets/images/l_images/tuyendung.svg"
                }
                className={`${styles.img_1}`}
                alt="Index"
              />
            </div>
            <div className={`${styles.sidebar_text}`}>Quản lý tuyển dụng</div>
          </div>
        </Link>
        <Link
          className={`  ${activeButton === 2 ? styles.clicked : ""}`}
          onClick={() => handleClick(0)}
          href="/"
        >
          <div className={`${styles.sidebar_home}`}>
            <div className={`${styles.button1}`}>
              <img
                src={
                  "		https://phanmemnhansu.timviec365.vn//assets/images/l_images/thanhtich_vipham.svg"
                }
                className={`${styles.img_1}`}
                alt="Index"
              />
            </div>
            <div className={`${styles.sidebar_text}`}>Lương thưởng và phúc lợi</div>
          </div>
        </Link>
        <Link
          className={`  ${activeButton === 3 ? styles.clicked : ""}`}
          onClick={() => handleClick(0)}
          href="/"
        >
          <div className={`${styles.sidebar_home}`}>
            <div className={`${styles.button1}`}>
              <img
                src={
                  "		https://phanmemnhansu.timviec365.vn//assets/images/icon-menu/vn-hanhchinh.svg"
                }
                className={`${styles.img_1}`}
                alt="Index"
              />
            </div>
            <div className={`${styles.sidebar_text}`}>Quản lý hành chính</div>
          </div>
        </Link>
        <Link
          className={`  ${activeButton === 4 ? styles.clicked : ""}`}
          onClick={() => handleClick(0)}
          href="/"
        >
          <div className={`${styles.sidebar_home}`}>
            <div className={`${styles.button1}`}>
              <img
                src={
                  "	https://phanmemnhansu.timviec365.vn//assets/images/icon-menu/vn_daotao.svg"
                }
                className={`${styles.img_1}`}
                alt="Index"
              />
            </div>
            <div className={`${styles.sidebar_text}`}>Đào tạo phát triển</div>
          </div>
        </Link>
        <Link
          className={`  ${activeButton === 5 ? styles.clicked : ""}`}
          onClick={() => handleClick(0)}
          href="/"
        >
          <div className={`${styles.sidebar_home}`}>
            <div className={`${styles.button1}`}>
              <img
                src={
                  "https://phanmemnhansu.timviec365.vn//assets/images/icon-menu/vn_sodotochuc.svg"
                }
                className={`${styles.img_1}`}
                alt="Index"
              />
            </div>
            <div className={`${styles.sidebar_text}`}>Sơ đồ tổ chức</div>
          </div>
        </Link>
        <Link
          className={`  ${activeButton === 6 ? styles.clicked : ""}`}
          onClick={() => handleClick(0)}
          href="/"
        >
          <div className={`${styles.sidebar_home}`}>
            <div className={`${styles.button1}`}>
              <img
                src={
                  "		https://phanmemnhansu.timviec365.vn//assets/images/l_images/baocao_ns.svg"
                }
                className={`${styles.img_1}`}
                alt="Index"
              />
            </div>
            <div className={`${styles.sidebar_text}`}>Báo cáo nhân sự</div>
          </div>
        </Link>
        <Link
          className={`  ${activeButton === 7 ? styles.clicked : ""}`}
          onClick={() => handleClick(0)}
          href="/"
        >
          <div className={`${styles.sidebar_home}`}>
            <div className={`${styles.button1}`}>
              <img
                src={
                  "		https://phanmemnhansu.timviec365.vn//assets/images/icon-menu/vn_icon_setting.svg"
                }
                className={`${styles.img_1}`}
                alt="Index"
              />
            </div>
            <div className={`${styles.sidebar_text}`}>Cài đặt</div>
          </div>
        </Link>
        <Link
          className={`  ${activeButton === 8 ? styles.clicked : ""}`}
          onClick={() => handleClick(0)}
          href="/"
        >
          <div className={`${styles.sidebar_home}`}>
            <div className={`${styles.button1}`}>
              <img
                src={
                  "		https://phanmemnhansu.timviec365.vn//assets/images/l_images/daxoa.svg"
                }
                className={`${styles.img_1}`}
                alt="Index"
              />
            </div>
            <div className={`${styles.sidebar_text}`}>Dữ liệu xóa gần đây</div>
          </div>
        </Link>
        <Link
          className={`  ${activeButton === 9 ? styles.clicked : ""}`}
          onClick={() => handleClick(0)}
          href="/"
        >
          <div className={`${styles.sidebar_home}`}>
            <div className={`${styles.button1}`}>
              <img
                src={
                  "		https://phanmemnhansu.timviec365.vn//assets/images/icon-menu/vn_chuyendoiso.svg"
                }
                className={`${styles.img_1}`}
                alt="Index"
              />
            </div>
            <div className={`${styles.sidebar_text}`}>Chuyển đổi số</div>
          </div>
        </Link>

      </div>
    </>
  );
}
