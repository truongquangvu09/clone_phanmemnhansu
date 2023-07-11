import React, { useEffect, useState } from "react";
import styles from "./edit.module.css";

export default function Edit( {onClickButton}) {
  const handleSubmit = () => {};

  const handleClickEdit = (e: any) => {
    e.preventDefault();
  }
  return (
    <>
      <div className={`${styles.l_drop_chinhsua}`}>
        <form onSubmit={handleSubmit}>


          <div className={`${styles.l_chinhsua_item}`}>
            <div className={`${styles.l_chinhsua_item_left}`}>
              <label>Tên công ty:</label>
              <div>
                <input className={`${styles.l_chinhsua_item_input}`} />
              </div>
            </div>

            <div className={`${styles.l_chinhsua_item_right}`}>
              <label>Điện thoại:</label>
              <div>
                <input className={`${styles.l_chinhsua_item_input}`} />
              </div>
            </div>
          </div>

          <div className={`${styles.l_chinhsua_item}`}>
            <div className={`${styles.l_chinhsua_item_left}`}>
              <label>Tên công ty:</label>
              <div>
                <input className={`${styles.l_chinhsua_item_input}`} />
              </div>
            </div>

            <div className={`${styles.l_chinhsua_item_right}`}>
              <label>Điện thoại:</label>
              <div>
                <input className={`${styles.l_chinhsua_item_input}`} />
              </div>
            </div>
          </div>

          <div className={`${styles.l_chinhsua_item}`}>
            <div className={`${styles.l_chinhsua_item_left}`}>
              <label>Địa chỉ liên lạc:</label>
              <div>
                <input className={`${styles.l_chinhsua_item_input}`} />
              </div>
            </div>

            <div className={`${styles.l_chinhsua_item_right}`}>
              <label>Email:</label>
              <div>
                <input className={`${styles.l_chinhsua_item_input}`} />
              </div>
            </div>
          </div>

          <div className={`${styles.l_chinhsua_item_button}`}>
                <div className={`${styles.l_button_left}`}>
                    <button
                     onClick={onClickButton}
                    >Hủy bỏ</button>
                </div>

                <div className={`${styles.l_button_right}`}>
                    <button 
                      onClick={(e) => handleClickEdit(e)}
                    >Lưu thay đổi</button>
                </div>
          </div>


        </form>
      </div>
    </>
  );
}
