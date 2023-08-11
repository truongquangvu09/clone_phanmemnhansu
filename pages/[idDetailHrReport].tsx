import React, { useEffect, useState, useMemo, useCallback } from "react";
import styles from "./bao-cao-nhan-su/detailHrReport.module.css"
import Select from 'react-select';
import { useRouter } from "next/router";
import { parseISO, format } from "date-fns";
import MyPagination from "@/components/pagination/Pagination";
import Image from "next/image";
import { DetailReport } from "./api/bao-cao-nhan-su/HrReportService";
import { DepartmentList } from "@/pages/api/listPhongBan";
import { PostionCharData } from '@/pages/api/co_cau_to_chuc';
import GetComId from "@/components/getComID";

type SelectOptionType = { label: string, value: any }

const Selects = ({ selectedOption, onChange, setState, option, placeholder }: any) => (
    <Select
        defaultValue={selectedOption}
        onChange={(option) => onChange(option, setState)}
        options={option}
        placeholder={placeholder}
        styles={{
            control: (baseStyles, state) => ({
                ...baseStyles,
                borderColor: state.isFocused ? "#4c5bd4" : "#4c5bd4",
                border: "none",
                backgroundColor: "#4c5bd4",
                height: "auto",
                fontSize: state.isFocused ? 14 : 14,
                width: "100%",
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
                color: "white",
            }),
            placeholder: (baseStyles) => ({
                ...baseStyles,
                color: "while"
            }),
            indicatorSeparator: (baseStyles) => ({
                ...baseStyles,
                backgroundColor: "#4c5bd4"
            }),
            menu: (baseStyles) => ({
                ...baseStyles,
                color: "black",
                zIndex: 10000
            })
        }}
    />
)

export default function DetailHrReport({ children }: any) {

    const [selectedOption, setSelectedOption] = useState<SelectOptionType | null>(null);
    const [isReportList, setReportList] = useState<any>(null)
    const [currentPage, setCurrentPage] = useState<any>(1);
    const [isGender, setGender] = useState<any>("");
    const [isType, setType] = useState<any>("");
    const [departmentList, setDepartmentList] = useState<any>(null)
    const [PostionCharDatas, setPosttionCharData] = useState<any>(null)
    const [isDep_id, setDep_id] = useState<any>("")
    const [isPosition_id, setPosition_id] = useState<any>("")
    const [isGroup_id, setGroup_id] = useState<any>("")
    const [isTeam_id, setTeam_id] = useState<any>("")
    const [isMaried, setMaried] = useState<any>("")
    const [isBirthday, setBirthday] = useState<any>("")
    const [isTitle, setTitle] = useState<any>("")

    const router = useRouter();
    const link: any = router.asPath.split('/').pop();
    const index: number = link.indexOf('?');
    const link_cut: any = index !== -1 ? link.slice(0, index) + '.html' : link + '.html';
    const comid: any = GetComId()

    useEffect(() => {
        if (link.includes('gender=')) {
            const isGenders = link.split("=").pop();
            setGender(isGenders)
            setTitle(parseInt(isGenders) === 1 ? "Nam" : "Nữ")

        } else if (link.includes('type')) {
            const isTypes = link.split("=").pop();
            setType(isTypes)
        }
    }, [link])

    useEffect(() => {

        const fetchData = async () => {
            try {
                const formData = new FormData();
                formData.append("depId", isDep_id);
                formData.append("positionId", isPosition_id);
                formData.append("groupId", isGroup_id);
                formData.append("teamId", isTeam_id);
                formData.append("birthday", isBirthday);
                formData.append("married", isMaried);
                formData.append("page", currentPage);
                if (link.includes("type=") || link.includes("gender=")) {
                    if (link_cut !== "[idDetailHrReport].html") {
                        formData.append("link", link_cut);
                        if (link.includes("gender=") && link_cut && isGender !== "") {
                            formData.append("gender", isGender);
                            const response = await DetailReport(formData);
                            setReportList(response?.data);

                        }
                        if (link.includes("type=") && link_cut && isType !== "") {
                            formData.append("type", isType);
                            const response = await DetailReport(formData);
                            setReportList(response?.data);

                        }
                    }
                } else {
                    if (link_cut !== "[idDetailHrReport].html") {
                        ;
                        formData.append("link", link_cut);
                        const response = await DetailReport(formData);
                        setReportList(response?.data);

                    }
                }

            } catch (error) {
                throw error
            }
        }
        fetchData()

    }, [link_cut, isGender, isType, link, isDep_id, isPosition_id, isGroup_id, isTeam_id, isBirthday, isMaried, currentPage])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const formData = new FormData()
                formData.append('com_id', comid)
                const response = await DepartmentList(formData)
                setDepartmentList(response?.data)
            } catch (error) {
                throw error
            }
        }
        fetchData()
    }, [])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await PostionCharData()
                setPosttionCharData(response?.data)
            } catch (error) {

            }
        }
        fetchData()
    }, [])

    const handleSelectChange = (
        selectedOption: SelectOptionType | null,
        setState: any
    ) => {
        setSelectedOption(selectedOption);
        if (selectedOption) {
            setState(selectedOption.value);
        }
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const handleBack = () => {
        router.back()
    }

    const chonphongbanOptions = useMemo(
        () =>
            departmentList?.data?.map((department: any) => ({
                value: department.dep_id,
                label: department.dep_name,
            })),
        [departmentList?.data]
    );
    const chonchucvuOptions = useMemo(
        () =>
            PostionCharDatas &&
            PostionCharDatas?.data?.flat()?.map((pos: any) => ({
                value: pos.positionId,
                label: pos.positionName
            })),
        [PostionCharDatas]
    );
    const currentYear: number = new Date().getFullYear();
    const startYear: number = 1970;
    const chonnamsinh: SelectOptionType[] = [];

    for (let year: number = startYear; year <= currentYear; year++) {
        chonnamsinh.push({ value: year, label: year.toString() });
    }

    const options = {
        chonphongban: chonphongbanOptions,
        chonchucvu: chonchucvuOptions,
        chonnhom: [{ value: 1, label: "Nhóm 1" }],
        chonto: [{ value: 1, label: "Tổ 1" }],
        chongioitinh: [
            { value: 1, label: "Nam" },
            { value: 2, label: "Nữ" },
            { value: 3, label: "Giới tính khác" },
        ],
        chonnamsinh: chonnamsinh,
        tinhtranghonnhan: [
            { value: 1, label: "Đã có gia đình" },
            { value: 2, label: "Độc thân" },

        ],
    };
    return (
        <>
            <div className={`${styles.wrapper}`}>
                <div className={`${styles.body}`}>
                    <div className={`${styles.d_back}`}>
                        <div className={`${styles.d_info}`}>
                            <a style={{ cursor: "pointer" }} onClick={handleBack} className={`${styles.d_img_back}`}>
                                <Image style={{ verticalAlign: 'middle' }} src={"arrow-left.svg"} width={17} height={15} alt="" />
                            </a>
                            <p className={`${styles.d_text_info}`}>
                                <a onClick={handleBack} style={{ fontWeight: 600, color: '#337ab7', cursor: 'pointer' }} >Báo cáo nhân sự </a>/ {link}
                            </p>
                        </div>
                    </div>
                    <div className={`${styles.member_list}`}>
                        <div className={`${styles.table_content}`}>
                            <table className={`${styles.table} ${styles.table_list}`}>
                                <thead>
                                    <tr style={{ height: 70 }}>
                                        <th>STT</th>
                                        <th>Id</th>
                                        <th>Họ và tên</th>
                                        <th><Selects
                                            selectedOption={selectedOption}
                                            onChange={handleSelectChange}
                                            setState={setDep_id}
                                            option={options.chonphongban}
                                            placeholder="Chọn phòng ban"
                                        /></th>
                                        <th><Selects
                                            selectedOption={selectedOption}
                                            onChange={handleSelectChange}
                                            setState={setPosition_id}
                                            option={options.chonchucvu}
                                            placeholder="Chọn chức vụ"
                                        /></th>
                                        <th><Selects
                                            selectedOption={selectedOption}
                                            onChange={handleSelectChange}
                                            setState={setGroup_id}
                                            option={options.chonnhom}
                                            placeholder="Nhóm"
                                        /></th>
                                        <th><Selects
                                            selectedOption={selectedOption}
                                            onChange={handleSelectChange}
                                            setState={setTeam_id}
                                            option={options.chonto}
                                            placeholder="Tổ"
                                        /></th>
                                        <th>Giới tính</th>
                                        <th><Selects
                                            selectedOption={selectedOption}
                                            onChange={handleSelectChange}
                                            setState={setBirthday}
                                            option={options.chonnamsinh}
                                            placeholder="Chọn năm sinh"
                                        /></th>
                                        <th><Selects
                                            selectedOption={selectedOption}
                                            onChange={handleSelectChange}
                                            setState={setMaried}
                                            option={options.tinhtranghonnhan}
                                            placeholder="Tình trạng hôn nhân"
                                        /></th>
                                        <th>Thông tin liên hệ</th>
                                        <th>Ngày bắt đầu làm việc</th>
                                        <th>Kinh nghiệm làm việc</th>
                                    </tr>
                                </thead>
                                <tbody className={`${styles.filter_body}`}>
                                    {isReportList?.data?.map((item: any, index: any) => (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{item?.idQLC} </td>
                                            <td>{item?.userName}</td>
                                            <td>{item?.dep}</td>
                                            <td>{item?.chucvu}</td>
                                            <td>Chưa cập nhật</td>
                                            <td>Chưa cập nhật</td>
                                            <td>{item?.gender === 1 ? "Nam" : "Nữ"}</td>
                                            {item?.birthday ? <td> {format(
                                                parseISO(new Date(item?.birthday * 1000).toISOString()),
                                                "yyyy-MM-dd"
                                            )}</td> : <td>Chưa cập nhật</td>}
                                            <td>{item?.married === 1
                                                ? "Đã có gia đình"
                                                : item?.married === 2
                                                    ? "Độc thân"
                                                    : "Chưa cập nhật"}
                                            </td>
                                            <td>
                                                <p>Email:{item?.emailContact}</p>
                                                <p>SDT: {item?.phone}</p>
                                                <p>Địa chỉ: {item.phone}</p>
                                            </td>
                                            {item?.start_working_time ? <td>{format(
                                                parseISO(new Date(item?.start_working_time * 1000).toISOString()),
                                                "yyyy-MM-dd"
                                            )}</td> : <td>Chưa cập nhật</td>}
                                            <td>{item?.chucvu}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className={`${styles.pagination}`} >
                    <MyPagination
                        current={currentPage}
                        total={isReportList?.totalCount}
                        pageSize={10}
                        onChange={handlePageChange}
                    />
                </div>
            </div>
        </>
    )
}