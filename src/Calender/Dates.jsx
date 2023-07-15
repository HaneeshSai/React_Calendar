import { getDay, getDaysInMonth } from "date-fns";
import "../App.css";

function daysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}

export default function Dates({ month, index, year }) {
  const strtofmonth = new Date(`${month} 1, ${year}`);

  const emptydays = getDay(strtofmonth);
  const endofmth = daysInMonth(index + 1, year);
  const currentDate = new Date().getDate();

  if (index == new Date().getMonth() && year == new Date().getFullYear()) {
    let daysbefore = [];
    let daysafter = [];

    for (let i = 2; i < currentDate; i++) {
      daysbefore.push(i);
    }

    for (let i = currentDate + 1; i <= endofmth; i++) {
      daysafter.push(i);
    }

    return (
      <ul>
        <li className="start" style={{ gridColumnStart: emptydays + 1 }}>
          1
        </li>
        {daysbefore.map((day) => {
          return (
            <li tabIndex="1" key={day}>
              {day}
            </li>
          );
        })}
        <li style={{ backgroundColor: "#535862" }}>{currentDate}</li>
        {daysafter.map((day) => {
          return (
            <li tabIndex="1" key={day}>
              {day}
            </li>
          );
        })}
      </ul>
    );
  } else {
    let days = [];

    for (let i = 2; i <= endofmth; i++) {
      days.push(i);
    }

    return (
      <ul>
        <li className="start" style={{ gridColumnStart: emptydays + 1 }}>
          1
        </li>
        {days.map((day) => {
          return (
            <li tabIndex="1" key={day}>
              {day}
            </li>
          );
        })}
      </ul>
    );
  }
}
