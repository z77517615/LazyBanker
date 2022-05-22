//style
import "./create.css";


import AddForm from "../../Component/AddForm/AddForm"
import AddList from "../../Component/AddList/AddList"
import React ,{useState} from "react";


import {useAuthContext} from '../../Hooks/useAuthContext'


const create = () => {
  const {user} = useAuthContext()
  const [transaction,setTransaction] =useState("")

  console.log(transaction)

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