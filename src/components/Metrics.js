import React from "react";
import "../App.css";

const Metrics = ({ data }) => {
  const totalEVs = data.length;
  const avgRange = (
    data.reduce((acc, item) => acc + item["Electric Range"], 0) / totalEVs
  ).toFixed(2);
  const avgPrice = (
    data.reduce((acc, item) => acc + item["Base MSRP"], 0) / totalEVs
  ).toFixed(2);

  return (
    <div className="metrics">
      <div className="metric-card">
        <h2>Total EVs</h2>
        <p>{totalEVs}</p>
      </div>
      <div className="metric-card">
        <h2>Average Range</h2>
        <p>{avgRange}</p>
      </div>
      <div className="metric-card">
        <h2>Average Price</h2>
        <p>${avgPrice}</p>
      </div>
    </div>
  );
};

export default Metrics;
