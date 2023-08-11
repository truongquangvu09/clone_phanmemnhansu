import React, { useState, useEffect, useMemo } from "react";
import styles from '../addPlanningModal/addPlanningModal.module.css'
import Select from 'react-select';
import MyEditorNew from "@/components/myEditor";
import { FetchDataDep, FetchDataPosition, FetchDataSpecifiedGroup } from "@/components/util/listAll";
import { AddPlanningAppointment } from "@/pages/api/bien_dong_nhan_su";
import { parseISO, format } from 'date-fns';
interface InputTextareaProps {
    onDescriptionChange: (data: any) => void
    reason: any
}
type SelectOptionType = { label: string, value: string }

function Input_textarea({ onDescriptionChange, reason }: InputTextareaProps) {
    const [editorLoaded, setEditorLoaded] = useState(false);
    const [data, setData] = useState(reason);

    useEffect(() => {
        setEditorLoaded(true);
    }, []);

    const extractTextFromHTML = (htmlString) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlString, "text/html");
        const text = doc.querySelector("p")?.textContent || "";
        return text;
    };

    const handleEditorChange = (data: string) => {
        setData(data);
        const extractedText = extractTextFromHTML(data); // Lấy chỉ văn bản từ chuỗi HTML
        onDescriptionChange(extractedText);
    };

    return (
        <div>
            <MyEditorNew
                name="Editor"
                onChange={handleEditorChange}
                editorLoaded={editorLoaded}
                value={data}
            />
        </div>
    );
}
export default function EditPlanningModal({ onCancel, infoList }: any) {

    const [selectedOption, setSelectedOption] = useState<SelectOptionType | null>(null);
    const [isReason, setReason] = useState<any>("")
    const [isPositionList, setPositionList] = useState<any>(null)
    const [isSpecifiedList, setSpecifiedList] = useState<any>(null)
    const [isDepList, setDeptList] = useState<any>(null)

    const [isPosition_idnew, setPosition_idnew] = useState<any>(infoList?.new_position_id)
    const [isDep_idNew, setDep_idNew] = useState<any>(infoList?.new_dep_id)
    const [isSpecified_idnew, setSpecified_idnew] = useState<any>(infoList?.decision_id)
    const [isSpecified_name, setSpecified_name] = useState<any>(null)

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        try {
            const position = await FetchDataPosition()
            setPositionList(position)

            const specifiedGroup = await FetchDataSpecifiedGroup()
            setSpecifiedList(specifiedGroup)

            const dep = await FetchDataDep()
            setDeptList(dep)

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    useEffect(() => {
        if (isSpecifiedList && infoList) {
            const foundSpecified = isSpecifiedList?.data?.find((item: any) => item.id === Number(infoList?.decision_id))
            if (foundSpecified) {
                setSpecified_name(foundSpecified.name)
            }
        }
    }, [isSpecifiedList, infoList])

    const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        try {
            const created_at = (document.getElementById('created_at') as HTMLInputElement)?.value
            const formData = new FormData();
            formData.append('ep_id', infoList.ep_id)
            formData.append('current_position', infoList.old_position_id)
            formData.append('current_dep_id', infoList.old_dep_id)
            formData.append('created_at', created_at)
            formData.append('decision_id', isSpecified_idnew)
            formData.append('update_position', isPosition_idnew)
            formData.append('update_dep_id', isDep_idNew)
            formData.append('note', isReason)

            const response = await AddPlanningAppointment(formData)
            setTimeout(() => {
                onCancel()
            }, 2000)
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

    const handleInputAreaChange = (data: string) => {
        setReason(data);
    };

    const chonphongbanOptions = useMemo(
        () =>
            isDepList &&
            isDepList?.data?.map((dep: any) => ({
                value: dep.dep_id,
                label: dep.dep_name
            })),
        [isDepList]
    );

    const chonquydinhOptions = useMemo(
        () =>
            isSpecifiedList &&
            isSpecifiedList?.data?.map((spe: any) => ({
                value: spe.id,
                label: spe.name
            })),
        [isSpecifiedList]
    );

    const chonchucvuOptions = useMemo(
        () =>
            isPositionList &&
            isPositionList?.data?.flat()?.map((pos: any) => ({
                value: pos.positionId,
                label: pos.positionName
            })),
        [isPositionList]
    );

    const options = {
        chonnhanvien: [
            { value: infoList?.ep_id, label: infoList?.ep_name },
        ],
        chucvuhientai: [
            { value: infoList?.old_position_id, label: infoList.old_position_name },
        ],
        chonphongban: [
            { value: infoList?.old_dep_id, label: infoList.old_dep_name },
        ],
        quyhoachbonhiem: [
            { value: infoList?.new_position_id, label: infoList.new_position_name },
        ],
        phongbanmoi: [
            { value: infoList?.new_dep_id, label: infoList.new_dep_name },
        ],
        chonquydinh: [
            { value: infoList?.decision_id, label: isSpecified_name && isSpecified_name },
        ],
        quyhoachbonhiemupdate: chonchucvuOptions,
        phongbanupdate: chonphongbanOptions,
        chonquydinhupdate: chonquydinhOptions
    };

    return (
        <>
            <div className={`${styles.modal_open}`}>
                <div className={`${styles.modal} ${styles.fade} ${styles.in}`}>
                    <div className={` ${styles.modal_dialog} ${styles.content_process}`}>
                        <div className={`${styles.modal_content}`}>
                            <div className={`${styles.modal_header} ${styles.header_process}`}>
                                <h5 className={`${styles.modal_tittle}`}>CẬP NHẬT BỔ NHIỆM, QUY HOẠCH</h5>
                            </div>
                            <div className={`${styles.modal_body}`}>
                                <form action="">
                                    <div className={`${styles.form_groups}`}>
                                        <label htmlFor="">Tên nhân viên <span style={{ color: 'red' }}> * </span></label>
                                        <div className={`${styles.input_right}`}>
                                            <Select
                                                value={options.chonnhanvien}
                                                onChange={(option) => handleSelectChange(option, options.chonnhanvien)}
                                                options={options.chonnhanvien}
                                                placeholder="Chọn nhân viên"
                                                styles={{
                                                    control: (baseStyles, state) => ({
                                                        ...baseStyles,
                                                        borderRadius: 4,
                                                        fontSize: state.isFocused ? 14 : 14,
                                                        minHeight: state.isFocused ? 20 : 20,
                                                        width: '100%',
                                                        fontWeight: state.isFocused ? 600 : 600
                                                    }),
                                                    placeholder: (baseStyles) => ({
                                                        ...baseStyles,
                                                        color: "#444444",
                                                    }),
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className={`${styles.form_groups}`}>
                                        <label htmlFor="">Chức vụ hiện tại <span style={{ color: 'red' }}> * </span></label>
                                        <div className={`${styles.input_right}`}>
                                            <Select
                                                value={options.chucvuhientai}
                                                onChange={(option) => handleSelectChange(option, options.chucvuhientai)}
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
                                                    placeholder: (baseStyles) => ({
                                                        ...baseStyles,
                                                        color: "#444444",
                                                    }),
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className={`${styles.form_groups}`}>
                                        <label htmlFor="">Phòng ban <span style={{ color: 'red' }}> * </span></label>
                                        <div className={`${styles.input_right}`}>
                                            <Select
                                                value={options.chonphongban}
                                                onChange={(option) => handleSelectChange(option, options.chonphongban)}
                                                options={options.chonphongban}
                                                placeholder="Chọn phòng ban"
                                                styles={{
                                                    control: (baseStyles, state) => ({
                                                        ...baseStyles,
                                                        borderRadius: 4,
                                                        fontSize: state.isFocused ? 14 : 14,
                                                        minHeight: state.isFocused ? 20 : 20,
                                                        width: '100%',
                                                        fontWeight: state.isFocused ? 600 : 600
                                                    }),
                                                    placeholder: (baseStyles) => ({
                                                        ...baseStyles,
                                                        color: "#444444",
                                                    }),
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className={`${styles.form_groups}`}>
                                        <label htmlFor=""> Quy hoạch bổ nhiệm <span style={{ color: 'red' }}> * </span></label>
                                        <div className={`${styles.input_right}`}>
                                            <Select
                                                defaultValue={options.quyhoachbonhiem}
                                                onChange={(option) => handleSelectChange(option, setPosition_idnew)}
                                                options={options.quyhoachbonhiemupdate}
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
                                                    placeholder: (baseStyles) => ({
                                                        ...baseStyles,
                                                        color: "#444444",
                                                    }),
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className={`${styles.form_groups}`}>
                                        <label htmlFor="">Phòng ban mới <span style={{ color: 'red' }}> * </span></label>
                                        <div className={`${styles.input_right}`}>
                                            <Select
                                                defaultValue={options.phongbanmoi}
                                                onChange={(option) => handleSelectChange(option, setDep_idNew)}
                                                options={options.phongbanupdate}
                                                placeholder="Chọn phòng ban"
                                                styles={{
                                                    control: (baseStyles, state) => ({
                                                        ...baseStyles,
                                                        borderRadius: 4,
                                                        fontSize: state.isFocused ? 14 : 14,
                                                        minHeight: state.isFocused ? 20 : 20,
                                                        width: '100%',
                                                        fontWeight: state.isFocused ? 600 : 600
                                                    }),
                                                    placeholder: (baseStyles) => ({
                                                        ...baseStyles,
                                                        color: "#444444",
                                                    }),
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className={`${styles.form_groups}`}>
                                        <label htmlFor="">Thời gian quy hoạch bổ nhiệm <span style={{ color: 'red' }}> * </span></label>
                                        <div className={`${styles.input_right}`}>
                                            <input type="date" id="created_at" defaultValue={format(parseISO(infoList?.time), 'yyyy-MM-dd')} placeholder="dd/mm/yyyy" className={`${styles.input_process}`} />
                                        </div>
                                    </div>
                                    <div className={`${styles.form_groups}`}>
                                        <label htmlFor="">Chọn quy định <span style={{ color: 'red' }}> * </span></label>
                                        <div className={`${styles.input_right}`}>
                                            {isSpecified_name && (
                                                <Select
                                                    defaultValue={options?.chonquydinh}
                                                    onChange={(option) => handleSelectChange(option, setSpecified_idnew)}
                                                    options={options.chonquydinhupdate}
                                                    placeholder="Chọn quy định"
                                                    styles={{
                                                        control: (baseStyles, state) => ({
                                                            ...baseStyles,
                                                            borderRadius: 4,
                                                            fontSize: state.isFocused ? 14 : 14,
                                                            minHeight: state.isFocused ? 20 : 20,
                                                            width: '100%',
                                                            fontWeight: state.isFocused ? 600 : 600
                                                        }),
                                                        placeholder: (baseStyles) => ({
                                                            ...baseStyles,
                                                            color: "#444444",
                                                        }),
                                                    }}
                                                />
                                            )}

                                        </div>
                                    </div>
                                    <div className={`${styles.form_groups} ${styles.cke}`}>
                                        <label htmlFor="">Lý do <span style={{ color: 'red' }}> * </span></label>
                                        <div className={`${styles.ckeditor}`}>
                                            <Input_textarea onDescriptionChange={handleInputAreaChange} reason={infoList.note} />
                                        </div>
                                    </div>

                                    <div className={`${styles.modal_footer} ${styles.footer_process}`}>
                                        <button className={`${styles.btn_cancel}`} onClick={onCancel}>Hủy</button>
                                        <button className={`${styles.btn_add}`} onClick={handleSubmit}>Thêm</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}