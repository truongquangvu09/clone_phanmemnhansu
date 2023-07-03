import React from 'react'
import styles from './bodySection1.module.css'

const EmployeeForm = ({ title1, title2, img1, img2, img3, title_details1, title_details2, title_details3,
    number1, number2, number3, color_boder, background_color }: any) => (
    <div className={`${styles.t_rp}`}>
        <div className={`${styles.t_exp_header}`} style={{ borderLeft: color_boder, background: background_color }}>
            <p>{title1}</p>
            <p>{title2}</p>
        </div>
        <div className={`${styles.t_exp_body}`}>
            <div className={`${styles.body_row}`}>
                <div className={`${img2 ? styles.body_row_img : styles.body_row_img2}`}>
                    <img src={img1} />
                </div>
                {img2 ? (<div className={`${img2 ? styles.body_row_img : styles.body_row_img2}`} >
                    <img src={img2} />
                </div>) : ''}
                <div className={`${img2 ? styles.body_row_img : styles.body_row_img2}`}>
                    <img src={img3} />
                </div>
            </div>
            <div className={`${styles.body_row}`}>
                <div className={`${title_details2 ? styles.body_row_title : styles.body_row_title2}`}>
                    <p>
                        <a href="">{title_details1}</a>
                    </p>
                </div>
                {title_details2 ? (<div className={`${title_details2 ? styles.body_row_title : styles.body_row_title2}`}>
                    <p>
                        <a href="">{title_details2}</a>
                    </p>
                </div>) : ''}
                <div className={`${title_details2 ? styles.body_row_title : styles.body_row_title2}`}>
                    <p>
                        <a href="">{title_details3}</a>
                    </p>
                </div>
            </div>
            <div className={`${styles.body_row}`}>
                <div className={`${number2 ? styles.body_row_number : styles.body_row_number2}`}>
                    <p style={{ color: '#4C5BD4' }} className={`${styles.total_ep}`}>{number1}</p>
                </div>
                {number2 ? (
                    <div className={`${number2 ? styles.body_row_number : styles.body_row_number2}`}>
                        <p style={{ color: '#4CD4B4', }} className={`${styles.total_ep}`}>{number2}</p>
                    </div>
                ) : ''}
                <div className={`${number2 ? styles.body_row_number : styles.body_row_number2}`}>
                    <p style={{ color: '#D44C4C' }} className={`${styles.total_ep}`}>{number3}</p>
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
                            color_boder='7px solid #4c5bd4'
                            background_color='#f1f9fc'
                        />
                    </div>
                    <div className={`${styles.row_top_item}`}>
                        <EmployeeForm
                            title1='Tỷ lệ nhân viên'
                            title2='giảm biên chế/nghỉ việc'
                            img1='https://phanmemnhansu.timviec365.vn/assets/images/t_images/icon-users.svg'
                            img2='https://phanmemnhansu.timviec365.vn/assets/images/icon-report/career_green.svg'
                            img3='	https://phanmemnhansu.timviec365.vn/assets/images/icon-report/career_red.svg'
                            title_details1='Tổng số'
                            title_details2='Giảm biên chế'
                            title_details3='Nghỉ việc'
                            number1='32'
                            number2='30'
                            number3='2'
                            color_boder='7px solid #4CD4B4'
                            background_color='#f1f9fc'
                        />
                    </div>
                    <div className={`${styles.row_top_item}`}>
                        <EmployeeForm
                            title1='Bổ nhiệm'
                            title2='Quy hoạch'
                            img1='	https://phanmemnhansu.timviec365.vn/assets/images/icon-report/icon-bo-nghiem.svg'
                            img2='	https://phanmemnhansu.timviec365.vn/assets/images/t_images/icon-male.svg'
                            img3='	https://phanmemnhansu.timviec365.vn/assets/images/t_images/icon-female.svg'
                            title_details1='Tổng số'
                            title_details2='Nam'
                            title_details3='Nữ'
                            number1='32'
                            number2='30'
                            number3='2'
                            color_boder='7px solid #D44C4C'
                            background_color='#FFF4F4'
                        />
                    </div>
                </div>
                <div className={`${styles.row_top}`} style={{ marginTop: 20 }}>
                    <div className={`${styles.row_top_item}`}>
                        <EmployeeForm
                            title1='Tăng lương/giảm lương'
                            img1='https://phanmemnhansu.timviec365.vn/assets/images/t_images/icon-users.svg'
                            img2='	https://phanmemnhansu.timviec365.vn/assets/images/icon-report/salary_up.svg'
                            img3='	https://phanmemnhansu.timviec365.vn/assets/images/icon-report/salary_down.svg'
                            title_details1='Tổng số'
                            title_details2='Tăng lương'
                            title_details3='Giảm lương'
                            number1='32'
                            number2='30'
                            number3='2'
                            color_boder='7px solid #4c5bd4'
                            background_color='#f1f9fc'
                        />
                    </div>
                    <div className={`${styles.row_top_item}`}>
                        <EmployeeForm
                            title1='Luân chuyển công tác'
                            img1='https://phanmemnhansu.timviec365.vn/assets/images/icon-report/icon-tranfer-job.svg'
                            img2='https://phanmemnhansu.timviec365.vn/assets/images/t_images/icon-male.svg'
                            img3='https://phanmemnhansu.timviec365.vn/assets/images/t_images/icon-female.svg'
                            title_details1='Tổng số'
                            title_details2='Nam'
                            title_details3='Nữ'
                            number1='32'
                            number2='30'
                            number3='2'
                            color_boder='7px solid #4CD4B4'
                            background_color='#f1f9fc'
                        />
                    </div>
                    <div className={`${styles.row_top_item}`}>
                        <EmployeeForm
                            title1='Tình trạng hôn nhân'
                            img1='https://phanmemnhansu.timviec365.vn/assets/images/icon-report/icon-couple.svg'
                            img3='https://phanmemnhansu.timviec365.vn/assets/images/icon-report/icon-alone.svg	'
                            title_details1='Đã lập gia đình'
                            title_details3='Độc thân'
                            number1='32'
                            number3='2'
                            color_boder='7px solid #D44C4C'
                            background_color='#FFF4F4'
                        />
                    </div>
                </div>

            </div>
        </>
    )
}