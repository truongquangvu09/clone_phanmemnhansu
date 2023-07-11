import React, { useEffect, useState } from "react";
import styles from '../room/editRoomModal/editRoomModal.module.css'
import Select from 'react-select';

type SelectOptionType = { label: string, value: string }
type EditNestModalProps = {
    defaultValue: SelectOptionType | null;
    options: { [key: string]: SelectOptionType[] };
    mota: string;
    onCancel: any
};

export default function EditNestModal({ defaultValue, options, mota, onCancel }: EditNestModalProps) {

    useEffect(() => {



    })

    const [selectedOptions, setSelectedOptions] = useState<{ [key: string]: SelectOptionType | null }>({
        chonphongban: options?.chonphongban ? options?.chonphongban[0] : null,
        truongphong: options?.truongphong ? options?.truongphong[0] : null,
        photruongphong: options?.photruongphong ? options?.photruongphong[0] : null
    });

    const [selectedOption, setSelectedOption] = useState<SelectOptionType | null>(null);

    const handleSelectionChange = (option: SelectOptionType | null, field: string) => {
        setSelectedOptions(prevState => ({
            ...prevState,
            [field]: option
        }));
    };

    const optionss = {
        chonphongban: [
            { value: 'BAN GIÁM ĐỐC', label: 'BAN GIÁM ĐỐC' },
            { value: 'Phó GIÁM ĐỐC', label: 'Phó GIÁM ĐỐC' },
        ],
        tento: [
            { value: 'tổ anh hiệp', label: 'Tổ anh Hiệp' },
        ],

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
                                        <label htmlFor="">Tên phòng  <span style={{ color: 'red' }}> * </span></label>
                                        <div className={`${styles.input_right}  ${styles.edit_right}`}>
                                            <Select
                                                defaultValue={selectedOptions.chonphongban ? selectedOptions.chonphongban : selectedOption}
                                                onChange={(option) => handleSelectionChange(option, 'chonphongban')}
                                                options={options?.chonphongban}
                                                placeholder="Cập nhật phòng ban"
                                                styles={{
                                                    control: (baseStyles, state) => ({
                                                        ...baseStyles,
                                                        borderRadius: 4,
                                                        fontSize: state.isFocused ? 14 : 14,
                                                        minHeight: state.isFocused ? 20 : 20,
                                                        width: '100%',
                                                        fontWeight: state.isFocused ? 600 : 600
                                                    }),
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className={`${styles.form_groups} ${styles.edit_room}`}>
                                        <label htmlFor="">Tên tổ <span style={{ color: 'red' }}> * </span></label>
                                        <div className={`${styles.input_right}  ${styles.edit_right}`}>
                                            <Select
                                                defaultValue={selectedOptions.tento ? selectedOptions.tento : selectedOption}
                                                onChange={(option) => handleSelectionChange(option, 'tento')}
                                                options={options?.tento}
                                                placeholder="Cập nhật trưởng phòng"
                                                styles={{
                                                    control: (baseStyles, state) => ({
                                                        ...baseStyles,
                                                        borderRadius: 4,
                                                        fontSize: state.isFocused ? 14 : 14,
                                                        minHeight: state.isFocused ? 20 : 20,
                                                        width: '100%',
                                                        fontWeight: state.isFocused ? 600 : 600
                                                    }),
                                                }}
                                            />
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
                                        <button className={`${styles.btn_add}`}>Cập nhật</button>
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