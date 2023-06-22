import React, { useState } from 'react';
import styles from './administration.module.css'
import Link from 'next/link';
import EmployeeManagement from './employeeManagement';

export interface Administration {

}

export default function Administration({ children }: any) {
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
                {active === 1 && <EmployeeManagement></EmployeeManagement>}
            </div>


        </>
    )
}