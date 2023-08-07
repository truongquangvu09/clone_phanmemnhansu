import React, { useState, useEffect, useMemo } from 'react';
import Select from 'react-select';
import styles from '../candidateAddModal/candidateAddModal.module.css'
import { ProcessAdd } from '@/pages/api/quan-ly-tuyen-dung/candidateList';
import { CandidateList } from "@/pages/api/quan-ly-tuyen-dung/candidateList";
import { GetListNews } from "@/pages/api/quan-ly-tuyen-dung/PerformRecruitment";
import { EmployeeList } from "@/pages/api/listNhanVien";
import { parseISO, format } from "date-fns";
import Selects from "@/components/select";

type SelectOptionType = { label: string, value: string }

export default function StageGetJob({ onCancel, processId, data }: any) {
    const [selectedOption, setSelectedOption] = useState<SelectOptionType | null>(null);
    const [isCandidate, setCandidate] = useState<any>(null)
    const [isEmpList, setEmpList] = useState<any>(null);
    const [isEmp_id, setEmp_id] = useState<any>(null);
    const [isNewList, setNewsList] = useState<any>(null);
    const [isRecruitmentNewsId, setRecruitmentNewsId] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const formData = new FormData();
                const response = await CandidateList(formData)
                const responseData: any = response?.data
                if (responseData) {
                    const candidateFound = responseData?.data?.find((item: any) => item.id === Number(data?.id))
                    setCandidate(candidateFound)
                }
            } catch (error) {
                throw error
            }
        }
        fetchData()
    }, [data])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const formData = new FormData();
                const comid: any = 121598;
                formData.append("com_id", comid);
                const response = await EmployeeList(formData);
                if (response) {
                    setEmpList(response.data);
                }
            } catch (error) {
                throw error;
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await GetListNews(1, 2000, "", "", "");
                if (response) {
                    setNewsList(response.data);
                }
            } catch (error) {
                throw error;
            }
        };
        fetchData();
    }, []);

    const handleSubmit = async () => {
        try {
            if (processId) {
                const formData = new FormData();
                formData.append('processBefore', processId)
                const response = await ProcessAdd(formData)
            }
        } catch (error) {
            throw error
        }
    }

    const handleSelectChange = (
        selectedOption: SelectOptionType | null,
        setState: any
    ) => {
        setSelectedOption(selectedOption);
        if (selectedOption) {
            setState(selectedOption.value);
        }
    };

    const chonnhanvienOptions = useMemo(
        () =>
            isEmpList &&
            isEmpList?.data?.map((emp: any) => ({
                value: emp.idQLC,
                label: emp.userName,
            })),
        [isEmpList]
    );

    const chonvitrituyendungOptions = useMemo(
        () =>
            isNewList &&
            isNewList?.data?.data?.map((news: any) => ({
                value: news.id,
                label: news.title,
            })),
        [isNewList]
    );


    const options = {
        chongiaidoandungtruoc: [
            { value: 'Nhận hồ sơ ứng viên', label: 'Nhận hồ sơ ứng viên' },
            { value: 'Chờ xét duyệt', label: 'Chờ xét duyệt' },
            { value: 'Nhận việc', label: 'Nhận việc' },
            { value: 'Trượt', label: 'Trượt' },
            { value: 'Hủy', label: 'Hủy' },
        ],
        tennhanvientuyendung: chonnhanvienOptions,
        vitrituyendung: chonvitrituyendungOptions,
        tennhanvientuyendungdefault: [{ value: isCandidate?.userHiring, label: isCandidate?.NvTuyenDung },]
    };

    return (
        <>
            <div className={`${styles.modal_open}`}>
                <div className={`${styles.modal} ${styles.fade} ${styles.in}`}>
                    <div className={` ${styles.modal_dialog} ${styles.content_process}`}>
                        <div className={`${styles.modal_content}`}>
                            <div className={`${styles.modal_header} ${styles.header_process}`}>
                                <h5 className={`${styles.modal_tittle}`}>cHUYỂN TRẠNG THÁI</h5>
                            </div>
                            <form action="">
                                <div className={`${styles.modal_body} ${styles.body_process}`}>
                                    <div className={`${styles.form_groups}`}>
                                        <label htmlFor="">Tên ứng viên <span style={{ color: 'red' }}> * </span></label>
                                        <div className={`${styles.input_right}`}>
                                            <input type="text" id="names" defaultValue={isCandidate?.name} className={`${styles.input_process}`} />
                                        </div>
                                    </div>
                                    <div className={`${styles.form_groups}`}>
                                        <label htmlFor="">Nguồn ứng viên <span style={{ color: 'red' }}> * </span></label>
                                        <div className={`${styles.input_right}`}>
                                            <input type="text" id="names" defaultValue={isCandidate?.cvFrom} className={`${styles.input_process}`} />
                                        </div>
                                    </div>
                                    <div className={`${styles.form_groups}`}>
                                        <label htmlFor="">
                                            Tên nhân viên tuyển dụng <span style={{ color: "red" }}> * </span>
                                        </label>
                                        <div className={`${styles.input_right}`}>
                                            <div className={`${styles.div_no_pad} `}>
                                                {options?.tennhanvientuyendungdefault &&
                                                    <Selects
                                                        selectedOption={options?.tennhanvientuyendungdefault}
                                                        onChange={handleSelectChange}
                                                        padding={15}
                                                        width_control={100}
                                                        width_menu={97}
                                                        height={33.6}
                                                        setState={setEmp_id}
                                                        option={options?.tennhanvientuyendung}
                                                        placeholder={"Chọn Nhân viên"}
                                                    />
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${styles.form_groups}`}>
                                        <label htmlFor="">
                                            Vị trí tuyển dụng <span style={{ color: "red" }}> * </span>
                                        </label>
                                        <div className={`${styles.input_right}`}>
                                            <div className={`${styles.div_no_pad} `}>
                                                {options?.tennhanvientuyendungdefault &&
                                                    <Selects
                                                        selectedOption={options?.vitrituyendung}
                                                        onChange={handleSelectChange}
                                                        padding={15}
                                                        width_control={100}
                                                        width_menu={97}
                                                        height={33.6}
                                                        setState={setRecruitmentNewsId}
                                                        option={options?.vitrituyendung}
                                                        placeholder={"Chọn vị trí tuyển dụng"}
                                                    />
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${styles.form_groups}`}>
                                        <label htmlFor="">
                                            Thời gian gửi hồ sơ <span style={{ color: "red" }}> * </span>
                                        </label>
                                        <div className={`${styles.input_right}`}>
                                            {isCandidate?.timeSendCv &&
                                                <input
                                                    type="date"
                                                    id="birthday"
                                                    defaultValue={format(
                                                        parseISO(isCandidate?.timeSendCv),
                                                        "yyyy-MM-dd"
                                                    )}
                                                    placeholder="dd/mm/yyyy"
                                                    className={`${styles.input_process}`}
                                                />
                                            }

                                        </div>
                                    </div>
                                </div>
                                <div className={`${styles.modal_footer} ${styles.footer_process}`}>
                                    <button className={`${styles.btn_cancel}`} onClick={onCancel}>Hủy</button>
                                    <button className={`${styles.btn_add}`} >Thêm</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}