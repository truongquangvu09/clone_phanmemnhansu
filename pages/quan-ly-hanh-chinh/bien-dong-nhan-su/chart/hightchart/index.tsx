import React, { useEffect } from "react";
import * as Highcharts from 'highcharts';
import styles from './chart.module.css'

const Chart: React.FC = () => {
    useEffect(() => {
        const table = document.getElementById('datatable') as HTMLTableElement;
        if (table) {
            Highcharts.chart('container', {
                data: {
                    table: 'datatable'
                },
                chart: {
                    type: 'column'
                },
                title: {
                    text: 'Biểu đồ biến động nhân sự'
                },
                subtitle: {
                    text:
                        'Nguồn: <a href="https://www.ssb.no/en/statbank/table/04231" target="_blank">SSB</a>'
                },
                xAxis: {
                    type: 'category'
                },
                yAxis: {
                    allowDecimals: false,
                    title: {
                        text: 'Biểu đồ thống kê số lượng nhân viên'
                    }
                }
            });
        }
    }, []);

    return (
        <figure className={`${styles.highcharts_figure}`}>
            <div id="container"></div>
            <table id="datatable">
                <thead>
                    <tr>
                        <th></th>
                        <th>Mốc thời gian 1: (01/06/2023 - 09/06/2023)</th>
                        <th>Mốc thời gian 2: (01/06/2023 - 09/06/2023)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Tăng/giảm lương</th>
                        <td>5</td>
                        <td>5</td>
                    </tr>
                    <tr>
                        <th>Bổ nhiệm quy hoạch</th>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th>Luân chuyển công tác</th>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th>Giảm biên chế</th>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th>Nghỉ việc</th>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </figure>
    );
};

export default Chart;