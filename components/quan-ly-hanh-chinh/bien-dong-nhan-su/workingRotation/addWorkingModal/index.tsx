import React, { useState, useEffect } from "react";
import styles from '../../planningAppointment/addPlanningModal/addPlanningModal.module.css'
import Select from 'react-select';
import MyEditor from "@/components/quan-ly-tuyen-dung/quy-trinh-tuyen-dung/components/Editor";


function Input_textarea() {
    const [editorLoaded, setEditorLoaded] = useState(false);
    const [data, setData] = useState("");

    useEffect(() => {
        setEditorLoaded(true);
    }, []);
    console.log(data);
    return (
        <div>
            <MyEditor
                name="Editor"
                onChange={(data: React.SetStateAction<string>) => {
                    setData(data);
                }}
                editorLoaded={editorLoaded}
                value={data}
            />

            {/* {JSON.stringify(data)} */}
        </div>
    );
}

type SelectOptionType = { label: string, value: string }

export default function AddWorkingModal({ onCancel }: any) {
    function handleUploadClick(event: React.MouseEvent<HTMLAnchorElement>) {
        event.preventDefault();
        const uploadInput = document.getElementById('upload_cv') as HTMLInputElement;
        if (uploadInput) {
            uploadInput.click();
        }
    }
    const [content, setContent] = useState('');

    const handleContentChange = (value: string) => {
        setContent(value);
    };

    const [selectedOption, setSelectedOption] = useState<SelectOptionType | null>(null);

    const handleSelectionChange = (option: SelectOptionType | null, optionsArray: SelectOptionType[]) => {
        if (option) {
            setSelectedOption(option)
        }
    };

    const options = {
        chonchinhanh: [
            { value: 'PT shop', label: 'PT shop' },
            { value: 'LT legend', label: 'LT legend' },
            { value: 'LT pay 3', label: 'LT pay 3' },
            { value: 'Công ty cổ phần Thanh toán Hưng Hà 2 ', label: 'Công ty cổ phần Thanh toán Hưng Hà 2 ' },
        ],
        chonphongban: [
            { value: '  BAN GIÁM ĐỐC', label: 'BAN GIÁM ĐỐC' },
            { value: 'KỸ THUẬT', label: 'KỸ THUẬT' },
            { value: 'Biên tập', label: 'Biên tập' },
            { value: 'Kinh Doanh', label: 'Kinh Doanh' },
            { value: 'Đề án', label: 'Đề án' },
            { value: 'Phòng SEO', label: 'Phòng SEO' },
            { value: 'Phòng Đào tạo', label: 'Phòng Đào tạo' },
            { value: 'Phòng sáng tạo', label: 'phòng sáng tạo' },
            { value: 'Phòng tài vụ', label: 'Phòng tài vụ' },
        ],
        chonnhanvien: [
            { value: 'Lê Hồng Anh', label: 'Lê Hồng Anh (KỸ THUẬT - ID:284670)' },
            { value: 'Phan Mạnh Hùng', label: 'Phan Mạnh Hùng (SÁNG TẠO - ID:153846)' },
        ],
        chucvuhientai: [
            { value: 'sinh viên thực tập', label: 'SINH VIÊN THỰC TẬP' },
            { value: 'nhân viên part time', label: 'NHÂN VIÊN PART TIME' },
            { value: 'nhân viên thử việc', label: 'NHÂN VIÊN THỬ VIỆC' },
            { value: 'nhân viên chính thức', label: 'NHÂN VIÊN CHÍNH THỨC' },
            { value: 'trưởng nhóm', label: 'TRƯỞNG NHÓM' },
            { value: 'nhóm phó', label: 'NHÓM PHÓ' },
            { value: 'tổ trưởng', label: 'TỔ TRƯỞNG' },
            { value: 'phó tổ trưởng', label: 'PHÓ TỔ TRƯỞNG' },
            { value: 'trưởng ban dự án', label: 'TRƯỞNG BAN DỰ ÁN   ' },
            { value: 'phó ban dự án', label: 'PHÓ BAN DỰ ÁN' },
            { value: 'trưởng phòng', label: 'TRƯỞNG PHÒNG' },
            { value: 'phó trưởng phòng', label: 'PHÓ TRƯỞNG PHÒNG' },
            { value: 'giám đốc', label: 'GIÁM ĐỐC' },
            { value: 'phó giám đốc', label: 'PHÓ GIÁM ĐỐC   ' },
            { value: 'tổng giám đốc', label: 'TỔNG GIÁM ĐỐC' },
            { value: 'phó tổng giám đốc', label: 'PHÓ TỔNG GIÁM ĐỐC' },
            { value: 'tổng giám đốc tập đoàn', label: 'TỔNG GIÁM ĐỐC TẬP ĐOÀN' },
            { value: 'phó  tổng giám đốc tập đoàn', label: 'PHÓ TỔNG GIÁM ĐỐC TẬP ĐOÀN' },
            { value: 'chủ tịch hội đồng quản trị', label: 'CHỦ TỊCH HỘI ĐỒNG QUẢN TRỊ' },
            { value: 'phó chủ tịch hội đồng quản trị', label: 'PHÓ CHỦ TỊCH HỘI ĐỒNG QUẢN TRỊ' },
            { value: 'thành viên hội đồng quản trị', label: 'THÀNH VIÊN HỘI ĐỒNG QUẢN TRỊ' },
        ],
        quyhoachbonhiem: [
            { value: 'sinh viên thực tập', label: 'SINH VIÊN THỰC TẬP' },
            { value: 'nhân viên part time', label: 'NHÂN VIÊN PART TIME' },
        ],
        donvicongtacmoi: [
            { value: 'PT shop', label: 'PT shop' },
            { value: 'LT legend', label: 'LT legend' },
            { value: 'LT pay 3', label: 'LT pay 3' },
            { value: 'Công ty cổ phần Thanh toán Hưng Hà 2 ', label: 'Công ty cổ phần Thanh toán Hưng Hà 2 ' },
        ],
        phongbanmoi: [
            { value: '  BAN GIÁM ĐỐC', label: 'BAN GIÁM ĐỐC' },
            { value: 'KỸ THUẬT', label: 'KỸ THUẬT' },
        ],
        to: [
            { value: '  BAN GIÁM ĐỐC', label: 'BAN GIÁM ĐỐC' },
            { value: 'KỸ THUẬT', label: 'KỸ THUẬT' },
        ],
        nhom: [
            { value: '  BAN GIÁM ĐỐC', label: 'BAN GIÁM ĐỐC' },
            { value: 'KỸ THUẬT', label: 'KỸ THUẬT' },
        ],
        chucvumoi: [
            { value: 'sinh viên thực tập', label: 'SINH VIÊN THỰC TẬP' },
            { value: 'nhân viên part time', label: 'NHÂN VIÊN PART TIME' },
            { value: 'nhân viên thử việc', label: 'NHÂN VIÊN THỬ VIỆC' },
            { value: 'nhân viên chính thức', label: 'NHÂN VIÊN CHÍNH THỨC' },
            { value: 'trưởng nhóm', label: 'TRƯỞNG NHÓM' },
            { value: 'nhóm phó', label: 'NHÓM PHÓ' },
            { value: 'tổ trưởng', label: 'TỔ TRƯỞNG' },
            { value: 'phó tổ trưởng', label: 'PHÓ TỔ TRƯỞNG' },
            { value: 'trưởng ban dự án', label: 'TRƯỞNG BAN DỰ ÁN   ' },
            { value: 'phó ban dự án', label: 'PHÓ BAN DỰ ÁN' },
            { value: 'trưởng phòng', label: 'TRƯỞNG PHÒNG' },
            { value: 'phó trưởng phòng', label: 'PHÓ TRƯỞNG PHÒNG' },
            { value: 'giám đốc', label: 'GIÁM ĐỐC' },
            { value: 'phó giám đốc', label: 'PHÓ GIÁM ĐỐC   ' },
            { value: 'tổng giám đốc', label: 'TỔNG GIÁM ĐỐC' },
            { value: 'phó tổng giám đốc', label: 'PHÓ TỔNG GIÁM ĐỐC' },
            { value: 'tổng giám đốc tập đoàn', label: 'TỔNG GIÁM ĐỐC TẬP ĐOÀN' },
            { value: 'phó  tổng giám đốc tập đoàn', label: 'PHÓ TỔNG GIÁM ĐỐC TẬP ĐOÀN' },
            { value: 'chủ tịch hội đồng quản trị', label: 'CHỦ TỊCH HỘI ĐỒNG QUẢN TRỊ' },
            { value: 'phó chủ tịch hội đồng quản trị', label: 'PHÓ CHỦ TỊCH HỘI ĐỒNG QUẢN TRỊ' },
            { value: 'thành viên hội đồng quản trị', label: 'THÀNH VIÊN HỘI ĐỒNG QUẢN TRỊ' },
        ],
        chonquydinh: [
            { value: 'quy định bổ nhiệm số 003/HHP-P1', label: 'Quy định bổ nhiệm số 003/HHP-P1' },
            { value: 'quy định bổ nhiệm số 003/HHP-P2', label: 'Quy định bổ nhiệm số 003/HHP-P2' },
        ],
    };

    return (
        <>
            <div className={`${styles.modal_open}`}>
                <div className={`${styles.modal} ${styles.fade} ${styles.in}`}>
                    <div className={` ${styles.modal_dialog} ${styles.content_process}`}>
                        <div className={`${styles.modal_content}`}>
                            <div className={`${styles.modal_header} ${styles.header_process}`}>
                                <h5 className={`${styles.modal_tittle}`}>THÊM MỚI LUÂN PHIÊN CÔNG TÁC</h5>
                            </div>
                            <div className={`${styles.modal_body}`}>
                                <form action="">
                                    <div className={`${styles.form_groups}`}>
                                        <label htmlFor="">Đơn vị công tác hiện tại</label>
                                        <div className={`${styles.input_right}`}>
                                            <Select
                                                defaultValue={selectedOption}
                                                onChange={(option) => handleSelectionChange(option, options.chonchinhanh)}
                                                options={options.chonchinhanh}
                                                placeholder="Chọn chi nhánh"
                                                styles={{
                                                    control: (baseStyles, state) => ({
                                                        ...baseStyles,
                                                        borderRadius: 8,
                                                        fontSize: state.isFocused ? 14 : 14,
                                                        minHeight: state.isFocused ? 20 : 20,
                                                        width: '100%',
                                                        color: state.isFocused ? '#444444' : '#444444',
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
                                        <label htmlFor="">Phòng ban hiện tại </label>
                                        <div className={`${styles.input_right}`}>
                                            <Select
                                                defaultValue={selectedOption}
                                                onChange={(option) => handleSelectionChange(option, options.chonphongban)}
                                                options={options.chonphongban}
                                                placeholder="Chọn phòng ban"
                                                styles={{
                                                    control: (baseStyles, state) => ({
                                                        ...baseStyles,
                                                        borderRadius: 8,
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
                                        <label htmlFor="">Tên nhân viên <span style={{ color: 'red' }}> * </span></label>
                                        <div className={`${styles.input_right}`}>
                                            <Select
                                                defaultValue={selectedOption}
                                                onChange={(option) => handleSelectionChange(option, options.chonnhanvien)}
                                                options={options.chonnhanvien}
                                                placeholder="Chọn nhân viên"
                                                styles={{
                                                    control: (baseStyles, state) => ({
                                                        ...baseStyles,
                                                        borderRadius: 8,
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
                                                defaultValue={selectedOption}
                                                onChange={(option) => handleSelectionChange(option, options.chucvuhientai)}
                                                options={options.chucvuhientai}
                                                placeholder="Chọn chức vụ"
                                                styles={{
                                                    control: (baseStyles, state) => ({
                                                        ...baseStyles,
                                                        borderRadius: 8,
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
                                        <label htmlFor="">Đơn vị công tác mới <span style={{ color: 'red' }}> * </span></label>
                                        <div className={`${styles.input_right}`}>
                                            <Select
                                                defaultValue={selectedOption}
                                                onChange={(option) => handleSelectionChange(option, options.donvicongtacmoi)}
                                                options={options.donvicongtacmoi}
                                                placeholder="Chọn chi nhánh"
                                                styles={{
                                                    control: (baseStyles, state) => ({
                                                        ...baseStyles,
                                                        borderRadius: 8,
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
                                                defaultValue={selectedOption}
                                                onChange={(option) => handleSelectionChange(option, options.phongbanmoi)}
                                                options={options.phongbanmoi}
                                                placeholder="Chọn phòng ban"
                                                styles={{
                                                    control: (baseStyles, state) => ({
                                                        ...baseStyles,
                                                        borderRadius: 8,
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
                                        <label htmlFor="">Tổ </label>
                                        <div className={`${styles.input_right}`}>
                                            <Select
                                                defaultValue={selectedOption}
                                                onChange={(option) => handleSelectionChange(option, options.to)}
                                                options={options.to}
                                                placeholder="Chọn tổ"
                                                styles={{
                                                    control: (baseStyles, state) => ({
                                                        ...baseStyles,
                                                        borderRadius: 8,
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
                                        <label htmlFor="">Nhóm </label>
                                        <div className={`${styles.input_right}`}>
                                            <Select
                                                defaultValue={selectedOption}
                                                onChange={(option) => handleSelectionChange(option, options.nhom)}
                                                options={options.nhom}
                                                placeholder="Chọn nhóm"
                                                styles={{
                                                    control: (baseStyles, state) => ({
                                                        ...baseStyles,
                                                        borderRadius: 8,
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
                                        <label htmlFor="">Chức vụ mới <span style={{ color: 'red' }}> * </span></label>
                                        <div className={`${styles.input_right}`}>
                                            <Select
                                                defaultValue={selectedOption}
                                                onChange={(option) => handleSelectionChange(option, options.chucvumoi)}
                                                options={options.chucvumoi}
                                                placeholder="Chọn chức vụ"
                                                styles={{
                                                    control: (baseStyles, state) => ({
                                                        ...baseStyles,
                                                        borderRadius: 8,
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
                                        <label htmlFor="">Thời gian luân chuyển công tác <span style={{ color: 'red' }}> * </span></label>
                                        <div className={`${styles.input_right}`}>
                                            <input type="date" id="names" placeholder="dd/mm/yyyy" className={`${styles.input_process}`} />
                                        </div>
                                    </div>
                                    <div className={`${styles.form_groups}`}>
                                        <label htmlFor="">Chọn quy định </label>
                                        <div className={`${styles.input_right}`}>
                                            <Select
                                                defaultValue={selectedOption}
                                                onChange={(option) => handleSelectionChange(option, options.chonquydinh)}
                                                options={options.chonquydinh}
                                                placeholder="Chọn quy định"
                                                styles={{
                                                    control: (baseStyles, state) => ({
                                                        ...baseStyles,
                                                        borderRadius: 8,
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
                                    <div className={`${styles.form_groups} ${styles.cke}`}>
                                        <label htmlFor="">Nhiệm vụ công việc mới <span style={{ color: 'red' }}> * </span></label>
                                        <div className={`${styles.ckeditor}`}>
                                            <Input_textarea />
                                        </div>
                                    </div>
                                    <div className={`${styles.form_groups} ${styles.cke}`}>
                                        <label htmlFor="">Ghi chú</label>
                                        <div className={`${styles.ckeditor}`}>
                                            <Input_textarea />
                                        </div>
                                    </div>
                                    <div className={`${styles.modal_footer} ${styles.footer_process}`}>
                                        <button className={`${styles.btn_cancel}`} onClick={onCancel}>Hủy</button>
                                        <button className={`${styles.btn_add}`}>Thêm</button>
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