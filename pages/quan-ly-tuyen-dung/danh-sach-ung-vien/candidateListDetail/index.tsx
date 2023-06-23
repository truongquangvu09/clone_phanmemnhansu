import React, { useState } from "react";
import styles from './candidateListDetail.module.css'
import CandidateAddModal from "../candidateAddModal";
import StageAddModal from "../stageAddModal";

export default function CandidateListDetail() {
    const [openModal, setOpenModal] = useState(0)
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
                                    <select className={`${styles.search_can_new} ${styles.form_control}`} name="" id="" >
                                        <option value="">Vị trị tuyển dụng</option>
                                        <option value="">it</option>
                                        <option value="">Voluptatem Sint et</option>
                                    </select>
                                </div>
                            </div>
                            <div className={`${styles.search_new_t}`}>
                                <div className={`${styles.div_no_pad} `}>
                                    <select className={`${styles.search_can_new} ${styles.form_control}`} name="" id="" >
                                        <option value="">Chọn nhân viên</option>
                                        <option value="">Trần Văn Hưng (KINH DOANH)</option>
                                        <option value="">Trần Văn Đức (BIÊN TẬP)</option>
                                    </select>
                                </div>
                                <div className={`${styles.div_no_pad} `}>
                                    <select className={`${styles.search_can_new} ${styles.form_control}`} name="" id="" >
                                        <option value="">Chọn giới tính</option>
                                        <option value="">Nam</option>
                                        <option value="">Nữ</option>
                                        <option value="">Giới tính khác</option>
                                    </select>
                                </div>
                                <div className={`${styles.div_no_pad} `}>
                                    <select className={`${styles.search_can_new} ${styles.form_control}`} name="" id="" >
                                        <option value="">Trạng thái</option>
                                        <option value="">Trượt vòng loại phỏng vấn</option>
                                        <option value="">Trượt học việc</option>
                                        <option value="">Trượt vòng loại hồ sơ</option>
                                        <option value="">Hủy phỏng vấn</option>
                                        <option value="">Hủy nhận việc</option>
                                        <option value="">Hủy học việc</option>
                                    </select>
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