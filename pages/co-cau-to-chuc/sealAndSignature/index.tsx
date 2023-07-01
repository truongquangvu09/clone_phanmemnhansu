import React, { useState, useEffect, useRef, MouseEventHandler } from "react";
import Select from 'react-select'
import styles from './sealAndSignature.module.css'
import BodyFrameFooter from "@/components/bodyFrame/bodyFrame_footer/bodyFrame_footer";
import AddSealModal from "./addSealModal";

type SelectOptionType = { label: string, value: string }
export interface TabPayrollDown {

}
export interface Employee {
    stt: number;
    id: number;
    name: string;
    chucvu: string;
    phongban: string;
    mauchuki: any
}

export default function SealAndSignature({ children }: any) {

    const [activeButton, setActiveButton] = useState(0)
    const [employeeCount, setEmployeeCount] = useState(10)
    const [selectedOption, setSelectedOption] = useState<SelectOptionType | null>(null);
    const [openModal, setOpenModal] = useState(0)
    const [openEditModal, setOpenEditModal] = useState(false)

    function handleUploadClick(event: React.MouseEvent<HTMLAnchorElement>) {
        event.preventDefault();
        const uploadInput = document.getElementById('upload_file') as HTMLInputElement;
        if (uploadInput) {
            uploadInput.click();
        }
    }

    function handleEditClick(event: React.MouseEvent<HTMLAnchorElement>) {
        event.preventDefault();
        const uploadInput = document.getElementById('edit_file') as HTMLInputElement;
        if (uploadInput) {
            uploadInput.click();
        }
    }

    const handleSelectionChange = (option: SelectOptionType | null, optionsArray: SelectOptionType[]) => {
        if (option) {
            setSelectedOption(option)
        }
    };

    const handleCloseModal = () => {
        setOpenModal(0)
        setOpenEditModal(false)
    }

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
            stt: 1,
            id: 1,
            name: 'nguyen van a',
            chucvu: 'PGD',
            phongban: '201',
            mauchuki: File
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

    const handleOpenEdit: MouseEventHandler<HTMLAnchorElement> = (event) => {
        event.preventDefault();
        setOpenEditModal(true);
    }
    return (
        <>
            <div className={`${styles.tab_content}`}>
                <div className={`${styles.tab_pane}`}>
                    <div className={`${styles.body} ${styles.body_planning}`}>
                        <div className={`${styles.recruitment}`}>
                            <div className={`${styles.body_header_left}`}>
                                <p style={{ color: '#4C5BD4', fontWeight: 600, fontSize: 14 }}>Danh sách thành viên được sử dụng con dấu công ty</p></div>
                            <div className={`${styles.body_header_left}`}>
                                <button className={`${styles.add} ${styles.add_planning}`} onClick={() => setOpenModal(1)}>
                                    <img src="	https://phanmemnhansu.timviec365.vn/assets/images/l_images/add.png" alt="" />Thêm mới
                                </button></div>
                        </div>
                        {openModal === 1 && <AddSealModal onCancel={handleCloseModal}></AddSealModal>}

                        <div className={`${styles.bg_search}`}>
                            <div className={`${styles.search_new_t}`}>
                                <div className={`${styles.div_no_pad} ${styles.div_no_pad_planning} `}>
                                    <input type="text" className={`${styles.search_date} ${styles.form_control}`} placeholder='Nhập ID nhân viên' />
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
                                                borderRadius: 8,
                                                fontSize: state.isFocused ? 15 : 15,
                                                minHeight: state.isFocused ? 20 : 20,
                                                width: state.isFocused ? 320 : 320,
                                                fontWeight: state.isFocused ? 600 : 600
                                            }),
                                        }}
                                    />
                                </div>
                                <div className={`${styles.div_no_pad_search}   `}>
                                    <a href="" className={`${styles.icon_search_top} ${styles.div_search_salary} `}>
                                        <img src="	https://phanmemnhansu.timviec365.vn/assets/images/t_images/t-icon-search-n.svg" alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={`${styles.member_list} ${styles.member_list_salary}`}>
                            <div className={`${styles.table_content}`} ref={tableContentRef}>
                                <table className={`${styles.table} ${styles.table_list}`} >
                                    <thead>
                                        <tr>
                                            <th>STT</th>
                                            <th>ID</th>
                                            <th>Họ và tên</th>
                                            <th>Chức vụ</th>
                                            <th>Phòng ban</th>

                                        </tr>
                                    </thead>
                                    <tbody className={`${styles.filter_body}`}>
                                        {currentList?.map((item, index) => (
                                            <tr key={index}>
                                                <td>{item.stt}</td>
                                                <td>{item.id}</td>
                                                <td>{item.name}</td>
                                                <td>{item.chucvu}</td>
                                                <td>{item.phongban}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.body} ${styles.body_planning}`}>
                        <div className={`${styles.recruitment}`}>
                            <div className={`${styles.body_header_left}`}>
                                <p style={{ color: '#4C5BD4', fontWeight: 600, fontSize: 14 }}>Danh sách mẫu chữ kí</p></div>
                        </div>
                        <div className={`${styles.bg_search}`}>
                            <div className={`${styles.search_new_t}`}>
                                <div className={`${styles.div_no_pad} ${styles.div_no_pad_planning} `}>
                                    <input type="text" className={`${styles.search_date} ${styles.form_control}`} placeholder='Nhập ID nhân viên' />
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
                                                borderRadius: 8,
                                                fontSize: state.isFocused ? 15 : 15,
                                                minHeight: state.isFocused ? 20 : 20,
                                                width: state.isFocused ? 320 : 320,
                                                fontWeight: state.isFocused ? 600 : 600
                                            }),
                                        }}
                                    />
                                </div>
                                <div className={`${styles.div_no_pad_search}   `}>
                                    <a href="" className={`${styles.icon_search_top} ${styles.div_search_salary} `}>
                                        <img src="	https://phanmemnhansu.timviec365.vn/assets/images/t_images/t-icon-search-n.svg" alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={`${styles.member_list} ${styles.member_list_salary}`}>
                            <div className={`${styles.table_content}`} ref={tableContentRef}>
                                <table className={`${styles.table} ${styles.table_list}`} >
                                    <thead>
                                        <tr>
                                            <th>STT</th>
                                            <th>ID</th>
                                            <th>Họ và tên</th>
                                            <th>Chức vụ</th>
                                            <th>Phòng ban</th>
                                            <th>Mẫu chữ kí</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody className={`${styles.filter_body}`}>
                                        {currentList?.map((item, index) => (
                                            <tr key={index}>
                                                <td>{item.stt}</td>
                                                <td>{item.id}</td>
                                                <td>{item.name}</td>
                                                <td>{item.chucvu}</td>
                                                <td>{item.phongban}</td>
                                                <td>
                                                    <label className={`${styles.custom_file_upload}`}><a href="" onClick={handleUploadClick}>Tải lên chữ ký</a></label>
                                                    <input id="upload_file" data-id="284670" accept="image/*" className={`${styles.upload_file}`} type="file"></input>
                                                </td>
                                                <td>
                                                    <label htmlFor="" className={`${styles.edit_stamp}`} >
                                                        <a href="" onClick={handleEditClick} style={{ paddingRight: 10 }}>
                                                            <img src="https://phanmemnhansu.timviec365.vn/assets/images/icon-menu-vn/icon_edit.svg" alt="" />
                                                        </a>
                                                    </label>
                                                    <input type="file" className={`${styles.upload_file}`} id="edit_file" accept="application/pdf, image/*" />
                                                    <a href="" className={`${styles.btn_delete}`} >
                                                        <img src="https://phanmemnhansu.timviec365.vn/assets/images/icon-menu-vn/icon_delete.svg" alt="" />
                                                    </a>
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
                    <BodyFrameFooter src="https://www.youtube.com/embed/GWoAGsEzXWg"></BodyFrameFooter>
                </div>
            </div>
        </>
    )
}