import React from "react";
import LineChart from "./LineChart";
import MultiAxisLineChart from "./MultiAxisLineChart";
import NextLineChart from "./NextLineChart";
import "./linechart.css";
const Line = () => {
  return (
    <div>
      <div className="text">
        <h1>Line Charts</h1>
      </div>
      <div className="lineContainer">
        <LineChart />
        <NextLineChart />
        <MultiAxisLineChart />
      </div>
    </div>
  );
};

export default Line;
