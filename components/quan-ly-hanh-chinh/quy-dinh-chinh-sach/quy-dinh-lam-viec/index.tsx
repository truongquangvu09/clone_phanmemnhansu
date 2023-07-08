import React, { useState } from 'react';
import styles from './quy-dinh-lam-viec.module.css'
import BodyFrameFooter from '@/components/bodyFrame/bodyFrame_footer/bodyFrame_footer';
import AddRegulationsModal from './addRegulationsModal';
import AddRegulationsModal2 from './addRegulationsModal/addRegulationsModal2';

export default function RegulationsWork() {
    const [click, setClick] = useState(false)
    const [openModal, setOpenModal] = useState(0)
    const handleClick = () => {
        setClick(prevState => !prevState)
    }
    const handleCloseModal = () => {
        setOpenModal(0)
    }
    return (
        <>
            <div className={`${styles.wrapper}`}>
                <div className={`${styles.tab_pane} ${styles.fade} `}>
                    <div className={`${styles.recruitment2}`}>
                        <div className={`${styles.recruitment2_3}`}>
                            <button className={`${styles.adds}`} onClick={handleClick}>
                                <picture>
                                    <img style={{ verticalAlign: 'middle' }} src={`/add.png`} alt="" />
                                    Thêm mới
                                </picture>
                            </button>
                            {click === true && (<div className={`${styles.settings} ${styles.lefftset}`} >
                                <li onClick={() => setOpenModal(1)}>Thêm nhóm quy định</li>
                                <hr style={{ marginTop: 0, marginBottom: 0 }} />
                                <li onClick={() => setOpenModal(2)}>Thêm quy định</li>
                            </div>)}
                            {openModal === 1 && <AddRegulationsModal onCancel={handleCloseModal}></AddRegulationsModal>}
                            {openModal === 2 && <AddRegulationsModal2 onCancel={handleCloseModal}></AddRegulationsModal2>}
                        </div>
                        <div className={`${styles.recruitment2_2}`}>
                            <form action="" className={`${styles.t_form_search}`}>
                                <div className={`${styles.t_div_search}`}>
                                    <input style={{ verticalAlign: 'top' }} type="text" className={`${styles.keyword_qd}`} placeholder='Tìm kiếm' />
                                    <a href="">
                                        <picture>
                                            <img src={`/t-icon-search.png`} alt="" />
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