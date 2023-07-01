import React, { useState } from 'react';
import styles from './hrReport.module.css'
import Select from 'react-select'
import BodyFrameFooter from '@/components/bodyFrame/bodyFrame_footer/bodyFrame_footer';
import EmployeeInformation from './bodySection1';

type SelectOptionType = { label: string, value: string }

export default function TabHRReport() {
    const [selectedOption, setSelectedOption] = useState<SelectOptionType | null>(null);

    const handleSelectionChange = (option: SelectOptionType | null, optionsArray: SelectOptionType[]) => {
        if (option) {
            setSelectedOption(option)
        }
    };
    const options = {
        chonnhanvien: [
            { value: 'Lê Hồng Anh', label: 'Lê Hồng Anh (KỸ THUẬT - ID:284670)' },
            { value: 'Phan Mạnh Hùng', label: 'Phan Mạnh Hùng (SÁNG TẠO - ID:153846)' },
        ],
        chonphongban: [
            { value: '  BAN GIÁM ĐỐC', label: 'BAN GIÁM ĐỐC' },
            { value: 'KỸ THUẬT', label: 'KỸ THUẬT' },
        ]
    };
    return (
        <>
            <div className={`${styles.wrapper}`}>
                <div className={`${styles.content}`}>
                    <div className={`${styles.content_header}`}>
                        <div className={`${styles.bg_search}`}>
                            <div className={`${styles.search_new_t}`}>
                                <div className={`${styles.div_no_pad}   `}>
                                    <Select
                                        defaultValue={selectedOption}
                                        onChange={(option) => handleSelectionChange(option, options.chonnhanvien)}
                                        options={options.chonnhanvien}
                                        placeholder="Chọn nhân viên"
                                        styles={{
                                            control: (baseStyles, state) => ({
                                                ...baseStyles,
                                                borderRadius: 4,
                                                fontSize: state.isFocused ? 14 : 14,
                                                minHeight: state.isFocused ? 20 : 20,
                                                width: state.isFocused ? 170 : 170,
                                                fontWeight: state.isFocused ? 600 : 600
                                            }),
                                        }}
                                    />
                                </div>
                                <div className={`${styles.div_no_pad}  `}>
                                    <Select
                                        defaultValue={selectedOption}
                                        onChange={(option) => handleSelectionChange(option, options.chonphongban)}
                                        options={options.chonphongban}
                                        placeholder="Chọn phòng ban"
                                        styles={{
                                            control: (baseStyles, state) => ({
                                                ...baseStyles,
                                                borderRadius: 4,
                                                fontSize: state.isFocused ? 14 : 14,
                                                minHeight: state.isFocused ? 20 : 20,
                                                width: state.isFocused ? 170 : 170,
                                                fontWeight: state.isFocused ? 600 : 600
                                            }),
                                        }}
                                    />
                                </div>
                                <div className={`${styles.div_no_pad} ${styles.div_no_pad_input}   `}>
                                    <input type="date" className={`${styles.search_date} ${styles.form_control}`} placeholder='Từ dd/mm/yyyy' />
                                </div>
                                <div className={`${styles.div_no_pad} ${styles.div_no_pad_input}`}>
                                    <input type="date" className={`${styles.search_date} ${styles.form_control}`} placeholder='Từ dd/mm/yyyy' />
                                </div>
                                <div className={`${styles.div_no_pad_search}   `}>
                                    <a href="" className={`${styles.icon_search_top} ${styles.div_search_hrreport} `}>
                                        <img style={{ verticalAlign: 'middle', height: 30 }} src="	https://phanmemnhansu.timviec365.vn/assets/images/t_images/t-icon-search-n.svg" alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.content_body}`}>
                        <div className={`${styles.body_section1}`}>
                            <EmployeeInformation />
                        </div>
                        <div className={`${styles.body_section2}`}></div>
                        <div className={`${styles.body_section3}`}></div>
                    </div>
                    <div className={`${styles.content_footer}`}>
                        <BodyFrameFooter src="https://www.youtube.com/embed/OwBZVEW66_s" />
                    </div>
                </div>
            </div>
        </>
    )

}