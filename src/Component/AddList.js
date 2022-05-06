import React from 'react'

import {db } from '../firebase/config';
import { doc, deleteDoc } from "firebase/firestore"; 

export default function AddList({ notes }) {

  const deletnote =async (id)=>{
    const ref = doc(db,'notes',id)
    await deleteDoc(ref)
  }


  return (
    <div className="item-list">
      {notes.map(note => (
        <div className='item' 
        key={note.id}>{note.note}
        <button className="delete" onClick={() => deletnote(note.id)}>刪除</button>
        </div>
      ))}
    </div>
  )
}
