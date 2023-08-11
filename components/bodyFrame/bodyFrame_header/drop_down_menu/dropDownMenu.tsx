import React from "react";
import styles from './dropDownMenu.module.css'
import Link from "next/link";

export interface DropDownMenu {

}

export default function DropDownMenu({dataHeader}) {
    const ListMenu = [
        {
            img: '/huongdan.svg',
            text: 'Hướng dẫn',
            href: '',
            icon: '	/iconmenu.svg'

        },
        {
            img: '	/vn_icon_tttk.svg',
            text: 'Thông tin tài khoản',
            href: '',
            icon: '	/iconmenu.svg'
        },
        {
            img: '	/vn_icon_baoloi.svg',
            text: 'Báo lỗi',
            href: '',
            icon: '	/iconmenu.svg'
        },
        {
            img: '	/vn_icon_danhgia.svg',
            text: 'Đánh giá',
            href: '',
            icon: '	/iconmenu.svg'
        },
        {
            img: '	/dangxuat.svg',
            text: 'Đăng xuất',
            href: '',
            icon: '	/iconmenu.svg'
        },

    ]
    return (
        <>
            <div className={`${styles.wrapper}`}>
                <div className={`${styles.avatar}`}><img className={`${styles.img_avatar}`} src={`/app_1686633773283.jpg`} alt="" /></div>
                <div className={`${styles.menu_cpn}`}>{dataHeader?.data.userName}</div>
                <div className={`${styles.menu_id}`}>{dataHeader?.data.idQLC || ''}</div>
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