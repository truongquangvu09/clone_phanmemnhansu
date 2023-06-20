import React from 'react';
import styles from './candidateList.module.css'
import Link from 'next/link';

export interface CandidateList {

}

export default function CandidateList({ children }: any) {
    return (
        <>
            <div className={`${styles.wrapper}`}>
                <ul className={`${styles.nav_tab}`}>
                    <li className={`${styles.active}`}>
                        <Link href='candidateListDetail'>Danh sách ứng viên</Link>
                    </li>
                    <li>
                        <Link href=''></Link>
                    </li>
                </ul>
                {children}
            </div>
        </>
    )
}