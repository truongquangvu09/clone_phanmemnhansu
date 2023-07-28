// import React, { useEffect } from "react";
import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import exportingModule from 'highcharts/modules/exporting';
import HighchartsReact from 'highcharts-react-official';
import { PlanningAppointmentList } from "@/pages/api/bien_dong_nhan_su";

const Chart = (data: any) => {

    console.log(data?.from_date1);
    console.log(data);

    const [isPlanningAppointmentList, setPlanningAppointmentList] = useState<any>(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const formData = new FormData();
                formData.append('fromDate', data?.from_date1)
                formData.append('toDate', data?.to_date1)
                const response = await PlanningAppointmentList(formData)
                setPlanningAppointmentList(response.data)
            } catch (error) {
                throw error
            }
        }
        fetchData()
    }, [data])


    const [chartOptions, setChartOptions] = useState<any>({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Biểu đồ biến động nhân sự'
        },
        xAxis: {
            categories: ['Tăng/ giảm lương', 'Bổ nhiệm quy hoạch', 'Luân chuyển công tác', 'Giảm biên chế', 'Nghỉ việc']
        },
        yAxis: {
            title: {
                text: 'Biểu đồ thống kê số lượng nhân viên'
            }
        },
        series: [
            {
                name: `Mốc thời gian 1:  `,
                data: [5, 10, 20, 30, 3]
            },
            {
                name: `Mốc thời gian 2:  `,
                data: [7, 8, 10, 2, 3]
            },
        ]
    });



    return (
        <div>
            <HighchartsReact highcharts={Highcharts} options={chartOptions} />
        </div>
    );
};

export default Chart;

