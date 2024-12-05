    //Create the reusable chart component
    import React, {useEffect, useRef} from 'react';
    import { Chart } from 'chart.js/auto';

    const ChartComponent = ({type,data,options})=>{
        const chartRef = useRef(null);
        const chartInstanceRef = useRef(null);

        useEffect(()=>{
            const ctx = chartRef.current.getContext('2d');
            
            if (chartInstanceRef.current) {
                chartInstanceRef.current.destroy();
            }
            chartInstanceRef.current = new Chart(ctx, {
                type,
                data,
                options,
            });
            return () =>{
                if (chartInstanceRef.current){
                    chartInstanceRef.current.destroy();
                    chartInstanceRef.current = null;
                }
            };
        },[type, data,options]);
        return <canvas ref={chartRef}></canvas>;
    };
    export default ChartComponent;