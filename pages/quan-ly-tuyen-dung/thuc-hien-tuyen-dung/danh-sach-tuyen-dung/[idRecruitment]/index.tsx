import { useRouter } from "next/router";
import React, { useState } from "react";
import styles from "./idRecruitment.module.css";
import BodyFrameFooter from "@/components/bodyFrame/bodyFrame_footer/bodyFrame_footer";
export interface IdRecruitment {}

export default function IdRecruitment({ children }: any) {
  const router = useRouter();
  const [active, setActive] = useState(2);
  const handleClick = (item: any) => {
    router.back();
    setActive(item.key);
  };
  const handleBack = () => {
    router.back()
  }
  const listTab = [
    {
      key: 1,
      header: "TỔNG QUAN",
    },
    {
      key: 2,
      header: "TIN TUYỂN DỤNG",
    },
  ];
  const {
    query: { idRecruitment },
  } = router;
  return (
    <>
      <div className={`${styles.l_body}`}>
        <ul className={`${styles.nav} ${styles.nav_tabs}`}>
          {listTab.map((item) => (
            <div key={item.key}>
              <li className={`${styles.li_tabs}`}>
                <span
                  className={`${
                    active === item?.key ? styles.active : styles.hover
                  } `}
                  onClick={() => handleClick(item)}
                >
                  {item.header}
                </span>
              </li>
            </div>
          ))}
        </ul>

        {/* detail */}
        <div className={`${styles.tab_content}`}>
          <div style={{ display: "block" }}>
            <div className={`${styles.detail_tuyendung}`}>
              <div className={`${styles.back_tuyendung}`}
              onClick={handleBack}>
                <span className={`${styles.back_view}`}>
                  <picture>
                    <img
                      src={`/left_arrow.png`}
                      alt=""
                    ></img>
                  </picture>
                </span>

                <span className={`${styles.back_text}`}>Xem chỉ tiêu</span>
              </div>
              
              <div className={`${styles.detail_tuyendung1}`}>
                <h4 className={`${styles.tuyendung1_title}`}>
                  Tiêu đề tuyển dụng
                </h4>
                <p>
                  Nhân viên phụ trách tuyển dụng:{" "}
                </p>
                <p>Số lượng tuyển: {} </p>
                <p>Mức lương: {}</p>
                <p>Thời gian tuyển: từ {} đến: {}</p>
                <p>Người tạo tin</p>
              </div>
            </div>
          </div>
        </div>
        
        {/*  */}
        <div className={`${styles.list_uv} ${styles.row} `}>
          <div className={`${styles.list_uv_cart}`}>
              <div className={`${styles.list_uv_header} ${styles.blue}`}>
                <p className={`${styles.text_center}`}>Ứng viên</p>
              </div>
              <div className={`${styles.list_uv_body}`}>
                <div className={`${styles.lst_uv_body__r} ${styles.blue__r}`}>
                    <p>nguyễn thị thùy mị</p>
                    <p>1515151551</p>
                    <p>nguyenthithuymi@gmail.com</p>
                </div>
              </div>
          </div>
          <div className={`${styles.list_uv_cart}`}>
              <div className={`${styles.list_uv_header} ${styles.orange}`}>
                <p className={`${styles.text_center}`}>Ứng viên</p>
              </div>
              <div className={`${styles.list_uv_body}`}>
                <div className={`${styles.lst_uv_body__r} ${styles.orange__r}`}>
                    <p>nguyễn thị thùy mị</p>
                    <p>1515151551</p>
                    <p>nguyenthithuymi@gmail.com</p>
                </div>
              </div>
          </div>
          <div className={`${styles.list_uv_cart}`}>
              <div className={`${styles.list_uv_header} ${styles.yellow}`}>
                <p className={`${styles.text_center}`}>Ứng viên</p>
              </div>
              <div className={`${styles.list_uv_body}`}>
                <div className={`${styles.lst_uv_body__r} ${styles.yellow__r}`}>
                    <p>nguyễn thị thùy mị</p>
                    <p>1515151551</p>
                    <p>nguyenthithuymi@gmail.com</p>
                </div>
              </div>
          </div>
          <div className={`${styles.list_uv_cart}`}>
              <div className={`${styles.list_uv_header} ${styles.light_blue}`}>
                <p className={`${styles.text_center}`}>Ứng viên</p>
              </div>
              <div className={`${styles.list_uv_body}`}>
                <div className={`${styles.lst_uv_body__r} ${styles.light_blue__r}`}>
                    <p>nguyễn thị thùy mị</p>
                    <p>1515151551</p>
                    <p>nguyenthithuymi@gmail.com</p>
                </div>
              </div>
          </div>
          <div className={`${styles.list_uv_cart}`}>
              <div className={`${styles.list_uv_header} ${styles.red}`}>
                <p className={`${styles.text_center}`}>Ứng viên</p>
              </div>
              <div className={`${styles.list_uv_body}`}>
                <div className={`${styles.lst_uv_body__r} ${styles.red__r}`}>
                    <p>nguyễn thị thùy mị</p>
                    <p>1515151551</p>
                    <p>nguyenthithuymi@gmail.com</p>
                </div>
              </div>
          </div>
          <div className={`${styles.list_uv_cart}`}>
              <div className={`${styles.list_uv_header} ${styles.green}`}>
                <p className={`${styles.text_center}`}>Ứng viên</p>
              </div>
              <div className={`${styles.list_uv_body}`}>
                <div className={`${styles.lst_uv_body__r} ${styles.green__r}`}>
                    <p>nguyễn thị thùy mị</p>
                    <p>1515151551</p>
                    <p>nguyenthithuymi@gmail.com</p>
                </div>
              </div>
          </div>
        </div>
      </div>
      <BodyFrameFooter src= 'https://www.youtube.com/embed/v8FmUlUI1bs'></BodyFrameFooter>
    </>
  );
}
