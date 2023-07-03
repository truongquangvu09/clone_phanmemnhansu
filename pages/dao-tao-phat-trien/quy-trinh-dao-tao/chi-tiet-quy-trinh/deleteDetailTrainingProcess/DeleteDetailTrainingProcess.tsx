import React, { useState } from "react";

import styles from "./DeleteDetailTrainingProcess.module.css";
export interface DeleteDetailTrainingProcess {}

export default function DeleteDetailTrainingProcess({onCloseModal}: any) {
  
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
              XÓA GIAI ĐOẠN ĐÀO TẠO
              </h5>
            </div>

            <div className={`${styles.modal_body} ${styles.bodyquytrinh}`}>
              <div className={`${styles.xoaquytrinh}`}>
              Bạn có chắc muốn xóa giai đoạn tuyển dụng tuyển dụng này không?
              </div>

              <div className={`${styles.xoaquytrinh}`}>
                Tất cả nội dung giai đoạn sẽ được lưu trữ ở
                <span style={{color: 'black', fontWeight:'600'}}> {`"DỮ LIỆU ĐÃ XÓA GẦN ĐÂY"`} </span>
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
