//style
import "./create.css";

import Navbar from "../../Component/Navbar/Navbar";
import AddForm from "../../Component/AddForm/AddForm";
import AddList from "../../Component/AddList/AddList";
import React, { useState } from "react";

import { useAuthContext } from "../../Hooks/useAuthContext";

const create = () => {
  const { user } = useAuthContext();
  const [transaction, setTransaction] = useState("");

  const passtransaction = (transaction) => {
    setTransaction(transaction);
  };

  return (
    <div className="list">
       <Navbar />
      <center>
        <AddList uid={user.uid} passTransaction={passtransaction} />
        <AddForm uid={user.uid} transaction={transaction} />
      </center>
    </div>
  );
};

export default create;
