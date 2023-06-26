import React, { useState } from "react";
import Select from 'react-select';
import styles from './candidateListDetail.module.css'
import CandidateAddModal from "../candidateAddModal";
import StageAddModal from "../stageAddModal";

type SelectOptionType = { label: string, value: string }

export default function CandidateListDetail() {
    const [openModal, setOpenModal] = useState(0)
    const [selectedOption, setSelectedOption] = useState<SelectOptionType | null>(null);

    const options = {
        vitrituyendung: [
            { value: 'IT', label: 'IT' },
            { value: 'Hành chính- tổng hợp', label: 'Hành chính- tổng hợp' },
        ],
        chonnhanvien: [
            { value: 'Trần Văn Hưng', label: 'Trần Văn Hưng (KINH DOANH)' },
            { value: 'Trần Văn Đức', label: 'Trần Văn Đức (BIÊN TẬP)' },
        ],
        chongioitinh: [
            { value: 'Nam', label: 'Nam' },
            { value: 'Nữ', label: 'Nữ' },
            { value: 'Giới tính khác', label: 'Giới tính khác' },
        ],
        chontrangthai: [
            { value: 'Trượt vòng loại phỏng vấn', label: 'Trượt vòng loại phỏng vấn' },
            { value: 'Trượt học việc', label: 'Trượt học việc' },
            { value: 'Trượt vòng loại hồ sơ', label: 'Trượt vòng loại hồ sơ' },
        ]
    };

    const handleSelectionChange = (option: SelectOptionType | null, optionsArray: SelectOptionType[]) => {
        if (option) {
            setSelectedOption(option)
        }
    };

    return (
        <>
            <div className={`${styles.tab_content}`}>
                <div className={`${styles.tab_pane}`}>
                    <div className={`${styles.body}`}>
                        <div className={`${styles.recruitment}`}>
                            <button className={`${styles.add}`} onClick={() => setOpenModal(1)}>
                                <img src="	https://phanmemnhansu.timviec365.vn/assets/images/l_images/add.png" alt="" />Thêm ứng viên
                            </button>
                            <button className={`${styles.add}`} onClick={() => setOpenModal(2)}>
                                <img src="	https://phanmemnhansu.timviec365.vn/assets/images/l_images/add.png" alt="" />Thêm giai đoạn
                            </button>
                        </div>
                        {openModal === 1 ? <CandidateAddModal></CandidateAddModal> : ''}
                        {openModal === 2 ? <StageAddModal></StageAddModal> : ''}
                        <div className={`${styles.bg_search}`}>
                            <div className={`${styles.search_top}`}>
                                <div className={`${styles.div_no_pad}`}>
                                    <input type="date" className={`${styles.search_date_from} ${styles.form_control}`} placeholder='Từ dd/mm/yyyy' />
                                </div>
                                <div className={`${styles.div_no_pad}`}>
                                    <input type="date" className={`${styles.search_date_to} ${styles.form_control}`} placeholder='Từ dd/mm/yyyy' />
                                </div>
                                <div className={`${styles.div_no_pad}`}>
                                    <input type="text" className={`${styles.search_can_name} ${styles.form_control}`} placeholder='Nhập tên ứng viên' />
                                </div>
                                <div className={`${styles.div_no_pad} `}>
                                    <Select
                                        defaultValue={selectedOption}
                                        onChange={(option) => handleSelectionChange(option, options.vitrituyendung)}
                                        options={options.vitrituyendung}
                                        placeholder="Vị trí tuyển dụng"
                                        styles={{
                                            control: (baseStyles, state) => ({
                                                ...baseStyles,
                                                fontSize: state.isFocused ? 14 : 14,
                                                minHeight: state.isFocused ? 20 : 20,
                                                width: state.isFocused ? 257.16 : 257.16,
                                                fontWeight: state.isFocused ? 600 : 600
                                            }),
                                        }}
                                    />
                                </div>
                            </div>
                            <div className={`${styles.search_new_t}`}>
                                <div className={`${styles.div_no_pad} `}>
                                    <Select
                                        defaultValue={selectedOption}
                                        onChange={(option) => handleSelectionChange(option, options.chonnhanvien)}
                                        options={options.chonnhanvien}
                                        placeholder="Chọn nhân viên"
                                        styles={{
                                            control: (baseStyles, state) => ({
                                                ...baseStyles,
                                                fontSize: state.isFocused ? 15 : 15,
                                                minHeight: state.isFocused ? 20 : 20,
                                                width: state.isFocused ? 257.16 : 257.16,
                                                fontWeight: state.isFocused ? 600 : 600
                                            }),
                                        }}
                                    />
                                </div>
                                <div className={`${styles.div_no_pad} `}>
                                    <Select
                                        defaultValue={selectedOption}
                                        onChange={(option) => handleSelectionChange(option, options.chongioitinh)}
                                        options={options.chongioitinh}
                                        placeholder="Chọn giới tính"
                                        styles={{
                                            control: (baseStyles, state) => ({
                                                ...baseStyles,
                                                fontSize: state.isFocused ? 15 : 15,
                                                minHeight: state.isFocused ? 20 : 20,
                                                width: state.isFocused ? 257.16 : 257.16,
                                                fontWeight: state.isFocused ? 600 : 600
                                            }),
                                        }}
                                    />
                                </div>
                                <div className={`${styles.div_no_pad} `}>
                                    <Select
                                        defaultValue={selectedOption}
                                        onChange={(option) => handleSelectionChange(option, options.chontrangthai)}
                                        options={options.chontrangthai}
                                        placeholder="Chọn trạng thái"
                                        styles={{
                                            control: (baseStyles, state) => ({
                                                ...baseStyles,
                                                fontSize: state.isFocused ? 15 : 15,
                                                minHeight: state.isFocused ? 20 : 20,
                                                width: state.isFocused ? 257.16 : 257.16,
                                                fontWeight: state.isFocused ? 600 : 600
                                            }),
                                        }}
                                    />
                                </div>
                                <div className={`${styles.div_no_pad} `}>
                                    <a href="" className={`${styles.icon_search_top}`}>
                                        <img src="	https://phanmemnhansu.timviec365.vn/assets/images/t_images/t-icon-search-n.svg" alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={`${styles.export_excel}`} style={{ paddingRight: 20, right: 0, position: 'absolute' }}>
                            <a href="" className={`${styles.t_excel}`} >
                                <img src="	https://phanmemnhansu.timviec365.vn/assets/images/t_images/t-icon-excel.svg" alt="" />
                                Xuất file Excel
                            </a>
                        </div>
                        <div className={`${styles.member_list}`}>
                            <div className={`${styles.list_hs_t}`}>
                                <div className={`${styles.hs_t}`}>
                                    <div className={`${styles.hs_header}`}>
                                        <p>Nhận hồ sơ ứng viên</p>
                                        <p>(<span style={{ color: '#337ab7' }}> 0</span> ứng viên )</p>
                                    </div>
                                    <div className={`${styles.hs_body}`}></div>
                                </div>
                                <div className={`${styles.hs_t}`}>
                                    <div className={`${styles.hs_header}`}>
                                        <p>Chờ xét duyệt (
                                            <a href=""> Sửa </a>
                                            /
                                            <a href=""> Xóa </a>
                                            )</p>
                                        <p>(<span style={{ color: '#337ab7' }}> 0 </span> ứng viên )</p>
                                    </div>
                                    <div className={`${styles.hs_body}`}></div>
                                </div>
                                <div className={`${styles.hs_t}`}>
                                    <div className={`${styles.hs_header} ${styles.hs_status_job_1}`}>
                                        <p>Nhận việc</p>
                                        <p>(<span style={{ color: '#33ab7' }}> 0 </span> ứng viên )</p>
                                    </div>
                                    <div className={`${styles.hs_body}`}></div>
                                </div>
                                <div className={`${styles.hs_t}`}>
                                    <div className={`${styles.hs_header} ${styles.hs_status_job_2}`}>
                                        <p>Trượt</p>
                                        <p>(<span style={{ color: '#33ab7' }}> 0 </span> ứng viên )</p>
                                    </div>
                                    <div className={`${styles.hs_body}`}></div>
                                </div>
                                <div className={`${styles.hs_t}`}>
                                    <div className={`${styles.hs_header} ${styles.hs_status_job_3}`}>
                                        <p>Hủy</p>
                                        <p>(<span style={{ color: '#33ab7' }}> 0 </span> ứng viên )</p>
                                    </div>
                                    <div className={`${styles.hs_body}`}></div>
                                </div>
                                <div className={`${styles.hs_t}`}>
                                    <div className={`${styles.hs_header} ${styles.hs_status_job_4}`}>
                                        <p>Ký hợp đồng</p>
                                        <p>(<span style={{ color: '#33ab7' }}> 0 </span> ứng viên )</p>
                                    </div>
                                    <div className={`${styles.hs_body}`}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}