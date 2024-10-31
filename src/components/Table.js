import React, { useState } from "react";
import "../App.css";

const Table = ({ data, rowsPerPage = 10 }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / rowsPerPage);
  const startIdx = (currentPage - 1) * rowsPerPage;
  const endIdx = startIdx + rowsPerPage;
  const currentData = data.slice(startIdx, endIdx);

  const handlePageChange = (direction) => {
    if (direction === "next" && currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    } else if (direction === "prev" && currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <div className="table-container">
      <table className="data-table">
        <thead>
          <tr>
            <th>VIN</th>
            <th>Make</th>
            <th>Model</th>
            <th>Year</th>
            <th>Electric Range</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((item, index) => (
            <tr key={index}>
              <td>{item["VIN (1-10)"]}</td>
              <td>{item.Make}</td>
              <td>{item.Model}</td>
              <td>{item["Model Year"]}</td>
              <td>{item["Electric Range"]}</td>
              <td>{item["Electric Vehicle Type"]}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <button
          onClick={() => handlePageChange("prev")}
          disabled={currentPage === 1}>
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => handlePageChange("next")}
          disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Table;
