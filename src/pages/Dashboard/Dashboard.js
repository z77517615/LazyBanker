import React, { useState, useEffect } from "react";
import Navbar from "../../Component/Navbar/Navbar";
import dayjs from "dayjs";
//style
import "./Dashboard.css";

//Components
import { SideCalendar } from "../../Component/SideCalenar/SideCalendar";
import { useAuthContext } from "../../Hooks/useAuthContext";
import { useCollection } from "../../Hooks/useCollection";
import { useSelectContext } from "../../Hooks/useSelectContext";
import { DonutChart } from "../../Component/Chart/DonutChart";
import { BarChart } from "../../Component/Chart/BarChart";
import TransactionList from "../../Component/TransactionList/TransactionList";
import Donutfilter from "./Donutfilter";
import Barchartfilter from "./Barchartfilter";
import Userbar from "../../Component/Userbar/Userbar";

export default function Dashboard() {
  const { user } = useAuthContext();
  const { date, filter, account } = useSelectContext();
  const [donutchartfilter, setDonutChartfilter] = useState("this month");
  const [barChartfilter, setBarChartfilter] = useState("this year");
  const [startday, setStartday] = useState("");
  const [endday, setEndday] = useState("");
  const [startyear, setStartyear] = useState("");
  const [endyear, setEndyear] = useState("");
  const { documents, error } = useCollection(
    "transaction",
    ["uid", "==", user.uid]
  );

  const format = "YYYY-MM-DD";
  const today = new Date(dayjs().format(format));

  const changeDonutFilter = (newDonutFilter) => {
    setDonutChartfilter(newDonutFilter);
  };

  const changeBarFilter = (newBarFilter) => {
    setBarChartfilter(newBarFilter);
  };

  useEffect(() => {
    if (donutchartfilter == "this month") {
      setStartday(new Date(dayjs().date(1).format(format)));
      setEndday(new Date(dayjs().endOf("month").format(format)));
      return;
    }
    if (donutchartfilter == "30days") {
      setStartday(new Date(dayjs().subtract(30, "day").format(format)));
      setEndday(today);
      return;
    }
    if (donutchartfilter == "90days") {
      setStartday(new Date(dayjs().subtract(90, "day").format(format)));
      setEndday(today);
      return;
    }
    if (donutchartfilter == "half a year") {
      setStartday(new Date(dayjs().subtract(180, "day").format(format)));
      setEndday(today);
      return;
    }
    if (donutchartfilter == "year") {
      setStartday(new Date(dayjs().subtract(1, "year").format(format)));
      setEndday(today);
      return;
    }
  }, [donutchartfilter]);

  useEffect(() => {
    if (barChartfilter == "this year") {
      setStartyear(new Date(new Date().getFullYear(), 0, 1));
      setEndyear(new Date(new Date().getFullYear(), 0, 365));
      return;
    }
    if (barChartfilter == "last year") {
      setStartyear(new Date(new Date().getFullYear(), -12, 1));
      setEndyear(new Date(new Date().getFullYear(), -12, 365));
      return;
    }
    if (barChartfilter == "the year before") {
      setStartyear(new Date(new Date().getFullYear(), -24, 1));
      setEndyear(new Date(new Date().getFullYear(), -24, 365));
      return;
    }
  }, [barChartfilter]);

  const donutfilterdocumnts = documents
    ? documents.filter((t) => {
        var date = new Date(t.date);
        return date >= startday && date <= endday;
      })
    : null;

  const barfilterdocumnts = documents
    ? documents.filter((t) => {
        var date = new Date(t.date);
        return date >= startyear && date <= endyear;
      })
    : null;

  const transaction = documents
    ? documents.filter((document) => {
        switch (filter) {
          case "date":
            let filter = false;
            if (document.date == date) {
              filter = true;
            }
            return filter;
          case "account":
            let accountfilter = false;
            if (document.amount == account) {
              accountfilter = true;
            }
            return accountfilter;
        }
      })
    : null;
    
    
  return (
    <>
      <Navbar />
      <div className="home">
        <Userbar />
        <main className="Chart-container">
          <div className="Chart-container_chart">
            <div>
              {documents && (
                <Donutfilter changeDonutFilter={changeDonutFilter} />
              )}
            </div>
            <div>
              <section className="Dounutchart-container">
                {donutfilterdocumnts && (
                  <DonutChart title1="Income" documents={donutfilterdocumnts} />
                )}
                {donutfilterdocumnts && (
                  <DonutChart title1="Expend" documents={donutfilterdocumnts} />
                )}
              </section>
              <div>
                {documents && (
                  <Barchartfilter changeBarFilter={changeBarFilter} />
                )}
              </div>
              <div>
                <section className="Barchart-container">
                  {barfilterdocumnts && (
                    <BarChart
                      title1="Income"
                      title2="Expend"
                      documents={barfilterdocumnts}
                    />
                  )}
                </section>
              </div>
            </div>
          </div>
          <section className="list-container">
            <SideCalendar documents={documents} />
            <TransactionList documents={transaction} />
          </section>
        </main>
      </div>
    </>
  );
}
