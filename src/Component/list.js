import AddForm from "./AddForm";
import AddList from "./AddList";
import getCollect from '../Hooks/getCollect'
import React from "react";
import { Link } from "react-router-dom";


const List = () => {
  const {documents:notes} = getCollect('notes')

 


  return (
    <div className="list">
      <AddForm />
      {notes && <AddList notes={notes} />}
      <center>
        <Link to="/">返回首頁</Link>
      </center>
    </div>
  );
}
 
export default List;


 