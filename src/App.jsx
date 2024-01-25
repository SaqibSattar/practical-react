import React, { useState } from "react";
import "./App.css";
import LineChart from "./components/LineChart";
import BarChart from "./components/BarChart";
import DoughnutChart from "./components/DoughnutChart";

const App = () => {
  return (
    <div>
      <LineChart />
      <BarChart />
      <DoughnutChart />
    </div>
  );
};

export default App;
