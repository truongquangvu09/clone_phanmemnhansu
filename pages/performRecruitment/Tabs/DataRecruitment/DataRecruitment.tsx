import React, { useState } from "react";
import styles from "../Recruitment/recruitment.module.css"
import Link from "next/link";

export interface DataRecruitment {}

export default function DataRecruitment({ data }: any) {
    

    const [visible, setVisible] = useState(false);
    const handleDelete = () => {

    }
    const handleEstablish = () => {

    }
    return (
        <div>
              <div className={`${styles.new_r_t}`}>
                <div className={`${styles.new_r_t_left}`}>
                  <div className={`${styles.new_r_t_header} ${styles.row}`}>
                    <div className={`${styles.new_r_t_header_content} `}>
                      <h3 className={`${styles.new_r_t_left_h3}`}>
                        <Link
                          className={`${styles.new_r_t_left_link}`}
                          href={{
                            pathname: "",
                            query: "",
                          }}
                        >
                          {data.tieude}
                        </Link>
                      </h3>
                    </div>

                    <div className={``}>
                      <p className={`${styles.t_ita}`}>
                        Tạo bởi: {data.company} 
                      </p>
                    </div>

                    <div className={`${styles.t_new_type}`}>
                      <Link
                        className={`${styles.new_r_t_left_tin}`}
                        href={{
                          pathname: "",
                          query: "",
                        }}
                      >
                        Tin quá hạn tuyển
                      </Link>
                    </div>

                    <div
                      className={`${styles.new_r_top_right}`}
                      onMouseEnter={() => setVisible(true)}
                      onMouseLeave={() => setVisible(false)}
                    >
                      <button
                        className={`${styles.pull_right} ${styles.hover_t}`}
                      >
                        <picture className={`${styles.pull_right_img}`}>
                          <img src="https://phanmemnhansu.timviec365.vn/assets/images/l_images/3cham.png"></img>
                        </picture>

                        {visible &&  (
                          <>
                            <div className={`${styles.settings}`}>
                              <li className={`${styles.detail_new}`}>
                                Chi tiết
                              </li>
                              <li className={`${styles.edit_new}`}>
                                Chỉnh sửa tin
                              </li>
                              <hr
                                style={{ marginTop: "0", marginBottom: "0" }}
                              ></hr>
                              <li onClick={handleDelete}>Gỡ tin tuyển dụng</li>
                              <li onClick={handleEstablish}>
                                Thiết lập làm tin mẫu
                              </li>
                            </div>
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  <div className={`${styles.new_r_t_body}`}>
                    <ul className={`${styles.new_r_t_body_content}`}>
                      <li>
                        <span className={`${styles.text}`}>
                          {data.loaihinhlamviec}. {data.luong}
                        </span>
                      </li>
                      <li>
                        <picture className={`${styles.icon}`}>
                          <img
                            src="https://phanmemnhansu.timviec365.vn/assets/images/l_images/calendar.png"
                            alt=""
                          ></img>
                        </picture>
                        <span className={`${styles.text}`}>{data.date}</span>
                      </li>
                      <li>
                        <picture className={`${styles.icon}`}>
                          <img
                            src="https://phanmemnhansu.timviec365.vn/assets/images/l_images/house.png"
                            alt=""
                          ></img>
                        </picture>
                        <span className={`${styles.text}`}>{data.diachi}      </span>
                      </li>
                    </ul>

                    <ul className={`${styles.new_r_t_body_content}`}>
                      <li>
                        <span className={`${styles.text}`}>
                          Cần tuyển: {data.soluong}
                        </span>
                      </li>

                      <li>
                        <span className={`${styles.text}`}>
                          Người phụ trách: {data.nguoiphutrach}
                        </span>
                      </li>
                      <li>
                        <span className={`${styles.text}`}>
                          Mã quy trình tuyển dụng áp dụng: {data.matuyendung}
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
    )

}