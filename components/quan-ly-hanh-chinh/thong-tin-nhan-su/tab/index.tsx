import React, { useState, useEffect, useRef } from "react";
import Select from 'react-select';
import styles from './employeeManagement.module.css'
import BodyFrameFooter from "@/components/bodyFrame/bodyFrame_footer/bodyFrame_footer";
import DetailCandidateList from "../detailModal";
import EditCandidateList from "../editModal";
import { EmployeeListData } from "@/pages/api/quan_ly_tuyen_dung";

type SelectOptionType = { label: string, value: string }
export interface TabEmployeeManagement {

}
export interface Employee {
    id: number;
    name: string;
    phongban: string;
    gioitinh: string;
    tinhtranghonnhan: string;
    vitri: string;
    bophan: string;
    chinhanh: string;
    thongtinlienhe_diachi: string;
    thongtinlienhe_sdt: number;
    thongtinlienhe_email: string;
    ngayvaocongty: string;
}

export default function TabEmployeeManagement({ children }: any) {

    const [activeButton, setActiveButton] = useState(0)
    const [employeeCount, setEmployeeCount] = useState(10)
    const [detailModal, setDetailModal] = useState(false)
    const [editModal, setEditmodal] = useState(false)

    // -- đóng mở modal --
    const handleOpenDetailModal = () => {
        setDetailModal(!detailModal)
    }

    const handleOpenEditModal = () => {
        setEditmodal(!editModal)
    }

    const handleCloseModal = () => {
        setDetailModal(false)
        setEditmodal(false)
    }


    // -- lấy dữ liệu và phân trang --

    const handleChoose = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = parseInt(event.target.value);
        setEmployeeCount(value)
        setCurrentList(EmpData?.data.slice(0, value));
        window.scrollTo(0, 0);
    }

    const [EmpData, setEmpData] = useState<any>(null)
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await EmployeeListData()
                setEmpData(response.data)
            } catch (error) {
                console.log({ error });
            }
        }
        fetchData()
    }, [])

    useEffect(() => {
        if (EmpData && EmpData.data) {
            setInitialList(EmpData.data.slice(0, 10));
            setCurrentList(EmpData.data.slice(0, 10));
            setIsLoading(false);
        }
    }, [EmpData]);

    useEffect(() => {
        if (EmpData && EmpData.data) {
            const startIndex = activeButton * employeeCount;
            const endIndex = startIndex + employeeCount;
            setCurrentList(EmpData.data.slice(startIndex, endIndex));
        }
    }, [activeButton]);



    const totalPages = Math.ceil(EmpData?.data.length / employeeCount);
    console.log({ totalPages });


    const [currentList, setCurrentList] = useState<Employee[] | null>(null);
    const [initialList, setInitialList] = useState<Employee[] | null>(null);

    const handleClick = (buttonIndex: number) => {
        setActiveButton(buttonIndex)
    }

    // -- di chuyển trái phải của bảng --
    const tableContentRef = useRef<HTMLDivElement>(null);
    const currentPositionRef = useRef(0);

    const handleLeftClick = () => {
        if (tableContentRef.current) {
            const newPosition = currentPositionRef.current - 100;
            if (newPosition >= 0) {
                tableContentRef.current.scrollLeft = newPosition;
                currentPositionRef.current = newPosition;
            }
        }
    };

    const handleRightClick = () => {
        if (tableContentRef.current) {
            const newPosition = currentPositionRef.current + 100;
            if (newPosition <= tableContentRef.current.scrollWidth - tableContentRef.current.clientWidth) {
                tableContentRef.current.scrollLeft = newPosition;
                currentPositionRef.current = newPosition;
            }
        }
    };

    // -- set options cho thẻ select --

    const [selectedOption, setSelectedOption] = useState<SelectOptionType | null>(null);

    const options = {
        chonnhanvien: [
            { value: 'Trần Văn Hưng', label: 'Trần Văn Hưng (KINH DOANH)' },
            { value: 'Trần Văn Đức', label: 'Trần Văn Đức (BIÊN TẬP)' },
        ],
        chonphongban: [
            { value: 'Ban giám đốc', label: 'BAN GIÁM ĐỐC' },
            { value: 'Kỹ thuật', label: 'KỸ THUẬT' },
            { value: 'Biên tập', label: 'BIÊN TẬP' },
        ],
    };

    const handleSelectionChange = (option: SelectOptionType | null, optionsArray: SelectOptionType[]) => {
        if (option) {
            setSelectedOption(option)
        }
    };


    return (
        <>
            <div className={`${styles.tab_content}`}>
                <div className={`${styles.tab_pane}`}>
                    <div className={`${styles.body}`}>
                        <div className={`${styles.recruitment}`}>
                            <a target="blank" href="https://chamcong.timviec365.vn/quan-ly-cong-ty/nhan-vien.html" className={`${styles.add}`} >
                                <img src={`/add.png`} alt="" />Thêm mới nhân viên
                            </a>
                        </div>
                        <div className={`${styles.bg_search}`}>
                            <div className={`${styles.search_new_t}`}>
                                <div className={`${styles.div_no_pad} `}>
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
                                                width: '100%',
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
                                        }}
                                    />
                                </div>
                                <div className={`${styles.div_no_pad} `}>
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
                                                width: '100%',
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
                                        }}
                                    />
                                </div>
                                <div className={`${styles.div_no_pad_search} `}>
                                    <a href="" className={`${styles.icon_search_top}`}>
                                        <img style={{ verticalAlign: '-webkit-baseline-middle' }} src={`/t-icon-search-n.svg`} alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={`${styles.export_excel} ${styles.export_excel_emp}`} style={{ paddingRight: 20, right: 0, position: 'absolute' }}>
                            <a href="" className={`${styles.t_excel}`} >
                                <img src={`/t-icon-excel.svg`} alt="" />
                                Xuất file Excel
                            </a>
                        </div>
                        <div className={`${styles.member_list}`}>
                            <div className={`${styles.navigate_next}`} >
                                <div className={`${styles.turn} ${styles.turn_left}`} onClick={handleLeftClick}>
                                    <img src={`/arrow_left.png`} alt="" />
                                </div>
                                <div className={`${styles.turn} ${styles.turn_right}`} onClick={handleRightClick}>
                                    <img src={`/arrow_right.png`} alt="" />
                                </div>
                            </div>
                            <div className={`${styles.table_content}`} ref={tableContentRef}>
                                <table className={`${styles.table} ${styles.table_list}`} >
                                    <thead>
                                        <tr>
                                            <th>ID nhân viên</th>
                                            <th>Họ và tên</th>
                                            <th>Phòng ban</th>
                                            <th>Giới tính</th>
                                            <th>Tình trạng hôn nhân</th>
                                            <th>Vị trí</th>
                                            <th>Bộ phận</th>
                                            <th>Chi nhánh</th>
                                            <th>Thông tin liên hệ</th>
                                            <th>Ngày vào công ty</th>
                                            <th>Tùy chỉnh</th>
                                        </tr>
                                    </thead>
                                    <tbody className={`${styles.filter_body}`}>
                                        {isLoading ? '' : currentList?.map((item: any, index: any) => (
                                            <tr key={index}>
                                                <td>{item._id}</td>
                                                <td>   <a href="">{item.userName}</a></td>
                                                <td>{item.phongban}</td>
                                                <td>{item.gioitinh}</td>
                                                <td>{item.tinhtranghonnhan}</td>
                                                <td>{item.vitri}</td>
                                                <td>{item.bophan}</td>
                                                <td>{item.chinhanh}</td>
                                                <td>
                                                    <p>Email:{item.email}</p>
                                                    <p>SDT: {item.phoneTK}</p>
                                                    <p>SDT: {item.thongtinlienhe_email}</p>
                                                </td>
                                                <td>{item.ngayvaocongty}</td>
                                                <td className={`${styles.r_t_top_right}`} style={{ position: 'relative' }}>
                                                    <img src={`	/icon-settting.png`} alt=" " />
                                                    <div className={`${styles.settings}`} style={{ width: '100%' }}>
                                                        <li onClick={handleOpenDetailModal}>Chi tiết</li>
                                                        {detailModal && <DetailCandidateList onCancel={handleCloseModal} id={index} />}
                                                        <li onClick={handleOpenEditModal}>Chỉnh sửa</li>
                                                        {editModal && <EditCandidateList onCancel={handleCloseModal} id={index} />}
                                                    </div>
                                                </td>
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
                                        {totalPages ? Array(totalPages).fill(null).map((value, index) => {
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
                                        }) : ''}
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <BodyFrameFooter src="https://www.youtube.com/embed/Z8qtJ75of3g"></BodyFrameFooter>
                </div>
            </div>
        </>
    )
}