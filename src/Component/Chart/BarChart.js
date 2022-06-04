import React, { useRef,useEffect,useState} from "react";
import "./BarChart.css";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

import { useChart } from "../../Hooks/useChart";

export const BarChart = ({ title1, documents, title2 }) => {
  const { BarData } = useChart(title1, documents, title2);
  // const [emptyarray ,setEmptyarray] = useState(false)
  const chartRef = useRef();

  // useEffect(()=>{
  //   if (documents =="null"){
  //     setEmptyarray(true)
  //   }
  // },[])
  // const onclick = (event) => {
  //   var activepoints=getElementsAtEvent(chartRef.current, event);
  //   if(activepoints.length > 0){
  //     selectedDatasetIndex= activepoints[0].datasetIndex
  //     selectedIndex = activepoints[0].index

  //   }
  // }
  return (
    <div>
      {/* {emptyarray && <div>Please entry your first Transaction</div>} */}
      <main className="Bar">
        {/* <div style={{fontWeight:"h5"}}>${total}</div> */}
        <Bar
          data={BarData}
          ref={chartRef}
          height={100}
          // onClick={onclick}
        />
      </main>
    </div>
  );
};

export default BarChart;
