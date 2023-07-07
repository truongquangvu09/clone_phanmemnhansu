import React, { useEffect, useState } from "react";

import styles from "./editRecruitmentStage.module.css";

export interface EditDetailTrainingProcess { }

export default function EditDetailTrainingProcess({ data, animation, onCloseModal }: any) {
  console.log(data);
  const handleSubmit = () => { };

  const CloseModal = () => {
    onCloseModal();
  };

  return (
    <>
      <div className={`${styles.overlay}`}></div>
      <div className={`${styles.modal} ${styles.modal_setting}  ${animation ? styles.fade_in : styles.fade_out}`}>
        <div className={`${styles.modal_dialog} ${styles.contentquytrinh}`}>
          <div className={`${styles.modal_content}`}>
            {/* header */}
            <div className={`${styles.modal_header} ${styles.headquytrinh}`}>
              <h5 className={`${styles.modal_title}`}>
                CẬP NHẬT GIAI ĐOẠN ĐÀO TẠO
              </h5>
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
                      defaultValue={data?.title}
                      type="text"
                      className={`${styles.inputquytrinh}`}
                      placeholder="Giai đoạn đào tạo"
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
                    Đối tượng đào tạo
                    <span className={`${styles.red}`}> *</span>
                  </label>
                  <div className={`${styles.inputright}`}>
                    <input

                      defaultValue={data?.doituong}
                      type="text"
                      className={`${styles.inputquytrinh}`}
                      placeholder="Đối tượng đào tạo"
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
                    Nội dung giai đoạn
                    <span className={`${styles.red}`}> *</span>
                  </label>
                  <div className={`${styles.textarea}`}>
                    <textarea
                      className={`${styles.inputquytrinh} ${styles.textareapolicy}`}
                      placeholder="Nội dung giai đoạn "
                      spellCheck="false"
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
