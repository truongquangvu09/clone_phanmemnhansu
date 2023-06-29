/* eslint-disable react/jsx-key */

import React, { useEffect, useState } from "react";
import styles from "./addRecruitmentProcess.module.css";
import AddAdditionalRecruitmentProcess from "../addAdditionalRecruitmentProcess/addAdditionalRecruitmentProcess";


export interface AddRecruitmentProcess {}

export default function AddRecruitmentProcess({ handleCloseModalAdd }: any) {
  const [additionalProcesses, setAdditionalProcesses] =useState<JSX.Element[]>([]);
  const [lastAddedIndex, setLastAddedIndex] = useState(-1);

  const handleAddProcess = () => {
    const newProcess = <AddAdditionalRecruitmentProcess key={additionalProcesses.length} />;
    setAdditionalProcesses([...additionalProcesses, newProcess]);
    setLastAddedIndex(additionalProcesses.length);
  };

  const handleDeleteProcess = () => {
    const updatedProcesses = [...additionalProcesses];
    updatedProcesses.splice(lastAddedIndex, 1);
    setAdditionalProcesses(updatedProcesses);
    setLastAddedIndex(updatedProcesses.length - 1);
  };
  

  useEffect(() => {
        setAdditionalProcesses([<AddAdditionalRecruitmentProcess />])
    },[]);

  const handleSubmit = () => {};
  return (
    <>
      <div className={`${styles.overlay}`}></div>
      <div className={`${styles.modal} ${styles.modal_setting} `}>
        <div className={`${styles.modal_dialog} ${styles.contentquytrinh}`}>
          <div className={`${styles.modal_content} `}>
            {/* header */}
            <div className={`${styles.modal_header} ${styles.headquytrinh}`}>
              <h5 className={`${styles.modal_title}`}>
                THÊM QUY TRÌNH TUYỂN DỤNG
              </h5>
            </div>

            {/* body */}
            <form onSubmit={handleSubmit} className={`${styles.modal_form}`}>
              <div className={`${styles.modal_body} ${styles.bodyquytrinh}`}>
                <div className={`${styles.form_groups}`}>
                  <label>
                    Tên quy trình
                    <span className={`${styles.red}`}> *</span>
                  </label>
                  <div className={`${styles.inputright}`}>
                    <input
                      type="text"
                      className={`${styles.inputquytrinh}`}
                      placeholder="Nhập tên giai đoạn"
                    ></input>
                    <picture style={{ display: "none" }}>
                      <img
                        src="	https://phanmemnhansu.timviec365.vn/assets/images/danger.png"
                        alt="Lỗi"
                      ></img>
                    </picture>
                    <div
                      className={`${styles.errors}`}
                      style={{ display: "none" }}
                    ></div>
                  </div>
                </div>

                <div className={`${styles.form_groups}`}>
                  <label>
                    Đối tượng áp dụng
                    <span className={`${styles.red}`}> *</span>
                  </label>
                  <div className={`${styles.inputright}`}>
                    <input
                      type="text"
                      className={`${styles.inputquytrinh}`}
                      placeholder="Nhập tên giai đoạn"
                    ></input>
                    <picture style={{ display: "none" }}>
                      <img
                        src="	https://phanmemnhansu.timviec365.vn/assets/images/danger.png"
                        alt="Lỗi"
                      ></img>
                    </picture>
                    <div
                      className={`${styles.errors}`}
                      style={{ display: "none" }}
                    ></div>
                  </div>
                </div>

                <div className={`${styles.dom_gd}`}>
                  {additionalProcesses.map((process, index) => (
                    <div key={index}>  
                      {index === lastAddedIndex && index >= 1  && (
                        <button onClick={handleDeleteProcess}
                        style={{border:'none', backgroundColor:'transparent', marginLeft:'94%', position:'relative', top:'25px'}}
                        >
                          <picture>
                            <img src="https://phanmemnhansu.timviec365.vn/assets/images/icon-new/icon-remove.svg" alt="Xóa"/>
                          </picture>
                        </button>
                      )}
                      {process}
                    </div>
                  ))}
                </div>

                {/* thêm giai đoạn */}
                <div className={`${styles.clearfix}`}>
                  <p
                  style={{cursor:'default'}}
                    className={`${styles.pull_right} ${styles.add_gd}`}
                    onClick={handleAddProcess}
                  >
                    Thêm mới giai đoạn
                  </p>
                </div>
              </div>

              <div
                className={`${styles.modal_footer} ${styles.footerquytrinh}`}
              >
                <button
                  type="button"
                  className={`${styles.btn_huy}`}
                  onClick={handleCloseModalAdd}
                >
                  <span>Hủy</span>
                </button>
                <button type="button" className={`${styles.success}`}>
                  Lưu
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
  
  
}
