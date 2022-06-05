import React, { useRef, useEffect, useState } from "react";
import "./DounutChart.css";
import Chart from "react-apexcharts";
// import {
//   Doughnut,
//   getElementsAtEventForMode,
//   getElementsAtEvent,
//   getDatasetAtEvent,
// } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   defaults,
//   ArcElement,
//   Tooltip,
//   Legend,
// } from "chart.js";
// ChartJS.register(ArcElement, Tooltip, Legend);

import { useChart } from "../../Hooks/useChart";

export const DounutChart = ({ title1, documents }) => {
  const { total, DounutData } = useChart(title1, documents);
  const [emptyarray, setEmptyarray] = useState(false);
  const chartRef = useRef();

  useEffect(() => {
    if (DounutData.labels.length == "0") {
      setEmptyarray(true);
    } else {
      setEmptyarray(false);
    }
  }, [DounutData]);

  const options = DounutData;
  const series = DounutData.series;
  // const onclick = (event) => {
  //   var activepoints=getElementsAtEvent(chartRef.current, event);
  //   if(activepoints.length > 0){
  //     selectedDatasetIndex= activepoints[0].datasetIndex
  //     selectedIndex = activepoints[0].index

  //   }
  // }

  return (
    <div className={title1 === "Income" ? "Income" : "Expend"}>
      <header className="title">{title1} </header>
      <main>
        {/* <div style={{ fontWeight: "h5" }}>${total}</div> */}
        {emptyarray && (
          <div className="emptyarray">Please entry your first Transaction</div>
        )}
        {!emptyarray && (
          <Chart
            options={options}
            series={series}
            type="donut"
            width={330}
            height={180}
            // onClick={onclick}
          />
        )}
      </main>
    </div>
  );
};

export default DounutChart;
