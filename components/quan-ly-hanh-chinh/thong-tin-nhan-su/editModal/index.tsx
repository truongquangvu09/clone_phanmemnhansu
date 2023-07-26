import React, { useState, useEffect, useMemo } from "react";
import styles from './editModal.module.css'
import Select from 'react-select';
import { EmployeeUpdate } from "@/pages/api/quan_ly_nhan_vien";
import { PostionCharData } from '@/pages/api/co_cau_to_chuc';

type SelectOptionType = { label: string, value: string }

export default function EditCandidateList({ onCancel, infoList }: any) {


    const [selectedOption, setSelectedOption] = useState<SelectOptionType | null>(null);
    const [isGender, setGender] = useState<any>(null)
    const [isMaritalStatus, setMaritalStatus] = useState<any>(null)
    const [isPosition_id, setPosition_id] = useState<any>(infoList?.positionId)
    const [isExp, setExp] = useState<any>(null)
    const [isEducation, setEducation] = useState<any>(null)
    const [PostionCharDatas, setPosttionCharData] = useState<any>(null)

    // -- lấy dữ liệu chức vụ --
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await PostionCharData()
                setPosttionCharData(response.data)
            } catch (error) {
                console.log({ error });
            }
        }
        fetchData()
    }, [])

    const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        try {
            const formData = new FormData();
            const role: any = 0
            const comId: any = 1664
            const names = (document.getElementById('names') as HTMLInputElement)?.value
            const dateInCom = (document.getElementById('date_in_com') as HTMLInputElement)?.value
            const birthday = (document.getElementById('birthday') as HTMLInputElement)?.value
            const phoneNumber = (document.getElementById('phone') as HTMLInputElement)?.value
            const address = (document.getElementById('address') as HTMLInputElement)?.value
            formData.append('com_id', comId)
            formData.append('dep_id', infoList?.depId)
            formData.append('role', role)
            formData.append('userName', names)
            formData.append('idQLC', infoList?.id)
            formData.append('birthday', birthday)
            formData.append('phoneTk', phoneNumber)
            formData.append('address', address)
            formData.append('gender', isGender)
            formData.append('email', infoList?.email)
            formData.append('position_id', isPosition_id)
            formData.append('exp', isExp)
            formData.append('date_in_come', dateInCom)
            formData.append('education', isEducation)

            const response = await EmployeeUpdate(formData)
        } catch (error) {
            throw error
        }
    }

    const handleSelectChange = (selectedOption: SelectOptionType | null, setState: any) => {
        setSelectedOption(selectedOption);
        if (selectedOption) {
            setState(selectedOption.value); // Set giá trị đã chọn vào state setIsDep_id
        }
    };

    const allPositions = PostionCharDatas?.data?.flat();
    console.log(PostionCharDatas);


    const chonpchưvuOptions = useMemo(
        () =>
            allPositions?.map((position: any) => ({
                value: position.positionId,
                label: position.positionName,
            })),
        [allPositions]
    );

    const options = {
        tinhtranghonnhan: [
            { value: 'đã kết hôn', label: 'Đã kết hôn' },
            { value: 'độc thân', label: 'Độc thân' },
        ],
        chongioitinh: [
            { value: '1', label: 'Nam' },
            { value: '2', label: 'Nữ' },
        ],
        kinhnghiemlamviec: [
            { value: 'dưới 1 năm kinh nghiệm', label: 'Dưới 1 năm kinh nghiệm' },
            { value: '1 năm', label: '1 năm' },
            { value: '2 năm', label: '2 năm' },
            { value: '3 năm', label: '3 năm' },
            { value: '4 năm', label: '4 năm' },
            { value: '5 năm', label: '5 năm' },
            { value: 'trên 5 năm', label: 'trên 5 năm' },
        ],
        trinhdohocvan: [
            { value: 'Trên đại học', label: 'Trên đại học' },
            { value: 'Đại học', label: 'Đại học' },
            { value: 'Cao đẳng', label: 'Cao đẳng' },
            { value: 'Trung cấp', label: 'Trung cấp' },
            { value: 'Đào tạo nghề', label: 'Đào tạo nghề' },
            { value: 'Trung học phổ thông', label: 'Trung học phổ thông' },
            { value: 'Trung học cơ sở', label: 'Trung học cơ sở' },
            { value: 'Tiểu học', label: 'Tiểu học' },
        ],
        chucvuhientai: chonpchưvuOptions

    };

    return (
        <>
            <div className={`${styles.modal_open}`}>
                <div className={`${styles.modal} ${styles.fade} ${styles.in}`}>
                    <div className={` ${styles.modal_dialog} ${styles.content_process}`}>
                        <div className={`${styles.modal_content}`}>
                            <div className={`${styles.modal_header} ${styles.header_process}`}>
                                <p>CẬP NHẬT THÔNG TIN NHÂN VIÊN</p>
                            </div>
                            <form action="">
                                <div className={`${styles.modal_body} ${styles.body_process}`}>
                                    <div className={`${styles.form_groups}`}>
                                        <label htmlFor="">Tên nhân viên <span style={{ color: 'red' }}> * </span></label>
                                        <input type="text" defaultValue={infoList.userName} id="names" placeholder="" className={`${styles.form_control}`} />
                                    </div>
                                    <div className={`${styles.form_groups}`}>
                                        <label htmlFor="">Mã ID nhân viên <span style={{ color: 'red' }}> * </span></label>
                                        <input type="text" id="names" value={infoList.id} placeholder="" className={`${styles.form_control} ${styles.read_only}`} />
                                    </div>
                                    <div className={`${styles.form_groups} ${styles.form_groups2}`}>
                                        <div className={`${styles.content_left}`}>
                                            <div className={`${styles.form_groups} ${styles.form_groups3}`}>
                                                <label htmlFor="">Ngày sinh </label>
                                                <input style={{ height: 20 }} type="date" id="birthday" placeholder="" className={`${styles.form_control} `} />
                                            </div>
                                        </div>
                                        <div className={`${styles.content_right}`}>
                                            <div className={`${styles.form_groups} ${styles.form_groups5} ${styles.form_groups6}   `}>
                                                <label htmlFor="">Điện thoại <span style={{ color: 'red' }}> * </span></label>
                                                <input type="text" id="phone" defaultValue={infoList.phoneTK} placeholder="" className={`${styles.form_control} `} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${styles.form_groups}`}>
                                        <label htmlFor="">Địa chỉ</label>
                                        <input type="text" id="address" defaultValue={infoList.address} placeholder="" className={`${styles.form_control}`} />
                                    </div>
                                    <div className={`${styles.form_groups} ${styles.form_groups2}`}>
                                        <div className={`${styles.content_left}`}>
                                            <div className={`${styles.form_groups} ${styles.form_groups3}`}>
                                                <label htmlFor="">Giới tính </label>
                                                <Select
                                                    defaultValue={selectedOption}
                                                    onChange={(option) => handleSelectChange(option, setGender)}
                                                    options={options.chongioitinh}
                                                    placeholder="Chọn giới tính"
                                                    styles={{
                                                        control: (baseStyles, state) => ({
                                                            ...baseStyles,
                                                            borderRadius: 4,
                                                            fontSize: state.isFocused ? 14 : 14,
                                                            minHeight: state.isFocused ? 20 : 20,
                                                            width: '100%',
                                                            fontWeight: state.isFocused ? 600 : 600
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
                                        </div>
                                        <div className={`${styles.content_right}`}>
                                            <div className={`${styles.form_groups} ${styles.form_groups5}`}>
                                                <label htmlFor="">Tình trạng hôn nhân </label>
                                                <Select
                                                    defaultValue={selectedOption}
                                                    onChange={(option) => handleSelectChange(option, setMaritalStatus)}
                                                    options={options.tinhtranghonnhan}
                                                    placeholder="Chọn tình trạng"
                                                    styles={{
                                                        control: (baseStyles, state) => ({
                                                            ...baseStyles,
                                                            borderRadius: 4,
                                                            fontSize: state.isFocused ? 14 : 14,
                                                            minHeight: state.isFocused ? 20 : 20,
                                                            width: '105%',
                                                            fontWeight: state.isFocused ? 600 : 600
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
                                        </div>
                                    </div>
                                    <div className={`${styles.form_groups}`}>
                                        <label htmlFor="">Email <span style={{ color: 'red' }}> * </span></label>
                                        <input type="text" value={infoList.email} id="names" placeholder="" className={`${styles.form_control} ${styles.read_only}`} />
                                    </div>
                                    <div className={`${styles.form_groups}`}>
                                        <label htmlFor="">Chức vụ </label>
                                        <Select
                                            defaultValue={selectedOption}
                                            onChange={(option) => handleSelectChange(option, setPosition_id)}
                                            options={options.chucvuhientai}
                                            placeholder="Chọn chức vụ"
                                            styles={{
                                                control: (baseStyles, state) => ({
                                                    ...baseStyles,
                                                    borderRadius: 4,
                                                    fontSize: state.isFocused ? 14 : 14,
                                                    minHeight: state.isFocused ? 20 : 20,
                                                    width: '100%',
                                                    fontWeight: state.isFocused ? 600 : 600
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
                                    <div className={`${styles.form_groups}`}>
                                        <label htmlFor="">Kinh nghiệm làm việc </label>
                                        <Select
                                            defaultValue={selectedOption}
                                            onChange={(option) => handleSelectChange(option, setExp)}
                                            options={options.kinhnghiemlamviec}
                                            placeholder=""
                                            styles={{
                                                control: (baseStyles, state) => ({
                                                    ...baseStyles,
                                                    borderRadius: 4,
                                                    fontSize: state.isFocused ? 14 : 14,
                                                    minHeight: state.isFocused ? 20 : 20,
                                                    width: '100%',
                                                    fontWeight: state.isFocused ? 600 : 600
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
                                    <div className={`${styles.form_groups}`}>
                                        <label htmlFor="">Ngày vào công ty </label>
                                        <input type="date" id="date_in_com" defaultValue={infoList.dateInCom} placeholder="" className={`${styles.form_control}`} />
                                    </div>
                                    <div className={`${styles.form_groups}`}>
                                        <label htmlFor="">Trình độ học vấn </label>
                                        <Select
                                            defaultValue={selectedOption}
                                            onChange={(option) => handleSelectChange(option, setEducation)}
                                            options={options.trinhdohocvan}
                                            placeholder=""
                                            styles={{
                                                control: (baseStyles, state) => ({
                                                    ...baseStyles,
                                                    borderRadius: 4,
                                                    fontSize: state.isFocused ? 14 : 14,
                                                    minHeight: state.isFocused ? 20 : 20,
                                                    width: '100%',
                                                    fontWeight: state.isFocused ? 600 : 600
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
                                </div>
                                <div className={`${styles.modal_footer} ${styles.footer_process}`}>
                                    <button className={`${styles.btn_cancel}`} onClick={onCancel}>Đóng</button>
                                    <button className={`${styles.btn_add}`} onClick={handleSubmit}>Cập nhật</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}