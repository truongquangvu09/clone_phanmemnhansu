import React, { useState } from "react";
import styles from "../../../quan-ly-tuyen-dung/quy-trinh-tuyen-dung/deleteRecruitmentProcess/DeleteRecruitmentProcess.module.css"
import { DeleteSignature } from "@/pages/api/co_cau_to_chuc";


export default function DeleteSignatures({ onCancel, empId }: any) {

    const handleSubmit = async () => {
        try {
            const formData = new FormData()
            formData.append('empId', empId)
            const response = await DeleteSignature(formData)
            onCancel()
        } catch (error) {
            throw error
        }
    }

    return (
        <>
            <div className={`${styles.overlay}`}></div>
            <div className={`${styles.modal} ${styles.modal_setting}  `}>
                <div className={`${styles.contentquytrinh}`}>
                    <div className={`${styles.modal_content} ${styles.contentdel}`}>
                        <div className={`${styles.modal_header} ${styles.headquytrinh}`}>
                            <h5 className={`${styles.modal_title}`}>
                                XÓA MẪU CHỮ KÍ
                            </h5>
                        </div>

                        <div className={`${styles.modal_body} ${styles.bodyquytrinh}`}>
                            <div className={`${styles.xoaquytrinh}`}>
                                Bạn có chắc muốn xóa mãu chữ kí của nhân viên này không
                                <span className={`${styles.t_recruitment_name}`}>

                                </span>
                            </div>

                            <div className={`${styles.xoaquytrinh}`}>
                                Tất cả nội dung quy trình sẽ được lưu trữ ở
                                <span> DỮ LIỆU ĐÃ XÓA GẦN ĐÂY </span>
                                trong thời gian 5 ngày trước khi bị xóa vĩnh viễn.
                            </div>
                        </div>

                        <div className={`${styles.modal_footer} ${styles.footerquytrinh}`}>
                            <button type="button" className={`${styles.btn_huy}`} onClick={onCancel}>
                                <span>Hủy</span>
                            </button>
                            <button type="button" className={`${styles.delete}`} onClick={handleSubmit}>
                                Xóa
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
