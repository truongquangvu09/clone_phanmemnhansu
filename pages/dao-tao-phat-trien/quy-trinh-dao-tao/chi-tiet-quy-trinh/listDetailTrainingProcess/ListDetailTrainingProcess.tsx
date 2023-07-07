import React, { useState } from "react";
import styles from "./ListDetailTrainingProcess.module.css";

import EditDetailTrainingProcess from "../editDetailTrainingProcess/EditDetailTrainingProcess";
import DeleteDetailTrainingProcess from "../deleteDetailTrainingProcess/DeleteDetailTrainingProcess";
export interface ListDetailTrainingProcess { }

export default function ListDetailTrainingProcess({ item }: any) {
  const [animateModal, setAnimateModal] = useState(false);
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [openModalDelete, setOpenModalDelete] = useState(false);
  const [visible, setVisible] = useState(false);
  const [hidden, setHidden] = useState(false);

  const handleCloseModal = () => {
    setAnimateModal(false);
    setTimeout(() => {
      setOpenModalEdit(false);
      setOpenModalDelete(false);
      setVisible(false);
      setHidden(false);
    }, 300);
  };
  const handleItemClickEdit = (item: any) => {
    setOpenModalEdit(true);
    setAnimateModal(true);
  };
  const handleItemClickDelete = (item: any) => {
    setOpenModalDelete(true);
    setAnimateModal(true);
  };

  if (openModalEdit) {
    return (
      <>
        <EditDetailTrainingProcess
          data={item}
          animation={animateModal}
          onCloseModal={handleCloseModal}
        />
      </>
    );
  }
  if (openModalDelete) {
    return (
      <>
        <DeleteDetailTrainingProcess
          data={item}
          animation={animateModal}
          onCloseModal={handleCloseModal}
        />
      </>
    );
  }

  return (
    <div key={item?.id}>
      <div className={`${styles.title_giaidoans}`}>
        <h5> {item?.title}</h5>
      </div>
      <div className={`${styles.all_giaidoans}`}>
        <div className={`${styles.giaidoans_item}`}>
          <div className={`${styles.giaidoans_item_1}`}>
            <div className={`${styles.circle_blue}`}>{item?.id}</div>
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
                    <img src={`/3cham.png`} alt="setting"></img>
                  </picture>
                  {visible && (
                    <>
                      {!hidden && (
                        <div className={`${styles.settings_hover}`}>
                          <li onClick={() => handleItemClickEdit(item)}>
                            Chỉnh sửa
                          </li>
                          <hr
                            style={{ marginTop: "0", marginBottom: "0" }}
                          ></hr>
                          <li onClick={() => handleItemClickDelete(item)}>
                            Xóa
                          </li>
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>
              <ul>
                <li style={{ marginBottom: "4px" }}>
                  <picture>
                    <img
                      src="https://phanmemnhansu.timviec365.vn/assets/images/l_images/right_blue.png"
                      alt=""
                    ></img>
                  </picture>
                  Đối tượng đào tạo: {item?.doituong}
                  <span> {"Numquam pariatur Au"} </span>
                </li>

                <li>
                  <picture>
                    <img
                      src="https://phanmemnhansu.timviec365.vn/assets/images/l_images/right_blue.png"
                      alt=""
                    ></img>
                  </picture>
                  Nội dung giai đoạn:{" "}
                  <p className={`${styles.noidung}`}>{item?.noidung}</p>
                  <span> </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr></hr>
      </div>
    </div>
  );
}
