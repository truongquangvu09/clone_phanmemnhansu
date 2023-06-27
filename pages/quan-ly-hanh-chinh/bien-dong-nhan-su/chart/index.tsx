import React from "react";
import styles from './chart.module.css'
import Chart from "./hightchart";

export default function TabChart() {
    return (
        <>
            <div className={`${styles.wrapper}`}>
                <div className={`${styles.search_person_change2}`}>
                    <div className={`${styles.time1}`}>
                        <p style={{ color: '#4C5BD4', fontSize: 14, fontWeight: 600 }}>Mốc thời gian 1</p>
                    </div>
                    <div className={`${styles.time1}`}>
                        <input type="date" className={` ${styles.form_control}`} placeholder="dd/mm/yyyy" />
                    </div>
                    <div className={`${styles.time1}`}>
                        <input type="date" className={` ${styles.form_control}`} placeholder="dd/mm/yyyy" />
                    </div>
                </div>
                <div className={`${styles.search_person_change2}`}>
                    <div className={`${styles.time2}`}>
                        <p style={{ color: '#4C5BD4', fontSize: 14, fontWeight: 600 }}>Mốc thời gian 2</p>
                    </div>
                    <div className={`${styles.time2}`}>
                        <input type="date" className={`${styles.form_control}`} placeholder="dd/mm/yyyy" />
                    </div>
                    <div className={`${styles.time2}`}>
                        <input type="date" className={` ${styles.form_control}`} placeholder="dd/mm/yyyy" />
                    </div>
                </div>
                <div className={`${styles.chart_background}`}>
                    <Chart ></Chart>
                </div>
            </div>
        </>
    )
}