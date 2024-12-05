//Fetch Data for Charts
import React, { useEffect, useState } from 'react'
import BarChart from './components/BarChart';
import LineChart from './components/LineChart';
import ScatterChart from './components/ScatterChart';
import BubbleChart from './components/BubbleChart';

function App() {
  const [chartData, setChartData] = useState(null);

  useEffect(()=>{
    fetch ('/financial_data.json')
    .then (response => response.json())
    .then(data => setChartData(data));
  },[]);
  if (!chartData) {
  return <div>Loading...</div>;
  }
  return(
      <div>
        <h1>Financial Dashboared</h1>
        <div style={{padding:'20px'}}>
          <BarChart data={chartData}/>
          <LineChart data={chartData}/>
          <ScatterChart data={chartData}/>
          <BubbleChart data={chartData}/>
        </div>
        </div>
  );
}

export default App;
