import React, { useState, useEffect } from "react";
import styles from './chart.module.css'
import Chart from "./hightchart";
import BodyFrameFooter from "@/components/bodyFrame/bodyFrame_footer/bodyFrame_footer";
import { format } from 'date-fns'

export default function TabChart() {

    const today = new Date();
    const threeMonthsAgo = new Date();
    threeMonthsAgo.setMonth(today.getMonth() - 3);

    const init_from_date1 = format(today, 'yyyy-MM-dd');
    const init_to_date1 = format(threeMonthsAgo, 'yyyy-MM-dd');

    const [from_date1, setFromDate1] = useState<any>(init_from_date1 && init_from_date1)
    const [to_date1, setToDate1] = useState<any>(init_to_date1)
    const [from_date2, setFromDate2] = useState<any>("")
    const [to_date2, setToDate2] = useState<any>("")

    useEffect(() => {
        const fromdate1 = (document.getElementById('from_date1') as HTMLInputElement)?.value
        console.log(fromdate1);
        const todate1 = (document.getElementById('to_date1') as HTMLInputElement)?.value
        const fromdate2 = (document.getElementById('from_date2') as HTMLInputElement)?.value
        const todate2 = (document.getElementById('to_date2') as HTMLInputElement)?.value
        setFromDate1(fromdate1)
        setFromDate2(fromdate2)
        setToDate1(todate1)
        setToDate2(todate2)
    }, [from_date1, to_date1, from_date2, to_date2])

    return (
        <>
            <div className={`${styles.wrapper}`}>
                <div className={`${styles.search_person_change2}`}>
                    <div className={`${styles.time1}`}>
                        <p style={{ color: '#4C5BD4', fontSize: 14, fontWeight: 600 }}>Mốc thời gian 1</p>
                    </div>
                    <div className={`${styles.time1}`}>
                        <input type="date" id="from_date1" className={` ${styles.form_control}`} placeholder="dd/mm/yyyy" />
                    </div>
                    <div className={`${styles.time1}`}>
                        <input type="date" id="to_date1" className={` ${styles.form_control}`} placeholder="dd/mm/yyyy" />
                    </div>
                </div>
                <div className={`${styles.search_person_change2}`}>
                    <div className={`${styles.time2}`}>
                        <p style={{ color: '#4C5BD4', fontSize: 14, fontWeight: 600 }}>Mốc thời gian 2</p>
                    </div>
                    <div className={`${styles.time2}`}>
                        <input type="date" id="from_date2" className={`${styles.form_control}`} placeholder="dd/mm/yyyy" />
                    </div>
                    <div className={`${styles.time2}`}>
                        <input type="date" id="to_date2" className={` ${styles.form_control}`} placeholder="dd/mm/yyyy" />
                    </div>
                </div>
                <div className={`${styles.chart_background}`}>
                    <Chart data={{ from_date1, to_date1, from_date2, to_date2 }} />
                    <BodyFrameFooter src="https://www.youtube.com/embed/Xp_AOH7bEic"></BodyFrameFooter>
                </div>
            </div>
        </>
    )
}