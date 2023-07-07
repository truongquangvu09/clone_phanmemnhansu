import React, { useState } from 'react';
import styles from './bodyFrame_header.module.css'
import DropDownMenu from './drop_down_menu/dropDownMenu';
import Notify from './notify/notify';
import Remind from './remind';
import Sidebar from '@/components/sidebar/Sidebar';
export interface BodyFrameHeader {

}

export default function BodyFrameHeader({ children }: any) {
    const [menuClick, setMenuClick] = useState(false)
    const [noti, setNoti] = useState(false)
    const [remind, setRemind] = useState(false)
    const [openSidebar, setOpenSidebar] = useState(false)

    const toggleMenu = () => {
        setMenuClick(!menuClick);
        setNoti(false)
        setRemind(false)
    };
    const handleNotify = () => {
        setMenuClick(false)
        setNoti(!noti)
        setRemind(false)
    }
    const handleRemind = () => {
        setMenuClick(false)
        setRemind(!remind)
        setNoti(false)
    }
    const handleOpenSidebar = () => {
        setOpenSidebar(!openSidebar)
    }
    return (
        <>
            <div className={`${styles.wrapper}`}>
                <div className={`${styles.header}`}>
                    <div className={`${styles.header_left}`} >
                        <div className={`${styles.sidebar_renative}`}>
                            <div>
                                <div className={`${styles.icon_sidebar_all}`} onClick={handleOpenSidebar}>
                                    <img src={`/icon_sidebar_all.svg`} alt="icon" />
                                </div>
                            </div>
                        </div>
                        <div className={`${styles.header_left_item1}`}>ID-111111</div>
                        <div className={`${styles.header_left_item2}`}>Trương Quang Vũ</div>
                    </div>
                    <div className={`${styles.header_right}`} >
                        <div className={`${styles.header_right_item1}`} >
                            <div className={`${styles.menu_top_icon}`}>
                                <img className={`${styles.drop_down}`} src={`/chat.svg`} alt="icon" />
                            </div>
                            <div className={`${styles.menu_top_icon}`} onClick={handleNotify}>
                                <img className={`${styles.drop_down}`} src={`/nhacnho.svg`} alt="icon" />
                            </div>
                            <div className={`${styles.menu_top_icon}`} onClick={handleRemind}>
                                <img className={`${styles.drop_down}`} src={`/thongbao.svg`} alt="icon" />
                            </div>
                        </div>
                        <div className={`${styles.header_right_item2}`} onClick={toggleMenu}>
                            <div className={`${styles.header_avatar}`}>
                                <img className={`${styles.image_avatar}`} src={`/app_1686633773283.jpg`} alt="" />
                            </div>
                            <div className={`${styles.name}`}>Trương Quang Vũ</div>
                            <div className={`${styles.drop_down}`}>
                                <img src={`/menu.svg`} alt="icon" />
                            </div>
                        </div>
                    </div>

                </div>
                {openSidebar && <Sidebar></Sidebar>}
                {menuClick && <DropDownMenu></DropDownMenu>}
                {noti && <Notify></Notify>}
                {remind && <Remind></Remind>}

            </div>
        </>
    )
}