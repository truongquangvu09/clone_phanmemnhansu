import React, { useState } from 'react';
import styles from './candidateList.module.css'
import Link from 'next/link';
import CandidateListDetail from './candidateListDetail';
import CandidateRepo from '@/components/quan-ly-tuyen-dung/danh-sach-ung-vien/candidateRepo';

export interface CandidateList {

}

export default function CandidateList({ children }: any) {
    const [active, setActive] = useState(1)


    return (
        <>
            <div className={`${styles.wrapper}`}>
                <ul className={`${styles.nav_tab} ${styles.nav}`}>
                    <li className={`${active === 1 ? styles.active : ""}`} onClick={() => setActive(1)}>
                        <Link href=''>Danh sách ứng viên</Link>
                    </li>
                    <li className={`${active === 2 ? styles.active : ""}`} onClick={() => setActive(2)}>
                        <Link href=''>Kho ứng viên</Link>
                    </li>
                </ul>
                {active === 1 ? <CandidateListDetail></CandidateListDetail> : <CandidateRepo></CandidateRepo>}
            </div>


        </>
    )
}