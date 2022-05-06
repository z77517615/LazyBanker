import React,{ useState } from "react";

//firebase
import {db } from '../firebase/config';
import { collection, addDoc } from "firebase/firestore"; 

export default function AddForm(){
  const [newnote, setNote] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault()
    const ref = collection(db,'notes')

    await addDoc(ref,{
            note : newnote
          })
      setNote('');
    } 

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <label>
        <span>
          <input 
          type="text" 
          value={newnote} 
          onChange={(e)=>setNote(e.target.value)}
          required
          />
          <button>新增紀錄</button>
        </span>
      </label>
    </form>
  );
};
