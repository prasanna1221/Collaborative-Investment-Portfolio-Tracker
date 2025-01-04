import React from "react";
import { Line } from "react-chartjs-2";

function ChartComponent({ data }) {
  const chartData = {
    labels: data.map((entry) => entry.date),
    datasets: [
      {
        label: "Portfolio Value Over Time",
        data: data.map((entry) => entry.value),
        borderColor: "rgba(75,192,192,1)",
        fill: false,
      },
    ],
  };

  return (
    <div>
      <h2>Portfolio Performance</h2>
      <Line data={chartData} />
    </div>
  );
}

export default ChartComponent;
