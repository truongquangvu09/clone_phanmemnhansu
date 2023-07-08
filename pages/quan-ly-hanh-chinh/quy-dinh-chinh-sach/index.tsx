import React, { useState } from "react";
import styles from './quy-dinh-chinh-sach.module.css'
import Link from "next/link";
import RegulationsWork from "@/components/quan-ly-hanh-chinh/quy-dinh-chinh-sach/quy-dinh-lam-viec";
import EmployeePolicy from "@/components/quan-ly-hanh-chinh/quy-dinh-chinh-sach/chinh-sach-nhan-vien";

export default function RegulationsPolicy() {
    const [active, setActive] = useState(1)
    return (
        <>
            <div className={`${styles.wrapper}`}>
                <ul className={`${styles.nav_tab} ${styles.nav}`}>
                    <li className={`${active === 1 ? styles.active : ""}`} onClick={() => setActive(1)}>
                        <Link href=''>Quy định làm việc</Link>
                    </li>
                    <li className={`${active === 2 ? styles.active : ""}`} onClick={() => setActive(2)}>
                        <Link href=''>Chính sách nhân viên</Link>
                    </li>
                </ul>
                {active === 1 ? <RegulationsWork></RegulationsWork> : <EmployeePolicy></EmployeePolicy>}
            </div>


        </>
    )
}   