import React, { useState } from "react";
import styles from '../../../../../quan-ly-hanh-chinh/bien-dong-nhan-su/planningAppointment/addPlanningModal/addPlanningModal.module.css'
import Select from 'react-select';

type SelectOptionType = { label: string, value: string }
type EditRoomModalProps = {
    defaultValue: SelectOptionType | null;
    options: { [key: string]: SelectOptionType[] };
    soluongnhanvien: number;
    mota: string;
    onCancel: any
};

export default function EditRoomModal({ defaultValue, options, soluongnhanvien, mota, onCancel }: EditRoomModalProps) {
    const [selectedOptions, setSelectedOptions] = useState<{ [key: string]: SelectOptionType | null }>({
        chonphongban: options.chonphongban[0],
        truongphong: options.truongphong[0],
        photruongphong: options.photruongphong[0]
    });
    const handleSelectionChange = (option: SelectOptionType | null, field: string) => {
        setSelectedOptions(prevState => ({
            ...prevState,
            [field]: option
        }));
    };

    return (
        <>
            <div className={`${styles.modal_open}`}>
                <div className={`${styles.modal} ${styles.fade} ${styles.in}`}>
                    <div className={` ${styles.modal_dialog} ${styles.content_process}`}>
                        <div className={`${styles.modal_content}`}>
                            <div className={`${styles.modal_header} ${styles.header_process}`}>
                                <h5 className={`${styles.modal_tittle}`}>CHỈNH SỬA CHI TIẾT PHÒNG BAN</h5>
                            </div>
                            <div className={`${styles.modal_body}`}>
                                <form action="">
                                    <div className={`${styles.form_groups} ${styles.edit_room}`}>
                                        <label htmlFor="">Tên phòng ban <span style={{ color: 'red' }}> * </span></label>
                                        <div className={`${styles.input_right}  ${styles.edit_right}`}>
                                            <Select
                                                defaultValue={selectedOptions.chonphongban}
                                                onChange={(option) => handleSelectionChange(option, 'chonphongban')}
                                                options={options.chonphongban}
                                                placeholder="Cập nhật phòng ban"
                                                styles={{
                                                    control: (baseStyles, state) => ({
                                                        ...baseStyles,
                                                        borderRadius: 8,
                                                        fontSize: state.isFocused ? 14 : 14,
                                                        minHeight: state.isFocused ? 20 : 20,
                                                        width: state.isFocused ? 418 : 418,
                                                        fontWeight: state.isFocused ? 600 : 600
                                                    }),
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className={`${styles.form_groups} ${styles.edit_room}`}>
                                        <label htmlFor="">Trưởng phòng <span style={{ color: 'red' }}> * </span></label>
                                        <div className={`${styles.input_right}  ${styles.edit_right}`}>
                                            <Select
                                                defaultValue={selectedOptions.truongphong}
                                                onChange={(option) => handleSelectionChange(option, 'truongphong')}
                                                options={options.truongphong}
                                                placeholder="Cập nhật trưởng phòng"
                                                styles={{
                                                    control: (baseStyles, state) => ({
                                                        ...baseStyles,
                                                        borderRadius: 8,
                                                        fontSize: state.isFocused ? 14 : 14,
                                                        minHeight: state.isFocused ? 20 : 20,
                                                        width: state.isFocused ? 418 : 418,
                                                        fontWeight: state.isFocused ? 600 : 600
                                                    }),
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className={`${styles.form_groups} ${styles.edit_room}`}>
                                        <label htmlFor="">Phó trưởng phòng <span style={{ color: 'red' }}> * </span> </label>
                                        <div className={`${styles.input_right} ${styles.edit_right}`}>
                                            <Select
                                                defaultValue={selectedOptions.photruongphong}
                                                onChange={(option) => handleSelectionChange(option, 'photruongphong')}
                                                options={options.photruongphong}
                                                placeholder="Cập nhật phó trưởng phòng"
                                                styles={{
                                                    control: (baseStyles, state) => ({
                                                        ...baseStyles,
                                                        borderRadius: 8,
                                                        fontSize: state.isFocused ? 14 : 14,
                                                        minHeight: state.isFocused ? 20 : 20,
                                                        width: state.isFocused ? 418 : 418,
                                                        fontWeight: state.isFocused ? 600 : 600
                                                    }),
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className={`${styles.form_groups} ${styles.edit_room}`}>
                                        <label htmlFor="">Số lượng nhân viên <span style={{ color: 'red' }}> * </span></label>
                                        <div className={`${styles.input_right}`}>
                                            <input defaultValue={soluongnhanvien} type="text" id="names" placeholder="" className={`${styles.input_process}`} />
                                        </div>
                                    </div>
                                    <div className={`${styles.form_groups}`}>
                                        <label htmlFor="">Mô tả <span style={{ color: 'red' }}> * </span></label>
                                        <div className={`${styles.input_right}`}>
                                            <textarea defaultValue={mota} id="names" placeholder="" className={`${styles.input_process}`} />
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
            </div>

        </>
    )
}