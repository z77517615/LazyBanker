import React from "react";

const Item = ({ note ,id ,deleteData}) => {

    function deletItem(){
        deleteData(function(prev){
            return prev.filter(item => item.id!==id)
        })
    }

  return (
    <div className="item-list">
      <div className="item">
        {note}
        <button className="delete" onClick={deletItem}>刪除</button>
      </div>
    </div>
  );
};

export default Item;
