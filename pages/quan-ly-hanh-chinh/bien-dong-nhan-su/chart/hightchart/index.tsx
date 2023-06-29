import React, { useEffect, useRef } from "react";
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import styles from './hightChart.module.css'

const Chart: React.FC = () => {
    // const chartRef = useRef<HighchartsReact>(null);
    useEffect(() => {
        const table = document.getElementById('datatable') as HTMLTableElement;
        if (!table) return;

        const options: Highcharts.Options = {
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
                    ''
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
        };

        // if (chartRef.current) {
        //     chartRef.current.chart!.update(options);
        // }
    }, []);

    return (
        <figure className={styles.highcharts_figure}>
            <HighchartsReact
                highcharts={Highcharts}
                options={{ chart: { height: 500, width: 800 } }}
            // ref={chartRef}
            />
            <table id="datatable">
                <thead>
                    <tr>
                        <th></th>
                        <th>Boys</th>
                        <th>Girls</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>2016</th>
                        <td>30 386</td>
                        <td>28 504</td>
                    </tr>
                    <tr>
                        <th>2017</th>
                        <td>29 173</td>
                        <td>27 460</td>
                    </tr>
                    <tr>
                        <th>2018</th>
                        <td>28 430</td>
                        <td>26 690</td>
                    </tr>
                    <tr>
                        <th>2019</th>
                        <td>28 042</td>
                        <td>26 453</td>
                    </tr>
                    <tr>
                        <th>2020</th>
                        <td>27 063</td>
                        <td>25 916</td>
                    </tr>
                    <tr>
                        <th>2021</th>
                        <td>28 684</td>
                        <td>27 376</td>
                    </tr>
                </tbody>
            </table>
        </figure>
    );
};

export default Chart;
