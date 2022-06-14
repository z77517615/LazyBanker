import React, { useEffect, useState } from "react";
import "./DonutChart.css";
import Chart from "react-apexcharts";
import shopping from "../../assets/shopping.svg";

import { useChart } from "../../Hooks/useChart";

export const DonutChart = ({ title1, documents }) => {
  const { DonutData } = useChart(title1, documents);
  const [emptyarray, setEmptyarray] = useState(false);

  useEffect(() => {
    if (DonutData.labels.length == "0") {
      setEmptyarray(true);
    } else {
      setEmptyarray(false);
    }
  }, [DonutData]);

  const options = DonutData;
  const series = DonutData.series;

  return (
    <div className={title1 === "Income" ? "Income" : "Expend"}>
      <header className="title">{title1} </header>
      <main>
        {emptyarray && (
          <div className="emptyarray">
            Click
            <img
              src={shopping}
              style={{
                width: "30px",
                height: "30px",
                marginRight: "5px",
                marginLeft: "5px",
              }}
            ></img>
            to enter your first Transaction
          </div>
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

export default DonutChart;
