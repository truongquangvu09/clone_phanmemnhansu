import React, { useState } from 'react';
import styles from '../thong-tin-nhan-su/administration.module.css'
import Link from 'next/link';
import TabSalary from '@/components/quan-ly-hanh-chinh/bien-dong-nhan-su/salary';
import TabPlaningAppointment from '@/components/quan-ly-hanh-chinh/bien-dong-nhan-su/planningAppointment';
import TabWorkingRotation from '@/components/quan-ly-hanh-chinh/bien-dong-nhan-su/workingRotation';
import TabPayrollDown from '@/components/quan-ly-hanh-chinh/bien-dong-nhan-su/payrollDown';
import TabOutJob from '@/components/quan-ly-hanh-chinh/bien-dong-nhan-su/outJob';
import TabChart from '@/components/quan-ly-hanh-chinh/bien-dong-nhan-su/chart';

export default function PersonnalChange({ children }: any) {
    const [active, setActive] = useState(1)


    return (
        <>
            <div className={`${styles.wrapper} ${styles.wrapper_personnal_change} `}>
                <ul style={{ marginTop: 0 }} className={`${styles.nav_tab} ${styles.nav} ${styles.nav_tab_personnal_change} `}>
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
                {active === 3 && <TabWorkingRotation></TabWorkingRotation>}
                {active === 4 && <TabPayrollDown></TabPayrollDown>}
                {active === 5 && <TabOutJob></TabOutJob>}
                {active === 6 && <TabChart></TabChart>}
            </div>


        </>
    )
}