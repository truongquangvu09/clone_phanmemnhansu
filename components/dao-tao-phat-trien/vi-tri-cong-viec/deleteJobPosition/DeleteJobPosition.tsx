import React, { useState } from "react";

import styles from "./DeleteJobPosition.module.css";
export interface DeleteJobPosition {}

export default function DeleteJobPosition({animation, closeModal }: any) {
  
  const handleCancel = () => {
    closeModal();
  };


  return (
    <>
      <div className={`${styles.overlay}`}></div>
      <div className={`${styles.modal} ${styles.modal_setting}  ${animation ? styles.fade_in : styles.fade_out }`}>
        <div className={`${styles.contentquytrinh}`}>
          <div className={`${styles.modal_content} ${styles.contentdel}`}>
            <div className={`${styles.modal_header} ${styles.headquytrinh}`}>
              <h5 className={`${styles.modal_title}`}>
              XÓA VỊ TRÍ CÔNG VIỆC
              </h5>
            </div>

            <div className={`${styles.modal_body} ${styles.bodyquytrinh}`}>
              <div className={`${styles.xoaquytrinh}`}>
              Bạn có chắc muốn xóa vị trí công việc này không?
              </div>

              <div className={`${styles.xoaquytrinh}`}>
                Tất cả nội dung quy trình sẽ được lưu trữ ở
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
