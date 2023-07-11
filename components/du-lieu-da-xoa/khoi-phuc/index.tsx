import React, { useState } from "react";
import styles from './Restore.module.css'


export default function Restore ({animation, handleClose}: any) {
  
  const handleSubmit = () => {};

  return (
    <>
      <div className={`${styles.overlay}`}></div>
      <div className={`${styles.modal} ${styles.modal_setting} ${animation ? styles.fade_in : styles.fade_out } `} style={{display:'block'}}>
        <div className={` ${styles.modal_dialog} ${styles.contentquytrinh}`}>
          <div className={`${styles.modal_content} `}>
            <div className={`${styles.modal_header}`} >
                <p>Khôi phục</p>
            </div>

            <div className={`${styles.modal_body}`} >
                <p>
                Bạn có chắc chắn muốn khôi phục các dữ liệu đã chọn?
                <br/>
                Toàn bộ thông tin về dữ liệu sẽ được khôi phục lại vị trí ban đầu.
                </p>
            </div>

            <div className={`${styles.modal_footer}`}>
                <button className={`${styles.l_btn_cancel}`}
                 onClick={handleClose}
                >
                    Đóng    
                </button>

                <button className={`${styles.btn_restore}`}>
                    Khôi phục
                </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
