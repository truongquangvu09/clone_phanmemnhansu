import React, { useState, useEffect } from "react";
import styles from "./AddJobPosition.module.css";

export default function AddJobPosition({ closeModal}: any) {
  const handleSubmit = () => {};
  const handleCloseModalAdd = () => {
    closeModal()
  }

  return (
    <>
      <div className={`${styles.overlay}`}></div>
      <div
        className={`${styles.modal} ${styles.modal_setting}`}
        style={{ display: "block" }}
      >
        <div className={` ${styles.modal_dialog} ${styles.contentquytrinh}`}>
          <div className={`${styles.modal_content} `}>
            {/* header */}
            <div className={`${styles.modal_header} ${styles.headquytrinh}`}>
              <h5 className={`${styles.modal_title}`}>THÊM VỊ TRÍ CÔNG VIỆC</h5>
            </div>

            <form onSubmit={handleSubmit} className={`${styles.modal_form}`}>
              <div className={`${styles.modal_body} ${styles.bodytuyendung}`}>
                <div className={`${styles.form_groups}`}>
                  <label>
                    Tên vị trí
                    <span className={`${styles.red}`}> *</span>
                  </label>
                  <div className={`${styles.inputright}`}>
                    <input
                      type="text"
                      className={`${styles.inputquytrinh}`}
                      placeholder="Nhập tên vị trí"
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
                  Bộ phận trực thuộc
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
                  Mô tả ngắn
                    <span className={`${styles.red}`}> *</span>
                  </label>
                  <div className={`${styles.textarea}`}>
                        <textarea className={`${styles.inputquytrinh } ${styles.textareapolicy }`} placeholder="Nhập mô tả vị trí công việc" spellCheck='false'>

                        </textarea>
                   
                  </div>
                </div>

                <div className={`${styles.form_groups}`}>
                  <label>
                  Yêu cầu công việc
                    <span className={`${styles.red}`}> *</span>
                  </label>
                  <div className={`${styles.textarea}`}>
                        <textarea className={`${styles.inputquytrinh } ${styles.textareapolicy }`} placeholder="Nhập mô tả vị trí công việc" spellCheck='false'>

                        </textarea>
                   
                  </div>
                </div>

                <div className={`${styles.form_groups}`}>
                  <label>
                  File lộ trình thăng tiến
                    <span className={`${styles.red}`}> *</span>
                  </label>
                  <div className={`${styles.file}`}>
                       <input type="file"></input>
                   
                  </div>
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
                  Hủy
                </button>
                <button type="button" className={`${styles.update}`}>
                  Thêm
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
