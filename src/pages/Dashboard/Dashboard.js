//style
import "./Dashboard.css"
import Userbar from '../../Component/Userbar/Userbar'
import {SideCalendar} from '../../Component/SideCalendar/SideCalendar'



import React,{useState} from "react";
import { useAuthContext } from "../../Hooks/useAuthContext";
import TransactionList from "../../Component/TransactionList/TransactionList";
import { useCollection } from "../../Hooks/useCollection";
import { useSelectContext } from "../../Hooks/useSelectContext";




export default function Dashboard (){
  // const [currentfilter,setCurrentfilter]= useState("transaction") 

  const {user} = useAuthContext()
  const{date,filter} = useSelectContext()
  console.log(11111,date,filter)

  

  const { documents, error } = useCollection(
    "transaction",
    ["uid", "==", user.uid]
  );
  const transaction = documents ? documents.filter(document=>{
    switch(filter) {
      case 'all':
        return true
      case 'date':
        let filter = false
        if (document.date== date){
          filter = true
        }
        return filter
      }
    }): null


  return (
    <div className="home">
      <Userbar />
      <div className="chart1">Chart1</div>
      <div className="chart2">Chart2</div>
      <div className="list-container">
      <SideCalendar/>
      <TransactionList documents={transaction} />
      </div>
    </div>
  );
};

