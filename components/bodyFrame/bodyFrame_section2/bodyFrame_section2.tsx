import React from "react";
import styles from './bodyFrame_section2.module.css'
export interface BodyFrameSection2 {

}

export default function BodyFrameSection2({ children }: any) {
    return (
        <>
            <div className={`${styles.wrapper}`}>
                <div className={`${styles.item_left}`}>
                    <div className={`${styles.item_content_top}`} >
                        <div className={`${styles.item_content} ${styles.content_number}`}>
                            <div className={`${styles.contennt_text}`}>Tổng số nhân viên</div>
                            <div className={`${styles.content_number1}`}>104</div>
                        </div>
                        <div className={`${styles.item_content}`}>
                            <div className={`${styles.contennt_text} `}>Số thành tích trong tháng</div>
                            <div className={`${styles.content_number2} ${styles.content_number}`}>0</div>
                        </div>
                        <div className={`${styles.item_content} ${styles.content_number}`}>
                            <div className={`${styles.contennt_text}`}>Số vi phạm trong tháng</div>
                            <div className={`${styles.content_number3}`}>0</div>
                        </div>
                    </div>
                    <div className={`${styles.item_content_top}`} >
                        <div className={`${styles.item_content} ${styles.content_number}`}>
                            <div className={`${styles.contennt_text}`}>Tổng số ứng viên</div>
                            <div className={`${styles.content_number1}`}>10149</div>
                        </div>
                        <div className={`${styles.item_content}`}>
                            <div className={`${styles.contennt_text} `}>Số ứng viên đến phỏng vấn</div>
                            <div className={`${styles.content_number2} ${styles.content_number}`}>240</div>
                        </div>
                        <div className={`${styles.item_content} ${styles.content_number}`}>
                            <div className={`${styles.contennt_text}`}>Số ứng viên hẹn đi làm</div>
                            <div className={`${styles.content_number3}`}>2145</div>
                        </div>
                    </div>

                </div>
                <div className={`${styles.item_right_weather}`}>
                    <div className={`${styles.right_top}`}>
                        <div className={`${styles.city_home}`}>Hà Nội, Việt Nam</div>
                        <div className={`${styles.weather}`}>
                            <div><img className={`${styles.weather_image}`} src="	https://openweathermap.org/img/w/02d.png" alt="thoitiet" /></div>
                            <div className={`${styles.weather_flex}`}>
                                <div className={`${styles.temperature}`}>35.03</div>
                                <div className={`${styles.weather_sign}`}>
                                    <img src="	https://phanmemnhansu.timviec365.vn//assets/images/l_images/doC.svg" alt="thoitiet" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${styles.item_right}`}>
                    <div className={`${styles.month}`}>June</div>
                    <div className={`${styles.time_image}`}>
                        <img className={`${styles.image}`} src="	https://phanmemnhansu.timviec365.vn//assets/images/l_images/img_time.svg" alt="thoitiet" />
                    </div>
                    <div className={`${styles.flex}`}>
                        <div className={`${styles.time}`}>
                            16:17:56 PM
                        </div>
                    </div>
                    <div className={`${styles.days}`}>
                        saturday 17/06/2023
                    </div>
                </div>
            </div>
        </>
    )
}