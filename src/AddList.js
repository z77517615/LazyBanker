import React from 'react'
import Item from "./item";


const AddList = ({ listData, deleteData }) => {
  return (
    <div calssName="list">
      {listData.map((item) => {
        const { note ,id} = item;
        return <Item note={note} key={id} id={id} deleteData={deleteData} />;
      })}
    </div>
  );
};

export default AddList;
