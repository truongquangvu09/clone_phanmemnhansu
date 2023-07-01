import React, { useState } from "react";
import "./editRecruitmentStage.module.css";
import styles from "./editRecruitmentStage.module.css";
export interface EditRecruitmentStage {}

export default function EditRecruitmentStage({ onCloseModal }: any) {
  const handleSubmit = () => {};

  const CloseModal = () => {
    onCloseModal()
  }
  return (
    <>
      <div className={`${styles.overlay}`}></div>
      <div className={`${styles.modal} ${styles.modal_setting}`}>
        <div className={`${styles.modal_dialog} ${styles.contentquytrinh}`}>
          <div className={`${styles.modal_content}`}>
            {/* header */}
            <div className={`${styles.modal_header} ${styles.headquytrinh}`}>
              <h5 className={`${styles.modal_title}`}>CHỈNH SỬA GIAI ĐOẠN</h5>
            </div>

            {/* body */}
            <form onSubmit={handleSubmit} className={`${styles.modal_form}`}>
              <div className={`${styles.modal_body} ${styles.bodyquytrinh}`}>
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
                    <picture style={{display:'none'}}>
                      <img
                        src="	https://phanmemnhansu.timviec365.vn/assets/images/danger.png"
                        alt="Lỗi"
                      ></img>
                    </picture>
                    <div className={`${styles.errors}`} style={{display:'none'}}></div>
                  </div>
                </div>

                <div className={`${styles.form_groups}`}>
                  <label>
                  Bộ phận đảm nhận công việc
                    <span className={`${styles.red}`}> *</span>
                  </label>
                  <div className={`${styles.inputright}`}>
                    <input
                      type="text"
                      className={`${styles.inputquytrinh}`}
                      placeholder="Nhập tên giai đoạn"
                    ></input>
                    <picture style={{display:'none'}}>
                      <img
                        src="	https://phanmemnhansu.timviec365.vn/assets/images/danger.png"
                        alt="Lỗi"
                      ></img>
                    </picture>
                    <div className={`${styles.errors}`} style={{display:'none'}}></div>
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
                    <picture style={{display:'none'}}>
                      <img
                        src="	https://phanmemnhansu.timviec365.vn/assets/images/danger.png"
                        alt="Lỗi"
                      ></img>
                    </picture>
                    <div className={`${styles.errors}`} style={{display:'none'}}></div>
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
                  <div className={`${styles.inputright}`}>
                    
                  </div>
                </div>
              </div>
              <div
                      className={`${styles.modal_footer} ${styles.footerquytrinh}`}
                    >
                      <button
                        type="button"
                        className={`${styles.btn_huy}`}
                        onClick={CloseModal}
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