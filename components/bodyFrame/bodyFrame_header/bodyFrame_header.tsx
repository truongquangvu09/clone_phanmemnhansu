/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react';
import styles from './bodyFrame_header.module.css'
import DropDownMenu from './drop_down_menu/dropDownMenu';
import Notify from './notify/notify';
import Remind from './remind';
import Sidebar from '@/components/sidebar/Sidebar';

export interface BodyFrameHeader {}

export default function BodyFrameHeader({ dataHeader }: any) {
    const [menuClick, setMenuClick] = useState(false)
    const [noti, setNoti] = useState(false)
    const [remind, setRemind] = useState(false)
    const [openSidebar, setOpenSidebar] = useState(false)
    const [windowWidth, setWindowWidth] = useState<number>(typeof window !== 'undefined' ? window.innerWidth : 0);
 
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
            if (window.innerWidth > 1024) {
                setOpenSidebar(false);
            }
        };

        window.addEventListener('resize', handleResize);

        // Xóa bỏ sự kiện lắng nghe khi component bị hủy
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


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
                        <div className={`${styles.header_left_item1}`}>ID-{dataHeader?.data?.idQLC || ''}</div>
                        <div className={`${styles.header_left_item2}`}>{dataHeader?.data?.userName || ''}</div>
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
                                <img className={`${styles.image_avatar}`} src={dataHeader?.data?.avatarUser ? dataHeader?.data?.avatarUser : "/app_1686633773283.jpg"} alt="" />
                            </div>
                            <div className={`${styles.name}`}>{dataHeader?.data?.userName || ''}</div>
                            <div className={`${styles.drop_down}`}>
                                <img src={`/menu.svg`} alt="icon" />
                            </div>
                        </div>
                    </div>

                </div>
                {openSidebar && <Sidebar></Sidebar>}
                {menuClick && <DropDownMenu dataHeader = {dataHeader}></DropDownMenu>}
                {noti && <Notify></Notify>}
                {remind && <Remind></Remind>}
            </div>
        </>
    )
}


