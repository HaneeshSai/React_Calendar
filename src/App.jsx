import "./App.css";
import Dates from "./Calender/Dates";
import { useState } from "react";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export default function App() {
  const [monthIndex, setMonthIndex] = useState(new Date().getMonth());

  const [year, setYear] = useState(new Date().getFullYear());

  const currentMonth = months[monthIndex];

  function monthDecrement() {
    if (monthIndex == 11) {
      setYear(year + 1);
      setMonthIndex(monthIndex - 11);
    } else {
      setMonthIndex(monthIndex + 1);
    }
  }

  function monthIncrement() {
    if (monthIndex == 0) {
      setYear(year - 1);
      setMonthIndex(monthIndex + 11);
    } else {
      setMonthIndex(monthIndex - 1);
    }
  }

  return (
    <div className="container">
      <div className="content">
        <button onClick={() => monthIncrement()}>{"<<"}</button>
        <button>
          {`${currentMonth} `}
          {year}
        </button>
        <button onClick={() => monthDecrement()}>{">>"}</button>
      </div>
      <div className="weekdays">
        <ul>
          <li className="sun">SUNDAY</li>
          <li className="mon">MONDAY</li>
          <li className="tue">TUESDAY</li>
          <li className="wed">WEDNESDAY</li>
          <li className="thur">THURSDAY</li>
          <li className="fri">FRIDAY</li>
          <li className="sat">SATURDAY</li>
        </ul>
      </div>
      <div className="dates">
        <Dates
          month={currentMonth}
          index={months.indexOf(currentMonth)}
          year={year}
        />
      </div>
    </div>
  );
}
