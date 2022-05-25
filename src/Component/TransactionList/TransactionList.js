import React from 'react'
import './TransactionList.css'


export default function TransactionList({documents}) {



  function background(category){
    if(category == "Food"){
      return {background:"red"}
    }
    if(category == "Car"){
      return {background:"green"}
    }
    if(category == "Salary"){
      return {background:"blue"}
    }
  }

  return(
    <div className="transaction-list">
      {documents 
      && documents.map((document) => (
        <div className='transaction-item' style={background(document.category)}
        key={document.id}>
          <p>{document.date}</p>
          <p>{document.category} : ${document.amount}</p>
          <p>{document.transactionName}</p>
        <button className="edit" onClick={() => edittransaction(document.id)}>Edit</button>
        <button className="delete" onClick={() => delettransaction(document.id)}>Delete</button>
        </div>
      ))}
    </div>
  )
}
