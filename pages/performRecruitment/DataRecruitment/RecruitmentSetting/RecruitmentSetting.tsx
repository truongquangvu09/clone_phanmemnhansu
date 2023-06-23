import React, { useReducer, useState } from "react";
import styles from "../../Recruitment/recruitment.module.css";
import { useRouter } from "next/router";

export interface RecruitmentSetting {}

export default function RecruitmentSetting({ dataId, item }: any) {
  const router = useRouter();
  const handleClick = () => {
    router.push('/performRecruitment/DataRecruitment/RecruitmentSetting/[idRecruitment]', `/performRecruitment/DataRecruitment/RecruitmentSetting/${dataId}`);
  };
  return (
    <>
      <div className={`${styles.settings}`}>
        <li className={`${styles.detail_new}`} onClick={() => handleClick()}>
          Chi tiết
        </li>
        <li className={`${styles.edit_new}`}>Chỉnh sửa tin</li>
        <hr style={{ marginTop: "0", marginBottom: "0" }}></hr>
        <li>Gỡ tin tuyển dụng</li>
        <li>Thiết lập làm tin mẫu</li>
      </div>
    </>
  );
}
