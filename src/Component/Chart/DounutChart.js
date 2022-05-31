import React ,{useRef} from 'react';
import "./DounutChart.css"
import { Doughnut,getElementsAtEventForMode,getElementsAtEvent,getDatasetAtEvent } from 'react-chartjs-2';
import { Chart as ChartJS,  defaults, ArcElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);

import {useChart} from "../../Hooks/useChart"

export const DounutChart = ({ title1,documents }) => {

  const {total, DounutData } = useChart(title1,documents);
  const chartRef = useRef();

  // const onclick = (event) => {
  //   var activepoints=getElementsAtEvent(chartRef.current, event);
  //   if(activepoints.length > 0){
  //     selectedDatasetIndex= activepoints[0].datasetIndex
  //     selectedIndex = activepoints[0].index

  //   }
  // }

  
  return (
    <div className={title1 === 'Income' ? "Income": "Expend"}>
      <header className="title">{title1} </header>
      <main>
        <div style={{fontWeight:"h5"}}>${total}</div>
        <Doughnut 
          data={DounutData} 
          ref={chartRef}
          width={300}
          // onClick={onclick}
          />
      </main>
    </div>
  );
};

export default DounutChart; 