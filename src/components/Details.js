import React from "react";
import "../App.css";

const Details = () => {
  return (
    <div className="details">
      <h2>Electric Vehicle Population Dashboard</h2>
      <p>
        This dashboard provides insights into the population of electric
        vehicles (EVs) across various regions. The data includes information on
        vehicle make, model, year, electric range, and type. It allows users to
        analyze trends and distributions of EVs, supporting a deeper
        understanding of EV adoption.
      </p>
      <p>
        <strong>Key Insights:</strong>
        <ul>
          <li>View the distribution of EVs by make, model, and year.</li>
          <li>Analyze the types of EVs and their electric range.</li>
          <li>Explore geographical distribution and price insights.</li>
          <li>Filter data based on specific criteria for detailed analysis.</li>
        </ul>
      </p>
      <p>
        Use the table below to see detailed records of each EV in the dataset,
        and utilize charts for visual representations of key metrics.
      </p>
    </div>
  );
};

export default Details;
