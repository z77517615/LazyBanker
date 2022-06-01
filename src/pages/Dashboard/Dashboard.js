//style
import "./Dashboard.css";
import Userbar from "../../Component/Userbar/Userbar";

//Components
import { SideCalendar } from "../../Component/SideCalenar/SideCalendar";

import React, { useState } from "react";

import { useAuthContext } from "../../Hooks/useAuthContext";
import { useCollection } from "../../Hooks/useCollection";
import { useSelectContext } from "../../Hooks/useSelectContext";
import { DounutChart } from "../../Component/Chart/DounutChart";
import { BarChart } from "../../Component/Chart/BarChart";
import TransactionList from "../../Component/TransactionList/TransactionList";

export default function Dashboard() {
  // const [currentfilter,setCurrentfilter]= useState("transaction")

  const { user } = useAuthContext();
  const { date, filter } = useSelectContext();

  const { documents, error } = useCollection("transaction", [
    "uid",
    "==",
    user.uid,
  ]);

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

  return (
    <div className="home">
      <Userbar />
      <main className="Chart-container">
        <div className="Chart-container_chart">
          <section className="Dounutchart-container">
            {documents && <DounutChart title1="Income" documents={documents} />}
            {documents && <DounutChart title1="Expend" documents={documents} />}
          </section>
          <section className="Barchart-container">
            {documents && (
              <BarChart title1="Income" title2="Expend" documents={documents} />
            )}
          </section>
        </div>
        <section className="list-container">
          <SideCalendar documents={documents} />
          <TransactionList documents={transaction} />
        </section>
      </main>
    </div>
  );
}
