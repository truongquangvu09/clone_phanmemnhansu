import React from "react";
import styles from './candidateAddModal.module.css'

export default function CandidateAddModal() {
    function handleUploadClick(event: React.MouseEvent<HTMLAnchorElement>) {
        event.preventDefault();
        const uploadInput = document.getElementById('upload_cv') as HTMLInputElement;
        if (uploadInput) {
            uploadInput.click();
        }
    }
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
                                            <select name="" id="" className={`${styles.input_process}`}>
                                                <option value="">-- Vui lòng chọn --</option>
                                                <option value="">Nam</option>
                                                <option value="">Nữ</option>
                                                <option value="">Giới tính khác</option>

                                            </select>
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
                                            <select name="" id="" className={`${styles.input_process}`}>
                                                <option value="">-- Vui lòng chọn --</option>
                                                <option value="">Đại học trở lên </option>
                                                <option value="">Cao đẳng trở lên</option>
                                                <option value="">THPT trở lên</option>
                                                <option value="">Trung học trở lên</option>
                                                <option value="">Chứng chỉ</option>
                                                <option value="">Trung cấp trở lên</option>
                                                <option value="">Cử nhân trở lên</option>
                                                <option value="">Thạc sỹ trở lên</option>
                                                <option value="">Nhạc sỹ nghệ thuật</option>
                                                <option value="">Thạc sỹ thương mại</option>
                                                <option value="">Thạc sỹ khoa học</option>
                                                <option value="">Thạc sỹ kiến trúc</option>
                                                <option value="">Thạc sỹ QTKD</option>
                                                <option value="">Thạc sỹ kĩ thuật ứng dụng</option>
                                                <option value="">Thạc sỹ Luật</option>
                                                <option value="">Thạc sỹ y học</option>
                                                <option value="">Thạc sỹ Dược phẩm</option>
                                                <option value="">Tiến sỹ</option>
                                                <option value="">Khác</option>
                                            </select>
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
                                            <select name="" id="" className={`${styles.input_process}`}>
                                                <option value="">-- Vui lòng chọn --</option>
                                                <option value="">Chưa có kinh nghiệm </option>
                                                <option value="">0 - 1 năm kình nghiệm</option>
                                                <option value="">1 - 2 năm kinh nghiệm</option>
                                                <option value="">2 - 5 năm kinh nghiệm</option>
                                                <option value="">5 - 10 năm kinh nghiệm</option>
                                                <option value="">Hơn 10 năm kinh nghiệm</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className={`${styles.form_groups}`}>
                                        <label htmlFor="">Tình trạng hôn nhân <span style={{ color: 'red' }}> * </span></label>
                                        <div className={`${styles.input_right}`}>
                                            <select name="" id="" className={`${styles.input_process}`}>
                                                <option value="">-- Vui lòng chọn --</option>
                                                <option value="">Độc thân </option>
                                                <option value="">Đã kết hôn</option>
                                                <option value="">Khác</option>

                                            </select>
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
                                            <select name="" id="" className={`${styles.input_process}`}>
                                                <option value="">Chọn nhân viên</option>
                                                <option value="">Hồ Hùng Anh (BIÊN TẬP) </option>
                                                <option value="">Lê Hồng Anh (Kỹ thuật) </option>
                                                <option value="">Phan Mạnh Hùng (PHÒNG SÁNG TẠO) </option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className={`${styles.form_groups}`}>
                                        <label htmlFor="">Tên nhận viêN giới thiệu <span style={{ color: 'red' }}> * </span></label>
                                        <div className={`${styles.input_right}`}>
                                            <select name="" id="" className={`${styles.input_process}`}>
                                                <option value="">Chọn nhân viên</option>
                                                <option value="">Hồ Hùng Anh (BIÊN TẬP) </option>
                                                <option value="">Lê Hồng Anh (Kỹ thuật) </option>
                                                <option value="">Phan Mạnh Hùng (PHÒNG SÁNG TẠO) </option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className={`${styles.form_groups}`}>
                                        <label htmlFor="">Vị trí tuyển dụng <span style={{ color: 'red' }}> * </span></label>
                                        <div className={`${styles.input_right}`}>
                                            <select name="" id="" className={`${styles.input_process}`}>
                                                <option value="">-- Vui lòng chọn --</option>
                                                <option value="">abc </option>
                                                <option value="">def</option>
                                            </select>
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
                                                <li className={`${styles.star}`}></li>
                                                <li className={`${styles.star}`}></li>
                                                <li className={`${styles.star}`}></li>
                                                <li className={`${styles.star}`}></li>
                                                <li className={`${styles.star}`}></li>
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
                                    <button className={`${styles.btn_cancel}`}>Hủy</button>
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