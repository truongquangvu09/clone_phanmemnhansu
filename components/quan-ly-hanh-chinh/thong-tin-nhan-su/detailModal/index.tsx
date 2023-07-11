import React, { useState, useEffect } from "react";
import styles from './detailModal.module.css'
import Select from 'react-select';

type SelectOptionType = { label: string, value: string }

export default function DetailCandidateList({ onCancel, id }: any) {
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


    const [selectedOption, setSelectedOption] = useState<SelectOptionType | null>(null);

    const handleSelectionChange = (option: SelectOptionType | null, optionsArray: SelectOptionType[]) => {
        if (option) {
            setSelectedOption(option)
        }
    };


    const options = {
        tinhtranghonnhan: [
            { value: 'đã kết hôn', label: 'Đã kết hôn' },
            { value: 'độc thân', label: 'Độc th' },
        ],
        chongioitinh: [
            { value: 'Nam', label: 'Nam' },
            { value: 'Nữ', label: 'Nữ' },
        ],
        chonchinhanh: [
            { value: 'PT shop', label: 'PT shop' },
            { value: 'LT legend', label: 'LT legend' },
            { value: 'LT pay 3', label: 'LT pay 3' },
            { value: 'Công ty cổ phần Thanh toán Hưng Hà 2 ', label: 'Công ty cổ phần Thanh toán Hưng Hà 2 ' },
        ],
        chonphongban: [
            { value: '  BAN GIÁM ĐỐC', label: 'BAN GIÁM ĐỐC' },
            { value: 'KỸ THUẬT', label: 'KỸ THUẬT' },
            { value: 'Biên tập', label: 'Biên tập' },
            { value: 'Kinh Doanh', label: 'Kinh Doanh' },
            { value: 'Đề án', label: 'Đề án' },
            { value: 'Phòng SEO', label: 'Phòng SEO' },
            { value: 'Phòng Đào tạo', label: 'Phòng Đào tạo' },
            { value: 'Phòng sáng tạo', label: 'phòng sáng tạo' },
            { value: 'Phòng tài vụ', label: 'Phòng tài vụ' },
        ],
        chonnhanvien: [
            { value: 'Lê Hồng Anh', label: 'Lê Hồng Anh (KỸ THUẬT - ID:284670)' },
            { value: 'Phan Mạnh Hùng', label: 'Phan Mạnh Hùng (SÁNG TẠO - ID:153846)' },
        ],
        chucvuhientai: [
            { value: 'sinh viên thực tập', label: 'SINH VIÊN THỰC TẬP' },
            { value: 'nhân viên part time', label: 'NHÂN VIÊN PART TIME' },
            { value: 'nhân viên thử việc', label: 'NHÂN VIÊN THỬ VIỆC' },
            { value: 'nhân viên chính thức', label: 'NHÂN VIÊN CHÍNH THỨC' },
            { value: 'trưởng nhóm', label: 'TRƯỞNG NHÓM' },
            { value: 'nhóm phó', label: 'NHÓM PHÓ' },
            { value: 'tổ trưởng', label: 'TỔ TRƯỞNG' },
            { value: 'phó tổ trưởng', label: 'PHÓ TỔ TRƯỞNG' },
            { value: 'trưởng ban dự án', label: 'TRƯỞNG BAN DỰ ÁN   ' },
            { value: 'phó ban dự án', label: 'PHÓ BAN DỰ ÁN' },
            { value: 'trưởng phòng', label: 'TRƯỞNG PHÒNG' },
            { value: 'phó trưởng phòng', label: 'PHÓ TRƯỞNG PHÒNG' },
            { value: 'giám đốc', label: 'GIÁM ĐỐC' },
            { value: 'phó giám đốc', label: 'PHÓ GIÁM ĐỐC   ' },
            { value: 'tổng giám đốc', label: 'TỔNG GIÁM ĐỐC' },
            { value: 'phó tổng giám đốc', label: 'PHÓ TỔNG GIÁM ĐỐC' },
            { value: 'tổng giám đốc tập đoàn', label: 'TỔNG GIÁM ĐỐC TẬP ĐOÀN' },
            { value: 'phó  tổng giám đốc tập đoàn', label: 'PHÓ TỔNG GIÁM ĐỐC TẬP ĐOÀN' },
            { value: 'chủ tịch hội đồng quản trị', label: 'CHỦ TỊCH HỘI ĐỒNG QUẢN TRỊ' },
            { value: 'phó chủ tịch hội đồng quản trị', label: 'PHÓ CHỦ TỊCH HỘI ĐỒNG QUẢN TRỊ' },
            { value: 'thành viên hội đồng quản trị', label: 'THÀNH VIÊN HỘI ĐỒNG QUẢN TRỊ' },
        ],

    };

    return (
        <>
            <div className={`${styles.modal_open}`}>
                <div className={`${styles.modal} ${styles.fade} ${styles.in}`}>
                    <div className={` ${styles.modal_dialog} ${styles.content_process}`}>
                        <div className={`${styles.modal_content}`}>
                            <div className={`${styles.modal_header} ${styles.header_process}`}>
                                <p>CHI TIẾT</p>
                            </div>
                            <form action="">
                                <div className={`${styles.modal_body} ${styles.body_process}`}>
                                    <div className={`${styles.form_groups}`}>
                                        <label htmlFor="">Tên nhân viên <span style={{ color: 'red' }}> * </span></label>
                                        <input type="text" id="names" placeholder="" className={`${styles.form_control}`} />
                                    </div>
                                    <div className={`${styles.form_groups}`}>
                                        <label htmlFor="">Mã ID nhân viên <span style={{ color: 'red' }}> * </span></label>
                                        <input type="text" id="names" placeholder="" className={`${styles.form_control} ${styles.read_only}`} />
                                    </div>
                                    <div className={`${styles.form_groups} ${styles.form_groups2}`}>
                                        <div className={`${styles.content_left}`}>
                                            <div className={`${styles.form_groups} ${styles.form_groups3} `}>
                                                <label htmlFor="">Ngày sinh </label>
                                                <input style={{ height: 20 }} type="date" id="names" placeholder="" className={`${styles.form_control} `} />
                                            </div>
                                        </div>
                                        <div className={`${styles.content_right}`}>
                                            <div className={`${styles.form_groups}  ${styles.form_groups5} `}>
                                                <label htmlFor="">Điện thoại <span style={{ color: 'red' }}> * </span></label>
                                                <input type="text" id="names" placeholder="" className={`${styles.form_control} `} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${styles.form_groups}`}>
                                        <label htmlFor="">Địa chỉ</label>
                                        <input type="text" id="names" placeholder="" className={`${styles.form_control}`} />
                                    </div>
                                    <div className={`${styles.form_groups} ${styles.form_groups2}`}>
                                        <div className={`${styles.content_left}`}>
                                            <div className={`${styles.form_groups} ${styles.form_groups3} ${styles.form_groups5} `}>
                                                <label htmlFor="">Giới tính </label>
                                                <Select
                                                    defaultValue={selectedOption}
                                                    onChange={(option) => handleSelectionChange(option, options.chongioitinh)}
                                                    options={options.chongioitinh}
                                                    placeholder="Chọn giới tính"
                                                    styles={{
                                                        control: (baseStyles, state) => ({
                                                            ...baseStyles,
                                                            borderRadius: 4,
                                                            fontSize: state.isFocused ? 14 : 14,
                                                            minHeight: state.isFocused ? 20 : 20,
                                                            width: '100%',
                                                            fontWeight: state.isFocused ? 600 : 600
                                                        }),
                                                        valueContainer: (baseStyles) => ({
                                                            ...baseStyles,
                                                            height: 33.6,

                                                        }),
                                                        indicatorsContainer: (baseStyles) => ({
                                                            ...baseStyles,
                                                            height: 33.6,
                                                        }),
                                                        placeholder: (baseStyles) => ({
                                                            ...baseStyles,
                                                            color: "#444444",
                                                        }),
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <div className={`${styles.content_right}`}>
                                            <div className={`${styles.form_groups} ${styles.form_groups5} `}>
                                                <label htmlFor="">Tình trạng hôn nhân </label>
                                                <Select
                                                    defaultValue={selectedOption}
                                                    onChange={(option) => handleSelectionChange(option, options.tinhtranghonnhan)}
                                                    options={options.tinhtranghonnhan}
                                                    placeholder="Chọn tình trạng"
                                                    styles={{
                                                        control: (baseStyles, state) => ({
                                                            ...baseStyles,
                                                            borderRadius: 4,
                                                            fontSize: state.isFocused ? 14 : 14,
                                                            minHeight: state.isFocused ? 20 : 20,
                                                            width: '103%',
                                                            fontWeight: state.isFocused ? 600 : 600
                                                        }),
                                                        valueContainer: (baseStyles) => ({
                                                            ...baseStyles,
                                                            height: 33.6,

                                                        }),
                                                        indicatorsContainer: (baseStyles) => ({
                                                            ...baseStyles,
                                                            height: 33.6,
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
                                    <div className={`${styles.form_groups}`}>
                                        <label htmlFor="">Email <span style={{ color: 'red' }}> * </span></label>
                                        <input type="text" id="names" placeholder="" className={`${styles.form_control} ${styles.read_only}`} />
                                    </div>
                                    <div className={`${styles.form_groups} ${styles.form_groups2}`}>
                                        <div className={`${styles.content_item}`}>
                                            <div className={`${styles.form_groups} ${styles.form_groups3} ${styles.form_groups5} `}>
                                                <label htmlFor="">Chi nhánh </label>
                                                <Select
                                                    defaultValue={selectedOption}
                                                    onChange={(option) => handleSelectionChange(option, options.chonchinhanh)}
                                                    options={options.chonchinhanh}
                                                    placeholder="Chọn chi nhánh"
                                                    styles={{
                                                        control: (baseStyles, state) => ({
                                                            ...baseStyles,
                                                            borderRadius: 4,
                                                            fontSize: state.isFocused ? 14 : 14,
                                                            minHeight: state.isFocused ? 20 : 20,
                                                            width: '100%',
                                                            fontWeight: state.isFocused ? 600 : 600
                                                        }),
                                                        valueContainer: (baseStyles) => ({
                                                            ...baseStyles,
                                                            height: 33.6,

                                                        }),
                                                        indicatorsContainer: (baseStyles) => ({
                                                            ...baseStyles,
                                                            height: 33.6,
                                                        }),
                                                        placeholder: (baseStyles) => ({
                                                            ...baseStyles,
                                                            color: "#444444",
                                                        }),
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <div className={`${styles.content_item}`}>
                                            <div className={`${styles.form_groups} ${styles.form_groups5} `}>
                                                <label htmlFor="">Bộ phận </label>
                                                <Select
                                                    defaultValue={selectedOption}
                                                    onChange={(option) => handleSelectionChange(option, options.chonphongban)}
                                                    options={options.chonphongban}
                                                    placeholder="Chọn bộ phận"
                                                    styles={{
                                                        control: (baseStyles, state) => ({
                                                            ...baseStyles,
                                                            borderRadius: 4,
                                                            fontSize: state.isFocused ? 14 : 14,
                                                            minHeight: state.isFocused ? 20 : 20,
                                                            width: '100%',
                                                            fontWeight: state.isFocused ? 600 : 600
                                                        }),
                                                        valueContainer: (baseStyles) => ({
                                                            ...baseStyles,
                                                            height: 33.6,

                                                        }),
                                                        indicatorsContainer: (baseStyles) => ({
                                                            ...baseStyles,
                                                            height: 33.6,
                                                        }),
                                                        placeholder: (baseStyles) => ({
                                                            ...baseStyles,
                                                            color: "#444444",
                                                        }),
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <div className={`${styles.content_item}`}>
                                            <div className={`${styles.form_groups} ${styles.form_groups5} `}>
                                                <label htmlFor="">Chức vụ </label>
                                                <Select
                                                    defaultValue={selectedOption}
                                                    onChange={(option) => handleSelectionChange(option, options.chucvuhientai)}
                                                    options={options.chucvuhientai}
                                                    placeholder="Chọn chức vụ"
                                                    styles={{
                                                        control: (baseStyles, state) => ({
                                                            ...baseStyles,
                                                            borderRadius: 4,
                                                            fontSize: state.isFocused ? 14 : 14,
                                                            minHeight: state.isFocused ? 20 : 20,
                                                            width: '107%',
                                                            fontWeight: state.isFocused ? 600 : 600
                                                        }),
                                                        valueContainer: (baseStyles) => ({
                                                            ...baseStyles,
                                                            height: 33.6,

                                                        }),
                                                        indicatorsContainer: (baseStyles) => ({
                                                            ...baseStyles,
                                                            height: 33.6,
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
                                    <div className={`${styles.form_groups}`}>
                                        <label htmlFor="">Ngày vào công ty </label>
                                        <input type="date" id="names" placeholder="" className={`${styles.form_control}`} />
                                    </div>
                                    <div className={`${styles.form_groups}`}>
                                        <label htmlFor="">Kinh nghiệm làm việc </label>
                                        <Select
                                            defaultValue={selectedOption}
                                            onChange={(option) => handleSelectionChange(option, options.chucvuhientai)}
                                            options={options.chucvuhientai}
                                            placeholder=""
                                            styles={{
                                                control: (baseStyles, state) => ({
                                                    ...baseStyles,
                                                    borderRadius: 4,
                                                    fontSize: state.isFocused ? 14 : 14,
                                                    minHeight: state.isFocused ? 20 : 20,
                                                    width: '99%',
                                                    fontWeight: state.isFocused ? 600 : 600
                                                }),
                                                valueContainer: (baseStyles) => ({
                                                    ...baseStyles,
                                                    height: 33.6,

                                                }),
                                                indicatorsContainer: (baseStyles) => ({
                                                    ...baseStyles,
                                                    height: 33.6,
                                                }),
                                                placeholder: (baseStyles) => ({
                                                    ...baseStyles,
                                                    color: "#444444",
                                                }),
                                            }}
                                        />
                                    </div>
                                    <div className={`${styles.form_groups}`}>
                                        <label htmlFor="">Trình độ học vấn </label>
                                        <Select
                                            defaultValue={selectedOption}
                                            onChange={(option) => handleSelectionChange(option, options.chucvuhientai)}
                                            options={options.chucvuhientai}
                                            placeholder=""
                                            styles={{
                                                control: (baseStyles, state) => ({
                                                    ...baseStyles,
                                                    borderRadius: 4,
                                                    fontSize: state.isFocused ? 14 : 14,
                                                    minHeight: state.isFocused ? 20 : 20,
                                                    width: '99%',
                                                    fontWeight: state.isFocused ? 600 : 600
                                                }),
                                                valueContainer: (baseStyles) => ({
                                                    ...baseStyles,
                                                    height: 33.6,

                                                }),
                                                indicatorsContainer: (baseStyles) => ({
                                                    ...baseStyles,
                                                    height: 33.6,
                                                }),
                                                placeholder: (baseStyles) => ({
                                                    ...baseStyles,
                                                    color: "#444444",
                                                }),
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className={`${styles.modal_footer} ${styles.footer_process}`}>
                                    <button className={`${styles.btn_cancel}`} onClick={onCancel}>Đóng</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}