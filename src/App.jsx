import React from "react";
import "./App.css";
import Charts from "./components/charts/Charts";
import { CategoryScale } from "chart.js";
import { Chart } from "chart.js/auto";
import BarChart from "./components/Barchart/BarChart";
import AreaChart from "./components/Areachart/AreaChart";
import Line from "./components/Linechart/Line";
import PieChart from "./components/Pie chart/PieChart";
import DoughnutChart from "./components/Doughnut chart/DoughnutChart";
import PolarAreaChart from "./components/Polar Area chart/PolarAreaChart";
import RadarChart from "./components/Radar Chart/RadarChart";
import ScatterChart from "./components/Scattered chart/ScatterChart";
import BubbleChart from "./components/Bubble chart/BubbleChart";
import MultitypeChart from "./components/Multitype chart/MultitypeChart";
import { ChartEvent } from "./components/Chart Events/ChartEvent";
import { ChartRef } from "./components/ChartRef/ChartRef";
import { GradientChart } from "./components/Gradient chart/GradientChart";
// import LineChart from './components/Linechart/LineChart'

Chart.register(CategoryScale);

function App() {
  return (
    <div>
    <BarChart />
    <AreaChart />
    <Line />
    <div className="App">
      <PieChart/>
      <DoughnutChart/>
      <PolarAreaChart/>
      <RadarChart/>
      <ScatterChart/>
      <BubbleChart/>
      <MultitypeChart/>
      <ChartEvent/>
      <ChartRef/>
      <GradientChart/>
    </div>
    </div>
  );
}

export default App;
