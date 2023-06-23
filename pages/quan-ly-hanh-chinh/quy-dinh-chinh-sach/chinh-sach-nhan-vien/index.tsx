import React from 'react';
import styles from './chinh-sach-nhan-vien.module.css'
import BodyFrameFooter from '@/components/bodyFrame/bodyFrame_footer/bodyFrame_footer';

export default function EmployeePolicy() {
    return (
        <>
            <div className={`${styles.wrapper}`}>
                <div className={`${styles.tab_pane} ${styles.fade} `}>
                    <div className={`${styles.recruitment2}`}>
                        <div className={`${styles.recruitment2_3}`}>
                            <button className={`${styles.adds}`}>
                                <picture>
                                    <img src="	https://phanmemnhansu.timviec365.vn/assets/images/l_images/add.png" alt="" />
                                    Thêm mới
                                </picture>
                            </button>
                        </div>
                        <div className={`${styles.recruitment2_2}`}>
                            <form action="" className={`${styles.t_form_search}`}>
                                <div className={`${styles.t_div_search}`}>
                                    <input type="text" className={`${styles.keyword_qd}`} placeholder='Tìm kiếm' />
                                    <a href="">
                                        <picture>
                                            <img src="	https://phanmemnhansu.timviec365.vn/assets/images/t_images/t-icon-search.png" alt="" />
                                        </picture>
                                    </a>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className={`${styles.member_list} ${styles.regulation_item}`}>
                        <p className={`${styles.text_content}`}>Dữ liệu trống</p>
                    </div>
                    <BodyFrameFooter src='https://www.youtube.com/embed/sJfqas5wxEk'></BodyFrameFooter>
                </div>
            </div>
        </>
    )
}