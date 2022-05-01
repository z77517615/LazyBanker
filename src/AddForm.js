import React,{ useState } from "react";
import { v4 } from "uuid";

const AddForm = ({ add }) => {
  const [note, setNote] = useState("");

  function noteChange(e) {
    setNote(e.target.value);
  }

  function addItem() {
    add(function (preData) {
      return [
        {
          id:v4(),
          note,
        },
        ...preData,
      ];
    });
  }
  return (
    <div className="todo-form">
      <input type="text" value={note} onChange={noteChange}></input>
      <button onClick={addItem}>新增紀錄</button>
    </div>
  );
};

export default AddForm;
