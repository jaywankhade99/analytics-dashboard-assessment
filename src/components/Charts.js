import React from "react";
import "../App.css";
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const Charts = ({ data }) => {
  const makeCounts = data.reduce((acc, item) => {
    acc[item.Make] = (acc[item.Make] || 0) + 1;
    return acc;
  }, {});

  const vehicleTypes = data.reduce((acc, item) => {
    acc[item["Electric Vehicle Type"]] =
      (acc[item["Electric Vehicle Type"]] || 0) + 1;
    return acc;
  }, {});

  const barData = {
    labels: Object.keys(makeCounts),
    datasets: [
      {
        label: "EV Count by Make",
        data: Object.values(makeCounts),
        backgroundColor: "#4CAF50",
      },
    ],
  };

  const pieData = {
    labels: Object.keys(vehicleTypes),
    datasets: [
      {
        label: "Vehicle Type Distribution",
        data: Object.values(vehicleTypes),
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  return (
    <div className="charts">
      <div className="chart">
        <Bar
          data={barData}
          options={{
            plugins: {
              legend: {
                display: false,
              },
            },
          }}
        />
      </div>
      <div className="chart">
        <Pie data={pieData} />
      </div>
    </div>
  );
};

export default Charts;
