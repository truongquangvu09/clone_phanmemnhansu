import React, { useState } from "react";
import styles from '../detailRecruitmentStage.module.css'
import EditRecruitmentStage from "../editRecruitmentStage/editRecruitmentStage";
import DeleteRecruitmentStage from "../deleteRecruitmentStage/deleteRecruitmentStage";

export interface ListRecruitmentStage {}

export default function ListRecruitmentStage({ item }: any) {
    const [openModal, setOpenModal] = useState(null);
    const [visible, setVisible] = useState(false);
    const [hidden, setHidden] = useState(false);

    const handleCloseModal = () => {
      setOpenModal(null);
      setVisible(false)
      setHidden(false);
    };
    const handleItemClick = (modalId: any) => {
      setOpenModal(modalId);
      setHidden(false);
    };

    if (openModal === 1) {
      return (
        <>
          <EditRecruitmentStage  onCloseModal={handleCloseModal} />
        </>
      );
    }
  
    if (openModal === 2) {
      return (
        <>
          <DeleteRecruitmentStage onCloseModal={handleCloseModal} />
        </>
      );
    }
  
    return (
        <div key={item.id}>
        <div className={`${styles.title_giaidoans}`}>
            <h5>({item.magiaidoan}) {item.title}</h5>
          </div>
          <div className={`${styles.all_giaidoans}`}>
            <div className={`${styles.giaidoans_item}`}>
              <div className={`${styles.giaidoans_item_1}`}>
                <div className={`${styles.circle_blue}`}>{item.id}</div>
                <div className={`${styles.giaidoans_item_2}`}>
                  <div className={`${styles.row} ${styles.r_t_top}`}>
                    <div className={`${styles.row_top_right}`}>
                      <p>Cillum numquam adipi</p>
                    </div>
                    <div
                      className={`${styles.setting}`}
                      onMouseEnter={() => setVisible(true)}
                      onMouseLeave={() => setVisible(false)}
                    >
                      <picture>
                        <img
                          src="https://phanmemnhansu.timviec365.vn/assets/images/l_images/3cham.png"
                          alt="setting"
                        ></img>
                      </picture>
                      {visible && (
                         <>
                         {!hidden && (
                           <div className={`${styles.settings_hover}`}>
                             <li onClick={() => handleItemClick(1)}>Chỉnh sửa</li>
                             <hr style={{ marginTop: "0", marginBottom: "0" }}></hr>
                             <li onClick={() => handleItemClick(2)}>Xóa</li>
                           </div>
                         )}
                       </>
                      )}
                    </div>
                  </div>
                  <ul>
                    <li>
                      <picture>
                        <img
                          src="https://phanmemnhansu.timviec365.vn/assets/images/l_images/right_blue.png"
                          alt=""
                        ></img>
                      </picture>
                      Thành viên thực hiện: {item.thanhvien}
                      <span> {"Numquam pariatur Au"} </span>
                    </li>

                    <li>
                      <picture>
                        <img
                          src="https://phanmemnhansu.timviec365.vn/assets/images/l_images/right_blue.png"
                          alt=""
                        ></img>
                      </picture>
                      Mục tiêu: {item.muctieu}
                      <span> </span>
                    </li>

                    <li>
                      <picture>
                        <img
                          src="https://phanmemnhansu.timviec365.vn/assets/images/l_images/right_blue.png"
                          alt=""
                        ></img>
                      </picture>
                      Thời gian định lượng: {item.thoigian}
                      <span> {"Laboriosam eum natu"} </span>
                    </li>

                    <li>
                      <picture>
                        <img
                          src="https://phanmemnhansu.timviec365.vn/assets/images/l_images/right_blue.png"
                          alt=""
                        ></img>
                      </picture>
                      Mô tả công việc: 
                      <span className={`${styles.view_detail_desc}`}>
                        (Xem chi tiết)
                      </span>
                      <div className={`${styles.motacv}`} style={{maxHeight: "200px"}}>
                        <p>{item.mota}</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <hr></hr>
          </div>
        </div>
    )
}