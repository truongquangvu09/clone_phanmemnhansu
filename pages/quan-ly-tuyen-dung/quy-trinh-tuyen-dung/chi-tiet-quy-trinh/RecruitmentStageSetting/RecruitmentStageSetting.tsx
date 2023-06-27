import React, { useState } from "react";
import styles from "../detailRecruitmentStage.module.css";
import EditRecruitmentStage from "../editRecruitmentStage/editRecruitmentStage";
import DeleteRecruitmentStage from "../deleteRecruitmentStage/deleteRecruitmentStage";
export interface RecruitmentStageSetting {}

export default function RecruitmentStageSetting({ dataId }: any) {
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
        <EditRecruitmentStage onCloseModal={handleCloseModal} />
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
