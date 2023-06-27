import React, { useState } from "react";
import styles from "./addRecruitmentStage.module.css";
export interface AddRecruitmentStage {}

export default function AddRecruitmentStage({ onCloseModal }: any) {
  const handleSubmit = () => {};

  return (
    <>
        <>
          <div className={`${styles.overlay}`}></div>
            <div className={`${styles.modal} ${styles.modal_setting}`}>
              <div
                className={`${styles.modal_dialog} ${styles.contentquytrinh}`}
              >
                <div className={`${styles.modal_content}`}>
                  <div
                    className={`${styles.modal_header} ${styles.headquytrinh}`}
                  >
                    <h5 className={`${styles.modal_title}`}>THÊM GIAI ĐOẠN</h5>
                  </div>

                  <form
                    onSubmit={handleSubmit}
                    className={`${styles.modal_form}`}
                  >
                    <div
                      className={`${styles.modal_body} ${styles.bodyquytrinh}`}
                    >
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
                            placeholder="Nhập bộ phận đảm nhận công việc"
                          ></input>
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
                            placeholder="Nhập mục tiêu giai đoạn"
                          ></input>
                        </div>
                      </div>

                      <div className={`${styles.form_groups}`}>
                        <label>
                          Thời gian định lượng
                          <span className={`${styles.red}`}> *</span>
                        </label>
                        <div className={`${styles.inputright}`}>
                          <input
                            type="text"
                            className={`${styles.inputquytrinh}`}
                            placeholder="Nhập thời gian định lượng"
                          ></input>
                        </div>
                      </div>

                      <div className={`${styles.form_groups}`}>
                        <label>Mô tả công việc</label>
                        <div>
                          <textarea
                            className={`${styles.inputquytrinh} ${styles.textarea}`}
                            placeholder="Nhập mô tả giai đoạn "
                            spellCheck="false"
                            style={{ height: "100px", marginTop: "10px" }}
                          ></textarea>
                        </div>
                      </div>
                    </div>

                    <div
                      className={`${styles.modal_footer} ${styles.footerquytrinh}`}
                    >
                      <button
                        type="button"
                        className={`${styles.btn_huy}`}
                        onClick={onCloseModal}
                      >
                        <span>Hủy</span>
                      </button>
                      <button type="button" className={`${styles.success}`}>
                        Thêm
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
        </>
    </>
  );
}
