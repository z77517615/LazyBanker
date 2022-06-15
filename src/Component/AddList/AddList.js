import "./AddList.css";

import React, { useState } from "react";
import { useCollection } from "../../Hooks/useCollection";
import { editTransaction } from "../../Hooks/useTransaction";
import { v4 as uuidv4 } from "uuid";

export default function AddList({ uid, passTransaction }) {
  const [limitnumber, setLimitnumber] = useState("10");
  const { documents, error } = useCollection(
    "transaction",
    ["uid", "==", uid],
    ["createdAt", "desc"],
    parseInt(limitnumber)
  );
  const { deleteTransaction, response } = editTransaction("transaction");
  const uuid = uuidv4();

  function borderline(earn) {
    if (earn == "Expend") {
      return { borderLeft: "4px solid #e31f29" };
    } else {
      return { borderLeft: "4px solid #1f9751" };
    }
  }
  return (
    <div className="add-list">
      <nav className="add-list_filter">
        <span>Display number of lists : </span>
        <select required onChange={(e) => setLimitnumber(e.target.value)}>
          <option value="10" selected>
            10
          </option>
          <option value="20">20</option>
          <option value="30">30</option>
        </select>
      </nav>
      {documents &&
        documents.map((document) => (
          <li
            className="add-item"
            style={borderline(document.earn)}
            key={document.id}
          >
            <div className="addlist-container">
              <div className="addlist-container_item">
                <div>
                  <p className="list-title" style={{ fontWeight: "bold" }}>
                    Date :
                  </p>
                  <p className="list-item">{document.date}</p>
                </div>
                <div>
                  <p className="list-title" style={{ fontWeight: "bold" }}>
                    {document.category} :
                  </p>
                  <p className="list-item">${document.amount}</p>
                </div>
                <div>
                  <p className="list-title" style={{ fontWeight: "bold" }}>
                    Name :
                  </p>
                  <p className="list-item">{document.transactionName}</p>
                </div>
              </div>
              <div className="addlist-container_button">
                <button
                  className="edit"
                  onClick={() =>
                    passTransaction({ ...document, uuid: uuidv4() })
                  }
                >
                  Edit
                </button>
                <button
                  className="delete"
                  onClick={() => deleteTransaction(document.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </li>
        ))}
    </div>
  );
}
