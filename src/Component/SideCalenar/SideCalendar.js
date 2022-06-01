import dayjs from "dayjs";
import React, { useState, useEffect } from "react";
import right from "../../assets/right.png";
import left from "../../assets/left.png";
import "./SideCalendar.css";

import { getWeekday } from "../../Hooks/useutil";
import { useSelectContext } from "../../Hooks/useSelectContext";
import { Spend } from "../../Hooks/useSum";

export function SideCalendar({ documents }) {
  const format = "YYYY-MM-DD";
  const nowday = dayjs().format(format);

  const [currentweekindex, setCurrentweekindex] = useState(0);
  const [currentWeek, setCurentWeek] = useState(getWeekday(0));
  const [pickday, setPickday] = useState(dayjs().format(format));
  const { date, changeDate, changeFilter } = useSelectContext();

  useEffect(() => {
    setCurentWeek(getWeekday(currentweekindex));
  }, [currentweekindex]);

  function handleNextWeek() {
    setCurrentweekindex(currentweekindex + 7);
    getWeekday(currentweekindex);
  }

  function handlePrevWeek() {
    setCurrentweekindex(currentweekindex - 7);
    getWeekday(currentweekindex);
  }

  function getDayClass(day) {
    const currtDay = day.format(format);
    if (nowday === currtDay) {
      // passpickday(pickday);
      return {
        background: "#70b8d5",
        order: "none",
        borderRadius: "50%",
        color: "white",
        fontWeight: " bold",
        cursor: "pointer",
        fontXize: " 1em ",
      };
    }
    if (pickday === currtDay) {
      // passpickday(pickday);
      return { background: "rgb(130, 231, 114)", color: "white" };
    }
  }

  return (
    <div className="Sidecalendar">
      <header className="Sidecalendar-header">
        <p className="Slidecalendar-header_title">
          {currentWeek[0].format("MMMM YYYY")}
        </p>
        <div>
          <button
            className="Slidecalendar-header_button"
            onClick={handlePrevWeek}
          >
            <img src={left}></img>
          </button>
          <button
            className="Slidecalendar-header_button"
            onClick={handleNextWeek}
          >
            <img src={right}></img>
          </button>
        </div>
      </header>
      <main className="cal_main">
        {["S", "M", "T", "W", "T", "F", "S"].map((element, i) => (
          <span key={i}>{element}</span>
        ))}
        {currentWeek.map((day, i) => (
          <div key={i} className="weekdays-container">
            <button
              className="weekdays"
              style={getDayClass(day)}
              onClick={() => (
                setPickday(day.format(format)),
                changeDate(day.format(format)),
                changeFilter("date")
              )}
            >
              {day.format("D")}
            </button>
            {<div id="total">{documents && Spend(day, documents)}</div>}
          </div>
        ))}
      </main>
    </div>
  );
}
