import React, { useState } from "react";

import styles from "./deleteRecruitmentStage.module.css";
export interface DeleteRecruitmentStage {}

export default function DeleteRecruitmentStage({ data, onCloseModal}: any) {
  
  const handleCancel = () => {
    onCloseModal();
  };


  return (
    <>
      <div className={`${styles.overlay}`}></div>
      <div
        className={`${styles.modal} ${styles.modal_setting}`}
      >
        <div className={`${styles.contentquytrinh}`}>
          <div className={`${styles.modal_content} ${styles.contentdel}`}>
            <div className={`${styles.modal_header} ${styles.headquytrinh}`}>
              <h5 className={`${styles.modal_title}`}>
              XÓA GIAI ĐOẠN
              </h5>
            </div>

            <div className={`${styles.modal_body} ${styles.bodyquytrinh}`}>
              <div className={`${styles.xoaquytrinh}`}>
                Bạn có chắc muốn xóa giai đoạn
                <span className={`${styles.t_recruitment_name}`}>
                  {" "}
                  {"Arthur Barr "}?{" "}
                </span>
              </div>

              <div className={`${styles.xoaquytrinh}`}>
                Tất cả nội dung giai đoạn sẽ được lưu trữ ở
                <span> DỮ LIỆU ĐÃ XÓA GẦN ĐÂY </span>
                trong thời gian 5 ngày trước khi bị xóa vĩnh viễn.
              </div>
            </div>

            <div className={`${styles.modal_footer} ${styles.footerquytrinh}`}>
              <button type="button" className={`${styles.btn_huy}`} onClick={handleCancel}>
                <span>Hủy</span>
              </button>
              <button type="button" className={`${styles.delete}`}>
                Xóa
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
