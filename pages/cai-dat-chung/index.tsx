import React, { useState, useEffect } from 'react';
import styles from '../quan-ly-hanh-chinh/thong-tin-nhan-su/administration.module.css'
import Link from 'next/link';
import SecurityInfomation from '@/components/cai-dat-chung/securityInformation';
import GeneralSettings from '@/components/cai-dat-chung/generalSettings';
import ActivityLog from '@/components/cai-dat-chung/activityLog';
import { getDataCompany } from '../api/cai-dat/generalSettings';

export default function Setting({ children }: any) {
    const [active, setActive] = useState(1)
    const [dataCompany, setDataCompany] = useState<any>()

    useEffect(() => {
        try {
            const fetchData = async () => {
                const response = await getDataCompany()
                setDataCompany(response)
            }
            fetchData()
        } catch (error) {
        }
    }, [])

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
                {active === 1 && <GeneralSettings dataCompany = {dataCompany}></GeneralSettings>}
                {active === 2 && <SecurityInfomation></SecurityInfomation>}
                {active === 3 && <ActivityLog></ActivityLog>}
            </div>
        </>
    )
}