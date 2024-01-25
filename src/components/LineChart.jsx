import React, { useEffect } from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

const LineChart = () => {
  return (
    <div style={{ width: "300px" }}>
      <Line
        datasetIdKey="id"
        data={{
          labels: ["Jun", "Jul", "Aug"],
          datasets: [
            {
              id: 1,
              label: "",
              data: [5, 6, 7],
            },
            {
              id: 2,
              label: "",
              data: [3, 2, 1],
            },
          ],
        }}
        options={{
          scales: {
            x: {
              type: "category",
            },
            y: {
              type: "linear",
            },
          },
          maintainAspectRatio: false, // Allow chart to have a fixed size
          responsive: true, // Make the chart responsive
        }}
      />
    </div>
  );
};

export default LineChart;
