//Fetch Data for Charts
import React, { useEffect, useState } from 'react'
import BarChart from './components/BarChart';
import LineChart from './components/LineChart';
import ScatterChart from './components/ScatterChart';
import BubbleChart from './components/BubbleChart';
import './App.css';

function App() {
  const [chartData, setChartData] = useState(null);

  useEffect(()=>{
    fetch ('/financial_data.json')
    .then (response => response.json())
    .then(data => setChartData(data));
  },[]);
  if (!chartData) {
  return(
  <div className="Loading...">
    <h2>Loading Dashboard Data...</h2>
    </div>
  );
  }
  return(
      <div className= "dashboard">
        <header className="dashboard-header">
        <h1>Financial Dashboared</h1>
        </header>

        <div className="charts-grid">
        <div className="chart-container">
          <h2>Monthly Sales</h2>
          <BarChart data={chartData} />
        </div>
        
        <div className="chart-container">
          <h2>Profit Trends</h2>
          <LineChart data={chartData} />
        </div>
        
        <div className="chart-container">
          <h2>Expenses vs Profits</h2>
          <ScatterChart data={chartData} />
        </div>
        
        <div className="chart-container">
          <h2>Combined Metrics</h2>
          <BubbleChart data={chartData} />
        </div>
      </div>
    </div>
  );
}

export default App;
