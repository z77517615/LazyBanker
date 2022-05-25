import "./AddForm.css";
import React, { useState, useEffect } from "react";

import { editTransaction } from "../../Hooks/useTransaction";
import { SmallCalendar } from "../../Component/SmallCalendar/SmallCalendar";

export default function AddForm({ uid, transaction }) {
  const [category, setCategory] = useState("");
  const [earn, setEarn] = useState("");
  const [transactionName, setTransactionName] = useState("");
  const [amount, setAmount] = useState("");
  const [transactionstate, setTransactionstate] = useState("");
  const { addTransaction, updateTransaction, response } =
    editTransaction("transaction");
  const [pickday, setPickday] = useState("");
  const [selc, setSelc] = useState(true);
  const date = pickday;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!transactionstate) {
      addTransaction({
        uid,
        earn,
        date,
        category,
        transactionName,
        amount,
      });
    }
    if (transactionstate && transactionstate == "update") {
      const id = transaction.id;
      setTransactionstate("");
      updateTransaction(
        {
          uid,
          earn,
          date,
          category,
          transactionName,
          amount,
        },
        id
      );
    }
    if (transactionstate && transactionstate == "cancel") {
      setTransactionstate("");
      setCategory("");
      setTransactionName("");
      setAmount("");
      setEarn("");
    }
  };

  useEffect(() => {
    // console.log(response.success)
    if (response.success) {
      setCategory("");
      setTransactionName("");
      setAmount("");
      setEarn("");
      setTransactionstate("");
      setSelc(false);
    }
  }, [response.success]);

  useEffect(() => {
    if (transaction) {
      setPickday(transaction.date);
      setCategory(transaction.category);
      setTransactionName(transaction.transactionName);
      setAmount(transaction.amount);
      setEarn(transaction.earn);
      setTransactionstate(true);
    }
  }, [transaction.uuid]);

  function selected(item) {
    if (item === transaction.earn) {
      return "selected";
    }
    else if (item == transaction.category) {
      return "selected";
    } 
    else {
      return "";
    }
  }

  return (
    <div className="transaction">
      <header>
        <SmallCalendar
          passpickday={(pickday) => setPickday(pickday)}
          selc={selc}
          setSelc={setSelc}
        />
      </header>
      <main className="addFrom-container">
        <h3>Transaction</h3>
        <form onSubmit={handleSubmit}>
          <div className="transaction-form">
            <label>
              <select required onChange={(e) => setEarn(e.target.value)}>
                {earn == "" && (
                  <option value="" disabled selected hidden>
                    Income/Expend
                  </option>
                )}
                <option value="Expend" selected={selected("Expend")}>
                  Expend
                </option>
                <option value="Income" selected={selected("Income")}>
                  Income
                </option>
              </select>
            </label>
            <label>
              {earn == "" && (
                <select>
                  <option>Category</option>
                </select>
              )}
              {earn == "Expend" && (
                <select required onChange={(e) => setCategory(e.target.value)}>
                  <option disabled selected hidden>
                    Pick Category
                  </option>
                  <option value="Food" selected={selected("Food")}>
                    Food
                  </option>
                  <option value="Car" selected={selected("Car")}>
                    Car
                  </option>
                  <option value="Medical" selected={selected("Medical")}>
                    Medical
                  </option>
                  <option value="Loan" selected={selected("Loan")}>
                    Loan
                  </option>
                  <option value="Daily use" selected={selected("Daily use")}>
                    Daily use
                  </option>
                  <option
                    value="Entertainment"
                    selected={selected("Entertainment")}
                  >
                    Entertainment
                  </option>
                  <option value="Child" selected={selected("Child")}>
                    Child
                  </option>
                  <option value="Education" selected={selected("Education")}>
                    Education
                  </option>
                  <option value="Pets" selected={selected("Pets")}>
                    Pets
                  </option>
                  <option value="Others" selected={selected("Others")}>
                    Others
                  </option>
                </select>
              )}
              {earn == "Income" && (
                <select required onChange={(e) => setCategory(e.target.value)}>
                  <option disabled selected hidden>
                    Pick Category
                  </option>
                  <option value="Salary" selected={selected("Salary")}>
                    Salary
                  </option>
                  <option value="Invest" selected={selected("Invest")}>
                    Invest
                  </option>
                </select>
              )}
            </label>
            <label>
              <input
                type="text"
                required
                onChange={(e) => setTransactionName(e.target.value)}
                value={transactionName}
                placeholder="transcation name"
              />
            </label>
            <label>
              <input
                type="number"
                required
                onChange={(e) => setAmount(e.target.value)}
                value={amount}
                placeholder="Amount ($)"
              />
            </label>
          </div>
          {!transactionstate && <button className="sub-button">Create</button>}
          {transactionstate && (
            <button
              className="sub-button"
              onClick={() => setTransactionstate("update")}
            >
              UpDate
            </button>
          )}
          {transactionstate && (
            <button
              className="sub-button"
              onClick={() => (setTransactionstate("cancel"), setSelc(false))}
            >
              Cancel
            </button>
          )}
        </form>
      </main>
    </div>
  );
}
