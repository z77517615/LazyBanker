import React from 'react'
import './TransactionList.css'

import { db } from '../../firebase/config';

export default function TransactionList({ transactions }) {

  function background(category){
    if(category == "food"){
      return {background:"red"}
    }
    if(category == "car"){
      return {background:"green"}
    }
    if(category == "bill"){
      return {background:"blue"}
    }
  }

  console.log(transactions.sort((a,b)=>a.date.localeCompare(b.date)))
  // const deletnote =async (id)=>{
  //   const ref = doc(db,'transaction',id)
  //   await deleteDoc(ref)
  // }
  return(
    <div className="transaction-list">
      {transactions.sort((a,b)=>a.date.localeCompare(b.date)).map(transction => (
        <div className='transaction-item' style={background(transction.category)}
        key={transction.id}>
          <p>{transction.date}</p>
          <p>{transction.category} : ${transction.amount}</p>
          <p>{transction.transactionName}</p>
        <button className="edit" onClick={() => delettransaction(documents.id)}>Edit</button>
        <button className="delete" onClick={() => delettransaction(documents.id)}>Delet</button>
        </div>
      ))}
    </div>
  )
}
