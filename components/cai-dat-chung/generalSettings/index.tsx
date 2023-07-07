import React, { useEffect, useState } from "react";
import styles from "./GeneralSettings.module.css";

export default function GeneralSettings() {
    const [isShow, setIsShow] = useState(false)
    const toggleDropAnimation = () => {
        setIsShow(!isShow);
      };

    const data = [
        {
            congty: 'Công ty Cổ phần Thanh toán Hưng Hà 2',
            phone:'0356021606',
            linhvuc: 'Công nghệ thông tin',
            quymo: '50',
            diachi: 'Trần Nguyên Đán, đô thị Định Công, Hoàng Mai, Hà Nội',
            email: 'trangchuoi4@gmail.com'
        }
    ]
    return (
      <>
        <div className={`${styles.tab_content}`}>
          <div className={`${styles.l_content_setting}`}>
            <div className={`${styles.content_1}`}>
              <div onClick={toggleDropAnimation} className={`${styles.content_1_left} ${isShow ? styles.active : ''}`}>
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

            {isShow && (
                <div className={`${styles.content_1_show} ${isShow ? 'open' : ''}`}>
                    <div className={`${styles.content_1_show_body} ${styles.l_content_border} ${isShow ? 'open' : ''}`}>
                        <div className={`${styles.content_1_show_body_left}`}>
                            <p>{data[0]?.congty}</p>
                        </div>

                        <div className={`${styles.content_1_show_body_right}`}>
                            <p>Điện thoại: {data[0]?.phone}</p>
                        </div>
                    </div>

                    <div className={`${styles.content_1_show_body} ${styles.l_content_border}`}>
                        <div className={`${styles.content_1_show_body_left}`}>
                            <p>Lĩnh vực hoạt động: {data[0]?.linhvuc}</p>
                        </div>

                        <div className={`${styles.content_1_show_body_right}`}>
                            <p>Quy mô nhân sự: {data[0]?.quymo}</p>
                        </div>
                    </div>

                    <div className={`${styles.content_1_show_body} ${styles.l_content_border}`}>
                        <div className={`${styles.content_1_show_body_left}`}>
                            <p>Địa chỉ liên lạc: {data[0]?.diachi}</p>
                        </div>

                        <div className={`${styles.content_1_show_body_right}`}>
                            <p>Email: {data[0]?.email}</p>
                        </div>
                    </div>
                </div>
            )}
          </div>
        </div>
        
      </>
    );
}
