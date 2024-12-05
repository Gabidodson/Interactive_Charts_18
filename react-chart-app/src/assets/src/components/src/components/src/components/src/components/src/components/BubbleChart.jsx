//specfic bubble chart components
import React from 'react';
import ChartComponent from './ChartComponent';

const BubbleChart = ({data})=> {
    const chartData = {
        datasets:[{
            label: 'Sales, Profits, and Expenses',
            data:data.expenses.map((expense, index)=>({
                x:expense,
                y:data.profits[index],
                r:data.sales[index]/ 1000 
            })),
            backgroundColor:'rgba(255, 206, 86, 0.5)',
        }]
    };
    const options = {
        scales:{
            x:{
                title: {
                    display: true,
                    text: 'Expenses'
                }
            }
        },
        y: {
            title: {
                display: true,
                text: 'Profits'
            }
        }
 };
    return <ChartComponent type="bubble" data={chartData} options={options}/>;
};
export default BubbleChart;