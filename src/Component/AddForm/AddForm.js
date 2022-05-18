import './AddForm.css'
import React,{ useState ,useEffect} from "react";

import {editTransaction} from "../../Hooks/useTracker"

export default function AddForm({uid,transaction}){
  const [date, setDate] = useState('')
  const [category, setCategory] = useState('')
  const [earn, setEarn] = useState('')
  const [transactionName, setTransactionName] = useState('')
  const [amount, setAmount] = useState('')
  const [transactionstate , setTransactionstate] =useState('')
  const {addTransaction ,updateTransaction, response} = editTransaction('transaction')

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!transactionstate){
      addTransaction({
        uid,
        earn,
        date,
        category,
        transactionName,
        amount
      })
    }
    if(transactionstate && transactionstate=="update"){
      console.log("update1")
      const id = transaction.id
      setTransactionstate('')
      updateTransaction({
        uid,
        earn,
        date,
        category,
        transactionName,
        amount
      },id)   
    }
    if(transactionstate && transactionstate=="cancel"){
      setTransactionstate('')
      setDate('')
      setCategory('')
      setTransactionName('')
      setAmount('')
      setEarn('')      
  } 
}

  useEffect(()=>{
    console.log(response.success)
    if (response.success){
      setDate('')
      setCategory('')
      setTransactionName('')
      setAmount('')
      setEarn('')
      setTransactionstate('')
    }
  },[response.success])

  useEffect(()=>{
    if(transaction){
      setDate(transaction.date)
      setCategory(transaction.category)
      setTransactionName(transaction.transactionName)
      setAmount(transaction.amount)
      setTransactionstate(true)
    }
  },[transaction.uuid])

  function selected(selc){
    if (selc == transaction.earn){
      return "selected"
    }else{
      return ""
    }
  }


  return (
    <div className="addFrom-container">
      <h3>Add a Transaction</h3>
      <form onSubmit={handleSubmit}>
        <div className ='transaction-form'>
          <label>
            <select
              onChange={(e) => setEarn(e.target.value)} 
              >
              <option value="Income" selected={selected("Income")}>Income</option>
              <option value="Expend" selected={selected("Expend")}>Expend</option>
            </select>
          </label>
          <label>
              <input 
                type="date"
                required
                value={date} 
                onChange={(e) => setDate(e.target.value)} 
                placeholder='YY-MM-DD'
              />
            </label>
            <label>
              <input 
                type="text"
                required
                onChange={(e) => setCategory(e.target.value)} 
                value={category} 
                placeholder='category'
              />
            </label>
            <label>
              <input 
                type="text"
                required
                onChange={(e) => setTransactionName(e.target.value)} 
                value={transactionName} 
                placeholder='transcation name'
              />
            </label>
            <label>
              <input
                type="number"
                required
                onChange={(e) => setAmount(e.target.value)} 
                value={amount} 
                placeholder='Amount ($)'
              />
            </label>
          </div>
        {!transactionstate && <button className="sub-button">Create</button>}
        {transactionstate && <button className="sub-button" onClick={()=>(setTransactionstate("update"))}>UpDate</button>}
        {transactionstate && <button className="sub-button"onClick={()=>(setTransactionstate("cancel"))}>Cancel</button>}
      </form>
    </div>
  );
}
