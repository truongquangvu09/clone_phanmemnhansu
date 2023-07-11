/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import styles from "./detailCandidate.module.css";
import { useRouter } from "next/router";
import DetailCandidateModal from "@/components/quan-ly-tuyen-dung/danh-sach-ung-vien/candidateRepo/DetailModal";
export interface listRecruitmentProcess { }

export default function DetailCandidate({ onCancel }: any) {
    const router = useRouter()
    const [openModalDetail, setOpenModalDetail] = useState(false);
    const [animateModal, setAnimateModal] = useState(false);


    const [isModalOpen, setIsModalOpen] = useState(0);

    const handleBack = () => {
        router.back()
    }

    const handleOpenModal = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        setOpenModalDetail(true);
        setAnimateModal(true);
    };

    const handleCloseModal = () => {
        setAnimateModal(false);
        setOpenModalDetail(false)
    };
    return (
        <>
            <div className={`${styles.l_body}`}>
                <div className={`${styles.add_quytrinh}`}>
                    <div className={`${styles.back_quytrinh}`}>
                        <span onClick={handleBack}>
                            <picture>
                                <img
                                    src={`${'/left_arrow.png'}`}
                                    alt="Back"
                                ></img>
                            </picture>
                            Danh sách ứng viên
                        </span>
                    </div>
                </div>
                <div className={`${styles.l_body_2}`}>
                    <div className={`${styles.l_body_2_content} ${styles.l_body_2_left}`}>
                        <div className={`${styles.l_body_2_left_header}`}>
                            <div className={`${styles.pull_left}`}>
                                <p>Chi tiết hồ sơ ứng viên Destiny Tyson</p>
                            </div>
                            <div className={`${styles.text_right}`}>
                                <a onClick={handleOpenModal} href="" className={`${styles.edit_hs_uv}`}>
                                    <img src="/icon-edit-white.svg" />
                                </a>
                            </div>
                            {openModalDetail && <DetailCandidateModal onCancel={handleCloseModal} />}
                        </div>
                        <div className={`${styles.l_body_2_left_body}`}>
                            <p className={`${styles.l_body_2_left_body_title}`}>Thông tin ứng viên</p>
                            <p>Mã ứng viên: <span className={`${styles.txt_op}`}>UV11699</span></p>
                            <p>Tên ứng viên: <span className={`${styles.txt_op}`}>Denis</span></p>
                            <p>Email: <span className={`${styles.txt_op}`}>gumynod@mailinator.com</span></p>
                            <p>Số điện thoại: <span className={`${styles.txt_op}`}>0267493564</span></p>
                            <p>Giới tính: <span className={`${styles.txt_op}`}>Nam</span></p>
                            <p>Ngày sinh: <span className={`${styles.txt_op}`}>22-06-2008</span></p>
                            <p>Quê quán: <span className={`${styles.txt_op}`}>Distinctio Proident</span></p>
                            <p>Trình độ học vấn: <span className={`${styles.txt_op}`}>Trung cấp trở lên</span></p>
                            <p>Trường học: <span className={`${styles.txt_op}`}>Mollitia rem corrupt</span></p>
                            <p>Kinh nghiệm làm việc: <span className={`${styles.txt_op}`}>0 - 1 năm kinh nghiệm</span></p>
                            <p>Tình trạng hôn nhân: <span className={`${styles.txt_op}`}>Đã kết hôn</span></p>
                            <p>Địa chỉ: <span className={`${styles.txt_op}`}>Aut expedita ut nost</span></p>
                        </div>
                        <div className={`${styles.l_body_2_left_body}`}>
                            <p className={`${styles.l_body_2_left_body_title}`}>Thông tin tuyển dụng</p>
                            <p>Nguồn ứng viên: <span className={`${styles.txt_op}`}>Rem non repellendus</span></p>
                            <p>Vị trí ứng tuyển: <span className={`${styles.txt_op}`}>Voluptatem Sint et</span></p>
                            <p>Nhân viên tuyển dụng: <span className={`${styles.txt_op}`}>Phùng Ngọc Anh</span></p>
                        </div>
                        <div className={`${styles.l_body_2_left_body}`}>
                            <p className={`${styles.l_body_2_left_body_title}`}>Quá trình tuyển dụng</p>
                            <p>Thời gian nhận hồ sơ: <span className={`${styles.txt_op}`}>07-07-2023</span></p>
                            <p>Giai đoạn chuyển: <span className={`${styles.txt_op}`}>Nhận hồ sơ</span></p>
                            <div>
                                <p style={{ display: 'inline-block' }}>Đánh giá hồ sơ: </p>
                                <ul style={{ display: 'inline-block' }} className={`${styles.rating} ${styles.rating_add}`}>
                                    <li id="rate_1" className={`${styles.star}`}></li>
                                    <li id="rate_2" className={`${styles.star}`}></li>
                                    <li id="rate_3" className={`${styles.star}`}></li>
                                    <li id="rate_4" className={`${styles.star}`}></li>
                                    <li id="rate_5" className={`${styles.star}`}></li>
                                </ul>
                            </div>
                            <div className={`${styles.another_add_uv_1}`} style={{ marginLeft: 95, marginBottom: 15 }}>
                                <div className={`${styles.another_skill}`} style={{ marginTop: 10 }}>
                                    <p style={{ display: 'inline-block', paddingRight: 20 }}>Ut anim aut reprehen: </p>
                                    <ul style={{ display: 'inline-block' }} className={`${styles.rating} ${styles.rating_add}`}>
                                        <li id="rate_1" className={`${styles.star}`}></li>
                                        <li id="rate_2" className={`${styles.star}`}></li>
                                        <li id="rate_3" className={`${styles.star}`}></li>
                                        <li id="rate_4" className={`${styles.star}`}></li>
                                        <li id="rate_5" className={`${styles.star}`}></li>
                                    </ul>
                                </div>
                            </div>
                            <div className={`${styles.another_add_uv_1}`} style={{ marginLeft: 95, marginBottom: 15 }}>
                                <div className={`${styles.another_skill}`} style={{ marginTop: 10 }}>
                                    <p style={{ display: 'inline-block', paddingRight: 20 }}>Est earum deleniti e: </p>
                                    <ul style={{ display: 'inline-block' }} className={`${styles.rating} ${styles.rating_add}`}>
                                        <li id="rate_1" className={`${styles.star}`}></li>
                                        <li id="rate_2" className={`${styles.star}`}></li>
                                        <li id="rate_3" className={`${styles.star}`}></li>
                                        <li id="rate_4" className={`${styles.star}`}></li>
                                        <li id="rate_5" className={`${styles.star}`}></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.l_body_2_content} ${styles.l_body_2_right}`}>
                        <p style={{ textAlign: 'center', color: '#4C5BD4', width: 'auto' }}>Chưa cập nhật cv ứng viên</p>
                    </div>
                </div>
            </div>
        </>
    );
}
