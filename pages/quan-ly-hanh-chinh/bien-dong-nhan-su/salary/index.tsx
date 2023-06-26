import React, { useState, useEffect, useRef } from "react";
import Select from 'react-select'
import styles from '../../thong-tin-nhan-su/tab/employeeManagement.module.css'
import BodyFrameFooter from "@/components/bodyFrame/bodyFrame_footer/bodyFrame_footer";

type SelectOptionType = { value: string, label: string }
export interface TabSalary {

}
export interface Employee {
    id: number;
    name: string;
    chucvu: string;
    phongban: string;
    mucluongbandau: string;
    mucluongtang: string;
    mucluonggiam: string;
    thoigianthaydoi: Date;
    quyetdinh: string;
}

export default function TabSalary({ children }: any) {

    const [activeButton, setActiveButton] = useState(0)
    const [employeeCount, setEmployeeCount] = useState(10)
    const [selectedOption, setSelectedOption] = useState<SelectOptionType | null>(null)

    const handleSelectionChange = (option: SelectOptionType | null, optionsArray: SelectOptionType[]) => {
        if (option) {
            setSelectedOption(option)
        }
    };

    const options = {
        chonnhanvien: [
            { value: 'Lê Hồng Anh', label: 'Lê Hồng Anh (KỸ THUẬT - ID:284670)' },
            { value: 'Phan Mạnh Hùng', label: 'Phan Mạnh Hùng (SÁNG TẠO - ID:153846)' },
        ],
    };

    useEffect(() => {
        setCurrentList(listCandidates.slice(0, employeeCount));
    }, [employeeCount]);


    function createArray(n: number): Employee[] {
        const obj: Employee = {
            id: 1,
            name: 'nguyen van a',
            chucvu: 'truong phong',
            phongban: 'bien tap',
            mucluongbandau: '10000 VNĐ',
            mucluongtang: '10000 VNĐ',
            mucluonggiam: '10000 VNĐ',
            thoigianthaydoi: new Date(),
            quyetdinh: 'oke'
        };
        return Array(n).fill(obj);
    }
    const listCandidates: Employee[] = createArray(4);

    const handleChoose = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = parseInt(event.target.value);
        setEmployeeCount(value)
        setCurrentList(listCandidates.slice(0, value));
        window.scrollTo(0, 0);
    }

    const totalPages = Math.ceil(listCandidates.length / employeeCount);

    const [currentList, setCurrentList] = useState<Employee[] | null>(null);

    const handleClick = (buttonIndex: number) => {
        setActiveButton(buttonIndex)
    }
    const tableContentRef = useRef<HTMLDivElement>(null);
    const currentPositionRef = useRef(0);

    const handleLeftClick = () => {
        if (tableContentRef.current) {
            // Update the scroll position and currentPositionRef
            const newPosition = currentPositionRef.current - 100;
            if (newPosition >= 0) {
                tableContentRef.current.scrollLeft = newPosition;
                currentPositionRef.current = newPosition;
            }
        }
    };

    const handleRightClick = () => {
        if (tableContentRef.current) {
            // Update the scroll position and currentPositionRef
            const newPosition = currentPositionRef.current + 100;
            if (newPosition <= tableContentRef.current.scrollWidth - tableContentRef.current.clientWidth) {
                tableContentRef.current.scrollLeft = newPosition;
                currentPositionRef.current = newPosition;
            }
        }
    };
    return (
        <>
            <div className={`${styles.tab_content}`}>
                <div className={`${styles.tab_pane}`}>
                    <div className={`${styles.body}`}>
                        <div className={`${styles.bg_search}`}>
                            <div className={`${styles.search_new_t}`}>
                                <div className={`${styles.div_no_pad} ${styles.div_no_pad_salary} `}>
                                    <Select
                                        defaultValue={selectedOption}
                                        onChange={(option) => handleSelectionChange(option, options.chonnhanvien)}
                                        options={options.chonnhanvien}
                                        placeholder="Chọn nhân viên"
                                        styles={{
                                            control: (baseStyles, state) => ({
                                                ...baseStyles,
                                                borderRadius: 8,
                                                fontSize: state.isFocused ? 15 : 15,
                                                minHeight: state.isFocused ? 20 : 20,
                                                width: state.isFocused ? 250 : 250,
                                                fontWeight: state.isFocused ? 600 : 600
                                            }),
                                        }}
                                    />
                                </div>
                                <div className={`${styles.div_no_pad} ${styles.div_no_pad_salary} `}>
                                    <input type="date" className={`${styles.search_date} ${styles.form_control}`} placeholder='Từ dd/mm/yyyy' />
                                </div>
                                <div className={`${styles.div_no_pad} ${styles.div_no_pad_salary}`}>
                                    <input type="date" className={`${styles.search_date} ${styles.form_control}`} placeholder='Từ dd/mm/yyyy' />
                                </div>
                                <div className={`${styles.div_no_pad_search}   `}>
                                    <a href="" className={`${styles.icon_search_top} ${styles.div_search_salary}`}>
                                        <img src="	https://phanmemnhansu.timviec365.vn/assets/images/t_images/t-icon-search-n.svg" alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={`${styles.member_list} ${styles.member_list_salary}`}>
                            <div className={`${styles.navigate_next} ${styles.navigate_next_salary}`} >
                                <div className={`${styles.turn} ${styles.turn_left}`} onClick={handleLeftClick}>
                                    <img src="	https://phanmemnhansu.timviec365.vn/assets/images/arrow_left.png" alt="" />
                                </div>
                                <div className={`${styles.turn} ${styles.turn_right}`} onClick={handleRightClick}>
                                    <img src="	https://phanmemnhansu.timviec365.vn/assets/images/arrow_right.png" alt="" />
                                </div>
                            </div>
                            <div className={`${styles.table_content}`} ref={tableContentRef}>
                                <table className={`${styles.table} ${styles.table_list}`} >
                                    <thead>
                                        <tr>
                                            <th>ID nhân viên</th>
                                            <th>Họ và tên</th>
                                            <th>Chức vụ</th>
                                            <th>Phòng ban</th>
                                            <th>Mức lương ban đầu</th>
                                            <th>Mức lương tăng</th>
                                            <th>Mức lương giảm</th>
                                            <th>Thời gian thay đổi</th>
                                            <th>Quyết định</th>
                                        </tr>
                                    </thead>
                                    <tbody className={`${styles.filter_body}`}>
                                        {currentList?.map((item, index) => (
                                            <tr key={index}>
                                                <td>{item.id}</td>
                                                <td>{item.name}</td>
                                                <td>{item.chucvu}</td>
                                                <td>{item.phongban}</td>
                                                <td>{item.mucluongbandau}</td>
                                                <td>{item.mucluongtang}</td>
                                                <td>{item.mucluonggiam}</td>
                                                <td>{item.thoigianthaydoi.toString().slice(0, 16)}</td>
                                                <td>{item.quyetdinh}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div id="choose_limit" className={`${styles.pull_left}`}>
                            <select name="" id="choose_limit_page" className={`${styles.form_control}`} onChange={(event) => handleChoose(event)}>
                                <option value="10"  >10</option>
                                <option value="20" >20</option>
                                <option value="30">30</option>
                            </select>
                        </div>
                        <div id="pagination" className={`${styles.pull_right}`}>
                            <div className={`${styles.pagging}`} style={{ textAlign: 'center' }}>
                                <nav>
                                    <ul className={`${styles.pagination}`}>
                                        {Array(totalPages).fill(null).map((value, index) => {
                                            if (index === 0) {
                                                return (
                                                    <li
                                                        className={styles.page_item}
                                                        onClick={() => handleClick(0)}
                                                        key={index}
                                                    >
                                                        <span
                                                            className={`${activeButton === 0 ? styles.active : ''} ${styles.page_link
                                                                }`}
                                                        >
                                                            1
                                                        </span>
                                                    </li>
                                                );
                                            } else if (index === totalPages - 1) {
                                                return (
                                                    <li
                                                        className={styles.page_item}
                                                        onClick={() => handleClick(totalPages - 1)}
                                                        key={index}
                                                    >
                                                        <span
                                                            className={`${activeButton === totalPages - 1 ? styles.active : ''} ${styles.page_link
                                                                }`}
                                                        >
                                                            Cuối
                                                        </span>
                                                    </li>
                                                );
                                            } else if (
                                                index === activeButton ||
                                                index === activeButton - 1 ||
                                                index === activeButton + 1
                                            ) {
                                                return (
                                                    <li
                                                        className={styles.page_item}
                                                        onClick={() => handleClick(index)}
                                                        key={index}
                                                    >
                                                        <span
                                                            className={`${activeButton === index ? styles.active : ''} ${styles.page_link
                                                                }`}
                                                        >
                                                            {index + 1}
                                                        </span>
                                                    </li>
                                                );
                                            }
                                        })}
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <BodyFrameFooter src="https://www.youtube.com/embed/sOGBYQHRlDA"></BodyFrameFooter>
                </div>
            </div>
        </>
    )
}