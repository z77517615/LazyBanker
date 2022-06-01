import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
//style
import "./Dashboard.css";

//Components
import { SideCalendar } from "../../Component/SideCalenar/SideCalendar";
import { useAuthContext } from "../../Hooks/useAuthContext";
import { useCollection } from "../../Hooks/useCollection";
import { useSelectContext } from "../../Hooks/useSelectContext";
import { DounutChart } from "../../Component/Chart/DounutChart";
import { BarChart } from "../../Component/Chart/BarChart";
import TransactionList from "../../Component/TransactionList/TransactionList";
import Filter from "./Filter";
import Userbar from "../../Component/Userbar/Userbar";

export default function Dashboard() {
  const { user } = useAuthContext();
  const { date, filter } = useSelectContext();
  const [chartfilter, setChartfilter] = useState("30days");
  const [startday, setStartday] = useState("");
  const { documents, error } = useCollection("transaction", [
    "uid",
    "==",
    user.uid,
  ]);
  const format = "YYYY-MM-DD";
  const today = new Date(dayjs().format(format));

  useEffect(() => {
    if (chartfilter == "30days") {
      setStartday(new Date(dayjs().subtract(30, "day").format(format)));
      return;
    }
    if (chartfilter == "90days") {
      setStartday(new Date(dayjs().subtract(90, "day").format(format)));
      return;
    }
    if (chartfilter == "half a year") {
      setStartday(new Date(dayjs().subtract(180, "day").format(format)));
      return;
    }
    if (chartfilter == "year") {
      setStartday(new Date(dayjs().subtract(1, "year").format(format)));
      return;
    }
  }, [chartfilter]);

  const changeFilter = (newFilter) => {
    setChartfilter(newFilter);
  };

  const transaction = documents
    ? documents.filter((document) => {
        switch (filter) {
          case "all":
            return true;
          case "date":
            let filter = false;
            if (document.date == date) {
              filter = true;
            }
            return filter;
        }
      })
    : null;

  const filterdocumnts = documents
    ? documents.filter((t) => {
        var date = new Date(t.date);
        return date >= startday && date <= today;
      })
    : null;

  return (
    <div className="home">
      <Userbar />
      <main className="Chart-container">
        <div className="Chart-container_chart">
          <div>{documents && <Filter changeFilter={changeFilter} />}</div>
          <div>
            <section className="Dounutchart-container">
              {filterdocumnts && (
                <DounutChart title1="Income" documents={filterdocumnts} />
              )}
              {filterdocumnts && (
                <DounutChart title1="Expend" documents={filterdocumnts} />
              )}
            </section>
            <section className="Barchart-container">
              {documents && (
                <BarChart
                  title1="Income"
                  title2="Expend"
                  documents={documents}
                />
              )}
            </section>
          </div>
        </div>
        <section className="list-container">
          <SideCalendar documents={documents} />
          <TransactionList documents={transaction} />
        </section>
      </main>
    </div>
  );
}
