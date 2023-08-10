import React, { useState, useEffect, useMemo } from 'react';
import styles from '../candidateAddModal/candidateAddModal.module.css'
import { CandidateList } from "@/pages/api/quan-ly-tuyen-dung/candidateList";
import { GetListNews } from "@/pages/api/quan-ly-tuyen-dung/PerformRecruitment";
import { Rating } from 'react-simple-star-rating'
import { EmployeeList } from "@/pages/api/listNhanVien";
import { parseISO, format } from "date-fns";
import Selects from "@/components/select";
import HandleAddAnotherSkill from '../candidateAddModal/addAnotherSkill';
import MyEditorNew from '@/components/myEditor';
import { AddInterview, AddGetJob } from '@/pages/api/quan-ly-tuyen-dung/candidateList';
interface InputTextareaProps {
    onDescriptionChange: (data: any) => void
    process_id: any
}
function Input_textarea({ onDescriptionChange, process_id }: InputTextareaProps) {
    const [editorLoaded, setEditorLoaded] = useState(false);
    const [data, setData] = useState(process_id !== 1 ? `Kính gửi bạn  Tên ứng viên........!                                
    Trước hết, chúng tôi trân trọng cảm ơn bạn đã quan tâm tới cơ hội việc làm tại Công ty ............. . 
    Phòng Nhân sự Công ty ............... xin thông báo và gửi tới bạn thư mời phỏng vấn vị trí 
    "..............................." 
    chi tiết như sau:

    1. Vị trí: ...............nodejs.................
    
    2. Thời gian: .........Giờ............Ngày.............
    
    3. Địa điểm: ...........................................
    
    4. Người liên hệ: Phòng Nhân sự : ......................... Bạn vui lòng mang ................... 
    và gửi mail xác nhận về việc tham dự buổi phỏng vấn để chúng tôi có kế hoạch đón tiếp. 
    Nếu cần hỗ trợ thêm thông tin xin vui lòng liên hệ với chúng tôi qua số điện thoại: ........................... 
    Để tìm hiểu thêm về công ty, bạn vui lòng truy cập link sau để biết thêm thông tin: ..........................
    
    Trân trọng,`
        :
        `Thân gửi bạn: Tên ứng viên 
    Trước hết, chúng tôi xin cảm ơn bạn đã đến tham dự buổi phỏng vấn của công ty, căn cứ vào kết 
    quả buổi phỏng vấn của bạn, công ty..... xin chúc mừng bạn đã vượt qua vòng phỏng vấn của 
    chúng tôi. 
    
    Vị trí:  Công ty.....Chi nhánh......... 
    Mức lương:......... Hình thức làm việc: Toàn thời gian
    Thời gian nhận việc:....................................... 
    Địa điểm làm việc: 
    SĐT người liên hệ: 
    Khi đi làm, bạn vui lòng chuẩn bị:........................ 
    Nếu cần có thêm thông tin gia nhập liên quan, bạn có thể liên hệ trực tiếp, email hoặc qua số điện 
    thoại: ............................................... để được trợ giúp. 
    Chào mừng bạn gia nhập .......................và chúc bạn hội nhập nhanh chóng, làm việc hiệu quả, 
    thăng tiến cùng công ty. 
    
    Bạn vui lòng phản hồi lại mail khi nhận được. 
    Trân Trọng,
    HOTLINE: ..................... 
    EMAIL:...........................................`);

    useEffect(() => {
        setEditorLoaded(true);
    }, []);

    return (
        <div>
            <MyEditorNew
                name="Editor"
                onChange={(data: React.SetStateAction<string>) => {
                    setData(data);
                    onDescriptionChange(data)
                }}
                editorLoaded={editorLoaded}
                value={data}
            />
        </div>
    );
}

type SelectOptionType = { label: string, value: string }

export default function StageGetJob({ onCancel, process_id, data, process_id_from }: any) {
    const [selectedOption, setSelectedOption] = useState<SelectOptionType | null>(null);
    const [isCandidate, setCandidate] = useState<any>(null)
    const [isEmpList, setEmpList] = useState<any>(null);
    const [empInterview, setEmpInterview] = useState<any>(null);
    const [isNewList, setNewsList] = useState<any>(null);
    const [isRecruitmentNewsId, setRecruitmentNewsId] = useState<any>(null);
    const [addAnotherSkill, setAddAnotherSkill] = useState<JSX.Element[]>([]);
    const [skills, setSkills] = useState<{ skillName: string; skillVote: any }[]>([]);
    const [lastAddedIndex, setLastAddedIndex] = useState(-1);
    const [rating, setRating] = useState<any>(0)
    const [descriptions, setDescription] = useState("");
    const [isUserHiring, setUserHiring] = useState<any>("")
    const [checked, setChecked] = useState<any>(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const formData = new FormData();
                const response = await CandidateList(formData)
                const responseData: any = response?.data
                if (responseData) {
                    const candidateFound = responseData?.data?.find((item: any) => item.id === Number(data?.id) || item.id === Number(data?.canId))
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


    const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        try {
            const name = (document.getElementById("name") as HTMLInputElement)?.value;
            const email = (document.getElementById("email") as HTMLInputElement)
                ?.value;
            const cvFrom = (document.getElementById("cvFrom") as HTMLInputElement)
                ?.value;
            const timeSendCv = (
                document.getElementById("timeSendCv") as HTMLInputElement
            )?.value;
            const interviewTime = (
                document.getElementById("interviewTime") as HTMLInputElement
            )?.value;
            const note = (
                document.getElementById("note") as HTMLInputElement
            )?.value;
            const salary = (
                document.getElementById("salary") as HTMLInputElement
            )?.value;
            const resiredSalary = (
                document.getElementById("resiredSalary") as HTMLInputElement
            )?.value;
            const canid: any = process_id_from === 0 ? data?.id : data?.canId

            const formData = new FormData();
            formData.append("canId", canid);
            formData.append("name", name);
            formData.append("email", email);
            formData.append("userHiring", isUserHiring);
            formData.append("recruitmentNewsId", isRecruitmentNewsId);
            formData.append("cvFrom", cvFrom);
            formData.append("timeSendCv", timeSendCv);
            formData.append("starVote", rating);
            formData.append("note", note);
            formData.append("salary", salary);
            formData.append("resiredSalary", resiredSalary);
            formData.append("interviewTime", interviewTime);
            formData.append("empInterview", empInterview);
            formData.append("contentsend", descriptions);
            formData.append("checkEmail", checked);
            if (process_id !== 1) {
                formData.append("processInterviewId", process_id);
            }

            if (process_id === 1) {
                const response = await AddGetJob(formData);
                if (response) {
                    setTimeout(() => {
                        onCancel();
                    }, 1500);
                }
            } else {
                const response = await AddInterview(formData);
                if (response) {
                    setTimeout(() => {
                        onCancel();
                    }, 1500);
                }
            }


        } catch (error) {
            throw error;
        }
    };

    const handleChange = () => {
        setChecked(prevChecked => (prevChecked === 0 ? 1 : 0));
    };

    const handleRating = (rate: number) => {
        setRating(rate)
    }

    const handleDescriptionChange = (data: string) => {
        setDescription(data);
    };

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
                                <h5 className={`${styles.modal_tittle}`}>CHUYỂN TRẠNG THÁI</h5>
                            </div>
                            <form action="">
                                <div className={`${styles.modal_body} ${styles.body_process}`}>
                                    <div className={`${styles.form_groups}`}>
                                        <label htmlFor="">Tên ứng viên <span style={{ color: 'red' }}> * </span></label>
                                        <div className={`${styles.input_right}`}>
                                            <input type="text" id="name" defaultValue={isCandidate?.name} className={`${styles.input_process}`} />
                                        </div>
                                    </div>
                                    <div className={`${styles.form_groups}`}>
                                        <label htmlFor="">Nguồn ứng viên <span style={{ color: 'red' }}> * </span></label>
                                        <div className={`${styles.input_right}`}>
                                            <input type="text" id="cvFrom" defaultValue={isCandidate?.cvFrom} className={`${styles.input_process}`} />
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
                                                        setState={setUserHiring}
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
                                                    id="timeSendCv"
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
                                    <div className={`${styles.form_groups}`}>
                                        <label htmlFor="">Đánh giá hồ sơ <span style={{ color: 'red' }}> * </span></label>
                                        <div className={`${styles.input_right}`}>
                                            <Rating size={27} initialValue={isCandidate?.starVote} disableFillHover className={`${styles.star_rating}`} onClick={handleRating} />
                                            <div className={`${styles.skills_container}`}>
                                                {addAnotherSkill}
                                            </div>
                                            <a className={`${styles.add_another_skill}`} style={{ cursor: 'pointer' }} onClick={() => HandleAddAnotherSkill({ lastAddedIndex, setSkills, setAddAnotherSkill, setLastAddedIndex })}>Thêm Kỹ năng</a>
                                        </div>
                                    </div>
                                    <div className={`${styles.form_groups}`}>
                                        <label htmlFor="">Mức lương mong muốn <span style={{ color: 'red' }}> * </span></label>
                                        <div className={`${styles.input_right}`}>
                                            <input type="text" id="resiredSalary" className={`${styles.input_process}`} />
                                        </div>
                                    </div>
                                    <div className={`${styles.form_groups}`}>
                                        <label htmlFor="">Mức lương thực <span style={{ color: 'red' }}> * </span></label>
                                        <div className={`${styles.input_right}`}>
                                            <input type="text" id="salary" className={`${styles.input_process}`} />
                                        </div>
                                    </div>
                                    <div className={`${styles.form_groups}`}>
                                        <label htmlFor="">
                                            Thời gian hẹn <span style={{ color: "red" }}> * </span>
                                        </label>
                                        <div className={`${styles.input_right}`}>
                                            <input type="date" id="interviewTime" placeholder="dd/mm/yyyy" className={`${styles.input_process}`}
                                            />
                                        </div>
                                    </div>
                                    <div className={`${styles.form_groups}`}>
                                        <label htmlFor="">
                                            Nhân viên tham gia <span style={{ color: "red" }}> * </span>
                                        </label>
                                        <div className={`${styles.input_right}`}>
                                            <div className={`${styles.div_no_pad} `}>
                                                {options?.tennhanvientuyendungdefault &&
                                                    <Selects
                                                        selectedOption={options?.tennhanvientuyendung}
                                                        onChange={handleSelectChange}
                                                        padding={15}
                                                        width_control={100}
                                                        width_menu={97}
                                                        height={33.6}
                                                        setState={setEmpInterview}
                                                        option={options?.tennhanvientuyendung}
                                                        placeholder={"Chọn Nhân viên"}
                                                    />
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${styles.form_groups1}`}>
                                        <label htmlFor="">Ghi chú <span style={{ color: 'red' }}> * </span></label>
                                        <div className={`${styles.input_right}`}>
                                            <textarea style={{ height: 50 }} id="note" className={`${styles.input_process}`} />
                                        </div>
                                    </div>
                                    <div className={`${styles.form_groups}`}>
                                        <label htmlFor="">Gửi email đến <span style={{ color: 'red' }}> * </span></label>
                                        <div className={`${styles.input_right}`}>
                                            <input type="text" id="email" defaultValue={isCandidate?.email} className={`${styles.input_process}`} />
                                        </div>
                                    </div>
                                    <div className={`${styles.form_groups}`}>
                                        <label htmlFor="">Gửi email</label>
                                        <div className={`${styles.input_right}`}>
                                            <input type="checkbox" id="check_email" className={`${styles.check_send_email}`} onChange={handleChange} />Gửi email tới ứng viên
                                        </div>
                                    </div>
                                    <div className={`${styles.form_groupss}`}>
                                        <div className={`${styles.ckeditor}`}>
                                            <Input_textarea onDescriptionChange={handleDescriptionChange} process_id={process_id} />
                                        </div>
                                    </div>
                                </div>
                                <div className={`${styles.modal_footer} ${styles.footer_process}`}>
                                    <button className={`${styles.btn_cancel}`} onClick={onCancel}>Hủy</button>
                                    <button className={`${styles.btn_add}`} onClick={handleSubmit} >Thêm</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}