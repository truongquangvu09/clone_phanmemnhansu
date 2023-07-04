import React, { useState, useEffect } from 'react';
import styles from '../quan-ly-hanh-chinh/thong-tin-nhan-su/administration.module.css'
import Link from 'next/link';
import SecurityInfomation from '@/components/cai-dat-chung/securityInformation';
import GeneralSettings from '@/components/cai-dat-chung/generalSettings';


export default function GeneralSetting({ children }: any) {
    const [active, setActive] = useState(1)

    return (
        <>
            <div className={`${styles.wrapper}`}>
                <ul className={`${styles.nav_tab} ${styles.nav} ${styles.nav_tab_setting}`}>
                    <li className={`${active === 1 ? styles.active : ""}`} onClick={() => setActive(1)}>
                        <Link href=''>CÀI ĐẶT CHUNG</Link>
                    </li>
                    <li className={`${active === 2 ? styles.active : ""}`} onClick={() => setActive(2)}>
                        <Link href=''>THÔNG TIN BẢO MẬT</Link>
                    </li>
                    <li className={`${active === 3 ? styles.active : ""}`} onClick={() => setActive(3)}>
                        <Link href=''>NHẬT KÍ HOẠT ĐỘNG</Link>
                    </li>
                </ul>
                {/* {active === 1 && <GeneralSetting></GeneralSetting>} */}
                {active === 2 && <SecurityInfomation></SecurityInfomation>}

            </div>
        </>
    )
}