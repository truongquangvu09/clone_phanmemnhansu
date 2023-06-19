import React, { useState } from 'react';
import styles from './bodyFrame_header.module.css'
import DropDownMenu from './drop_down_menu/dropDownMenu';
export interface BodyFrameHeader {

}

export default function BodyFrameHeader({ children }: any) {
    const [menuClick, setMenuClick] = useState(false)
    const toggleMenu = () => {
        setMenuClick(prevState => !prevState);
    };
    return (
        <>
            <div className={`${styles.wrapper}`}>
                <div className={`${styles.header}`}>
                    <div className={`${styles.header_left}`} >
                        <div className={`${styles.header_left_item1}`}>ID-111111</div>
                        <div className={`${styles.header_left_item2}`}>Trương Quang Vũ</div>
                    </div>
                    <div className={`${styles.header_right}`} >
                        <div className={`${styles.header_right_item1}`} >
                            <div className={`${styles.menu_top_icon}`}>
                                <img src="	https://phanmemnhansu.timviec365.vn//assets/images/l_images/chat.svg" alt="icon" />
                            </div>
                            <div className={`${styles.menu_top_icon}`}>
                                <img src="	https://phanmemnhansu.timviec365.vn//assets/images/l_images/nhacnho.svg" alt="icon" />
                            </div>
                            <div className={`${styles.menu_top_icon}`}>
                                <img src="	https://phanmemnhansu.timviec365.vn//assets/images/l_images/thongbao.svg" alt="icon" />
                            </div>
                        </div>
                        <div className={`${styles.header_right_item2}`} >
                            <div className={`${styles.header_avatar}`}>
                                <img className={`${styles.image_avatar}`} src="https://chamcong.24hpay.vn/upload/employee/ep555955/app_1686633773283.jpg" alt="" />
                            </div>
                            <div className={`${styles.name}`}>Trương Quang Vũ</div>
                            <div className={`${styles.drop_down}`} onClick={toggleMenu}>
                                <img src="https://phanmemnhansu.timviec365.vn//assets/images/l_images/menu.svg" alt="icon" />
                            </div>
                        </div>
                    </div>

                </div>
                {menuClick && <DropDownMenu></DropDownMenu>}
            </div>
        </>
    )
}