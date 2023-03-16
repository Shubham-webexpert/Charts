import React from "react";
import { Line } from "react-chartjs-2";

const LineChart = () => {
  return (
    <div>
      <div className="line">
        <h2>1.Line Chart </h2>
        <Line
          datasetIdKey="id"
          data={{
            labels: ["Jun", "Jul", "Aug"],
            datasets: [
              {
                id: 1,
                label: "",
                data: [8, 4, 10],
              },
              {
                id: 2,
                label: "",
                data: [3, 2, 1],
              },
            ],
          }}
        />
      </div>
    </div>
  );
};

export default LineChart;
