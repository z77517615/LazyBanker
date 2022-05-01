import AddForm from "./AddForm";
import AddList from "./AddList";
import React, { useState} from "react";
import {Link } from "react-router-dom";



export default function List(){


  const [data, setData] = useState([]);

  return (
    <div className="list">
      <AddForm add={setData} />
      <AddList listData={data} deleteData={setData} />
      <center>
        <Link to="/">返回首頁</Link>
      </center>
    </div>
  );
};
