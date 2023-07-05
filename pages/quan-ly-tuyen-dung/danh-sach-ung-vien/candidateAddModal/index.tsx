import React, { useState } from "react";
import Select from 'react-select';
import styles from './candidateAddModal.module.css'


type SelectOptionType = { label: string, value: string }

export default function CandidateAddModal({ onCancel }: any) {
    function handleUploadClick(event: React.MouseEvent<HTMLAnchorElement>) {
        event.preventDefault();
        const uploadInput = document.getElementById('upload_cv') as HTMLInputElement;
        if (uploadInput) {
            uploadInput.click();
        }
    }

    const [selectedOption, setSelectedOption] = useState<SelectOptionType | null>(null);

    const handleSelectionChange = (option: SelectOptionType | null, optionsArray: SelectOptionType[]) => {
        if (option) {
            setSelectedOption(option)
        }
    };

    const options = {
        chongioitinh: [
            { value: 'Nam', label: 'Nam' },
            { value: 'Nữ', label: 'Nữ' },
            { value: 'Giới tính khác', label: 'Giới tính khác' },
        ],
        trinhdohocvan: [
            { value: 'Đại học trở lên', label: 'Đại học trở lên' },
            { value: 'Cao đẳng trở lên', label: 'Cao đẳng trở lên' },
            { value: 'THPT trở lên', label: 'THPT trở lên' },
            { value: 'Trung học trở lên', label: 'Trung học trở lên' },
            { value: 'Chứng chỉ', label: 'Chứng chỉ' },
            { value: 'Trung cấp trở lên', label: 'Trung cấp trở lên' },
            { value: 'Cử nhân trở lên', label: 'Cử nhân trở lên' },
            { value: 'Thạc sỹ', label: 'Thạc sỹ' },
            { value: 'Thạc sỹ Nghệ thuật', label: 'Thạc sỹ Nghệ thuật' },
            { value: 'Thạc sỹ Thương mại', label: 'Thạc sỹ Thương mại' },
            { value: 'Thạc sỹ Khoa học', label: 'Thạc sỹ Khoa học' },
            { value: 'Thạc sỹ Kiến trúc', label: 'Thạc sỹ Kiến trúc' },
            { value: 'Thạc sỹ QTKD', label: 'Thạc sỹ QTKD' },
            { value: 'Thạc sỹ Kỹ thuật ứng dụng', label: 'Thạc sỹ Kỹ thuật ứng dụng' },
            { value: 'Thạc sỹ Luật', label: 'Thạc sỹ Luật' },
            { value: 'Thạc sỹ Y học', label: 'Thạc sỹ Y học' },
            { value: 'Thạc sỹ Dược phẩm', label: 'Thạc sỹ Dược phẩm' },
            { value: 'Tiến sỹ', label: 'Tiến sỹ' },
            { value: 'Khác', label: 'Khác' },

        ],
        kinhnghiemlamviec: [
            { value: 'Chưa có kinh nghiệm', label: 'Chưa có kinh nghiệm' },
            { value: '0 - 1 năm kinh nghiệm', label: '0 - 1 năm kinh nghiệm' },
            { value: '1 - 2 năm kinh nghiệm', label: '1 - 2 năm kinh nghiệm' },
            { value: '2 - 5 năm kinh nghiệm', label: '2 - 5 năm kinh nghiệm' },
            { value: '5 - 10 năm kinh nghiệm', label: '5 - 10 năm kinh nghiệm' },
            { value: 'Hơn 10 năm kinh nghiệm', label: 'Hơn 10 năm kinh nghiệm' },
        ],

        tinhtranghonnhan: [
            { value: 'Độc thân ', label: 'Độc thân' },
            { value: 'Đã kết hôn', label: 'Đã kết hôn' },
            { value: 'Khác', label: 'Khác' },
        ],

        tennhanvientuyendung: [
            { value: 'Lê Hồng Anh (KỸ THUẬT)', label: 'Lê Hồng Anh (KỸ THUẬT)' },
            { value: 'Phan Mạnh Hùng (PHÒNG SÁNG TẠO)', label: 'Phan Mạnh Hùng (PHÒNG SÁNG TẠO)' },
        ],

        tennhanviengioithieu: [
            { value: 'Lê Hồng Anh (KỸ THUẬT)', label: 'Lê Hồng Anh (KỸ THUẬT)' },
            { value: 'Phan Mạnh Hùng (PHÒNG SÁNG TẠO)', label: 'Phan Mạnh Hùng (PHÒNG SÁNG TẠO)' },
        ],
        vitrituyendung: [
            { value: 'IT', label: 'IT' },
            { value: 'Hành chính- tổng hợp', label: 'Hành chính- tổng hợp' },
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
                                        <label htmlFor="">Tên ứng viên <span style={{ color: 'red' }}> * </span></label>
                                        <div className={`${styles.input_right}`}>
                                            <input type="text" id="names" placeholder="Nhập tên ứng viên" className={`${styles.input_process}`} />
                                        </div>
                                    </div>
                                    <div className={`${styles.form_groups}`}>
                                        <label htmlFor="">E-mail <span style={{ color: 'red' }}> * </span></label>
                                        <div className={`${styles.input_right}`}>
                                            <input type="text" id="names" placeholder="Nhập Email ứng viên" className={`${styles.input_process}`} />
                                        </div>
                                    </div>
                                    <div className={`${styles.form_groups}`}>
                                        <label htmlFor="">Số điện thoại <span style={{ color: 'red' }}> * </span></label>
                                        <div className={`${styles.input_right}`}>
                                            <input type="text" id="names" placeholder="Nhập SĐt ứng viên" className={`${styles.input_process}`} />
                                        </div>
                                    </div>
                                    <div className={`${styles.form_groups}`}>
                                        <label htmlFor="">Giới tính <span style={{ color: 'red' }}> * </span></label>
                                        <div className={`${styles.input_right}`}>
                                            <div className={`${styles.div_no_pad} `}>
                                                <Select
                                                    defaultValue={selectedOption}
                                                    onChange={(option) => handleSelectionChange(option, options.chongioitinh)}
                                                    options={options.chongioitinh}
                                                    placeholder="-- Vui lòng chọn --"
                                                    styles={{
                                                        container: (baseStyles) => ({
                                                            ...baseStyles,
                                                            paddingRight: 15
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
                                        <label htmlFor="">Ngày sinh <span style={{ color: 'red' }}> * </span></label>
                                        <div className={`${styles.input_right}`}>
                                            <input type="date" id="names" placeholder="dd/mm/yyyy" className={`${styles.input_process}`} />
                                        </div>
                                    </div>
                                    <div className={`${styles.form_groups}`}>
                                        <label htmlFor="">Tên ứng viên <span style={{ color: 'red' }}> * </span></label>
                                        <div className={`${styles.input_right}`}>
                                            <input type="text" id="names" placeholder="Nhập tên ứng viên" className={`${styles.input_process}`} />
                                        </div>
                                    </div>
                                    <div className={`${styles.form_groups}`}>
                                        <label htmlFor="">Quê quán </label>
                                        <div className={`${styles.input_right}`}>
                                            <input type="text" id="names" placeholder="Nhập quê quán" className={`${styles.input_process}`} />
                                        </div>
                                    </div>
                                    <div className={`${styles.form_groups}`}>
                                        <label htmlFor="">Trình độ học vấn <span style={{ color: 'red' }}> * </span></label>
                                        <div className={`${styles.input_right}`}>
                                            <div className={`${styles.div_no_pad} `}>
                                                <Select
                                                    defaultValue={selectedOption}
                                                    onChange={(option) => handleSelectionChange(option, options.trinhdohocvan)}
                                                    options={options.trinhdohocvan}
                                                    placeholder="-- Vui lòng chọn --"
                                                    styles={{
                                                        container: (baseStyles) => ({
                                                            ...baseStyles,
                                                            paddingRight: 15
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
                                        <label htmlFor="">Trường học</label>
                                        <div className={`${styles.input_right}`}>
                                            <input type="text" id="names" placeholder="Nhập trường học" className={`${styles.input_process}`} />
                                        </div>
                                    </div>
                                    <div className={`${styles.form_groups}`}>
                                        <label htmlFor="">Kinh nghiệm làm việc <span style={{ color: 'red' }}> * </span></label>
                                        <div className={`${styles.input_right}`}>
                                            <div className={`${styles.div_no_pad} `}>
                                                <Select
                                                    defaultValue={selectedOption}
                                                    onChange={(option) => handleSelectionChange(option, options.kinhnghiemlamviec)}
                                                    options={options.kinhnghiemlamviec}
                                                    placeholder="-- Vui lòng chọn --"
                                                    styles={{
                                                        container: (baseStyles) => ({
                                                            ...baseStyles,
                                                            paddingRight: 15
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
                                        <label htmlFor="">Tình trạng hôn nhân <span style={{ color: 'red' }}> * </span></label>
                                        <div className={`${styles.input_right}`}>
                                            <div className={`${styles.div_no_pad} `}>
                                                <Select
                                                    defaultValue={selectedOption}
                                                    onChange={(option) => handleSelectionChange(option, options.tinhtranghonnhan)}
                                                    options={options.tinhtranghonnhan}
                                                    placeholder="-- Vui lòng chọn --"
                                                    styles={{
                                                        container: (baseStyles) => ({
                                                            ...baseStyles,
                                                            paddingRight: 15
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
                                        <label htmlFor="">Địa chỉ <span style={{ color: 'red' }}> * </span></label>
                                        <div className={`${styles.input_right} `}>
                                            <input type="text" id="names" placeholder="Nhập địa chỉ ứng viên" className={`${styles.input_process}`} />
                                        </div>
                                    </div>
                                    <div className={`${styles.form_groups}`}>
                                        <label htmlFor="">Nguồn ứng viên <span style={{ color: 'red' }}> * </span></label>
                                        <div className={`${styles.input_right} `}>
                                            <input type="text" id="names" placeholder="Nhập nguồn ứng viên" className={`${styles.input_process}`} />
                                        </div>
                                    </div>
                                    <div className={`${styles.form_groups}`}>
                                        <label htmlFor="">Tên nhận viên tuyển dụng <span style={{ color: 'red' }}> * </span></label>
                                        <div className={`${styles.input_right}`}>
                                            <div className={`${styles.div_no_pad} `}>
                                                <Select
                                                    defaultValue={selectedOption}
                                                    onChange={(option) => handleSelectionChange(option, options.tennhanvientuyendung)}
                                                    options={options.tennhanvientuyendung}
                                                    placeholder="Chọn nhân viên"
                                                    styles={{
                                                        container: (baseStyles) => ({
                                                            ...baseStyles,
                                                            paddingRight: 15
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
                                        <label htmlFor="">Tên nhận viêN giới thiệu <span style={{ color: 'red' }}> * </span></label>
                                        <div className={`${styles.input_right}`}>
                                            <div className={`${styles.div_no_pad} `}>
                                                <Select
                                                    defaultValue={selectedOption}
                                                    onChange={(option) => handleSelectionChange(option, options.tennhanviengioithieu)}
                                                    options={options.tennhanviengioithieu}
                                                    placeholder="Chọn nhân viên"
                                                    styles={{
                                                        container: (baseStyles) => ({
                                                            ...baseStyles,
                                                            paddingRight: 15
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
                                        <label htmlFor="">Vị trí tuyển dụng <span style={{ color: 'red' }}> * </span></label>
                                        <div className={`${styles.input_right}`}>
                                            <div className={`${styles.div_no_pad} `}>
                                                <Select
                                                    defaultValue={selectedOption}
                                                    onChange={(option) => handleSelectionChange(option, options.vitrituyendung)}
                                                    options={options.vitrituyendung}
                                                    placeholder="-- Vui lòng chọn --"
                                                    styles={{
                                                        container: (baseStyles) => ({
                                                            ...baseStyles,
                                                            paddingRight: 15
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
                                        <label htmlFor="">Thời gian gửi hồ sơ <span style={{ color: 'red' }}> * </span></label>
                                        <div className={`${styles.input_right}`}>
                                            <input type="date" id="names" placeholder="dd/mm/yyyy --:--:--" className={`${styles.input_process}`} />
                                        </div>
                                    </div>
                                    <div className={`${styles.form_groups}`}>
                                        <label htmlFor="">Đánh giá hồ sơ <span style={{ color: 'red' }}> * </span></label>
                                        <div className={`${styles.input_right}`}>
                                            <ul className={`${styles.rating} ${styles.rating_add}`}>
                                                <li id="rate_1" className={`${styles.star}`}></li>
                                                <li id="rate_2" className={`${styles.star}`}></li>
                                                <li id="rate_3" className={`${styles.star}`}></li>
                                                <li id="rate_4" className={`${styles.star}`}></li>
                                                <li id="rate_5" className={`${styles.star}`}></li>
                                            </ul>
                                            <div className={`${styles.another_skill}`}>
                                                <div className={`${styles.skill_input}`}>
                                                    <input type="text" className={`${styles.form_control} ${styles.another_skill_name}`} placeholder="Nhập kỹ năng khác"></input>
                                                </div>
                                                <div className={`${styles.another_rating}`}>
                                                    <ul className={`${styles.rating} ${styles.rating_add_another}`}>
                                                        <li className={`${styles.star}`}></li>
                                                        <li className={`${styles.star}`}></li>
                                                        <li className={`${styles.star}`}></li>
                                                        <li className={`${styles.star}`}></li>
                                                        <li className={`${styles.star}`}></li>
                                                    </ul>
                                                </div>
                                                <div className={`${styles.icon_delete}`}>
                                                    <a href="" className={`${styles.remove_another_skill}`}>
                                                        <img src="	https://phanmemnhansu.timviec365.vn/assets/images/t_images/icon-del-kn.svg" alt="" />
                                                    </a>
                                                </div>
                                            </div>
                                            <div className={`${styles.another_skill}`}>
                                                <div className={`${styles.skill_input}`}>
                                                    <input type="text" className={`${styles.form_control} ${styles.another_skill_name}`} placeholder="Nhập kỹ năng khác"></input>
                                                </div>
                                                <div className={`${styles.another_rating}`}>
                                                    <ul className={`${styles.rating}  ${styles.rating_add_another}`}>
                                                        <li className={`${styles.star}`}></li>
                                                        <li className={`${styles.star}`}></li>
                                                        <li className={`${styles.star}`}></li>
                                                        <li className={`${styles.star}`}></li>
                                                        <li className={`${styles.star}`}></li>
                                                    </ul>
                                                </div>
                                                <div className={`${styles.icon_delete}`}>
                                                    <a href="" className={`${styles.remove_another_skill}`}>
                                                        <img src="	https://phanmemnhansu.timviec365.vn/assets/images/t_images/icon-del-kn.svg" alt="" />
                                                    </a>
                                                </div>
                                            </div>
                                            <div className={`${styles.another_skill}`}>
                                                <div className={`${styles.skill_input}`}>
                                                    <input type="text" className={`${styles.form_control} ${styles.another_skill_name}`} placeholder="Nhập kỹ năng khác"></input>
                                                </div>
                                                <div className={`${styles.another_rating}`}>
                                                    <ul className={`${styles.rating}  ${styles.rating_add_another}`}>
                                                        <li className={`${styles.star}`}></li>
                                                        <li className={`${styles.star}`}></li>
                                                        <li className={`${styles.star}`}></li>
                                                        <li className={`${styles.star}`}></li>
                                                        <li className={`${styles.star}`}></li>
                                                    </ul>
                                                </div>
                                                <div className={`${styles.icon_delete}`}>
                                                    <a href="" className={`${styles.remove_another_skill}`}>
                                                        <img src="	https://phanmemnhansu.timviec365.vn/assets/images/t_images/icon-del-kn.svg" alt="" />
                                                    </a>
                                                </div>

                                            </div>
                                            <a href="" className={`${styles.add_another_skill}`}>Thêm Kỹ năng</a>
                                        </div>
                                    </div>
                                    <div className={`${styles.form_groups}`}>
                                        <label htmlFor="">Tải lên tệp CV </label>
                                        <div className={`${styles.input_right} ${styles.input_upload_t}`}>
                                            <input type="file" className={`${styles.upload_cv}`} id="upload_cv" accept="application/pdf, image/*" />
                                            <a href="" className={`${styles.t_ion_file}`} onClick={handleUploadClick} >
                                                <img src="	https://phanmemnhansu.timviec365.vn/assets/images/t_images/t-icon-file.svg" alt="" />
                                            </a>
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