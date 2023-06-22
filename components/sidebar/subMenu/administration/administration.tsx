import React, { useState } from 'react';
import styles from '../../sidebar.module.css'
import Link from "next/link";

export interface Administration {

}

export default function Administration({ children }: any) {
    const [activeButton, setActiveButton] = useState(null);
    const handleClick = (buttonIndex: number) => {
        // @ts-ignore
        setActiveButton(buttonIndex);
    };

    const submenu = [
        {
            img: "		https://phanmemnhansu.timviec365.vn//assets/images/icon-menu/vn_quanlynhanvien.svg",
            title: 'Quản lý nhân viên',
            href: 'administration',
        },
        {
            img: "			https://phanmemnhansu.timviec365.vn//assets/images/icon-menu/vn_quydinhchinhsach.svg",
            title: 'Quy định - chính sách',
            href: '',
        },
        {
            img: "	https://phanmemnhansu.timviec365.vn//assets/images/icon-menu/vn_hopdong.svg",
            title: 'Hợp đồng và hồ sơ nhân viên',
            href: '',
        },
        {
            img: "		https://phanmemnhansu.timviec365.vn//assets/images/icon-menu/vn_biendongnhansu.svg	",
            title: 'Biến động nhân sự',
            href: '',
        },
        {
            img: "	https://phanmemnhansu.timviec365.vn//assets/images/icon-menu/vn_vanthuluutru.svg",
            title: 'Văn thư lưu trữ',
            href: '',
        },
        {
            img: "			https://phanmemnhansu.timviec365.vn//assets/images/icon-menu/vn_dexuat.svg",
            title: 'Đề xuất',
            href: '',
        },
        {
            img: "			https://phanmemnhansu.timviec365.vn//assets/images/icon-menu/vn_dexuat.svg",
            title: 'Đề xuất cộng đồng',
            href: '',
        },
        {
            img: "			https://phanmemnhansu.timviec365.vn//assets/images/icon-menu/vn_truyenthongvanhoa.svg",
            title: 'Đề xuất nội bộ',
            href: '',
        },
        {
            img: "			https://phanmemnhansu.timviec365.vn//assets/images/icon-menu/vn_quanlytaisan.svg",
            title: 'Quản lý tài sản',
            href: '',
        },
        {
            img: "			https://phanmemnhansu.timviec365.vn//assets/images/icon-menu/vn_quanlykho.svg",
            title: 'Quản lý kho',
            href: '',
        },
        {
            img: "			https://phanmemnhansu.timviec365.vn//assets/images/icon-menu/vn_quanlytaichinh.svg",
            title: 'Quản lý tài chính',
            href: '',
        },
        {
            img: "				https://phanmemnhansu.timviec365.vn//assets/images/icon-menu/vn_phiendich.svg",
            title: 'Phiên dịch',
            href: '',
        },
    ]

    return (
        <>
            {submenu.map((item, index) => (
                <div key={index}>
                    <div className={`${styles.subMenu}`}>
                        <Link
                            className={` ${activeButton === 1 ? styles.clicked : ""}`}
                            onClick={() => handleClick(1)}
                            href={item.href}
                        >
                            <div className={`${styles.sidebar_home}`}>
                                <div className={`${styles.button2}`}>
                                    <img
                                        src={
                                            item.img
                                        }
                                        className={`${styles.img_1}`}
                                        alt="Index"
                                    />
                                </div>
                                <div className={`${styles.sidebar_text} ${styles.sidebar_text2}`}>{item.title}</div>
                            </div>
                        </Link>
                    </div>
                </div>
            ))}
        </>


    )
}