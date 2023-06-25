import React, { useState } from 'react';
import styles from '../thong-tin-nhan-su/administration.module.css'
import Link from 'next/link';
import TabSalary from './salary';
import TabPlaningAppointment from './planningAppointment';

export default function PersonnalChange({ children }: any) {
    const [active, setActive] = useState(1)


    return (
        <>
            <div className={`${styles.wrapper}`}>
                <ul className={`${styles.nav_tab} ${styles.nav}`}>
                    <li className={`${active === 1 ? styles.active : ""}`} onClick={() => setActive(1)}>
                        <Link href=''>Tăng/giảm lương</Link>
                    </li>
                    <li className={`${active === 2 ? styles.active : ""}`} onClick={() => setActive(2)}>
                        <Link href=''>Bổ nhiệm, quy hoạch</Link>
                    </li>
                    <li className={`${active === 3 ? styles.active : ""}`} onClick={() => setActive(3)}>
                        <Link href=''>Luân chuyển công tác</Link>
                    </li>
                    <li className={`${active === 4 ? styles.active : ""}`} onClick={() => setActive(4)}>
                        <Link href=''>Giảm biên chế</Link>
                    </li>
                    <li className={`${active === 5 ? styles.active : ""}`} onClick={() => setActive(5)}>
                        <Link href=''>Nghỉ việc sai quy định</Link>
                    </li>
                    <li className={`${active === 6 ? styles.active : ""}`} onClick={() => setActive(6)}>
                        <Link href=''>Biểu đồ</Link>
                    </li>
                </ul>
                {active === 1 && <TabSalary></TabSalary>}
                {active === 2 && <TabPlaningAppointment></TabPlaningAppointment>}
            </div>


        </>
    )
}