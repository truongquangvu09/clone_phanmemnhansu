import React, { useState } from "react";
import styles from "./recruitmentProcess.module.css";
import AddRecruitmentProcess from "@/components/quan-ly-tuyen-dung/quy-trinh-tuyen-dung/addRecruitmentProcess/addRecruitmentProcess";
import ListRecruitment from "@/components/quan-ly-tuyen-dung/quy-trinh-tuyen-dung/listRecruitmentProcess/listRecruitmentProcess";
import BodyFrameFooter from "@/components/bodyFrame/bodyFrame_footer/bodyFrame_footer";
export interface RecruitmentProcess {}

export default function RecruitmentProcess({ children }: any) {
  const [openModalAdd, setOpenModalAdd] = useState(false);
  const [animateModal, setAnimateModal] = useState(false);

  const handleOpenModalAdd = () => {
    setOpenModalAdd(true);
    setAnimateModal(true);
  };
 
  const handleCloseModalAdd = () => {
    setAnimateModal(false);
    setTimeout(() => {
      setOpenModalAdd(false);
    }, 300);
  };

  const handleSearch = () => {
    alert("hdhdhdh");
  };
  return (
    <>
      <div className={`${styles.l_body} ${openModalAdd ? styles.scrollableModal  : ""}`}>
          <div className={`${styles.add_quytrinh}`}>
              <div className={`${styles.add_quytrinh1}`}>
              <button
                type="submit"
                className="adds"
                style={{ outline: "none", border: "none", padding: "0" }}
              >
                <picture className={`${styles.add_quytrinh2}`} 
                    onClick={handleOpenModalAdd}
                    >
                  <img
                    src={`${'/add.png'}`}
                    alt=""
                    style={{ marginRight: "10px", marginTop: "-3px" }}
                  ></img>
                  <p
                    className={`${styles.add_quytrinh2_title}`}
                  >
                    Thêm quy trình tuyển dụng
                  </p>
                </picture>
              </button>
              </div>
                {openModalAdd && <AddRecruitmentProcess animation = {animateModal} handleCloseModalAdd = {handleCloseModalAdd}></AddRecruitmentProcess>}
              <div className={`${styles.search_quytrinh}`}>
              <form className={`${styles.t_form_search}`}>
                <div className={`${styles.t_div_search}`}>
                  <input
                    type="search"
                    className={`${styles.search_quytrinh}`}
                    placeholder="Tìm kiếm"
                    name="search"
                    spellCheck={false}
                    autoComplete="off"
                  ></input>
                  <button className={`${styles.button_search}`}>
                    <picture style={{paddingLeft: '12px'}}>
                      <img
                        src={`${'/icon-search.png'}`}
                        alt="search"
                        onClick={() => handleSearch()}
                      ></img>
                    </picture>
                  </button>
                </div>
              </form>
              </div>
          </div>

        <ListRecruitment></ListRecruitment>
        <BodyFrameFooter src="https://www.youtube.com/embed/J7JEoQkqarA"></BodyFrameFooter>
        </div>
        
    </>
  );
}
