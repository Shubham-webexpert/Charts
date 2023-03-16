import React from 'react'
import HorizontalBarChart from './HorizontalBarChart'
import VerticalBarchart from './VerticalBarchart'

const BarChart = () => {
  return (
    <>
    <div>
      <h1>Barcharts</h1>
    <VerticalBarchart/>
    <HorizontalBarChart/>
    </div>
    </>
  )
}

export default BarChart