import React, { useState, useEffect } from "react";
import "../App.css";

const Filter = ({ data, onFilterChange }) => {
  const [make, setMake] = useState("");
  const [year, setYear] = useState("");
  const [makeList, setMakeList] = useState([]);
  const [yearList, setYearList] = useState([]);

  useEffect(() => {
    const makelist = [];
    const yearlist = [];
    data.forEach((item) => {
      if (makelist.indexOf(item["Make"]) === -1) {
        makelist.push(item["Make"]);
      }
      if (yearlist.indexOf(item["Model Year"]) === -1) {
        yearlist.push(item["Model Year"]);
      }
    });
    yearlist.sort((a, b) => b - a);
    setMakeList(makelist);
    setYearList(yearlist);
  }, []);

  const handleFilter = () => {
    onFilterChange({ make, year });
  };

  return (
    <div className="filter">
      <select onChange={(e) => setMake(e.target.value)} value={make}>
        <option value="">All Makes</option>
        {makeList.map((make, i) => (
          <option key={i} value={make}>
            {make}
          </option>
        ))}
      </select>
      <select onChange={(e) => setYear(e.target.value)} value={year}>
        <option value="">All Years</option>
        {yearList.map((year, i) => (
          <option value={year}>{year}</option>
        ))}
      </select>
      <button onClick={handleFilter}>Filter</button>
    </div>
  );
};
export default Filter;
