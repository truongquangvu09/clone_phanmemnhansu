import React, { useState } from "react";
import styles from "./EditModalCollectiveDiscipline.module.css";
import Select from "react-select";

type SelectOptionType = { label: string; value: string };

function EditModalListDiscipline({ animation,onClose }: any) {
  const options = {
    tendoituong: [
      { value: "Lê Hồng Anh", label: "Lê Hồng Anh" },
      { value: "Lê Hồng Đào", label: "Lê Hồng Đào" },
      { value: "Lê Hồng Bích", label: "Lê Hồng Bích" },
      { value: "Lê Hồng Hạnh", label: "Lê Hồng Hạnh" },
    ],
    hinhthuckhenthuong: [
      { value: "Huân Chương", label: "Huân Chương" },
      { value: "Huy Chương", label: "Huy Chương" },
      { value: "Giấy khen", label: "Giấy khen" },
      { value: "Thăng chức", label: "Thăng chức" },
    ],
  };

  const [content, setContent] = useState("");

  const handleContentChange = (value: string) => {
    setContent(value);
  };

  const [selectedOption, setSelectedOption] = useState<SelectOptionType | null>(
    null
  );

  const handleSubmit = () => {};

  const handleCloseModalAdd = () => {};

  return (
    <>
      <div className={`${styles.overlay}`}></div>
      <div className={`${styles.modal} ${styles.modal_setting}  ${animation ? styles.fade_in : styles.fade_out }`} style={{display:'block'}}>
        <div className={`${styles.modal_dialog} ${styles.contentquytrinh}`}>
          <div className={`${styles.modal_content} `}>
            {/* header */}
            <div className={`${styles.modal_header} ${styles.headquytrinh}`}>
              <h5 className={`${styles.modal_title}`}>CẬP NHẬT VI PHẠM TẬP THỂ</h5>
            </div>
            {/* body */}
            <form onSubmit={handleSubmit} className={`${styles.modal_form}`}>
              <div className={`${styles.modal_body} ${styles.bodyquytrinh}`}>
                
                <div className={`${styles.form_groups}`}>
                  <label>
                    Tên lỗi vi phạm
                    <span className={`${styles.red}`}> *</span>
                  </label>
                  <div className={`${styles.inputright}`}>
                    <input
                      type="text"
                      className={`${styles.inputquytrinh}`}
                    
                    ></input>
                    <picture style={{ display: "none" }}>
                      <img
                     src = {`${'/danger.png'}`}
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
                    Căn cứ quy định
                    <span className={`${styles.red}`}> *</span>
                  </label>
                  <div className={`${styles.inputright}`}>
                    <input
                      type="text"
                      className={`${styles.inputquytrinh}`}
                     
                    ></input>
                    <picture style={{ display: "none" }}>
                      <img
                        src = {`${'/danger.png'}`}
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
                  Số quy định xử lý vi phạm
                    <span className={`${styles.red}`}> *</span>
                  </label>
                  <div className={`${styles.inputright}`}>
                    <input
                      type="text"
                      className={`${styles.inputquytrinh}`}
                   
                    ></input>
                    <picture style={{ display: "none" }}>
                      <img
                        src = {`${'/danger.png'}`}
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
                    Thời gian vi phạm
                    <span className={`${styles.red}`}> *</span>
                  </label>
                  <div className={`${styles.inputright}`}>
                    <input
                      type="date"
                      className={`${styles.inputquytrinh}`}
                      style={{height: '30.6px'}}
                    ></input>
                    <picture style={{ display: "none" }}>
                      <img
                        src = {`${'/danger.png'}`}
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
                    Hình thức xử lý sai phạm
                    <span className={`${styles.red}`}> *</span>
                  </label>
                  <div className={`${styles.inputright}`}>
                    <input
                      type="text"
                      className={`${styles.inputquytrinh}`}
                    ></input>
                    <picture style={{ display: "none" }}>
                      <img
                        src = {`${'/danger.png'}`}
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
                    Cá nhân vi phạm
                    <span className={`${styles.red}`}> *</span>
                    <div
                      className={`${styles.red} ${styles.float_right}`}
                    ></div>
                  </label>
                  <div style={{ marginRight: "2%" }} className={`${styles.select}`}>
                    <Select
                      isMulti={true}
                      defaultValue={selectedOption}
                      options={options.hinhthuckhenthuong}
                      placeholder = {' '}
                      styles={{
                        control: (baseStyles, state) => ({
                          ...baseStyles,
                          borderRadius: 8,
                          borderColor: "#4747477a",
                          height: "auto",
                          fontSize: state.isFocused ? 14 : 14,
                          minHeight: state.isFocused ? 20 : 20,
                          width: state.isFocused ? '100%' : baseStyles.width,
                          fontWeight: state.isFocused ? 600 : 600,
                        }),
                        valueContainer: (baseStyles) => ({
                          ...baseStyles,
                          padding: "0",
                        }),
                        indicatorsContainer: (baseStyles) => ({
                          ...baseStyles,
                          height: 30,
                        }),
                      }}
                    />
                  </div>
                </div>

                <div className={`${styles.form_groups}`}>
                  <label>
                    Người ký quyết định
                    <span className={`${styles.red}`}> *</span>
                  </label>
                  <div className={`${styles.inputright}`}>
                    <input
                      type="text"
                      className={`${styles.inputquytrinh}`}
                  
                    ></input>
                    <picture style={{ display: "none" }}>
                      <img
                        src = {`${'/danger.png'}`}
                        alt="Lỗi"
                      ></img>
                    </picture>
                    <div
                      className={`${styles.errors}`}
                      style={{ display: "none" }}
                    ></div>
                  </div>
                </div>
              </div>

              <div
                className={`${styles.modal_footer} ${styles.footerquytrinh}`}
              >
                <button
                  type="button"
                  className={`${styles.btn_huy}`}
                  onClick={onClose}
                >
                  Hủy
                </button>
                <button type="button" className={`${styles.success}`}>
                  Cập nhật
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditModalListDiscipline;