import React from "react";
import GroupedBarChart from "./GroupedBarChart";
import HorizontalBarChart from "./HorizontalBarChart";
import StackedBarChart from "./StackedBarChart";
import VerticalBarchart from "./VerticalBarchart";
import "./barchart.css";

const BarChart = () => {
  return (
    <>
      <div className="text">
        <h1>Barcharts</h1>
      </div>
      <div className="bar">
        <VerticalBarchart />
        <HorizontalBarChart />
        <StackedBarChart />
        <GroupedBarChart />
      </div>
    </>
  );
};

export default BarChart;
