import React, { useState, useEffect } from 'react';
import styles from '../quan-ly-hanh-chinh/thong-tin-nhan-su/administration.module.css'
import Link from 'next/link';
import TabHRReport from './hrReport';
import RecruitmentReport from './recruitmentReport';


export default function HRReport({ children }: any) {
    const [active, setActive] = useState(1)

    return (
        <>
            <div className={`${styles.wrapper}`}>
                <ul className={`${styles.nav_tab} ${styles.nav}`}>
                    <li className={`${active === 1 ? styles.active : ""}`} onClick={() => setActive(1)}>
                        <Link href=''>Báo cáo nhân sự</Link>
                    </li>
                    <li className={`${active === 2 ? styles.active : ""}`} onClick={() => setActive(2)}>
                        <Link href=''>Báo cáo tuyển dụng</Link>
                    </li>
                </ul>
                {active === 1 && <TabHRReport />}
                {active === 2 && <RecruitmentReport/>}
            </div>
        </>
    )
}