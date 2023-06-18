import React from "react";
import styles from './bodyFrame_section1.module.css'
export interface BodyFrameSection1 {

}

export default function BodyFrameSection1({ children }: any) {
    return (
        <>
            <div className={`${styles.wrapper}`}>
                <div className={`${styles.item_left}`}>
                    <div className={`${styles.item_left_text}`}>
                        <div className={`${styles.item_left_text1}`}>Xin Chào!</div>
                        <div className={`${styles.item_left_text2}`}>
                            Chúc bạn một ngày làm việc hiệu quả!
                        </div>
                    </div>
                    <div className={`${styles.item_left_img}`}>
                        <img src="	https://phanmemnhansu.timviec365.vn//assets/images/l_images/xinchao.png" alt="xinchao" />
                    </div>
                </div>
                <div className={`${styles.item_right}`}>
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
            </div>
        </>
    )
}