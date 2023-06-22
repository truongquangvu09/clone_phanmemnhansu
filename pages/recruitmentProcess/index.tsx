import React from "react";
import styles from "./recruitmentProcess.module.css";
import ListRecruitment from "./listRecruitment/listRecruitment";
import BodyFrameFooter from "@/components/bodyFrame/bodyFrame_footer/bodyFrame_footer";
export interface RecruitmentProcess {}

export default function RecruitmentProcess({ children }: any) {

    const handleSearch = () => {
        alert('hdhdhdh')
    }
  return (
    <>
      <div className={`${styles.l_body}`}>
        <div className={`${styles.add_quytrinh}`}>
          <div className={`${styles.add_quytrinh1}`}>
            <button
              type="submit"
              className="adds"
              style={{ outline: "none", border: "none", padding: '0' }}
            >
              <picture className={`${styles.add_quytrinh2}`}>
                <img
                  src="https://phanmemnhansu.timviec365.vn//assets/images/l_images/add.png"
                  alt=""
                  style={{ marginRight: "10px", marginTop: "-3px" }}
                ></img>
                <p className={`${styles.add_quytrinh2_title}`}>
                  Thêm quy trình tuyển dụng
                </p>
              </picture>
            </button>
          </div>
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
                  <picture>
                    <img
                      src="https://phanmemnhansu.timviec365.vn/assets/images/t_images/t-icon-search.png"
                      alt="search"
                      onClick={() => handleSearch()}
                    ></img>
                  </picture>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ListRecruitment></ListRecruitment>
      <BodyFrameFooter src='https://www.youtube.com/embed/J7JEoQkqarA'></BodyFrameFooter>
    </>
  );
}
