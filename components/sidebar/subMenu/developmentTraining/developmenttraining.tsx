import React, { useState } from 'react';
import styles from '../../sidebar.module.css'
import Link from "next/link";

export interface DevelopmentTraining {

}

export default function DevelopmentTraining({ children }: any) {
    const [activeButton, setActiveButton] = useState(null);
    const handleClick = (buttonIndex: number) => {
        // @ts-ignore
        setActiveButton(buttonIndex);
    };

    const submenu = [
        {
            img: "	https://phanmemnhansu.timviec365.vn//assets/images/icon-menu/vn_vitricongviec.svg",
            title: 'Vị trí công việc',
            href: ''
        },
        {
            img: "	https://phanmemnhansu.timviec365.vn//assets/images/icon-menu/vn_quytrinhdaotao.svg",
            title: 'Quy trình đào tạo',
            href: ''
        },
        {
            img: "	https://phanmemnhansu.timviec365.vn//assets/images/icon-menu/vn_danhgianangluc.svg",
            title: 'Đánh giá năng lực nhân viên',
            href: ''
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
                            href="/"
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