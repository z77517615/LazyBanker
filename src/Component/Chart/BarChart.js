import React from "react";
import "./BarChart.css";
import Chart from "react-apexcharts";

import { useChart } from "../../Hooks/useChart";

export const BarChart = ({ title1, documents, title2 }) => {
  const { BarData } = useChart(title1, documents, title2);

  const options = BarData.options;
  const series = BarData.series;
  return (
    <div>
      <main className="Bar">
        <Chart
          options={options}
          series={series}
          type="line"
          width={750}
          height={300}
        />
      </main>
    </div>
  );
};

export default BarChart;
