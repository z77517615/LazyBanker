import React, { useEffect, useState } from "react";
import "./DounutChart.css";
import Chart from "react-apexcharts";

import { useChart } from "../../Hooks/useChart";

export const DounutChart = ({ title1, documents }) => {
  const { DounutData } = useChart(title1, documents);
  const [emptyarray, setEmptyarray] = useState(false);

  useEffect(() => {
    if (DounutData.labels.length == "0") {
      setEmptyarray(true);
    } else {
      setEmptyarray(false);
    }
  }, [DounutData]);

  const options = DounutData;
  const series = DounutData.series;

  return (
    <div className={title1 === "Income" ? "Income" : "Expend"}>
      <header className="title">{title1} </header>
      <main>
        {emptyarray && (
          <div className="emptyarray">Please enter your first Transaction</div>
        )}
        {!emptyarray && (
          <Chart
            options={options}
            series={series}
            type="donut"
            width={340}
            height={180}
          />
        )}
      </main>
    </div>
  );
};

export default DounutChart;
