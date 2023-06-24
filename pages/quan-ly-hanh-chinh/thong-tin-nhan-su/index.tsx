import React, { useState } from 'react';
import styles from './administration.module.css'
import Link from 'next/link';
import TabEmployeeManagement from './tab';

<<<<<<< HEAD:pages/administration/index.tsx
export interface Administration {}
=======
export interface EmployeeManagement {

}
>>>>>>> 8c1a39eb6789197c755b77c8ac9e7b0e6648ea8a:pages/quan-ly-hanh-chinh/thong-tin-nhan-su/index.tsx

export default function EmployeeManagement({ children }: any) {
    const [active, setActive] = useState(1)


    return (
        <>
            <div className={`${styles.wrapper}`}>
                <ul className={`${styles.nav_tab} ${styles.nav}`}>
                    <li className={`${active === 1 ? styles.active : ""}`} onClick={() => setActive(1)}>
                        <Link href=''>Danh sách ứng viên</Link>
                    </li>
                    <li className={`${active === 2 ? styles.active : ""}`} onClick={() => setActive(2)}>
                        <Link target='blank' href='https://chamcong.timviec365.vn/quan-ly-cong-ty/nhan-vien.html'>Kho ứng viên</Link>
                    </li>
                </ul>
                {active === 1 && <TabEmployeeManagement></TabEmployeeManagement>}
            </div>
        </>
    )
}