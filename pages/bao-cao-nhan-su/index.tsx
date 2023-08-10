import React, { useState, useEffect } from 'react';
import styles from '../quan-ly-hanh-chinh/thong-tin-nhan-su/administration.module.css'
import Link from 'next/link';
import TabHRReport from '@/components/bao-cao-nhan-su/hrReport';
import RecruitmentReport from '@/components/bao-cao-nhan-su/recruitmentReport';
import { addDays, format } from 'date-fns';

export default function HRReport({ children }: any) {
    const [active, setActive] = useState(1)
    const [dateRangeData, setDateRangeData] = useState<String[]>([]);

    const defaultStartDate = format(addDays(new Date(), -12), 'yyyy-MM-dd');
    const defaultEndDate = format(new Date(), 'yyyy-MM-dd');

    const datesInRange: String[] = [];

    useEffect(() => {
        const start = new Date(defaultStartDate);
        const end = new Date(defaultEndDate);
        for (let date = start; date <= end; date.setDate(date.getDate() + 1)) {
            const formattedDate = format(new Date(date), 'dd/MM/yyyy');
            datesInRange.push(formattedDate);
        }
        setDateRangeData(datesInRange)

    }, [])

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
                {active === 1 && <TabHRReport dateRangeDatas={dateRangeData} />}
                {active === 2 && <RecruitmentReport />}
            </div>
        </>
    )
}