import React, { useState, useEffect, useRef, MouseEventHandler, useCallback, useMemo } from "react";
import Select from 'react-select'
import styles from '../../thong-tin-nhan-su/tab/employeeManagement.module.css'
import BodyFrameFooter from "@/components/bodyFrame/bodyFrame_footer/bodyFrame_footer";
import { parseISO, format } from 'date-fns';
import AddPayrollModal from "./addPayrollModal";
import EditPayroll from "./editPayroll";
import DeletePayrollDowns from "./deletePayroll";
import { PayrollDownList } from "@/pages/api/bien_dong_nhan_su";
import { EmployeeList } from "@/pages/api/listNhanVien";
import { DepartmentList } from "@/pages/api/listPhongBan";

type SelectOptionType = { label: string, value: string }

export default function TabPayrollDown({ children }: any) {
    const [selectedOption, setSelectedOption] = useState<SelectOptionType | null>(null);
    const [openModal, setOpenModal] = useState(0)
    const [openEditModal, setOpenEditModal] = useState(false)
    const [openDeleteModal, setOpenDeleteModal] = useState(0)
    const [PayrollDownLists, setPayrollDownList] = useState<any>(null)
    const [EmpData, setEmpData] = useState<any>(null)
    const [departmentList, setDepartmentList] = useState<any>(null)
    const [isDep_id, setDep_id] = useState<any>("")
    const [isEmp_id, setEmp_id] = useState<any>("")
    const [isSeach, setSearch] = useState<any>(null)
    const [infoList, setInfoList] = useState<any>(null)


    useEffect(() => {
        const fetchData = async () => {
            try {
                const pagesize: any = 20
                const formData = new FormData();
                const fromDate = (document.getElementById('from_date') as HTMLInputElement)?.value
                const toDate = (document.getElementById('to_date') as HTMLInputElement)?.value
                formData.append('ep_id', isEmp_id)
                formData.append('current_dep_id', isDep_id)
                formData.append('fromDate', fromDate)
                formData.append('toDate', toDate)
                formData.append('pageSize', pagesize)
                const response = await PayrollDownList(formData)
                setPayrollDownList(response.data)
            } catch (error) {
                throw error
            }
        }
        fetchData()
    }, [isSeach])

    // -- lấy dữ liệu phòng ban --
    useEffect(() => {
        const fetchData = async () => {
            try {
                const comid: any = 1664
                const formData = new FormData()
                formData.append('com_id', comid)
                const response = await DepartmentList(formData)
                setDepartmentList(response.data)
            } catch (error) {
                throw error
            }
        }
        fetchData()
    }, [])

    // -- lấy dữ liệu nhân viên --
    useEffect(() => {
        const fetchData = async () => {
            try {
                const formData = new FormData();
                const comid: any = 1664
                const response = await EmployeeList(formData)
                setEmpData(response.data)
            } catch (error) {
                console.log({ error });
            }
        }
        fetchData()
    }, [])

    const handleSelectChange = (selectedOption: SelectOptionType | null, setState: any) => {
        setSelectedOption(selectedOption);
        if (selectedOption) {
            setState(selectedOption.value); // Set giá trị đã chọn vào state setIsDep_id
        }
    };

    const handleSearch = useCallback(() => {
        setSearch({ isDep_id, isEmp_id });
    }, [isDep_id, isEmp_id]);

    const handleOpenEdit = (item: any) => {
        setOpenEditModal(true);
        setInfoList(item)

    }

    const handleCloseModal = () => {
        setOpenModal(0)
        setOpenEditModal(false)
        setOpenDeleteModal(0)
    }

    const chonphongbanOptions = useMemo(
        () =>
            departmentList?.data?.map((department: any) => ({
                value: department.dep_id,
                label: department.dep_name,
            })),
        [departmentList?.data]
    );

    const chonnhanvienOptions = useMemo(
        () =>
            EmpData?.data?.map((emp: any) => ({
                value: emp.idQLC,
                label: emp.userName,
            })),
        [EmpData?.data]
    );

    const options = {
        chonnhanvien: chonnhanvienOptions,
        chonphongban: chonphongbanOptions
    };

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

    return (
        <>
            <div className={`${styles.tab_content}`}>
                <div className={`${styles.tab_pane}`}>
                    <div className={`${styles.body} ${styles.body_planning}`}>
                        <div className={`${styles.recruitment}`}>
                            <button className={`${styles.add} ${styles.add_planning}`} onClick={() => setOpenModal(1)}>
                                <img style={{ verticalAlign: 'middle' }} src={`/add.png`} alt="" />Thêm mới giảm biên chế
                            </button>
                            <div className={`${styles.export_excel}`} style={{ paddingRight: 20, right: 0, position: 'absolute' }}>
                                <a href="" className={`${styles.t_excel} ${styles.t_excel_payroll}`} >
                                    <img src={`/t-icon-excel.svg`} alt="" />
                                    Xuất file Excel
                                </a>
                            </div>
                        </div>
                        {openModal === 1 && <AddPayrollModal onCancel={handleCloseModal}></AddPayrollModal>}
                        {openEditModal === true ? <EditPayroll onCancel={handleCloseModal} infoList={infoList}></EditPayroll> : ''}
                        {openDeleteModal !== 0 && <DeletePayrollDowns onCancel={handleCloseModal} ep_id={openDeleteModal} />}
                        <div className={`${styles.bg_search}`}>
                            <div className={`${styles.search_new_t}`}>
                                <div className={`${styles.div_no_pad} ${styles.div_no_pad_planning} `}>
                                    <Select
                                        defaultValue={selectedOption}
                                        onChange={(option) => handleSelectChange(option, setEmp_id)}
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
                                        onChange={(option) => handleSelectChange(option, setDep_id)}
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
                                            placeholder: (baseStyles) => ({
                                                ...baseStyles,
                                                color: "#444444",
                                            }),
                                        }}
                                    />
                                </div>
                                <div className={`${styles.div_no_pad} ${styles.div_no_pad_planning} `}>
                                    <input type="date" id="from_date" className={`${styles.search_date} ${styles.form_control}`} placeholder='Từ dd/mm/yyyy' />
                                </div>
                                <div className={`${styles.div_no_pad} ${styles.div_no_pad_planning}`}>
                                    <input type="date" id="to_date" className={`${styles.search_date} ${styles.form_control}`} placeholder='Từ dd/mm/yyyy' />
                                </div>
                                <div className={`${styles.div_no_pad_search}   `}>
                                    <a className={`${styles.icon_search_top} ${styles.div_search_salary} `} onClick={handleSearch}>
                                        <img style={{ verticalAlign: '-webkit-baseline-middle' }} src={`/t-icon-search-n.svg`} alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={`${styles.member_list} ${styles.member_list_salary}`}>
                            <div className={`${styles.navigate_next} ${styles.navigate_next_salary}`} >
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
                                            <th>Ca nghỉ</th>
                                            <th>Phòng ban</th>
                                            <th>Chức vụ</th>
                                            <th>Giảm biên chế/nghỉ việc</th>
                                            <th>Ngày bắt đầu nghỉ</th>
                                            <th>Tùy chỉnh</th>
                                        </tr>
                                    </thead>
                                    <tbody className={`${styles.filter_body}`}>
                                        {PayrollDownLists?.data?.map((item: any, index: any) => (
                                            <tr key={index}>
                                                <td>{item.ep_id}</td>
                                                <td>{item.ep_name}</td>
                                                <td>{item.shift_name}</td>
                                                <td>{item.dep_name}</td>
                                                <td>{item.position_name}</td>
                                                <td>{item.type === 2 ? 'Nghỉ việc' : 'Giảm biên chế'}</td>
                                                <td>{format(parseISO(item.time), 'dd-MM-yyyy')}</td>
                                                <td>
                                                    <a onClick={() => handleOpenEdit(item)} className={`${styles.btn_edit}`}><img src={`/icon_edit.svg`} alt="" /></a>
                                                    <a onClick={() => setOpenDeleteModal(item.ep_id)} className={`${styles.btn_delete}`}><img src={`/icon_delete.svg`} alt="" /></a>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <BodyFrameFooter src="https://www.youtube.com/embed/2uVrd-EFEXs"></BodyFrameFooter>
                </div>
            </div>
        </>
    )
}