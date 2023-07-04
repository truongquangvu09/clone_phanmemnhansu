import React, { useState, useEffect } from "react";
import styles from './organisationalStructureDiagram.module.css'
import BodyFrameFooter from "@/components/bodyFrame/bodyFrame_footer/bodyFrame_footer";
import dynamic from "next/dynamic";
const StyledTreeExample = dynamic(() => import("../organisationalStructureDiagram/tree/index"), {
    ssr: false
})
export default function OrganisationalStructureDiagram() {
    const [click, setClick] = useState(false)
    const [openModal, setOpenModal] = useState(0)
    const handleClick = () => {
        setClick(prevState => !prevState)
    }

    return (
        <>
            <div className={`${styles.member_list}`}>
                <div className={`${styles.recruitment2}`}>
                    <div className={`${styles.recruitment2_3}`}>
                        <button className={`${styles.adds}`} onClick={handleClick}>
                            <picture>
                                <img style={{ verticalAlign: 'middle' }} src="	https://phanmemnhansu.timviec365.vn/assets/images/l_images/add.png" alt="" />
                                Thêm mới
                            </picture>
                        </button>
                        {click === true && (<div className={`${styles.settings} ${styles.lefftset}`} >
                            <li >Thêm mới công ty con</li>
                            <hr style={{ marginTop: 0, marginBottom: 0 }} />
                            <li >Thêm mới phòng ban</li>
                            <hr style={{ marginTop: 0, marginBottom: 0 }} />
                            <li >Thêm mới tổ</li>
                            <hr style={{ marginTop: 0, marginBottom: 0 }} />
                            <li >Thêm mới nhóm</li>
                        </div>)}
                    </div>
                </div>
                <div className={`${styles.genealogy_body} ${styles.genealogy_scroll}`}>
                    <div className={`${styles.genealogy_tree}`}>
                        <StyledTreeExample></StyledTreeExample>
                    </div>
                </div>
                <BodyFrameFooter src="https://www.youtube.com/embed/38OeJOTrTAE"></BodyFrameFooter>
            </div>
        </>
    )
}