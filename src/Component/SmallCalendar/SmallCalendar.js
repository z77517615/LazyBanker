import dayjs from "dayjs";
import React, { useState, useEffect } from "react";
import right from "../../assets/right.png";
import left from "../../assets/left.png";

import { getMonth } from "../../Hooks/useutil";
import styles from "./SmallCalendar.module.css";

export function SmallCalendar({ passpickday, selc, setSelc }) {
  const format = "YYYY-MM-DD";
  const nowday = dayjs().format(format);

  const [currentMonthIndex, setCurrentIMonthIndex] = useState(dayjs().month());
  const [currentMonth, setCurentMonth] = useState(getMonth());
  const [pickday, setPickday] = useState(dayjs().format(format))


  console.log(currentMonthIndex)
  
  useEffect(() => {
    setCurentMonth(getMonth(currentMonthIndex));
  }, [currentMonthIndex]);

  function handlePrevMonth() {
    setCurrentIMonthIndex(currentMonthIndex - 1);
  }
  function handleNextMonth() {
    setCurrentIMonthIndex(currentMonthIndex + 1);
  }

  function getDayClass(day) {
    const currtDay = day.format(format);
    if (nowday === currtDay) {
      return `${styles.currentDay}`;
    }
    if (selc && pickday === currtDay) {
      passpickday(pickday);
      return `${styles.selected}`;
    }
    if (selc && pickday === nowday) {
      passpickday(pickday);
    } else {
      return "";
    }
  }

  return (
    <div className={styles.smallcalendar}>
      <header className={styles.smallcalendar_header}>
        <button className={styles.cal_button} onClick={handlePrevMonth}>
          <img className={styles.arrow} src={left}></img>
        </button>
        <p className="smallcalendar-header_title">
          {dayjs(new Date(dayjs().year(), currentMonthIndex)).format(
            "MMMM YYYY"
          )}
        </p>
        <button className={styles.cal_button} onClick={handleNextMonth}>
          <img className={styles.arrow} src={right}></img>
        </button>
      </header>
      <main className={styles.cal_main}>
        {currentMonth[0].map((day, i) => (
          <span key={i}>{day.format("dd").charAt(0)}</span>
        ))}
        {currentMonth.map((row, i) => (
          <React.Fragment key={i}>
            {row.map((day, idx) => (
              <button
                key={idx}
                className={`${styles.days} ${getDayClass(day)}`}
                onClick={() => (setSelc(true), setPickday(day.format(format)))}
              >
                <span>{day.format("D")}</span>
              </button>
            ))}
          </React.Fragment>
        ))}
      </main>
    </div>
  );
}
