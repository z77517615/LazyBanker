import React from "react";
import { icon } from "../../Hooks/useAssets";
import "./TransactionList.css";

export default function TransactionList({ documents }) {
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
  }

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
            <div>
              <p>{document.date}</p>
              <p>
                {document.category} : ${document.amount}
              </p>
              <p>{document.transactionName}</p>
              <button
                className="edit"
                onClick={() => edittransaction(document.id)}
              >
                Edit
              </button>
              <button
                className="delete"
                onClick={() => delettransaction(document.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
    </div>
  );
}
