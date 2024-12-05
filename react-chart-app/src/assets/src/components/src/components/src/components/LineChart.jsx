//specfic line chart components
import React from 'react';
import ChartComponent from './ChartComponent';

const LineChart = ({data})=> {
    const chartData = {
        lables: data.months,
        datasets:[{
            label: 'Monthly Profits',
            data: data.profits,
            borderColor:'rgba(255,99,132,1)',
            tension: 0.1,
            fill: false
        }]
    };
    const options = {
        scales:{
            y:{
                beginAtZero:true
            }
        }
    };
    return <ChartComponent type="line" data={chartData} options={options}/>;
};
export default LineChart