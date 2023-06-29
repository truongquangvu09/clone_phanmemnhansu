import React, { useState } from "react";
import styles from '../Recruitment/recruitment.module.css'
import { useRouter } from "next/router";
import EditPerformRecruitment from "../EditPerformRecruitment/EditPerformRecruitment";
export interface RecruitmentSetting {}

export default function RecruitmentSetting({ dataId }: any) {
  const [openModalEdit, setOpenModalEdit] = useState(false)
  const handleCloseModalAdd = () => {
    setOpenModalEdit(false)
  }


  const router = useRouter();
  const handleClick = () => {
    router.push('/quan-ly-tuyen-dung/thuc-hien-tuyen-dung/danh-sach-tuyen-dung/[idRecruitment]', `/quan-ly-tuyen-dung/thuc-hien-tuyen-dung/danh-sach-tuyen-dung/${dataId}`);
  };
  return (
    <>
      <div className={`${styles.settings}`}>
        <li className={`${styles.detail_new}`} onClick={() => handleClick()}>
          Chi tiết
        </li>
        <li className={`${styles.edit_new}`}
          onClick={() => setOpenModalEdit(true)}
        >
          Chỉnh sửa tin
        </li>
        <hr style={{ marginTop: "0", marginBottom: "0" }}></hr>
        <li>Gỡ tin tuyển dụng</li>
        <li>Thiết lập làm tin mẫu</li>
      </div>
      {openModalEdit && <EditPerformRecruitment handleCloseModalAdd = {handleCloseModalAdd}></EditPerformRecruitment>}
    </>
  );
}
