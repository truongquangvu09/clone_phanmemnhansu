import React, { useEffect, useState } from "react";
import styles from "./edit.module.css";

export default function Edit( {dataDisplay, onClickButton}) {

  const defaultValueInput = 'Hello World';
  const [inputValue, setInputValue] = useState(defaultValueInput);

  const handleClickEdit = (e: any) => {
    e.preventDefault();
  }
  return (
    <>
      <div className={`${styles.l_drop_chinhsua}`}>
        <form onSubmit={(e) => handleClickEdit(e) }>
          <div className={`${styles.l_chinhsua_item}`}>
            <div className={`${styles.l_chinhsua_item_left}`}>
              <label>Tên công ty:</label>
              <div>
                <input className={`${styles.l_chinhsua_item_input}`} defaultValue={defaultValueInput} disabled= {true}/>
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
              <label>Lĩnh vực hoạt động:</label>
              <div>
                <input className={`${styles.l_chinhsua_item_input}`} />
              </div>
            </div>

            <div className={`${styles.l_chinhsua_item_right}`}>
              <label>Quy mô nhân sự:</label>
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
                <input className={`${styles.l_chinhsua_item_input}`} defaultValue={defaultValueInput} disabled= {true} />
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
                      type="submit"
                      onClick={(e) => handleClickEdit(e)}
                    >Lưu thay đổi</button>
                </div>
          </div>
        </form>
      </div>
    </>
  );
}
