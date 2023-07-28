import React, { useState, useEffect } from "react";
import styles from '../../quy-dinh-lam-viec/addRegulationsModal/addRegulationsModal.module.css'
import { AddPolicyByGroup } from "@/pages/api/quy_dinh_chinh_sach";
import { PolicyList } from "@/pages/api/quy_dinh_chinh_sach";
import MyEditorNew from "@/components/myEditor";

interface InputTextareaProps {
    onDescriptionChange: (data: any) => void
}

interface AddEmployeePolicyModal2Props {
    onCancel: () => void;
}

function Input_textarea({ onDescriptionChange }: InputTextareaProps) {
    const [editorLoaded, setEditorLoaded] = useState(false);
    const [data, setData] = useState("");

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

export default function AddEmployeePolicyModal2({ onCancel }: AddEmployeePolicyModal2Props) {
    const [provisionFile, setProvisionFile] = useState<File | null>(null);
    const [descriptions, setDescription] = useState("");
    const [ListPolicyGroup, setListPolicyGroup] = useState<any | null>(null)
    console.log({ provisionFile });


    console.log({ ListPolicyGroup });


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await PolicyList(1, 50, "")
                setListPolicyGroup(response.data)
            } catch (error) {
                throw error
            }
        }
        fetchData()
    }, [])

    const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        try {
            const name = (document.getElementById('names') as HTMLInputElement)?.value
            const provision_id = (document.getElementById('employe_policy_id') as HTMLInputElement)?.value
            const time_start = (document.getElementById('time_start') as HTMLInputElement)?.value
            const supervisor_name = (document.getElementById('supervisor_name') as HTMLInputElement)?.value
            const apply_for = (document.getElementById('apply_for') as HTMLInputElement)?.value
            const content = descriptions

            const formData = new FormData()
            formData.append('name', name)
            formData.append('employe_policy_id', provision_id)
            formData.append('time_start', time_start)
            formData.append('supervisor_name', supervisor_name)
            formData.append('apply_for', apply_for)
            formData.append('content', content)
            if (provisionFile) {
                formData.append("policy", provisionFile);
            }
            const response = await AddPolicyByGroup(formData)
        } catch (error) {
            throw error
        }
    }

    function handleUploadClick(event: React.MouseEvent<HTMLAnchorElement>) {
        event.preventDefault();
        const uploadInput = document.getElementById('upload_cv') as HTMLInputElement;
        if (uploadInput) {
            uploadInput.click();
        }
    }

    const handleDescriptionChange = (data: string) => {
        setDescription(data);
    };

    const handleProvisionFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files && event.target.files[0]
        setProvisionFile(file)

    }

    return (
        <>
            <div className={`${styles.modal_open}`}>
                <div className={`${styles.modal} ${styles.fade} ${styles.in}`}>
                    <div className={` ${styles.modal_dialog} ${styles.content_process}`}>
                        <div className={`${styles.modal_content}`}>
                            <div className={`${styles.modal_header} ${styles.header_process}`}>
                                <h5 className={`${styles.modal_tittle}`}>THÊM CHÍNH SÁCH</h5>
                            </div>
                            <form action="">
                                <div className={`${styles.modal_body} ${styles.body_process}`}>
                                    <div className={`${styles.form_groups}`}>
                                        <label htmlFor="">Tên chính sách <span style={{ color: 'red' }}> * </span></label>
                                        <div className={`${styles.input_right}`}>
                                            <input type="text" id="names" placeholder="Nhập tên chính sách" className={`${styles.input_process}`} />
                                        </div>
                                    </div>
                                    <div className={`${styles.form_groups}`}>
                                        <label htmlFor="">Chọn nhóm quy định <span style={{ color: 'red' }}> * </span></label>
                                        <div className={`${styles.input_right}`}>
                                            <select name="" id="employe_policy_id" className={`${styles.input_process}`}>
                                                {ListPolicyGroup?.data?.map((item: any, index: any) => (
                                                    <option value={item.id} key={index}>-- {item.name} --</option>
                                                ))}

                                            </select>
                                        </div>
                                    </div>
                                    <div className={`${styles.form_groups}`}>
                                        <label htmlFor="">Thời gian bắt đầu hiệu lực <span style={{ color: 'red' }}> * </span></label>
                                        <div className={`${styles.input_right}`}>
                                            <input type="date" id="time_start" placeholder="dd/mm/yyyy" className={`${styles.input_process}`} />
                                        </div>
                                    </div>
                                    <div className={`${styles.form_groups}`}>
                                        <label htmlFor="">Người giám sát <span style={{ color: 'red' }}> * </span></label>
                                        <div className={`${styles.input_right}`}>
                                            <input type="text" id="supervisor_name" placeholder="Người giám sát" className={`${styles.input_process}`} />
                                        </div>
                                    </div>
                                    <div className={`${styles.form_groups}`}>
                                        <label htmlFor="">Đối tượng thi hành <span style={{ color: 'red' }}> * </span></label>
                                        <div className={`${styles.input_right}`}>
                                            <input type="text" id="apply_for" placeholder="Đối tượng thi hành" className={`${styles.input_process}`} />
                                        </div>
                                    </div>
                                    <div className={`${styles.form_groups} ${styles.cke}`}>
                                        <label htmlFor="">Nội dung quy định <span style={{ color: 'red' }}> * </span></label>
                                        <div className={`${styles.ckeditor}`}>
                                            <Input_textarea onDescriptionChange={handleDescriptionChange} />
                                        </div>
                                    </div>
                                    <div className={`${styles.form_groups}`}>
                                        <label htmlFor="">Tải lên tệp CV </label>
                                        <div className={`${styles.input_right} ${styles.input_upload_t}`}>
                                            <input type="file" className={`${styles.upload_cv}`} id="upload_cv" accept="application/pdf, image/*" onChange={handleProvisionFileChange} />
                                            <a href="" className={`${styles.t_ion_file}`} onClick={handleUploadClick} >
                                                <img src={`/t-icon-file.svg`} alt="" />
                                            </a>
                                        </div>
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

        </>
    )
}