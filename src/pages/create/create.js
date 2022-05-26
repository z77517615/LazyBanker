//style
import "./create.css";
import dayjs from "dayjs"


import AddForm from "../../Component/AddForm/AddForm"
import AddList from "../../Component/AddList/AddList"
import React ,{useState,useEffect} from "react";


import {useAuthContext} from '../../Hooks/useAuthContext'
import { useSelectContext } from "../../Hooks/useSelectContext"



const create = () => {
  const format = "DD-MM-YY";
  const nowday = dayjs().format(format);
  const {user} = useAuthContext()
  const [transaction,setTransaction] =useState("")
  const {changeDate , changeFilter} = useSelectContext()

  useEffect(()=>(
    changeDate(nowday),
    changeFilter("date")
  ),[])


    return (
      <div className="list">
        <center>
          <AddList uid={user.uid} passTransaction={Transaction =>setTransaction(Transaction)} />
          <AddForm uid={user.uid} transaction={transaction}/>
        </center>
      </div>
    );
}
 
export default create;