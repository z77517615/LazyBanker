//style
import "./Dashboard.css"
import shopping from '../../assets/shopping.svg'

import React from "react";
import { Link } from "react-router-dom";
import { useCollection } from "../../Hooks/useCollection";
import { useAuthContext } from "../../Hooks/useAuthContext";

import TransactionList from "../../Component/TransactionList/TransactionList";


export default function Dashboard (){
  const {user} = useAuthContext()
  const{documents,error} = useCollection('transaction',['uid','==',user.uid])

  return (
    <div className="home">
      <div className="chart1">Chart1</div>
      <div className="chart2">Chart2</div>
      <div className="list-container">
        <Link to="/create"><img src= {shopping}/></Link>
        {error &&{error}}
        {documents && <TransactionList transactions={documents}/>}
      </div>
    </div>
  );
};

