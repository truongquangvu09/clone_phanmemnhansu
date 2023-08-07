import React, { useState, useEffect, useMemo } from "react";
import Select from "react-select";
import styles from "../../candidateAddModal/candidateAddModal.module.css";
import { Rating } from "react-simple-star-rating";
import { CandidateUpdate } from "@/pages/api/quan-ly-tuyen-dung/candidateList";
import { EmployeeList } from "@/pages/api/listNhanVien";
import { GetListNews } from "@/pages/api/quan-ly-tuyen-dung/PerformRecruitment";
import Selects from "@/components/select";
import { parseISO, format } from "date-fns";

type SelectOptionType = { label: string; value: any };

export default function EditCandidateModal({ onCancel, candidate }: any) {
    const [rating, setRating] = useState<any>(candidate?.starVote);
    const [addAnotherSkill, setAddAnotherSkill] = useState<JSX.Element[]>([]);
    const [skills, setSkills] = useState<{ skillName: string; skillVote: any }[]>(
        []
    );
    const [selectedOption, setSelectedOption] = useState<SelectOptionType | null>(
        null
    );
    const [lastAddedIndex, setLastAddedIndex] = useState(-1);
    const [provisionFile, setProvisionFile] = useState<File | null>(null);
    const [isGender, setGender] = useState<any>(candidate?.gender);
    const [isEducation, setEducation] = useState<any>(candidate?.education);
    const [isUserHiring, setUserHiring] = useState<any>(candidate?.userHiring);
    const [isExp, setExp] = useState<any>(candidate?.exp);
    const [isMarried, setMarried] = useState<any>(candidate?.isMarried);
    const [isUserRecommend, setUserRecommend] = useState<any>(
        candidate?.userRecommend
    );
    const [isRecruitmentNewsId, setRecruitmentNewsId] = useState<any>(
        candidate?.recruitmentNewsId
    );
    const [isEmpList, setEmpList] = useState<any>(null);
    const [isNewList, setNewsList] = useState<any>(null);

    console.log({ candidate });
    console.log(isNewList);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const formData = new FormData();
                const comid: any = 1664;
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

            const formData = new FormData();
            formData.append("name", name);
            formData.append("email", email);
            formData.append("phone", phone);
            formData.append("gender", isGender);
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
            formData.append("firstStarVote", rating);
            formData.append("candidateId", candidate?.id);

            {
                skills?.map((item, index) => {
                    const skillData = {
                        skillName: item.skillName,
                        skillVote: item.skillVote,
                    };
                    formData.append("listSkill", JSON.stringify(skillData));
                });
            }
            if (provisionFile) {
                formData.append("cv", provisionFile);
            }

            const response = await CandidateUpdate(formData);
            if (response) {
                setTimeout(() => {
                    onCancel();
                }, 1500);
            }
        } catch (error) {
            throw error;
        }
    };

    function handleUploadClick(event: React.MouseEvent<HTMLAnchorElement>) {
        event.preventDefault();
        const uploadInput = document.getElementById(
            "upload_cv"
        ) as HTMLInputElement;
        if (uploadInput) {
            uploadInput.click();
        }
    }

    const handleAddAnotherSkill = () => {
        const newSkillIndex = lastAddedIndex + 1;

        const newSkillObject: { skillName: string; skillVote: any } = {
            skillName: "",
            skillVote: 0,
        };
        setSkills((prevSkills) => [...prevSkills, newSkillObject]);

        setAddAnotherSkill((prevSkills) => [
            ...prevSkills,
            <div key={newSkillIndex} className={`${styles.another_skill}`}>
                <div className={`${styles.skill_input}`}>
                    <input
                        type="text"
                        className={`${styles.form_control} ${styles.another_skill_name}`}
                        placeholder="Nhập kỹ năng khác"
                        onChange={(e) =>
                            handleSkillNameChange(newSkillIndex, e.target.value)
                        }
                    />
                </div>
                <div className={`${styles.another_rating}`}>
                    <ul className={`${styles.rating} ${styles.rating_add_another}`}>
                        <Rating
                            size={27}
                            initialValue={0}
                            disableFillHover
                            className={`${styles.star_rating}`}
                            onClick={(rate) => handleRatingSkill(newSkillIndex, rate)}
                        />
                    </ul>
                </div>
                <div className={`${styles.icon_delete}`}>
                    <a
                        className={`${styles.remove_another_skill}`}
                        onClick={() => handleRemoveSkill(newSkillIndex)}
                    >
                        <img src={`/icon-del-kn.svg`} alt="" />
                    </a>
                </div>
            </div>,
        ]);
        setLastAddedIndex(newSkillIndex);
    };

    const handleSkillNameChange = (index: number, skillName: string) => {
        setSkills((prevSkills) => {
            const updatedSkills = [...prevSkills];
            updatedSkills[index].skillName = skillName;
            return updatedSkills;
        });
    };

    const handleRatingSkill = (index: any, rate: any) => {
        setSkills((prevSkills) => {
            const updatedSkills = [...prevSkills];
            updatedSkills[index].skillVote = rate;
            return updatedSkills;
        });
    };

    const handleRemoveSkill = (indexToRemove: number) => {
        setAddAnotherSkill((prevSkills) =>
            prevSkills.filter((_, index) => index !== indexToRemove)
        );
        setSkills((prevSkills) =>
            prevSkills.filter((_, index) => index !== indexToRemove)
        );
    };

    const handleRating = (rate: number) => {
        setRating(rate);
    };

    const handleProvisionFileChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const file = event.target.files && event.target.files[0];
        setProvisionFile(file);
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

    console.log(options.tennhanvientuyendung);

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
                                    CHỈNH SỬA HỒ SƠ ỨNG VIÊN
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
                                                defaultValue={candidate?.name}
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
                                                defaultValue={candidate?.email}
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
                                                defaultValue={candidate?.phone}
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
                                                defaultValue={format(
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
                                                defaultValue={candidate?.hometown}
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
                                                defaultValue={candidate?.school}
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
                                                defaultValue={candidate?.address}
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
                                                defaultValue={candidate?.cvFrom}
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
                                        <label htmlFor="">
                                            Vị trí tuyển dụng{" "}
                                            <span style={{ color: "red" }}> * </span>
                                        </label>
                                        <div className={`${styles.input_right}`}>
                                            <div className={`${styles.div_no_pad} `}>
                                                <Selects
                                                    selectedOption={options.vitrituyendungdefault}
                                                    onChange={handleSelectChange}
                                                    padding={15}
                                                    width_control={100}
                                                    width_menu={97}
                                                    height={33.6}
                                                    setState={setRecruitmentNewsId}
                                                    option={options.vitrituyendung}
                                                    placeholder={"-- Vui lòng chọn --"}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${styles.form_groups}`}>
                                        <label htmlFor="">
                                            Thời gian gửi hồ sơ{" "}
                                            <span style={{ color: "red" }}> * </span>
                                        </label>
                                        <div className={`${styles.input_right}`}>
                                            <input
                                                type="date"
                                                id="timeSendCv"
                                                defaultValue={format(
                                                    parseISO(candidate?.timeSendCv),
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
                                                {addAnotherSkill}
                                            </div>
                                            <a
                                                className={`${styles.add_another_skill}`}
                                                style={{ cursor: "pointer" }}
                                                onClick={handleAddAnotherSkill}
                                            >
                                                Thêm Kỹ năng
                                            </a>
                                        </div>
                                    </div>
                                    <div className={`${styles.form_groups}`}>
                                        <label htmlFor="">Tải lên tệp CV </label>
                                        <div
                                            className={`${styles.input_right} ${styles.input_upload_t}`}
                                        >
                                            <input
                                                type="file"
                                                className={`${styles.upload_cv}`}
                                                id="upload_cv"
                                                accept="application/pdf, image/*"
                                                onChange={handleProvisionFileChange}
                                            />
                                            <a
                                                href=""
                                                className={`${styles.t_ion_file}`}
                                                onClick={handleUploadClick}
                                            >
                                                <img src={`/t-icon-file.svg`} alt="" />
                                            </a>
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
