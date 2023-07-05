import React, { useState } from 'react';
import Select from 'react-select';
import styles from '../candidateAddModal/candidateAddModal.module.css'
type SelectOptionType = { label: string, value: string }

export default function StageAddModal({ onCancel }: any) {
    const [selectedOption, setSelectedOption] = useState<SelectOptionType | null>(null);

    const handleSelectionChange = (option: SelectOptionType | null, optionsArray: SelectOptionType[]) => {
        if (option) {
            setSelectedOption(option)
        }
    };

    const options = {
        chongiaidoandungtruoc: [
            { value: 'Nhận hồ sơ ứng viên', label: 'Nhận hồ sơ ứng viên' },
            { value: 'Chờ xét duyệt', label: 'Chờ xét duyệt' },
            { value: 'Nhận việc', label: 'Nhận việc' },
            { value: 'Trượt', label: 'Trượt' },
            { value: 'Hủy', label: 'Hủy' },
        ],
    };
    return (
        <>
            <div className={`${styles.modal_open}`}>
                <div className={`${styles.modal} ${styles.fade} ${styles.in}`}>
                    <div className={` ${styles.modal_dialog} ${styles.content_process}`}>
                        <div className={`${styles.modal_content}`}>
                            <div className={`${styles.modal_header} ${styles.header_process}`}>
                                <h5 className={`${styles.modal_tittle}`}>THÊM ỨNG VIÊN</h5>
                            </div>
                            <form action="">
                                <div className={`${styles.modal_body} ${styles.body_process}`}>
                                    <div className={`${styles.form_groups}`}>
                                        <label htmlFor="">Tên giai đoạn <span style={{ color: 'red' }}> * </span></label>
                                        <div className={`${styles.input_right}`}>
                                            <input type="text" id="names" placeholder="Nhập tên giai đoạn tuyển dụng" className={`${styles.input_process}`} />
                                        </div>
                                    </div>
                                    <div className={`${styles.form_groups}`}>
                                        <label htmlFor="">Chọn giai đoạn đứng trước <span style={{ color: 'red' }}> * </span></label>
                                        <div className={`${styles.input_right}`}>
                                            <div className={`${styles.div_no_pad} `}>
                                                <Select
                                                    defaultValue={selectedOption}
                                                    onChange={(option) => handleSelectionChange(option, options.chongiaidoandungtruoc)}
                                                    options={options.chongiaidoandungtruoc}
                                                    placeholder="-- Vui lòng chọn --"
                                                    styles={{
                                                        container: (baseStyles) => ({
                                                            ...baseStyles,
                                                            paddingRight: 10
                                                        }),
                                                        control: (baseStyles, state) => ({
                                                            ...baseStyles,
                                                            borderRadius: 8,
                                                            borderColor: "#4747477a",
                                                            height: "auto",
                                                            fontSize: state.isFocused ? 14 : 14,
                                                            width: '100%',
                                                            fontWeight: state.isFocused ? 600 : 600,
                                                            minHeight: 20
                                                        }),
                                                        valueContainer: (baseStyles) => ({
                                                            ...baseStyles,
                                                            height: 31.6,
                                                        }),
                                                        indicatorsContainer: (baseStyles) => ({
                                                            ...baseStyles,
                                                            height: 31.6,
                                                        }),
                                                        placeholder: (baseStyles) => ({
                                                            ...baseStyles,
                                                            color: "#444444",
                                                        }),
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={`${styles.modal_footer} ${styles.footer_process}`}>
                                    <button className={`${styles.btn_cancel}`} onClick={onCancel}>Hủy</button>
                                    <button className={`${styles.btn_add}`}>Thêm</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}