import React, { useState, useEffect } from 'react';
import styles from '../quan-ly-hanh-chinh/thong-tin-nhan-su/administration.module.css'
import Link from 'next/link';
import OrganisationalStructureDiagram from './organisationalStructureDiagram';
import SealAndSignature from './sealAndSignature';
import LeaderBiography from './leaderBiography';
import dynamic from "next/dynamic";
const PostionCharTree = dynamic(() => import("./postionChar"), {
    ssr: false
})


export default function OrganizationalStructure({ children }: any) {
    const [active, setActive] = useState(1)

    const [isBrowser, setIsBrowser] = useState(false);
    const [document, setDocument] = useState(false);

    return (
        <>
            <div className={`${styles.wrapper}`}>
                <ul className={`${styles.nav_tab} ${styles.nav}`}>
                    <li className={`${active === 1 ? styles.active : ""}`} onClick={() => setActive(1)}>
                        <Link href=''>SƠ ĐỒ CƠ CẤU TỔ CHỨC</Link>
                    </li>
                    <li className={`${active === 2 ? styles.active : ""}`} onClick={() => setActive(2)}>
                        <Link href=''>SƠ ĐỒ CHỨC VỤ</Link>
                    </li>
                    <li className={`${active === 3 ? styles.active : ""}`} onClick={() => setActive(3)}>
                        <Link href=''>QUYỀN SỬ DỤNG CON DẤU VÀ MẪU CHỮ KÝ</Link>
                    </li>
                    <li className={`${active === 4 ? styles.active : ""}`} onClick={() => setActive(4)}>
                        <Link href=''>TIỂU SỬ LÃNH ĐẠO</Link>
                    </li>
                </ul>
                {active === 1 && <OrganisationalStructureDiagram></OrganisationalStructureDiagram>}
                {active === 2 && <PostionCharTree></PostionCharTree>}
                {active === 3 && <SealAndSignature></SealAndSignature>}
                {active === 4 && <LeaderBiography></LeaderBiography>}
            </div>
        </>
    )
}