//style
import "./Dashboard.css"
import Userbar from '../../Component/Userbar/Userbar'


import React from "react";
import { useCollection } from "../../Hooks/useCollection";
import { useAuthContext } from "../../Hooks/useAuthContext";

import TransactionList from "../../Component/TransactionList/TransactionList";


export default function Dashboard (){
  const {user} = useAuthContext()
  const{documents,error} = useCollection('transaction',['uid','==',user.uid])

  return (
    <div className="home">
      <Userbar />
      <div className="chart1">Chart1</div>
      <div className="chart2">Chart2</div>
      <div className="list-container">
        {error &&{error}}
        {documents && <TransactionList transactions={documents}/>}
      </div>
    </div>
  );
};

