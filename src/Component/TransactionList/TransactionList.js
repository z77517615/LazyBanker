import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import "./TransactionList.css";
import AddForm from "../../Component/AddForm/AddForm";
import { icon } from "../../Hooks/useAssets";
import Delete from "../../assets/delete.png";
import Edit from "../../assets/edit.jpg";

import { editTransaction } from "../../Hooks/useTransaction";
import { useAuthContext } from "../../Hooks/useAuthContext";

export default function TransactionList({ documents }) {
  const { deleteTransaction, response } = editTransaction("transaction");
  function background(category) {
    if (category == "Food") {
      return { background: "#FAEBD7" };
    }
    if (category == "Car") {
      return { background: "#F08080" };
    }
    if (category == "Salary") {
      return { background: "#98FB98" };
    }
    if (category == "Child") {
      return { background: "#FAEBD7" };
    }
    if (category == "Education") {
      return { background: "#4B0082" };
    }
    if (category == "Medical") {
      return { background: "#FFFAF0" };
    }
    if (category == "Daliy") {
      return { background: "#DAA520" };
    }
    if (category == "Investment") {
      return { background: "#808080" };
    }
    if (category == "Loan") {
      return { background: "#800000" };
    }
    if (category == "Pets") {
      return { background: "#9370DB" };
    }
    if (category == "Entertainment") {
      return { background: "#AFEEEE" };
    }
    if (category == "Travel") {
      return { background: "#87CEEB" };
    }
    if (category == "Gifts") {
      return { background: "#FF6347" };
    }
    if (category == "Others") {
      return { background: "#FF6347" };
    }
  }
  const [popup, setPopup] = useState(false);
  const { user } = useAuthContext();
  const [transaction, setTransaction] = useState("");
  const uuid = uuidv4();
  const [popupstyle, setPopupstyle] = useState(false);

  return (
    <div className="transaction-list">
      {documents &&
        documents.map((document) => (
          <div
            className="transaction-item"
            style={background(document.category)}
            key={document.id}
          >
            <div>
              <img src={icon(document.category)}></img>
            </div>
            <div className="transaction-item__list">
              <p>{document.date}</p>
              <p>
                {document.category} : ${document.amount}
              </p>
              <p>Name : {document.transactionName}</p>
            </div>
            <button
              className="transaction-item__list_edit"
              onClick={() => (
                setPopup(true),
                setPopupstyle(true),
                setTransaction({ ...document, uuid: uuidv4() })
              )}
            >
              <img className="transaction-edit" src={Edit} />
            </button>
            <button
              className="transaction-item__list_delete"
              onClick={() => deleteTransaction(document.id)}
            >
              <img className="transaction-delete" src={Delete} />
            </button>
          </div>
        ))}
      {popup && (
        <AddForm
          uid={user.uid}
          transaction={transaction}
          popup={popup}
          setPopup={setPopup}
          popupstyle={popupstyle}
          setPopupstyle={setPopupstyle}
        />
      )}
    </div>
  );
}
