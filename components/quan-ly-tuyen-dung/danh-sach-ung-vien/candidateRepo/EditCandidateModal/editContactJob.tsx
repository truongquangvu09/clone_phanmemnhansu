import React, { useState, useEffect, useMemo } from "react";
import styles from "../../candidateAddModal/candidateAddModal.module.css";
import { Rating } from "react-simple-star-rating";
import { EmployeeList } from "@/pages/api/listNhanVien";
import { GetListNews } from "@/pages/api/quan-ly-tuyen-dung/PerformRecruitment";
import Selects from "@/components/select";
import { parseISO, format } from "date-fns";
import { ContactJobDetails } from "@/pages/api/quan-ly-tuyen-dung/candidateList";
import { AddContactJob } from "@/pages/api/quan-ly-tuyen-dung/candidateList";
import * as Yup from "yup";


type SelectOptionType = { label: string; value: any };

export default function EditCandidateContactJob({ onCancel, candidate }: any) {
    const [rating, setRating] = useState<any>(candidate?.starVote);

    const [isGender, setGender] = useState<any>(candidate?.gender);
    const [isEducation, setEducation] = useState<any>(candidate?.education);
    const [isUserHiring, setUserHiring] = useState<any>(candidate?.userHiring);
    const [isExp, setExp] = useState<any>(candidate?.exp);
    const [isStatus, setStatus] = useState<any>(candidate?.exp);
    const [isMarried, setMarried] = useState<any>(candidate?.isMarried);
    const [isUserRecommend, setUserRecommend] = useState<any>(candidate?.userRecommend);
    const [isRecruitmentNewsId, setRecruitmentNewsId] = useState<any>(candidate?.recruitmentNewsId);
    const [isEmpList, setEmpList] = useState<any>(null);
    const [isNewList, setNewsList] = useState<any>(null);
    const [isCandidate, setCandidate] = useState<any>(null);
    const [errors, setErrors] = useState<any>({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const formData = new FormData();
                const comid: any = 1664;
                formData.append("com_id", comid);
                const response = await EmployeeList(formData);
                if (response) {
                    setEmpList(response?.data);
                }
            } catch (error) {
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const formData = new FormData();
                formData.append('canId', candidate?.id)
                const response = await ContactJobDetails(formData);
                if (response) {
                    setCandidate(response?.data);
                }
            } catch (error) {
            
            }
        };
        fetchData();
    }, [candidate?.id]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await GetListNews(1, 2000, "", "", "");
                if (response) {
                    setNewsList(response?.data);
                }
            } catch (error) {
              
            }
        };
        fetchData();
    }, []);

    const validationSchema = Yup.object().shape({
        starVote: Yup.string().required("Đánh giá không được để trống"),
        resiredSalary: Yup.string().required("Nhập mức lương mong muốn"),
        salary: Yup.string().required("Mức lương thực không được để trống"),
        empInterview: Yup.string().required("Chọn nhân viên tham gia"),
        timeInterView: Yup.string().required("Thời gian hẹn không được để trống"),
    });

    const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        try {
            const name = (document.getElementById("name") as HTMLInputElement)?.value;
            const email = (document.getElementById("email") as HTMLInputElement)
                ?.value;
            const phone = (document.getElementById("phone") as HTMLInputElement)
                ?.value;
            const birthday = (document.getElementById("birthday") as HTMLInputElement)
                ?.value;
            const hometown = (document.getElementById("hometown") as HTMLInputElement)
                ?.value;
            const school = (document.getElementById("school") as HTMLInputElement)
                ?.value;
            const address = (document.getElementById("address") as HTMLInputElement)
                ?.value;
            const cvFrom = (document.getElementById("cvFrom") as HTMLInputElement)
                ?.value;
            const timeSendCv = (
                document.getElementById("timeSendCv") as HTMLInputElement
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

            const formDatas = {
                starVote: rating || "",
                resiredSalary: resiredSalary || "",
                salary: salary || "",
            };

            await validationSchema.validate(formDatas, {
                abortEarly: false,
            });

            const formData = new FormData();
            formData.append("canId", candidate?.id);
            formData.append("name", name);
            formData.append("email", email);
            formData.append("phone", phone);
            formData.append("birthday", birthday);
            formData.append("hometown", hometown);
            formData.append("education", isEducation);
            formData.append("school", school);
            formData.append("exp", isExp);
            formData.append("isMarried", isMarried);
            formData.append("address", address);
            formData.append("userHiring", isUserHiring);
            formData.append("userRecommend", isUserRecommend);
            formData.append("recruitmentNewsId", isRecruitmentNewsId);
            formData.append("cvFrom", cvFrom);
            formData.append("timeSendCv", timeSendCv);
            formData.append("starVote", rating);
            formData.append("note", note);
            formData.append("salary", salary);
            formData.append("resiredSalary", resiredSalary);
            formData.append("offerTime", isCandidate?.detail_contact_job?.offerTime);
            formData.append("epOffer", isCandidate?.detail_contact_job?.epOffer);

            const response = await AddContactJob(formData);
            if (response) {
                setTimeout(() => {
                    onCancel();
                }, 1500);
            }
        } catch (error) {
            if (error instanceof Yup.ValidationError) {
                const yupErrors = {};
                error.inner.forEach((yupError: any) => {
                    yupErrors[yupError.path] = yupError.message;
                });
                setErrors(yupErrors);
            } else {
                console.error("Lỗi validate form:", error);
            }
        }
    };

    const handleRating = (rate: number) => {
        setRating(rate);
    };

    const handleSelectChange = (
        selectedOption: SelectOptionType | null,
        setState: any
    ) => {
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
        chongioitinh: [
            { value: 1, label: "Nam" },
            { value: 2, label: "Nữ" },
            { value: 0, label: "Giới tính khác" },
        ],
        trinhdohocvan: [
            { value: 7, label: "Đại học trở lên" },
            { value: 5, label: "Cao đẳng trở lên" },
            { value: 1, label: "THPT trở lên" },
            { value: 2, label: "Trung học trở lên" },
            { value: 3, label: "Chứng chỉ" },
            { value: 4, label: "Trung cấp trở lên" },
            { value: 6, label: "Cử nhân trở lên" },
            { value: 8, label: "Thạc sỹ" },
            { value: 9, label: "Thạc sỹ Nghệ thuật" },
            { value: 10, label: "Thạc sỹ Thương mại" },
            { value: 11, label: "Thạc sỹ Khoa học" },
            { value: 12, label: "Thạc sỹ Kiến trúc" },
            { value: 13, label: "Thạc sỹ QTKD" },
            { value: 14, label: "Thạc sỹ Kỹ thuật ứng dụng" },
            { value: 15, label: "Thạc sỹ Luật" },
            { value: 16, label: "Thạc sỹ Y học" },
            { value: 17, label: "Thạc sỹ Dược phẩm" },
            { value: 18, label: "Tiến sỹ" },
            { value: 19, label: "Khác" },
        ],
        kinhnghiemlamviec: [
            { value: 0, label: "Chưa có kinh nghiệm" },
            { value: 1, label: "0 - 1 năm kinh nghiệm" },
            { value: 2, label: "1 - 2 năm kinh nghiệm" },
            { value: 3, label: "2 - 5 năm kinh nghiệm" },
            { value: 4, label: "5 - 10 năm kinh nghiệm" },
            { value: 5, label: "Hơn 10 năm kinh nghiệm" },
        ],
        tinhtranghonnhan: [
            { value: 1, label: "Độc thân" },
            { value: 2, label: "Đã kết hôn" },
            { value: 3, label: "Khác" },
        ],
        tennhanvientuyendung: chonnhanvienOptions,
        tennhanviengioithieu: chonnhanvienOptions,
        vitrituyendung: chonvitrituyendungOptions,
        vitrituyendungdefault: [
            { value: candidate?.recruitmentNewsId, label: candidate?.Title },
        ],
        giaidoanchuyen: [
            { value: 2, label: "Hủy phỏng vấn" },
        ],
    };

    const selectedGender: any = options.chongioitinh?.find(
        (item) => item.value === candidate?.gender
    );
    const selectedEducation: any = options.trinhdohocvan?.find(
        (item) => item.value === candidate?.education
    );
    const selectedExp: any = options.kinhnghiemlamviec?.find(
        (item) => item.value === candidate?.exp
    );
    const selectedMarried: any = options.tinhtranghonnhan?.find(
        (item) => item.value === candidate?.isMarried
    );
    const selectedUseHiring: any = options.tennhanvientuyendung?.find(
        (item: any) => item.value === candidate?.userHiring
    );
    const selectedUseRecomment: any = options.tennhanviengioithieu?.find(
        (item: any) => item.value === candidate?.userRecommend
    );

    return (
        <>
            <div className={`${styles.modal_open}`}>
                <div className={`${styles.modal} ${styles.fade} ${styles.in}`}>
                    <div className={` ${styles.modal_dialog} ${styles.content_process}`}>
                        <div className={`${styles.modal_content}`}>
                            <div
                                className={`${styles.modal_header} ${styles.header_process}`}
                            >
                                <h5 className={`${styles.modal_tittle}`}>
                                    CHỈNH SỬA HỒ SƠ ỨNG VIÊN GIAI ĐOẠN KÍ HỚP ĐỒNG
                                </h5>
                            </div>
                            <form action="">
                                <div className={`${styles.modal_body} ${styles.body_process}`}>
                                    <div className={`${styles.form_groups}`}>
                                        <label htmlFor="">
                                            Tên ứng viên <span style={{ color: "red" }}> * </span>
                                        </label>
                                        <div className={`${styles.input_right}`}>
                                            <input
                                                type="text"
                                                value={candidate?.name}
                                                id="name"
                                                placeholder="Nhập tên ứng viên"
                                                className={`${styles.input_process}`}
                                            />
                                        </div>
                                    </div>
                                    <div className={`${styles.form_groups}`}>
                                        <label htmlFor="">
                                            E-mail <span style={{ color: "red" }}> * </span>
                                        </label>
                                        <div className={`${styles.input_right}`}>
                                            <input
                                                type="text"
                                                value={candidate?.email}
                                                id="email"
                                                placeholder="Nhập Email ứng viên"
                                                className={`${styles.input_process}`}
                                            />
                                        </div>
                                    </div>
                                    <div className={`${styles.form_groups}`}>
                                        <label htmlFor="">
                                            Số điện thoại <span style={{ color: "red" }}> * </span>
                                        </label>
                                        <div className={`${styles.input_right}`}>
                                            <input
                                                type="text"
                                                id="phone"
                                                value={candidate?.phone}
                                                placeholder="Nhập SĐt ứng viên"
                                                className={`${styles.input_process}`}
                                            />
                                        </div>
                                    </div>
                                    <div className={`${styles.form_groups}`}>
                                        <label htmlFor="">
                                            Giới tính <span style={{ color: "red" }}> * </span>
                                        </label>
                                        <div className={`${styles.input_right}`}>
                                            <div className={`${styles.div_no_pad} `}>
                                                <Selects
                                                    selectedOption={selectedGender}
                                                    onChange={handleSelectChange}
                                                    padding={15}
                                                    width_control={100}
                                                    width_menu={97}
                                                    height={33.6}
                                                    setState={setGender}
                                                    option={options.chongioitinh}
                                                    placeholder={"Chọn giới tính"}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${styles.form_groups}`}>
                                        <label htmlFor="">
                                            Ngày sinh <span style={{ color: "red" }}> * </span>
                                        </label>
                                        <div className={`${styles.input_right}`}>
                                            <input
                                                type="date"
                                                id="birthday"
                                                value={format(
                                                    parseISO(candidate?.birthday),
                                                    "yyyy-MM-dd"
                                                )}
                                                placeholder="dd/mm/yyyy"
                                                className={`${styles.input_process}`}
                                            />
                                        </div>
                                    </div>
                                    <div className={`${styles.form_groups}`}>
                                        <label htmlFor="">Quê quán </label>
                                        <div className={`${styles.input_right}`}>
                                            <input
                                                type="text"
                                                id="hometown"
                                                value={candidate?.hometown}
                                                placeholder="Nhập quê quán"
                                                className={`${styles.input_process}`}
                                            />
                                        </div>
                                    </div>
                                    <div className={`${styles.form_groups}`}>
                                        <label htmlFor="">
                                            Trình độ học vấn <span style={{ color: "red" }}> * </span>
                                        </label>
                                        <div className={`${styles.input_right}`}>
                                            <div className={`${styles.div_no_pad} `}>
                                                <Selects
                                                    selectedOption={selectedEducation}
                                                    onChange={handleSelectChange}
                                                    padding={15}
                                                    width_control={100}
                                                    width_menu={97}
                                                    height={33.6}
                                                    setState={setEducation}
                                                    option={options.trinhdohocvan}
                                                    placeholder={"-- Vui lòng chọn --"}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${styles.form_groups}`}>
                                        <label htmlFor="">Trường học</label>
                                        <div className={`${styles.input_right}`}>
                                            <input
                                                type="text"
                                                id="school"
                                                value={candidate?.school}
                                                placeholder="Nhập trường học"
                                                className={`${styles.input_process}`}
                                            />
                                        </div>
                                    </div>
                                    <div className={`${styles.form_groups}`}>
                                        <label htmlFor="">
                                            Kinh nghiệm làm việc{" "}
                                            <span style={{ color: "red" }}> * </span>
                                        </label>
                                        <div className={`${styles.input_right}`}>
                                            <div className={`${styles.div_no_pad} `}>
                                                <Selects
                                                    selectedOption={selectedExp}
                                                    onChange={handleSelectChange}
                                                    padding={15}
                                                    width_control={100}
                                                    width_menu={97}
                                                    height={33.6}
                                                    setState={setExp}
                                                    option={options.kinhnghiemlamviec}
                                                    placeholder={"-- Vui lòng chọn --"}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${styles.form_groups}`}>
                                        <label htmlFor="">
                                            Tình trạng hôn nhân{" "}
                                            <span style={{ color: "red" }}> * </span>
                                        </label>
                                        <div className={`${styles.input_right}`}>
                                            <div className={`${styles.div_no_pad} `}>
                                                <Selects
                                                    selectedOption={selectedMarried}
                                                    onChange={handleSelectChange}
                                                    padding={15}
                                                    width_control={100}
                                                    width_menu={97}
                                                    height={33.6}
                                                    setState={setMarried}
                                                    option={options.tinhtranghonnhan}
                                                    placeholder={"-- Vui lòng chọn --"}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${styles.form_groups}`}>
                                        <label htmlFor="">
                                            Địa chỉ <span style={{ color: "red" }}> * </span>
                                        </label>
                                        <div className={`${styles.input_right} `}>
                                            <input
                                                type="text"
                                                id="address"
                                                value={candidate?.address}
                                                placeholder="Nhập địa chỉ ứng viên"
                                                className={`${styles.input_process}`}
                                            />
                                        </div>
                                    </div>
                                    <div className={`${styles.form_groups}`}>
                                        <label htmlFor="">
                                            Nguồn ứng viên <span style={{ color: "red" }}> * </span>
                                        </label>
                                        <div className={`${styles.input_right} `}>
                                            <input
                                                type="text"
                                                id="cvFrom"
                                                value={candidate?.cvFrom}
                                                placeholder="Nhập nguồn ứng viên"
                                                className={`${styles.input_process}`}
                                            />
                                        </div>
                                    </div>
                                    <div className={`${styles.form_groups}`}>
                                        <label htmlFor="">
                                            Tên nhận viên tuyển dụng{" "}
                                            <span style={{ color: "red" }}> * </span>
                                        </label>
                                        <div className={`${styles.input_right}`}>
                                            <div className={`${styles.div_no_pad} `}>
                                                <Selects
                                                    selectedOption={selectedUseHiring}
                                                    onChange={handleSelectChange}
                                                    padding={15}
                                                    width_control={100}
                                                    width_menu={97}
                                                    height={33.6}
                                                    setState={setUserHiring}
                                                    option={options.tennhanvientuyendung}
                                                    placeholder={"Chọn nhân viên"}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${styles.form_groups}`}>
                                        <label htmlFor="">
                                            Tên nhận viên giới thiệu{" "}
                                            <span style={{ color: "red" }}> * </span>
                                        </label>
                                        <div className={`${styles.input_right}`}>
                                            <div className={`${styles.div_no_pad} `}>
                                                <Selects
                                                    selectedOption={selectedUseRecomment}
                                                    onChange={handleSelectChange}
                                                    padding={15}
                                                    width_control={100}
                                                    width_menu={97}
                                                    height={33.6}
                                                    setState={setUserRecommend}
                                                    option={options.tennhanviengioithieu}
                                                    placeholder={"Chọn nhân viên"}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${styles.form_groups}`}>
                                        <label htmlFor="" style={{ color: '#337AB7' }}>
                                            Giai đoạn nhận hồ sơ{" "}
                                        </label>
                                    </div>
                                    <div className={`${styles.form_groups}`}>
                                        <label htmlFor="">
                                            Thời gian nhận hồ sơ{" "}
                                            <span style={{ color: "red" }}> * </span>
                                        </label>
                                        <div className={`${styles.input_right}`}>
                                            <input
                                                type="date"
                                                id="timeSendCv"
                                                defaultValue={format(
                                                    parseISO(candidate?.createdAt),
                                                    "yyyy-MM-dd"
                                                )}
                                                placeholder="dd/mm/yyyy --:--:--"
                                                className={`${styles.input_process}`}
                                            />
                                        </div>
                                    </div>
                                    <div className={`${styles.form_groups}`}>
                                        <label htmlFor="">
                                            Đánh giá hồ sơ <span style={{ color: "red" }}> * </span>
                                        </label>
                                        <div className={`${styles.input_right}`}>
                                            <Rating
                                                size={27}
                                                initialValue={candidate?.starVote}
                                                disableFillHover
                                                className={`${styles.star_rating}`}
                                                onClick={handleRating}
                                            />
                                            <div className={`${styles.skills_container}`}>
                                            </div>

                                        </div>
                                    </div>
                                    <div className={`${styles.form_groups}`}>
                                        <label htmlFor="" style={{ color: '#337AB7' }}>
                                            Phỏng vấn{" "}
                                        </label>
                                    </div>
                                    <div className={`${styles.form_groups}`}>
                                        <label htmlFor="">
                                            ghi chú <span style={{ color: "red" }}> * </span>
                                        </label>
                                        <div className={`${styles.input_right} `}>
                                            <input
                                                type="text"
                                                id=""
                                                className={`${styles.input_process}`}
                                            />
                                        </div>
                                    </div>
                                    {isCandidate?.detail_contact_job?.offerTime &&
                                        <div className={`${styles.form_groups}`}>
                                            <label htmlFor="">
                                                Thời gian phỏng vấn{" "}
                                                <span style={{ color: "red" }}> * </span>
                                            </label>
                                            <div className={`${styles.input_right}`}>
                                                <input
                                                    type="date"
                                                    id="timeSendCv"
                                                    defaultValue={format(
                                                        parseISO(isCandidate?.detail_contact_job?.offerTime),
                                                        "yyyy-MM-dd"
                                                    )}
                                                    placeholder="dd/mm/yyyy --:--:--"
                                                    className={`${styles.input_process}`}
                                                />
                                            </div>
                                        </div>
                                    }

                                    <div className={`${styles.form_groups}`}>
                                        <label htmlFor="">
                                            Đánh giá hồ sơ <span style={{ color: "red" }}> * </span>
                                        </label>
                                        <div className={`${styles.input_right}`}>
                                            <Rating
                                                size={27}
                                                initialValue={candidate?.starVote}
                                                disableFillHover
                                                className={`${styles.star_rating}`}
                                                onClick={handleRating}
                                            />
                                            <div className={`${styles.skills_container}`}>
                                            </div>

                                        </div>
                                    </div>
                                    <div className={`${styles.form_groups}`}>
                                        <label htmlFor="">
                                            Mức lương mong muốn <span style={{ color: "red" }}> * </span>
                                        </label>
                                        <div className={`${styles.input_right} `}>
                                            <input
                                                type="text"
                                                id="resiredSalary"
                                                defaultValue={isCandidate?.detail_contact_job?.resiredSalary}
                                                className={`${styles.input_process}`}
                                            />
                                            <span> {errors.resiredSalary && <div className={`${styles.t_require} `}>{errors.resiredSalary}</div>}</span>
                                        </div>
                                    </div>
                                    <div className={`${styles.form_groups}`}>
                                        <label htmlFor="">
                                            Mức lương thực <span style={{ color: "red" }}> * </span>
                                        </label>
                                        <div className={`${styles.input_right} `}>
                                            <input
                                                type="text"
                                                id="salary"
                                                defaultValue={isCandidate?.detail_contact_job?.salary}
                                                className={`${styles.input_process}`}
                                            />
                                            <span> {errors.salary && <div className={`${styles.t_require} `}>{errors.salary}</div>}</span>
                                        </div>
                                    </div>
                                    <div className={`${styles.form_groups}`}>
                                        <label htmlFor="">
                                            Ghi chú <span style={{ color: "red" }}> * </span>
                                        </label>
                                        <div className={`${styles.input_right} `}>
                                            <textarea
                                                style={{ height: 60 }}
                                                id="note"
                                                defaultValue={isCandidate?.detail_contact_job?.note}
                                                className={`${styles.input_process}`}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className={`${styles.modal_footer} ${styles.footer_process}`}
                                >
                                    <button className={`${styles.btn_cancel}`} onClick={onCancel}>
                                        Hủy
                                    </button>
                                    <button
                                        className={`${styles.btn_add}`}
                                        onClick={handleSubmit}
                                    >
                                        Thêm
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

