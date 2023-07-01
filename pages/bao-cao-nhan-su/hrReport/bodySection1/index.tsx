import React from 'react'
import styles from './bodySection1.module.css'

const EmployeeForm = ({ title1, title2, img1, img2, img3, title_details1, title_details2, title_details3, number1, number2, number3 }: any) => (
    <div className={`${styles.t_rp}`}>
        <div className={`${styles.t_exp_header}`}>
            <p>{title1}</p>
            <p>{title2}</p>
        </div>
        <div className={`${styles.t_exp_body}`}>
            <div className={`${styles.body_row}`}>
                <div className={`${styles.body_row_img}`}>
                    <img src={img1} />
                </div>
                <div className={`${styles.body_row_img}`}>
                    <img src={img2} />
                </div>
                <div className={`${styles.body_row_img}`}>
                    <img src={img3} />
                </div>
            </div>
            <div className={`${styles.body_row}`}>
                <div className={`${styles.body_row_title}`}>
                    <p>
                        <a href="">{title_details1}</a>
                    </p>
                </div>
                <div className={`${styles.body_row_title}`}>
                    <p>
                        <a href="">{title_details2}</a>
                    </p>
                </div>
                <div className={`${styles.body_row_title}`}>
                    <p>
                        <a href="">{title_details3}</a>
                    </p>
                </div>
            </div>
            <div className={`${styles.body_row}`}>
                <div className={`${styles.body_row_number}`}>
                    <p style={{ color: '#4C5BD4' }} className={`${styles.total_ep}`}>{number1}</p>
                </div>
                <div className={`${styles.body_row_number}`}>
                    <p style={{ color: '#4C5BD4' }} className={`${styles.total_ep}`}>{number2}</p>
                </div>
                <div className={`${styles.body_row_number}`}>
                    <p style={{ color: '#4C5BD4' }} className={`${styles.total_ep}`}>{number3}</p>
                </div>
            </div>
        </div>
    </div>
)
export default function EmployeeInformation() {

    return (
        <>
            <div className={`${styles.wrapper}`}>
                <div className={`${styles.row_top}`} style={{ marginTop: 40 }}>
                    <div className={`${styles.row_top_item}`}>
                        <EmployeeForm
                            title1='Tổng số nhân viên'
                            title2='Nam/Nữ'
                            img1='https://phanmemnhansu.timviec365.vn/assets/images/t_images/icon-users.svg'
                            img2='https://phanmemnhansu.timviec365.vn/assets/images/t_images/icon-male.svg'
                            img3='https://phanmemnhansu.timviec365.vn/assets/images/t_images/icon-female.svg'
                            title_details1='Tổng số'
                            title_details2='Nam'
                            title_details3='Nữ'
                            number1='32'
                            number2='30'
                            number3='2'
                        />
                    </div>
                    <div className={`${styles.row_top_item}`}>
                        <EmployeeForm
                            title1='Tổng số nhân viên'
                            title2='Nam/Nữ'
                            img1='https://phanmemnhansu.timviec365.vn/assets/images/t_images/icon-users.svg'
                            img2='https://phanmemnhansu.timviec365.vn/assets/images/t_images/icon-male.svg'
                            img3='https://phanmemnhansu.timviec365.vn/assets/images/t_images/icon-female.svg'
                            title_details1='Tổng số'
                            title_details2='Nam'
                            title_details3='Nữ'
                            number1='32'
                            number2='30'
                            number3='2'
                        />
                    </div>
                    <div className={`${styles.row_top_item}`}>
                        <EmployeeForm
                            title1='Tổng số nhân viên'
                            title2='Nam/Nữ'
                            img1='https://phanmemnhansu.timviec365.vn/assets/images/t_images/icon-users.svg'
                            img2='https://phanmemnhansu.timviec365.vn/assets/images/t_images/icon-male.svg'
                            img3='https://phanmemnhansu.timviec365.vn/assets/images/t_images/icon-female.svg'
                            title_details1='Tổng số'
                            title_details2='Nam'
                            title_details3='Nữ'
                            number1='32'
                            number2='30'
                            number3='2'
                        />
                    </div>
                </div>

            </div>
        </>
    )
}