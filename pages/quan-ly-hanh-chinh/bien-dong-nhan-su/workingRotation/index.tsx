import React, { useState, useEffect, useRef } from "react";
import Select from 'react-select'
import styles from '../../thong-tin-nhan-su/tab/employeeManagement.module.css'
import BodyFrameFooter from "@/components/bodyFrame/bodyFrame_footer/bodyFrame_footer";
import AddWorkingModal from "./addWorkingModal";

type SelectOptionType = { label: string, value: string }
export interface TabWorkingRotation {

}
export interface Employee {
    id: number;
    name: string;
    thoigianchuyencongtac: Date;
    lydo: string;
    phongbancu: string;
    phongbanmoi: string;
    tenconty: string;
    chucvucu: string;
    chucvumoi: string;
    tuychinh: string;
}

export default function TabWorkingRotation({ children }: any) {

    const [activeButton, setActiveButton] = useState(0)
    const [employeeCount, setEmployeeCount] = useState(10)
    const [selectedOption, setSelectedOption] = useState<SelectOptionType | null>(null);

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
        chonphongban: [
            { value: '  BAN GIÁM ĐỐC', label: 'BAN GIÁM ĐỐC' },
            { value: 'KỸ THUẬT', label: 'KỸ THUẬT' },
        ]
    };
    useEffect(() => {
        setCurrentList(listCandidates.slice(0, employeeCount));
    }, [employeeCount]);


    function createArray(n: number): Employee[] {
        const obj: Employee = {
            id: 1,
            name: 'nguyen van a',
            thoigianchuyencongtac: new Date(),
            lydo: 'không',
            phongbancu: '201',
            phongbanmoi: '305',
            tenconty: 'HHP',
            chucvucu: "PGĐ",
            chucvumoi: 'GĐ',
            tuychinh: "no"
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
    const [openModal, setOpenModal] = useState(0)
    const handleCloseModal = () => {
        setOpenModal(0);
    }
    return (
        <>
            <div className={`${styles.tab_content}`}>
                <div className={`${styles.tab_pane}`}>
                    <div className={`${styles.body} ${styles.body_planning}`}>
                        <div className={`${styles.recruitment}`}>
                            <button className={`${styles.add} ${styles.add_planning}`} onClick={() => setOpenModal(1)}>
                                <img style={{ verticalAlign: 'middle' }} src="	https://phanmemnhansu.timviec365.vn/assets/images/l_images/add.png" alt="" />Thêm mới luân chuyển công tác
                            </button>
                        </div>
                        {openModal === 1 && <AddWorkingModal onCancel={handleCloseModal}></AddWorkingModal>}
                        <div className={`${styles.bg_search}`}>
                            <div className={`${styles.search_new_t}`}>
                                <div className={`${styles.div_no_pad} ${styles.div_no_pad_planning} `}>
                                    <Select
                                        defaultValue={selectedOption}
                                        onChange={(option) => handleSelectionChange(option, options.chonnhanvien)}
                                        options={options.chonnhanvien}
                                        placeholder="Chọn nhân viên"
                                        styles={{
                                            control: (baseStyles, state) => ({
                                                ...baseStyles,
                                                borderRadius: 4,
                                                borderColor: "#4747477a",
                                                height: "auto",
                                                fontSize: state.isFocused ? 14 : 14,
                                                width: state.isFocused ? 225 : 225,
                                                fontWeight: state.isFocused ? 600 : 600,
                                                minHeight: 20
                                            }),
                                            valueContainer: (baseStyles) => ({
                                                ...baseStyles,
                                                height: 33.6,
                                            }),
                                            indicatorsContainer: (baseStyles) => ({
                                                ...baseStyles,
                                                height: 33.6,
                                            }),
                                            placeholder: (baseStyles) => ({
                                                ...baseStyles,
                                                color: "#444444",
                                            }),
                                        }}
                                    />
                                </div>
                                <div className={`${styles.div_no_pad} ${styles.div_no_pad_planning} `}>
                                    <Select
                                        defaultValue={selectedOption}
                                        onChange={(option) => handleSelectionChange(option, options.chonphongban)}
                                        options={options.chonphongban}
                                        placeholder="Chọn phòng ban"
                                        styles={{
                                            control: (baseStyles, state) => ({
                                                ...baseStyles,
                                                borderRadius: 4,
                                                borderColor: "#4747477a",
                                                height: "auto",
                                                fontSize: state.isFocused ? 14 : 14,
                                                width: state.isFocused ? 225 : 225,
                                                fontWeight: state.isFocused ? 600 : 600,
                                                minHeight: 20
                                            }),
                                            valueContainer: (baseStyles) => ({
                                                ...baseStyles,
                                                height: 33.6,
                                            }),
                                            indicatorsContainer: (baseStyles) => ({
                                                ...baseStyles,
                                                height: 33.6,
                                            }),
                                            placeholder: (baseStyles) => ({
                                                ...baseStyles,
                                                color: "#444444",
                                            }),
                                        }}
                                    />
                                </div>
                                <div className={`${styles.div_no_pad} ${styles.div_no_pad_planning} `}>
                                    <input type="date" className={`${styles.search_date} ${styles.form_control}`} placeholder='Từ dd/mm/yyyy' />
                                </div>
                                <div className={`${styles.div_no_pad} ${styles.div_no_pad_planning}`}>
                                    <input type="date" className={`${styles.search_date} ${styles.form_control}`} placeholder='Từ dd/mm/yyyy' />
                                </div>
                                <div className={`${styles.div_no_pad_search}   `}>
                                    <a href="" className={`${styles.icon_search_top} ${styles.div_search_salary} `}>
                                        <img style={{ verticalAlign: '-webkit-baseline-middle' }} src="	https://phanmemnhansu.timviec365.vn/assets/images/t_images/t-icon-search-n.svg" alt="" />
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
                                            <th>Thời gian chuyển công tác</th>
                                            <th>Lý do</th>
                                            <th>Phòng ban cũ</th>
                                            <th>Phòng ban mới</th>
                                            <th>Tên công ty</th>
                                            <th>Chức vụ cũ</th>
                                            <th>Chức vụ mới</th>
                                            <th>Tùy chỉnh</th>
                                        </tr>
                                    </thead>
                                    <tbody className={`${styles.filter_body}`}>
                                        {currentList?.map((item, index) => (
                                            <tr key={index}>
                                                <td>{item.id}</td>
                                                <td>{item.name}</td>
                                                <td>{item.thoigianchuyencongtac.toString().slice(0, 16)}</td>
                                                <td>{item.lydo}</td>
                                                <td>{item.phongbancu}</td>
                                                <td>{item.phongbanmoi}</td>
                                                <td>{item.tenconty}</td>
                                                <td>{item.chucvucu}</td>
                                                <td>{item.chucvumoi}</td>
                                                <td>{item.tuychinh}</td>
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
                    <BodyFrameFooter src="https://www.youtube.com/embed/e29o-TSnbeE"></BodyFrameFooter>
                </div>
            </div>
        </>
    )
}