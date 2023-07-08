import React from 'react';
import styles from './bodySection2.module.css'

const BodySection2 = ({ title, img1, img2, img3, img4, img5, img6, details_title1, details_title2, details_title3
    , details_title4, details_title5, details_title6, number1, number2, number3, number4, number5, number6 }: any) => (
    <div className={`${styles.t_rp}`}>
        <div className={`${styles.t_exp_header}`}>
            <p>{title}</p>
        </div>
        <div className={`${styles.t_exp_body}`}>
            <div className={`${styles.body_row}`}>
                <div className={styles.body_row_img}>
                    <img src={img1} />
                </div>
                <div className={styles.body_row_img}>
                    <img src={img2} />
                </div>
                <div className={styles.body_row_img}>
                    <img src={img3} />
                </div>
                <div className={styles.body_row_img}>
                    <img src={img4} />
                </div>
                <div className={styles.body_row_img}>
                    <img src={img5} />
                </div>
                <div className={styles.body_row_img}>
                    <img src={img6} />
                </div>
            </div>
            <div className={`${styles.body_row}`}>
                <div className={`${styles.body_row_title}`}>
                    <p>
                        <a href="">{details_title1}</a>
                    </p>
                </div>
                <div className={`${styles.body_row_title}`}>
                    <p>
                        <a href="">{details_title2}</a>
                    </p>
                </div>
                <div className={`${styles.body_row_title}`}>
                    <p>
                        <a href="">{details_title3}</a>
                    </p>
                </div>
                <div className={`${styles.body_row_title}`}>
                    <p>
                        <a href="">{details_title4}</a>
                    </p>
                </div>
                <div className={`${styles.body_row_title}`}>
                    <p>
                        <a href="">{details_title5}</a>
                    </p>
                </div>
                <div className={`${styles.body_row_title}`}>
                    <p>
                        <a href="">{details_title6}</a>
                    </p>
                </div>
            </div>
            <div className={`${styles.body_row}`}>
                <div className={`${styles.body_row_number}`}>
                    <p style={{ color: '#4C5BD4' }}>
                        <span className={`${styles.total_ep}`}>{number1}</span>
                    </p>
                </div>
                <div className={`${styles.body_row_number}`}>
                    <p style={{ color: '#4CD4B4' }}>
                        <span className={`${styles.total_ep}`}>{number2}</span>
                    </p>
                </div>
                <div className={`${styles.body_row_number}`}>
                    <p style={{ color: '#D44C4C' }}>
                        <span className={`${styles.total_ep}`}>{number3}</span>
                    </p>
                </div>
                <div className={`${styles.body_row_number}`}>
                    <p style={{ color: '#D44C4C' }}>
                        <span className={`${styles.total_ep}`}>{number4}</span>
                    </p>
                </div>
                <div className={`${styles.body_row_number}`}>
                    <p style={{ color: '#D44C4C' }}>
                        <span className={`${styles.total_ep}`}>{number5}</span>
                    </p>
                </div>
                <div className={`${styles.body_row_number}`}>
                    <p style={{ color: '#D44C4C' }}>
                        <span className={`${styles.total_ep}`}>{number6}</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
)

export default function InformationSection2() {
    return (
        <>
            <div className={`${styles.wrapper}`}>
                <div className={`${styles.body_content}`}>
                    <div className={`${styles.content_item}`}>
                        <BodySection2
                            title='Thâm niên công tác'
                            img1='/icon-users.svg'
                            img2='/duoi_3_thang.svg'
                            img3='/duoi_1_nam.svg'
                            img4='/duoi_10_nam.svg'
                            img5='/duoi_10_nam.svg'
                            img6='/duoi_10_nam.svg'
                            details_title1='Tổng số'
                            details_title2='Dưới 3 tháng'
                            details_title3='3 tháng - 1 năm'
                            details_title4='1 năm - 3 năm'
                            details_title5='3 năm - 5 năm'
                            details_title6='Trên 5 năm'
                            number1='1'
                            number2='2'
                            number3='3'
                            number4='4'
                            number5='5'
                            number6='6'
                        />
                    </div>
                </div>
                <div className={`${styles.body_content}`}>
                    <div className={`${styles.content_item}`}>
                        <BodySection2
                            title='Độ tuổi nhân viên'
                            img1='/icon-users.svg'
                            img2='/duoi_30_tuoi.svg'
                            img3='/duoi_45_tuoi.svg'
                            img4='/duoi_60_tuoi.svg'
                            img5='/duoi_100_tuoi.svg'
                            details_title1='Tổng số'
                            details_title2='Dưới 30 tuổi'
                            details_title3='30 tuổi - 44 tuổi'
                            details_title4='45 tuổi - 59 tuổi'
                            details_title5='Trên 60 tuổi'
                            number1='1'
                            number2='2'
                            number3='3'
                            number4='4'
                            number5='5'
                        />
                    </div>
                </div>
                <div className={`${styles.body_content}`}>
                    <div className={`${styles.content_item}`}>
                        <BodySection2
                            title='Chức vụ nhân viên'
                            img1='/icon-users.svg'
                            img2='/icon-male.svg'
                            img3='/icon-male.svg'
                            img4='/icon-male.svg'
                            img5='/icon-male.svg'
                            details_title1='Tổng số'
                            details_title2='Nhân viên thực tập'
                            details_title3='Nhân viên parttime'
                            details_title4='Nhân viên thử việc'
                            details_title5='Nhân viên chính thức'
                            number1='1'
                            number2='2'
                            number3='3'
                            number4='4'
                            number5='5'
                        />
                    </div>
                </div>
            </div>
        </>
    )
}