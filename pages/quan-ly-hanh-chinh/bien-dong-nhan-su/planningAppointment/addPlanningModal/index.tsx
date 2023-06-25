import React, { useState } from "react";
import styles from './addPlanningModal.module.css'
import Editor from "../../../quy-dinh-chinh-sach/quy-dinh-lam-viec/addRegulationsModal/CKEditor";
import Select from 'react-select';

export default function AddPlanningModal() {
    function handleUploadClick(event: React.MouseEvent<HTMLAnchorElement>) {
        event.preventDefault();
        const uploadInput = document.getElementById('upload_cv') as HTMLInputElement;
        if (uploadInput) {
            uploadInput.click();
        }
    }
    const [content, setContent] = useState('');

    const handleContentChange = (value: string) => {
        setContent(value);
    };

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
    ];

    return (
        <>
            <div className={`${styles.modal_open}`}>
                <div className={`${styles.modal} ${styles.fade} ${styles.in}`}>
                    <div className={` ${styles.modal_dialog} ${styles.content_process}`}>
                        <div className={`${styles.modal_content}`}>
                            <div className={`${styles.modal_header} ${styles.header_process}`}>
                                <h5 className={`${styles.modal_tittle}`}>THÊM MỚI BỔ NHIỆM, QUY HOẠCH</h5>
                            </div>
                            <div className={`${styles.modal_body}`}>
                                <form action="">
                                    <div className={`${styles.form_groups}`}>
                                        <label htmlFor="">Tên nhân viên <span style={{ color: 'red' }}> * </span></label>
                                        <div className={`${styles.input_right}`}>
                                            <select name="" id="" className={`${styles.input_process}`}>
                                                <option value="">-- Vui lòng chọn --</option>
                                                <option value="">Nam</option>
                                                <option value="">Nữ</option>
                                                <option value="">Giới tính khác</option>

                                            </select>
                                        </div>
                                    </div>
                                    <div className={`${styles.form_groups}`}>
                                        <label htmlFor="">Chức vụ hiện tại <span style={{ color: 'red' }}> * </span></label>
                                        <div className={`${styles.input_right}`}>
                                            <select name="" id="" className={`${styles.input_process}`}>
                                                <option value="">CHỌN CHỨC VỤ</option>
                                                <option value="">Nam</option>
                                                <option value="">Nữ</option>
                                                <option value="">Giới tính khác</option>

                                            </select>
                                        </div>
                                    </div>
                                    <div className={`${styles.form_groups}`}>
                                        <label htmlFor="">Phòng ban <span style={{ color: 'red' }}> * </span></label>
                                        <div className={`${styles.input_right}`}>
                                            <select name="" id="" className={`${styles.input_process}`}>
                                                <option value="">Chọn phòng ban</option>
                                                <option value="">Nam</option>
                                                <option value="">Nữ</option>
                                                <option value="">Giới tính khác</option>

                                            </select>
                                        </div>
                                    </div>
                                    <div className={`${styles.form_groups}`}>
                                        <label htmlFor=""> Quy hoạch bổ nhiệm <span style={{ color: 'red' }}> * </span></label>
                                        <div className={`${styles.input_right}`}>
                                            <select name="" id="" className={`${styles.input_process}`}>
                                                <option value="">CHỌN CHỨC VỤ</option>
                                                <option value="">Nam</option>
                                                <option value="">Nữ</option>
                                                <option value="">Giới tính khác</option>

                                            </select>
                                        </div>
                                    </div>
                                    <div className={`${styles.form_groups}`}>
                                        <label htmlFor="">Phòng ban mới <span style={{ color: 'red' }}> * </span></label>
                                        <div className={`${styles.input_right}`}>
                                            <select name="" id="" className={`${styles.input_process}`}>
                                                <option value="">Chọn phòng ban</option>
                                                <option value="">Nam</option>
                                                <option value="">Nữ</option>
                                                <option value="">Giới tính khác</option>

                                            </select>
                                        </div>
                                    </div>
                                    <div className={`${styles.form_groups}`}>
                                        <label htmlFor="">Thời gian quy hoạch bổ nhiệm <span style={{ color: 'red' }}> * </span></label>
                                        <div className={`${styles.input_right}`}>
                                            <input type="date" id="names" placeholder="dd/mm/yyyy" className={`${styles.input_process}`} />
                                        </div>
                                    </div>
                                    <div className={`${styles.form_groups}`}>
                                        <label htmlFor="">Chọn quy định <span style={{ color: 'red' }}> * </span></label>
                                        <div className={`${styles.input_right}`}>
                                            <select name="" id="" className={`${styles.input_process}`}>
                                                <option value="">Chọn quy định</option>
                                                <option value="">Nam</option>
                                                <option value="">Nữ</option>
                                                <option value="">Giới tính khác</option>

                                            </select>
                                        </div>
                                    </div>
                                    <div className={`${styles.form_groups} ${styles.cke}`}>
                                        <label htmlFor="">Lý do <span style={{ color: 'red' }}> * </span></label>
                                        <div className={`${styles.ckeditor}`}>
                                            {/* <Editor content={content} onChange={handleContentChange} /> */}
                                        </div>
                                    </div>

                                    <div className={`${styles.modal_footer} ${styles.footer_process}`}>
                                        <button className={`${styles.btn_cancel}`}>Hủy</button>
                                        <button className={`${styles.btn_add}`}>Thêm</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}