import React, { useState, useEffect, ChangeEvent, MouseEventHandler } from 'react';
import styles from './hrReport.module.css'
import Select from 'react-select'
import BodyFrameFooter from '@/components/bodyFrame/bodyFrame_footer/bodyFrame_footer';
import EmployeeInformation from './bodySection1';
import InformationSection2 from './bodySection2';
import InfomationSection3 from './bodySection3';
import { addDays, format } from 'date-fns';

type SelectOptionType = { label: string, value: string }

export default function TabHRReport() {

    const defaultStartDate = format(addDays(new Date(), -7), 'yyyy-MM-dd');
    const defaultEndDate = format(new Date(), 'yyyy-MM-dd');
    const [selectedOption, setSelectedOption] = useState<SelectOptionType | null>(null);
    const [startDate, setStartDate] = useState(defaultStartDate);
    const [endDate, setEndDate] = useState(defaultEndDate);
    const [dateRangeData, setDateRangeData] = useState<String[]>([]);
    const [data_line1, setDateLine1] = useState<Number[]>([]);
    const [data_line2, setDateLine2] = useState<Number[]>([]);

    // Hàm xử lý khi ngày bắt đầu thay đổi
    const handleStartDateChange = (event: ChangeEvent<HTMLInputElement>) => {
        const newStartDate = event.target.value;
        setStartDate(newStartDate);
    };

    // Hàm xử lý khi ngày kết thúc thay đổi
    const handleEndDateChange = (event: ChangeEvent<HTMLInputElement>) => {
        const newEndDate = event.target.value;
        setEndDate(newEndDate);
    };

    const handleSearch: MouseEventHandler<HTMLAnchorElement> = (event) => {
        event.preventDefault();
        const start = new Date(startDate); // Chuyển startDate thành đối tượng Date
        const end = new Date(endDate); // Chuyển endDate thành đối tượng Date

        const datesInRange: String[] = [];

        // Lặp qua từng ngày trong khoảng
        for (let date = start; date <= end; date.setDate(date.getDate() + 1)) {
            const formattedDate = format(new Date(date), 'dd/MM/yyyy');
            datesInRange.push(formattedDate);
        }
        setDateRangeData(datesInRange)

        const randomNumbersArray1 = Array.from({ length: datesInRange.length }, () =>
            Math.floor(Math.random() * 100) + 1

        );
        const randomNumbersArray2 = Array.from({ length: datesInRange.length }, () =>
            Math.floor(Math.random() * 100) + 1

        );
        setDateLine1(randomNumbersArray1)
        setDateLine2(randomNumbersArray2)
    };


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


    useEffect(() => {
        const start = new Date(defaultStartDate); // Chuyển startDate thành đối tượng Date
        const end = new Date(defaultEndDate); // Chuyển endDate thành đối tượng Date

        const datesInRange: String[] = [];

        // Lặp qua từng ngày trong khoảng
        for (let date = start; date <= end; date.setDate(date.getDate() + 1)) {
            const formattedDate = format(new Date(date), 'dd/MM/yyyy');
            datesInRange.push(formattedDate);
        }
        setDateRangeData(datesInRange);
        const randomNumbersArray1 = Array.from({ length: datesInRange.length }, () =>
            Math.floor(Math.random() * 100) + 1
        );
        const randomNumbersArray2 = Array.from({ length: datesInRange.length }, () =>
            Math.floor(Math.random() * 100) + 1
        );

        setDateLine1(randomNumbersArray1);
        setDateLine2(randomNumbersArray2);
    }, [startDate, endDate]);
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
                                    <select name="" id="" className={`${styles.form_control} ${styles.chart_type}`}>
                                        <option value="">Các ngày trong năm</option>
                                        <option value="">Các tháng trong năm</option>
                                        <option value="">Các năm</option>
                                    </select>
                                </div>
                                <div className={`${styles.div_no_pad} ${styles.div_no_pad_input}   `}>
                                    <input type="date" className={`${styles.search_date} ${styles.form_control}`}
                                        placeholder='Từ dd/mm/yyyy'
                                        value={startDate}
                                        onChange={handleStartDateChange} />
                                </div>
                                <div className={`${styles.div_no_pad} ${styles.div_no_pad_input}`}>
                                    <input type="date" className={`${styles.search_date} ${styles.form_control}`}
                                        placeholder='Từ dd/mm/yyyy'
                                        value={endDate}
                                        onChange={handleEndDateChange} />
                                </div>
                                <div className={`${styles.div_no_pad_search}   `}>
                                    <a href="" className={`${styles.icon_search_top} ${styles.div_search_hrreport} `} onClick={handleSearch}>
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
                        <div className={`${styles.body_section2}`}>
                            <InformationSection2 />
                        </div>
                        <div className={`${styles.body_section3}`}>
                            <InfomationSection3 dateInRange={dateRangeData} data_line1={data_line1} data_line2={data_line2} />
                        </div>
                    </div>
                    <div className={`${styles.content_footer}`}>
                        <BodyFrameFooter src="https://www.youtube.com/embed/OwBZVEW66_s" />
                    </div>
                </div>
            </div>
        </>
    )

}