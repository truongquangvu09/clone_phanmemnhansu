import React, { useState } from 'react';
import styles from '../../sidebar.module.css'
import Link from "next/link";

export interface SalaryAndBenefits {

}

export default function SalaryAndBenefits({ children }: any) {
    const [activeButton, setActiveButton] = useState(null);
    const handleClick = (buttonIndex: number) => {
        // @ts-ignore
        setActiveButton(buttonIndex);
    };

    return (
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
                                "https://phanmemnhansu.timviec365.vn/assets/images/l_images/tuyendung.svg"
                            }
                            className={`${styles.img_1}`}
                            alt="Index"
                        />
                    </div>
                    <div className={`${styles.sidebar_text}`}>Lương thưởng cho nhân viên  </div>
                </div>
            </Link>
            <Link
                className={` ${activeButton === 2 ? styles.clicked : ""}`}
                onClick={() => handleClick(2)}
                href="/"
            >
                <div className={`${styles.sidebar_home}`}>
                    <div className={`${styles.button2}`}>
                        <img
                            src={
                                "https://phanmemnhansu.timviec365.vn/assets/images/l_images/thanhtich_vipham.svg"
                            }
                            className={`${styles.img_1}`}
                            alt="Index"
                        />
                    </div>
                    <div className={`${styles.sidebar_text}`}>quản lý lương</div>
                </div>
            </Link>
            <Link
                className={` ${activeButton === 2 ? styles.clicked : ""}`}
                onClick={() => handleClick(2)}
                href="/"
            >
                <div className={`${styles.sidebar_home}`}>
                    <div className={`${styles.button2}`}>
                        <img
                            src={
                                "https://phanmemnhansu.timviec365.vn/assets/images/l_images/thanhtich_vipham.svg"
                            }
                            className={`${styles.img_1}`}
                            alt="Index"
                        />
                    </div>
                    <div className={`${styles.sidebar_text}`}>phần mềm tính lương</div>
                </div>
            </Link>
        </div>
    )
}