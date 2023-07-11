import React, { useState } from "react";
import styles from '../khoi-phuc/Restore.module.css'


export default function DeleteData ({animation, handleClose}: any) {
  
  const handleSubmit = () => {};

  return (
    <>
      <div className={`${styles.overlay}`}></div>
      <div className={`${styles.modal} ${styles.modal_setting} ${animation ? styles.fade_in : styles.fade_out } `} style={{display:'block'}}>
        <div className={` ${styles.modal_dialog} ${styles.contentquytrinh}`}>
          <div className={`${styles.modal_content} `}>
            <div className={`${styles.modal_header}`} >
                <p>Xóa dữ liệu</p>
            </div>

            <div className={`${styles.modal_body}`} >
                <p>
                    Các dữ liệu đã chọn sẽ bị xóa vĩnh viễn và bạn không thể khôi phục mục này.
                </p>
            </div>

            <div className={`${styles.modal_footer}`}>
                <button className={`${styles.l_btn_cancel}`}
                 onClick={handleClose}
                >
                    Đóng    
                </button>

                <button className={`${styles.btn_delete}`}>
                    Xóa
                </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
