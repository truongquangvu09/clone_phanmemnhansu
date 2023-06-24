import React, { useState } from "react";

import styles from "./DeleteRecruitmentProcess.module.css";
export interface Administration {}

export default function Administration({onClose }: any) {
  
  const handleCancel = () => {
    onClose();
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
                XÓA QUY TRÌNH TUYỂN DỤNG
              </h5>
            </div>

            <div className={`${styles.modal_body} ${styles.bodyquytrinh}`}>
              <div className={`${styles.xoaquytrinh}`}>
                Bạn có chắc muốn xóa quy trình
                <span className={`${styles.t_recruitment_name}`}>
                  {" "}
                  {"Arthur Barr "}?{" "}
                </span>
              </div>

              <div className={`${styles.xoaquytrinh}`}>
                Tất cả nội dung quy trình sẽ được lưu trữ ở
                <span> DỮ LIỆU ĐÃ XÓA GẦN ĐÂY </span>
                trong thời gian 5 ngày trước khi bị xóa vĩnh viễn.
              </div>
            </div>

            <div className={`${styles.modal_footer} ${styles.footerquytrinh}`}>
              <button type="button" onClick={handleCancel}>
                Hủy
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
