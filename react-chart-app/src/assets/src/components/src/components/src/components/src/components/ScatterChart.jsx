//specfic scatter chart components
import React from 'react';
import ChartComponent from './ChartComponent';

const ScatterChart = ({data})=> {
    const chartData = {
        lables: data.months,
        datasets:[{
            label: 'Expenses vs Profits',
            data: data.expenses.map((expense,index)=>({
                x:expense,
                y:data.profits[index]
            })),
            backgroundColor:'rgba(153, 102, 255, 0.6)'
        }]
    };
    const options = {
        scales:{
            x: {
                title:{
                    display: true,
                    text: 'Expenses'
                }
            },
            y:{
                title:{
                    display: true,
                    text:'Profits'
                }
            }
        }
    };
    return <ChartComponent type="scatter" data={chartData} options={options}/>;
};
export default ScatterChart