import React, { useState } from "react";
import styles from './candidateRepo.module.css'
import Select from 'react-select';
import { useRouter } from "next/router";

type SelectOptionType = { label: string, value: string }

export default function CandidateRepo({ children }: any) {

    const [selectedOption, setSelectedOption] = useState<SelectOptionType | null>(null);
    const router = useRouter()
    const handleClickDetail = (item: number, event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        if (typeof item === "number" && !isNaN(item)) {
            router.push(
                `/quan-ly-tuyen-dung/danh-sach-ung-vien/chi-tiet-ung-vien/${item}`
            );
        }
    };



    const listCandidates = [
        {
            id: 1,
            name: 'nguyen van a',
            email: 'nguyenvana@gmail.com',
            sdt: 1231242,
            nguonnhanCv: 'nguyen van b',
            vitriungtuyen: 'nhan vien chinh thuc',
            matinungtuyen: 'TD189',
            maquytrinhtuyendungapdung: 'QTTD0',
            thoigianguihoso: '15:28 17/06/2023',
            tailencvtuungvien: 'chua tai len cv'
        },
        {
            id: 2,
            name: 'nguyen van a',
            email: 'nguyenvana@gmail.com',
            sdt: 1231242,
            nguonnhanCv: 'nguyen van b',
            vitriungtuyen: 'nhan vien chinh thuc',
            matinungtuyen: 'TD189',
            maquytrinhtuyendungapdung: 'QTTD0',
            thoigianguihoso: '15:28 17/06/2023',
            tailencvtuungvien: 'chua tai len cv'
        },
        {
            id: 3,
            name: 'nguyen van a',
            email: 'nguyenvana@gmail.com',
            sdt: 1231242,
            nguonnhanCv: 'nguyen van b',
            vitriungtuyen: 'nhan vien chinh thuc',
            matinungtuyen: 'TD189',
            maquytrinhtuyendungapdung: 'QTTD0',
            thoigianguihoso: '15:28 17/06/2023',
            tailencvtuungvien: 'cv_271922.jpg (Tải xuống)   '
        },
        {
            id: 4,
            name: 'nguyen van a',
            email: 'nguyenvana@gmail.com',
            sdt: 1231242,
            nguonnhanCv: 'nguyen van b',
            vitriungtuyen: 'nhan vien chinh thuc',
            matinungtuyen: 'TD189',
            maquytrinhtuyendungapdung: 'QTTD0',
            thoigianguihoso: '15:28 17/06/2023',
            tailencvtuungvien: 'chua tai len cv'
        }

    ]
    const handleSelectionChange = (option: SelectOptionType | null, optionsArray: SelectOptionType[]) => {
        if (option) {
            setSelectedOption(option)
        }
    };

    const options = {
        vitrituyendung: [
            { value: 'IT', label: 'IT' },
            { value: 'Hành chính- tổng hợp', label: 'Hành chính- tổng hợp' },
        ],
        chongioitinh: [
            { value: 'Nam', label: 'Nam' },
            { value: 'Nữ', label: 'Nữ' },
            { value: 'Giới tính khác', label: 'Giới tính khác' },
        ],
    };




    return (
        <>
            <div className={`${styles.wrapper}`}>
                <div className={`${styles.body}`}>
                    <div className={`${styles.row_search_new_t}`}>
                        <div className={`${styles.div_no_pad}`}>
                            <input type="date" className={`${styles.form_control} ${styles.search_date_from}`} placeholder="dd/mm/yyyy" />
                        </div>
                        <div className={`${styles.div_no_pad}`}>
                            <input type="date" className={`${styles.form_control} ${styles.search_date_to}`} placeholder="dd/mm/yyyy" />
                        </div>
                        <div className={`${styles.div_no_pad} `}>
                            <Select
                                defaultValue={selectedOption}
                                onChange={(option) => handleSelectionChange(option, options.chongioitinh)}
                                options={options.chongioitinh}
                                placeholder="Chọn giới tính"
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
                                onChange={(option) => handleSelectionChange(option, options.vitrituyendung)}
                                options={options.vitrituyendung}
                                placeholder="Vị trí tuyển dụng"
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
                        <div className={`${styles.div_no_pad}`}>
                            <input className={` ${styles.form_control}`} type="text" placeholder="Nhập tên ứng viên" />
                        </div>
                        <div className={`${styles.div_no_pad} `}>
                            <a href="" className={`${styles.icon_t_search_top}`}>
                                <img src={`/t-icon-search-n.svg`} alt="" />
                            </a>
                        </div>
                    </div>
                    <div className={`${styles.member_list}`}>
                        <div className={`${styles.navigate_next}`}>
                            <div className={`${styles.turn} ${styles.turn_left}`}>
                                <img src={`/arrow_left.png`} alt="" />
                            </div>
                            <div className={`${styles.turn} ${styles.turn_right}`}>
                                <img src={`/arrow_right.png`} alt="" />
                            </div>
                        </div>
                        <div className={`${styles.table_content}`}>
                            <table className={`${styles.table} ${styles.table_list}`}>
                                <thead>
                                    <tr>
                                        <th>Mã ứng viên</th>
                                        <th>Tên ứng viên</th>
                                        <th>Thông tin liên hệ</th>
                                        <th>Nguồn nhận CV</th>
                                        <th>Vị trí ứng tuyển</th>
                                        <th>Mã tin ứng tuyển</th>
                                        <th>Mã quy trình tuyển dụng áp dụng</th>
                                        <th>Thời gian gửi hồ sơ</th>
                                        <th>Tải CV từ ứng viên</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody className={`${styles.filter_body}`}>
                                    {listCandidates.map((item, index) => (
                                        <tr key={index}>
                                            <td>{item.id}</td>
                                            <td>   <a target="_blank" href={`/quan-ly-tuyen-dung/danh-sach-ung-vien/chi-tiet-ung-vien/${item.id}`}
                                                onClick={(event) => handleClickDetail(item.id, event)} rel="noreferrer">{item.name} ( xem chi tiết ) </a></td>
                                            <td>
                                                <p>Email:{item.email}</p>
                                                <p>SDT: {item.sdt}</p>
                                            </td>
                                            <td>{item.nguonnhanCv}</td>
                                            <td>{item.vitriungtuyen}</td>
                                            <td>{item.matinungtuyen}</td>
                                            <td>{item.maquytrinhtuyendungapdung}</td>
                                            <td>{item.thoigianguihoso}</td>
                                            <td><a href="">{item.tailencvtuungvien}</a></td>
                                            <td className={`${styles.r_t_top_right}`} style={{ position: 'relative' }}>
                                                <img src={`/3cham.png`} alt=" " />
                                                <div className={`${styles.settings}`} style={{ width: '350%' }}>
                                                    <li>Xóa hồ sơ</li>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}