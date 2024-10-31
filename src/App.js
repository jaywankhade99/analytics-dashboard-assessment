import "./App.css";
import React from 'react';
import Dashboard from './components/Dashboard';
import data from './data.json'; // Assuming you have a JSON file with the EV data

const App = () => {
  return (
    <div>
      <Dashboard data={data} />
    </div>
  );
};

export default App;
