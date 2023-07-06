import React, { useEffect, useState } from "react";
import styles from "./securityInfomation.module.css";

export default function SecurityInfomation() {

    const [dropdownItem, setDropdownItem] = useState(-1)
    const handleOpenDropdown = (index: number) => {
        if (dropdownItem === index) {
            setDropdownItem(-1);
            // Close the dropdown by setting dropdownItem to null
        } else {
            setDropdownItem(index)
        }
    }
    const [dataSlice, setDataSlice] = useState<any>([])
    console.log({ dataSlice });

    const handleSeeMore = () => {
        setDataSlice(data)
    }

    useEffect(() => {
        setDataSlice(data.slice(0, 2));
    }, []);
    const data = [
        {
            img: 'https://phanmemnhansu.timviec365.vn//assets/images/l_images/icon_pc.svg',
            text: 'Google Chrome 95.0.4638.69 windows · Hanoi, Vietnam · 2021-11-17 16:59:27'

        },
        {
            img: 'https://phanmemnhansu.timviec365.vn//assets/images/l_images/icon_pc.svg',
            text: 'Google Chrome 95.0.4638.69 windows · Hanoi, Vietnam · 2021-11-17 16:59:27'

        },
        {
            img: 'https://phanmemnhansu.timviec365.vn//assets/images/l_images/icon_pc.svg',
            text: 'Google Chrome 95.0.4638.69 windows · Hanoi, Vietnam · 2021-11-17 16:59:27'

        },
        {
            img: 'https://phanmemnhansu.timviec365.vn//assets/images/l_images/icon_pc.svg',
            text: 'Google Chrome 95.0.4638.69 windows · Hanoi, Vietnam · 2021-11-17 16:59:27'

        },
        {
            img: 'https://phanmemnhansu.timviec365.vn//assets/images/l_images/icon_pc.svg',
            text: 'Google Chrome 95.0.4638.69 windows · Hanoi, Vietnam · 2021-11-17 16:59:27'

        },
    ]



    return (
        <>
            <div className={`${styles.wrapper}`}>
                <div className={`${styles.tab_content}`}>
                    <div className={`${styles.tab_pane}`}>
                        <div className={`${styles.title_menu2}`}>Thông tin bảo mật</div>
                        <div className={`${styles.menu2_content}`} style={{ height: 173 }}>
                            {dataSlice.map((item: any, index: any) => (
                                <div key={index}>
                                    <div className={`${styles.menu2_padding}`}>
                                        <div className={`${styles.menu2_item1}`}>
                                            <img className={`${styles.l_img_pc}`} src={item.img} alt="icon" />
                                        </div>
                                        <div className={`${styles.menu2_item2}`}>{item.text}</div>
                                        <div className={`${styles.menu2_item3}`}>
                                            <div className={`${styles.btn_group}`}>
                                                <button type="button" className={`${styles.dropdown_toggle} ${styles.btn}`} onClick={() => handleOpenDropdown(index)}>
                                                    <img className={`${styles.l_img_pc}`} src="	https://phanmemnhansu.timviec365.vn//assets/images/l_images/icon_luachon.svg" alt="icon" />
                                                </button>
                                                {dropdownItem === index && (
                                                    <div className={`${styles.dropdown_menu}`}>
                                                        <button type="button" className={`${styles.dropdown_item}`}>Không phải bạn ?</button>
                                                        <div className={`${styles.l_hr}`}></div>
                                                        <button type="button" className={`${styles.dropdown_item}`}>Đăng xuất</button>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <div className={`${styles.background_menu2}`}>
                                <div className={`${styles.backgroud_menu2_item1}`}>
                                    <div className={`${styles.menu2_content_item}`} onClick={handleSeeMore}>
                                        <img className={`${styles.l_img_pc}`} src="	https://phanmemnhansu.timviec365.vn//assets/images/l_images/icon_down.svg" alt="" /> Xem thêm
                                    </div>
                                </div>
                            </div>
                            <div className={`${styles.thugon1}`} style={{ display: 'block' }}>
                                <img className={`${styles.l_img_pc}`} src="https://phanmemnhansu.timviec365.vn//assets/images/l_images/icon_top.svg" alt="icon" />Ẩn bớt
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
