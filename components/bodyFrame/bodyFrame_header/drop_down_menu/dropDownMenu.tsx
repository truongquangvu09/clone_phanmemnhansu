import React from "react";
import styles from './dropDownMenu.module.css'
import Link from "next/link";

export interface DropDownMenu {

}

export default function DropDownMenu() {

    const ListMenu = [
        {
            img: 'https://phanmemnhansu.timviec365.vn//assets/images/l_images/huongdan.svg',
            text: 'Hướng dẫn',
            href: '',
            icon: '	https://phanmemnhansu.timviec365.vn//assets/images/l_images/iconmenu.svg'

        },
        {
            img: '	https://phanmemnhansu.timviec365.vn//assets/images/icon-menu-vn/vn_icon_tttk.svg',
            text: 'Thông tin tài khoản',
            href: '',
            icon: '	https://phanmemnhansu.timviec365.vn//assets/images/l_images/iconmenu.svg'
        },
        {
            img: '	https://phanmemnhansu.timviec365.vn//assets/images/icon-menu-vn/vn_icon_baoloi.svg',
            text: 'Báo lỗi',
            href: '',
            icon: '	https://phanmemnhansu.timviec365.vn//assets/images/l_images/iconmenu.svg'
        },
        {
            img: '	https://phanmemnhansu.timviec365.vn//assets/images/icon-menu-vn/vn_icon_danhgia.svg',
            text: 'Đánh giá',
            href: '',
            icon: '	https://phanmemnhansu.timviec365.vn//assets/images/l_images/iconmenu.svg'
        },
        {
            img: '	https://phanmemnhansu.timviec365.vn//assets/images/l_images/dangxuat.svg',
            text: 'Đăng xuất',
            href: '',
            icon: '	https://phanmemnhansu.timviec365.vn//assets/images/l_images/iconmenu.svg'
        },

    ]
    return (
        <>
            <div className={`${styles.wrapper}`}>
                <div className={`${styles.avatar}`}><img className={`${styles.img_avatar}`} src="https://chamcong.24hpay.vn/upload/employee/ep555955/app_1686633773283.jpg" alt="" /></div>
                <div className={`${styles.menu_name}`}>Trương Quang Vu</div>
                <div className={`${styles.menu_cpn}`}>CÔNG TY CỔ PHẦN THANH TOÁN HƯNG HÀ</div>
                <div className={`${styles.menu_id}`}>555955</div>
                {ListMenu.map((item, index) => (
                    <div key={index}>
                        <Link href={item.href}>
                            <div className={`${styles.menu}`}>
                                <div className={`${styles.menu_icon}`}>
                                    <img className={`${styles.img_icon}`} src={item.img} alt="icon" />
                                </div>
                                <div className={`${styles.text_menu}`}>
                                    {item.text}
                                </div>
                                <div className={`${styles.next_icon}`}>
                                    <img src={item.icon} alt="" />
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>

        </>
    )
}