import React, { useState } from "react";
import styles from "../../Recruitment/recruitment.module.css";

export interface RecruitmentSetting {}

export default function RecruitmentSetting({ children }: any) {
  return (
    <>
      <div className={`${styles.settings}`}>
        <li className={`${styles.detail_new}`}>Chi tiết</li>
        <li className={`${styles.edit_new}`}>Chỉnh sửa tin</li>
        <hr style={{ marginTop: "0", marginBottom: "0" }}></hr>
        <li>Gỡ tin tuyển dụng</li>
        <li>Thiết lập làm tin mẫu</li>
      </div>
    </>
  );
}
