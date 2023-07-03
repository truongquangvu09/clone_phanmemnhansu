import React, { useState } from "react";
import styles from './DetailTrainingProcessSetting.module.css'
import EditDetailTrainingProcess from "../editDetailTrainingProcess/EditDetailTrainingProcess";
import DeleteDetailTrainingProcess from "../deleteDetailTrainingProcess/DeleteDetailTrainingProcess";


export interface DetailTrainingProcessSetting {}

export default function DetailTrainingProcessSetting({ dataId }: any) {
  const [openModal, setOpenModal] = useState(null);
  const [hidden, setHidden] = useState(false);

  const handleCloseModal = () => {
    setOpenModal(null);
    setHidden(true);
  };

  const handleItemClick = (modalId: any) => {
    setOpenModal(modalId);
    setHidden(true);
  };

  if (openModal === 1) {
    return (
      <>
        <EditDetailTrainingProcess onCloseModal={handleCloseModal} />
      </>
    );
  }
  if (openModal === 2) {
    return (
      <>
        <DeleteDetailTrainingProcess onCloseModal={handleCloseModal} />
      </>
    );
  }
 
  return (
    <>
    {!hidden && (
      <div className={`${styles.settings_hover}`}>
        <li onClick={() => handleItemClick(1)}>Chỉnh sửa</li>
        <hr style={{ marginTop: "0", marginBottom: "0" }}></hr>
        <li onClick={() => handleItemClick(2)}>Xóa</li>
      </div>
    )}
  </>
  );
}
