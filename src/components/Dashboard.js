import { useState } from "react";
import Filter from "./Filter";
import Metrics from "./Metrics";
import Charts from "./Charts";
import Table from "./Table";
import Details from "./Details";

const Dashboard = ({ data }) => {
  const [filteredData, setFilteredData] = useState(data);

  const handleFilter = (filter) => {
    const { make, year } = filter;
    let newData = data;
    if (make) newData = newData.filter((item) => item.Make === make);
    if (year)
      newData = newData.filter((item) => item["Model Year"] === parseInt(year));
    setFilteredData(newData);
  };

  return (
    <div className="dashboard">
      <Details />
      <Filter data={data} onFilterChange={handleFilter} />
      <Metrics data={filteredData} />
      <Charts data={filteredData} />
      <Table data={filteredData} />
    </div>
  );
};

export default Dashboard;
