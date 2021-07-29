import React, { useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DatePicker = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  return (
    <div>
      <ReactDatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat='dd/MM/yyyy'
        // minDate={new Date()}
        maxDate={new Date()}
        filterDate={date => date.getDay() !== 6 && date.getDay() !== 0}
        isClearable
        showYearDropdown
        scrollableMonthYearDropdown
      />
      {/* <h2>{selectedDate}</h2> */}
    </div>
  );
};

export default DatePicker;
