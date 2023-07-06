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
                            <li >
                                <a href="https://chamcong.timviec365.vn/quan-ly-cong-ty/cong-ty-con.html" target="blank">Thêm mới công ty con</a>
                            </li>
                            <hr style={{ marginTop: 0, marginBottom: 0 }} />
                            <li >
                                <a href="https://chamcong.timviec365.vn/quan-ly-cong-ty/phong-ban.html" target="blank">Thêm mới phòng ban</a>
                            </li>
                            <hr style={{ marginTop: 0, marginBottom: 0 }} />
                            <li >
                                <a href="https://chamcong.timviec365.vn/quan-ly-cong-ty/ql-ds-to.html" target="blank">Thêm mới tổ</a>
                            </li>
                            <hr style={{ marginTop: 0, marginBottom: 0 }} />
                            <li >
                                <a href="https://chamcong.timviec365.vn/quan-ly-cong-ty/ql-ds-nhom.html" target="blank">Thêm mới nhóm</a>
                            </li>
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