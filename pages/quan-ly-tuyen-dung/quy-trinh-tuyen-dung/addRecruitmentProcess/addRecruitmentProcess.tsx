import React from "react";
import styles from "./addRecruitmentProcess.module.css";

export interface AddRecruitmentProcess {}

export default function AddRecruitmentProcess({ handleCloseModalAdd }: any) {
  const handleSubmit = () => {};
  return (
    <>
      <div className={`${styles.overlay}`}></div>
      <div className={`${styles.modal} ${styles.modal_setting} `}>
        <div className={`${styles.scrollableModalDialog} ${styles.contentquytrinh}`}>
          <div className={`${styles.modal_content} `}>
            {/* header */}
            <div className={`${styles.modal_header} ${styles.headquytrinh}`}>
              <h5 className={`${styles.modal_title}`}>
                THÊM QUY TRÌNH TUYỂN DỤNG
              </h5>
            </div>

            {/* body */}
            <form onSubmit={handleSubmit} className={`${styles.modal_form}`}>
              <div className={`${styles.modal_body} ${styles.bodyquytrinh}`}>
                <div className={`${styles.form_groups}`}>
                  <label>
                    Tên quy trình
                    <span className={`${styles.red}`}> *</span>
                  </label>
                  <div className={`${styles.inputright}`}>
                    <input
                      type="text"
                      className={`${styles.inputquytrinh}`}
                      placeholder="Nhập tên giai đoạn"
                    ></input>
                    <picture style={{ display: "none" }}>
                      <img
                        src="	https://phanmemnhansu.timviec365.vn/assets/images/danger.png"
                        alt="Lỗi"
                      ></img>
                    </picture>
                    <div
                      className={`${styles.errors}`}
                      style={{ display: "none" }}
                    ></div>
                  </div>
                </div>

                <div className={`${styles.form_groups}`}>
                  <label>
                    Đối tượng áp dụng
                    <span className={`${styles.red}`}> *</span>
                  </label>
                  <div className={`${styles.inputright}`}>
                    <input
                      type="text"
                      className={`${styles.inputquytrinh}`}
                      placeholder="Nhập tên giai đoạn"
                    ></input>
                    <picture style={{ display: "none" }}>
                      <img
                        src="	https://phanmemnhansu.timviec365.vn/assets/images/danger.png"
                        alt="Lỗi"
                      ></img>
                    </picture>
                    <div
                      className={`${styles.errors}`}
                      style={{ display: "none" }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className={`${styles.list_process}`}>
                    <div className={`${styles.form_groups}`}>
                      <label>
                        Tên giai đoạn
                        <span className={`${styles.red}`}> *</span>
                      </label>
                      <div className={`${styles.inputright}`}>
                        <input
                          type="text"
                          className={`${styles.inputquytrinh}`}
                          placeholder="Nhập tên giai đoạn"
                        ></input>
                        <picture style={{ display: "none" }}>
                          <img
                            src="	https://phanmemnhansu.timviec365.vn/assets/images/danger.png"
                            alt="Lỗi"
                          ></img>
                        </picture>
                        <div
                          className={`${styles.errors}`}
                          style={{ display: "none" }}
                        ></div>
                      </div>
                    </div>

                    <div className={`${styles.form_groups}`}>
                      <label>
                        Bộ phận đảm nhận
                        <span className={`${styles.red}`}> *</span>
                      </label>
                      <div className={`${styles.inputright}`}>
                        <input
                          type="text"
                          className={`${styles.inputquytrinh}`}
                          placeholder="Nhập tên giai đoạn"
                        ></input>
                        <picture style={{ display: "none" }}>
                          <img
                            src="	https://phanmemnhansu.timviec365.vn/assets/images/danger.png"
                            alt="Lỗi"
                          ></img>
                        </picture>
                        <div
                          className={`${styles.errors}`}
                          style={{ display: "none" }}
                        ></div>
                      </div>
                    </div>

                    <div className={`${styles.form_groups}`}>
                      <label>
                        Mục tiêu
                        <span className={`${styles.red}`}> *</span>
                      </label>
                      <div className={`${styles.inputright}`}>
                        <input
                          type="text"
                          className={`${styles.inputquytrinh}`}
                          placeholder="Nhập tên giai đoạn"
                        ></input>
                        <picture style={{ display: "none" }}>
                          <img
                            src="	https://phanmemnhansu.timviec365.vn/assets/images/danger.png"
                            alt="Lỗi"
                          ></img>
                        </picture>
                        <div
                          className={`${styles.errors}`}
                          style={{ display: "none" }}
                        ></div>
                      </div>
                    </div>

                    <div className={`${styles.form_groups}`}>
                      <label>
                        Thời gian định lượng
                        <span className={`${styles.red}`}></span>
                      </label>
                      <div className={`${styles.inputright}`}>
                        <input
                          type="text"
                          className={`${styles.inputquytrinh}`}
                          placeholder="Nhập tên giai đoạn"
                        ></input>
                      </div>
                    </div>

                    <div className={`${styles.form_groups}`}>
                      <label>
                        Mô tả công việc
                        <span className={`${styles.red}`}></span>
                      </label>
                      <div className={`${styles.inputright}`}></div>
                    </div>
                  </div>
                </div>

                {/* thêm giai đoạn */}
                <div className={`${styles.clearfix}`}>
                  <p className={`${styles.pull_right} ${styles.add_gd}`}>
                    Thêm mới giai đoạn
                  </p>
                </div>
              </div>

              <div
                className={`${styles.modal_footer} ${styles.footerquytrinh}`}
              >
                <button
                  type="button"
                  className={`${styles.btn_huy}`}
                  onClick={handleCloseModalAdd}
                >
                  <span>Hủy</span>
                </button>
                <button type="button" className={`${styles.success}`}>
                  Lưu
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
