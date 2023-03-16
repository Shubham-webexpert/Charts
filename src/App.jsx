import React from 'react'
import './App.css'
import Charts from './components/charts/Charts'
import { CategoryScale } from 'chart.js'
import { Chart } from 'chart.js/auto'
import BarChart from './components/Barchart/BarChart'
// import LineChart from './components/Linechart/LineChart'

Chart.register(CategoryScale);

function App() {

  return (
    <div className="App">
    <BarChart/>
    </div>
  )
}

export default App
