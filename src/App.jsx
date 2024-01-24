import React, { useState } from 'react';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const App = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker 
    selected={startDate} 
    onChange={(date) => setStartDate(date)}
    dateFormat='MM/dd/yyyy'
    minDate={new Date()}
    filterDate={date => date.getDay() !== 6 && date.getDay() !== 0}
    isClearable={true}
    showYearDropdown={true}
    showMonthDropdown={true}
    />
  );
};

export default App;
