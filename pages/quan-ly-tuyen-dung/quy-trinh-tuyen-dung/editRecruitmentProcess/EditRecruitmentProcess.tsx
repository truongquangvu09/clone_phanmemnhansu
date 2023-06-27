import React, { useState } from "react";
import styles from "./EditRecruitmentProcess.module.css";

export interface EditRecruitmentProcess {}

export default function EditRecruitmentProcess({ onClose }: any) {
  const handleCancel = () => {
      onClose();
    };
  return (
    <>
      <div className={`${styles.overlay}`} ></div>
      <div className={`${styles.modal} ${styles.modal_setting}`}>
        <div className={`${styles.contentquytrinh}`}>
          <div className={`${styles.modal_content} ${styles.contentdel}`}>
            <div className={`${styles.modal_header} ${styles.headquytrinh}`}>
              <h5 className={`${styles.modal_title}`}>
                CẬP NHẬT QUY TRÌNH TUYỂN DỤNG
              </h5>
            </div>

            <form>
              <div className={`${styles.modal_body} ${styles.bodyquytrinh}`}>
                <div className={`${styles.form_groups}`}>
                  <label>Tên quy trình</label>
                  <span className={`${styles.red}`}> *</span>
                  <div className={`${styles.inputright}`}>
                    <input
                      type="text"
                      className={`${styles.inputquytrinh}`}
                      placeholder="Nhập tên quy trình tuyển dụng"
                      spellCheck="false"
                    ></input>
                    <picture className={`${styles.dangers}`}>
                      <img
                        src="https://phanmemnhansu.timviec365.vn//assets/images/danger.pngc"
                        alt=""
                      ></img>
                    </picture>
                    <div className={`${styles.errors}`}> {""}</div>
                  </div>
                </div>

                <div className={`${styles.form_groups}`}>
                  <label>Đối tượng áp dụng</label>
                  <span className={`${styles.red}`}> *</span>
                  <div className={`${styles.inputright}`}>
                    <input
                      type="text"
                      className={`${styles.inputquytrinh}`}
                      placeholder="Nhập đối tượng áp dụng"
                      spellCheck="false"
                    ></input>
                    <picture className={`${styles.dangers}`}>
                      <img
                        src="https://phanmemnhansu.timviec365.vn//assets/images/danger.pngc"
                        alt=""
                      ></img>
                    </picture>
                    <div className={`${styles.errors}`}> {""}</div>
                  </div>
                </div>
              </div>

              <div className={`${styles.modal_footer} ${styles.footerquytrinh}`}>
              <button type="button" className={`${styles.btn_huy}`} onClick={handleCancel}>
                Hủy
              </button>
              <button type="button" className={`${styles.update}`}>
                Cập nhật
              </button>
            </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
