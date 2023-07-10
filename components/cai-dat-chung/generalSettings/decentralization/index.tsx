import React, { useEffect, useState } from "react";
import styles from "./Decentralization.module.css";
import Select from "react-select";

type SelectOptionType = { label: string; value: string };
export default function Decentralization ({}) {
  const [content, setContent] = useState("");

  const handleContentChange = (value: string) => {
    setContent(value);
  };

  const [selectedOption, setSelectedOption] = useState<SelectOptionType | null>(
    null
  );

  const handleSelectionChange = (
    option: SelectOptionType | null,
    optionsArray: SelectOptionType[]
  ) => {
    if (option) {
      setSelectedOption(option);
    }
  };
  const updateRole = () => {}

  const handleUpdateRole = () => {}
  const options = {
    nhanvienphutrach: [
      { value: "Lê Hồng Anh", label: "Lê Hồng Anh (KỸ THUẬT - ID:284670)" },
      {
        value: "Phan Mạnh Hùng",
        label: "Phan Mạnh Hùng (SÁNG TẠO - ID:153846)",
      },
      {
        value: "Phan Mạnh Hùng",
        label: "Phan Mạnh Hùng (SÁNG TẠO - ID:153846)",
      },
      {
        value: "Phan Mạnh Hùng",
        label: "Phan Mạnh Hùng (SÁNG TẠO - ID:153846)",
      },
      {
        value: "Phan Mạnh Hùng",
        label: "Phan Mạnh Hùng (SÁNG TẠO - ID:153846)",
      },
    ],
  };
  return (
    <>
      <div className={`${styles.l_phanquyen}`}>
        <div className={`${styles.l_phanquyen_item1}`}>
          QUẢN LÝ PHÂN QUYỀN CHUNG CHO NGƯỜI DÙNG
        </div>

        <div className={`${styles.l_phanquyen_item2}`}>
          <div className={`${styles.l_timkiem_nhanvien_item1}`}>
            Chọn nhân viên :
          </div>
          <div className={`${styles.l_timkiem_nhanvien_item2}`}>
            <Select
              className={`${styles.position_recruit}`}
              defaultValue={selectedOption}
              onChange={(option) =>
                handleSelectionChange(option, options.nhanvienphutrach)
              }
              options={options.nhanvienphutrach}
              placeholder=''
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,

                  height: 32,
                  fontSize: state.isFocused ? 14 : 14,
                  minHeight: state.isFocused ? 20 : 20,
                  width: state.isFocused ? "100%" : baseStyles.width,
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

          <div>
            <form onSubmit={updateRole}>
                <div className={`${styles.l_tbl}`}>
                    <div className={`${styles.l_tbl_row}`}>
                        <div className={`${styles.l_tbl_cell} ${styles.l_tbl_text} ${styles.l_tbl_center}`}>
                        Quyền người dùng
                        </div>

                        <div className={`${styles.l_tbl_cell} ${styles.l_tbl_text} ${styles.l_tbl_center} ${styles.l_tbl_border}`}>
                        Xem
                        </div>

                        <div className={`${styles.l_tbl_cell} ${styles.l_tbl_text} ${styles.l_tbl_center} ${styles.l_tbl_border}`}>
                        Tạo mới
                        </div>

                        <div className={`${styles.l_tbl_cell} ${styles.l_tbl_text} ${styles.l_tbl_center} ${styles.l_tbl_border}`}>
                        Chỉnh sửa
                        </div>

                        <div className={`${styles.l_tbl_cell} ${styles.l_tbl_text} ${styles.l_tbl_center} ${styles.l_tbl_border}`}>
                        Xóa
                        </div>
                    </div>

                    <div className={`${styles.l_tbl_row}`}>
                        <div className={`${styles.l_tbl_cell} ${styles.l_tbl_text1}`}>
                             Quản lý tuyển dụng
                        </div>

                        <div className={`${styles.l_tbl_cell} ${styles.l_tbl_center} ${styles.l_tbl_border}`}>
                        <input className={`${styles.l_tbl_checkbox}`} name="role_td"type = 'checkbox' ></input>
                        </div>

                        <div className={`${styles.l_tbl_cell} ${styles.l_tbl_center}  ${styles.l_tbl_border}`}>
                        <input className={`${styles.l_tbl_checkbox}`} name="role_td" type = 'checkbox'></input>
                        </div>

                        <div className={`${styles.l_tbl_cell} ${styles.l_tbl_center} ${styles.l_tbl_border}`}>
                        <input className={`${styles.l_tbl_checkbox}`} name="role_td" type = 'checkbox'></input>
                        </div>

                        <div className={`${styles.l_tbl_cell} ${styles.l_tbl_center} ${styles.l_tbl_border}`}>
                        <input className={`${styles.l_tbl_checkbox}`} name="role_td" type = 'checkbox'></input>
                        </div>
                    </div>

                    <div className={`${styles.l_tbl_row}`}>
                        <div className={`${styles.l_tbl_cell} ${styles.l_tbl_text1}`}>
                        Quản lý thông tin nhân sự
                        </div>

                        <div className={`${styles.l_tbl_cell} ${styles.l_tbl_center} ${styles.l_tbl_border}`}>
                        <input className={`${styles.l_tbl_checkbox}`} name="role_ttns"type = 'checkbox' ></input>
                        </div>

                        <div className={`${styles.l_tbl_cell} ${styles.l_tbl_center}  ${styles.l_tbl_border}`}>
                        <input className={`${styles.l_tbl_checkbox}`} name="role_ttns"type = 'checkbox' ></input>
                        </div>

                        <div className={`${styles.l_tbl_cell} ${styles.l_tbl_center} ${styles.l_tbl_border}`}>
                        <input className={`${styles.l_tbl_checkbox}`} name="role_ttns"type = 'checkbox' ></input>
                        </div>

                        <div className={`${styles.l_tbl_cell} ${styles.l_tbl_center} ${styles.l_tbl_border}`}>
                        <input className={`${styles.l_tbl_checkbox}`} name="role_ttns"type = 'checkbox' ></input>
                        </div>
                    </div>

                    <div className={`${styles.l_tbl_row}`}>
                        <div className={`${styles.l_tbl_cell} ${styles.l_tbl_text1}`}>
                        Thành tích - Vi phạm
                        </div>

                        <div className={`${styles.l_tbl_cell} ${styles.l_tbl_center} ${styles.l_tbl_border}`}>
                        <input className={`${styles.l_tbl_checkbox}`} name="role_ttvp"type = 'checkbox' ></input>
                        </div>

                        <div className={`${styles.l_tbl_cell} ${styles.l_tbl_center}  ${styles.l_tbl_border}`}>
                        <input className={`${styles.l_tbl_checkbox}`} name="role_ttvp"type = 'checkbox' ></input>
                        </div>

                        <div className={`${styles.l_tbl_cell} ${styles.l_tbl_center} ${styles.l_tbl_border}`}>
                        <input className={`${styles.l_tbl_checkbox}`} name="role_ttvp"type = 'checkbox' ></input>
                        </div>

                        <div className={`${styles.l_tbl_cell} ${styles.l_tbl_center} ${styles.l_tbl_border}`}>
                        <input className={`${styles.l_tbl_checkbox}`} name="role_ttvp"type = 'checkbox' ></input>
                        </div>
                    </div>

                    <div className={`${styles.l_tbl_row}`}>
                        <div className={`${styles.l_tbl_cell} ${styles.l_tbl_text1}`}>
                        Hội nhập nhân viên
                        </div>

                        <div className={`${styles.l_tbl_cell} ${styles.l_tbl_center} ${styles.l_tbl_border}`}>
                        <input className={`${styles.l_tbl_checkbox}`} name="role_hnnv"type = 'checkbox' ></input>
                        </div>

                        <div className={`${styles.l_tbl_cell} ${styles.l_tbl_center}  ${styles.l_tbl_border}`}>
                        <input className={`${styles.l_tbl_checkbox}`} name="role_hnnv"type = 'checkbox' ></input>
                        </div>

                        <div className={`${styles.l_tbl_cell} ${styles.l_tbl_center} ${styles.l_tbl_border}`}>
                        <input className={`${styles.l_tbl_checkbox}`} name="role_hnnv"type = 'checkbox' ></input>
                        </div>

                        <div className={`${styles.l_tbl_cell} ${styles.l_tbl_center} ${styles.l_tbl_border}`}>
                        <input className={`${styles.l_tbl_checkbox}`} name="role_hnnv"type = 'checkbox' ></input>
                        </div>
                    </div>

                    <div className={`${styles.l_tbl_row}`}>
                        <div className={`${styles.l_tbl_cell} ${styles.l_tbl_text1}`}>
                        Báo cáo nhân sự
                        </div>

                        <div className={`${styles.l_tbl_cell} ${styles.l_tbl_center} ${styles.l_tbl_border}`}>
                        <input className={`${styles.l_tbl_checkbox}`} name="role_bcns"type = 'checkbox' ></input>
                        </div>

                        <div className={`${styles.l_tbl_cell} ${styles.l_tbl_center}  ${styles.l_tbl_border}`}>
                        <input className={`${styles.l_tbl_checkbox}`} name="role_bcns"type = 'checkbox' ></input>
                        </div>

                        <div className={`${styles.l_tbl_cell} ${styles.l_tbl_center} ${styles.l_tbl_border}`}>
                        <input className={`${styles.l_tbl_checkbox}`} name="role_bcns"type = 'checkbox' ></input>
                        </div>

                        <div className={`${styles.l_tbl_cell} ${styles.l_tbl_center} ${styles.l_tbl_border}`}>
                        <input className={`${styles.l_tbl_checkbox}`} name="role_bcns"type = 'checkbox' ></input>
                        </div>
                    </div>

                    <div className={`${styles.l_tbl_row}`}>
                        <div className={`${styles.l_tbl_cell} ${styles.l_tbl_text1}`}>
                        Dữ liệu đã xóa gần đây
                        </div>

                        <div className={`${styles.l_tbl_cell} ${styles.l_tbl_center} ${styles.l_tbl_border}`}>
                        <input className={`${styles.l_tbl_checkbox}`} name="role_dldx"type = 'checkbox' ></input>
                        </div>

                        <div className={`${styles.l_tbl_cell} ${styles.l_tbl_center}  ${styles.l_tbl_border}`}>
                        <input className={`${styles.l_tbl_checkbox}`} name="role_dldx"type = 'checkbox' ></input>
                        </div>

                        <div className={`${styles.l_tbl_cell} ${styles.l_tbl_center} ${styles.l_tbl_border}`}>
                        <input className={`${styles.l_tbl_checkbox}`} name="role_dldx"type = 'checkbox' ></input>
                        </div>

                        <div className={`${styles.l_tbl_cell} ${styles.l_tbl_center} ${styles.l_tbl_border}`}>
                        <input className={`${styles.l_tbl_checkbox}`} name="role_dldx"type = 'checkbox' ></input>
                        </div>
                    </div>

                    <div className={`${styles.l_tbl_row}`}>
                        <div className={`${styles.l_tbl_cell} ${styles.l_tbl_text1}`}>
                        Tăng/giảm lương
                        </div>

                        <div className={`${styles.l_tbl_cell} ${styles.l_tbl_center} ${styles.l_tbl_border}`}>
                        <input className={`${styles.l_tbl_checkbox}`} name="role_tgl" type = 'checkbox'></input>
                        </div>

                        <div className={`${styles.l_tbl_cell} ${styles.l_tbl_center}  ${styles.l_tbl_border}`}>
                        <input className={`${styles.l_tbl_checkbox}`} name="role_tgl" type = 'checkbox'></input>
                        </div>

                        <div className={`${styles.l_tbl_cell} ${styles.l_tbl_center} ${styles.l_tbl_border}`}>
                        <input className={`${styles.l_tbl_checkbox}`} name="role_tgl" type = 'checkbox'></input>
                        </div>

                        <div className={`${styles.l_tbl_cell} ${styles.l_tbl_center} ${styles.l_tbl_border}`}>
                        <input className={`${styles.l_tbl_checkbox}`} name="role_tgl" type = 'checkbox'></input>
                        </div>
                    </div>
                </div>

                <button className={`${styles.l_btn_retypePass}`} onClick={handleUpdateRole}>Cập nhật</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

