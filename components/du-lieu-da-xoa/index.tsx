import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import TableData from "./table/table";
import BodyFrameFooter from "../bodyFrame/bodyFrame_footer/bodyFrame_footer";
import Restore from "./khoi-phuc";
import DeleteData from "./xoa-du-lieu";

export default function DeletedDataComPonent() {

  const [openModal, setOpenModal] = useState(0)
  const [animation, setAnimation] = useState(false)



  const handleClose = () => {
    setAnimation(false);
    setTimeout(() => {
      setOpenModal(0);
    }, 300);
  };
  const handleOpen = (number: any) => {
    setOpenModal(number)
    setAnimation(true)
    
  }
  return (
    <>
     {openModal === 1 && <Restore  animation = {animation} handleClose = {handleClose}></Restore>}
     {openModal === 2 && <DeleteData  animation = {animation} handleClose = {handleClose}></DeleteData>}
      <div className={`${styles.l_body}`}>
        <div className={`${styles.t_delete_head}`}>
          <div className={`${styles.header_left}`}>
            <p>DỮ LIỆU ĐÃ XÓA GẦN ĐÂY</p>
          </div>

          <div className={`${styles.between}`}>
            <div className={`${styles.between_time}`}
            onClick={() => handleOpen(1)}
            >
              <picture>
                <img src={`${"/icon-time.svg"}`} alt=""></img>
              </picture>
            </div>
            <div className={`${styles.between_delete}`}>
              <picture 
              onClick={() => handleOpen(2)}>
                <img src={`${"/icon-trash.svg"}`} alt=""></img>
              </picture>
            </div>
          </div>

         

          <div className={`${styles.right}`}>
            <form className={`${styles.form}`}>
              <div className={`${styles.t_div_search}`}>
                <input
                  type="search"
                  placeholder="Tìm kiếm"
                  name="search"
                  spellCheck={false}
                ></input>
                <picture>
                  <img src={`${"/t-icon-search.png"}`} alt=""></img>
                </picture>
              </div>
            </form>
          </div>
        </div>
        <TableData></TableData>
        <BodyFrameFooter src="https://www.youtube.com/embed/XEAFwQRkBfQ"></BodyFrameFooter>
      </div>
    </>
  );
}
