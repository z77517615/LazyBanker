import { Link } from "react-router-dom";
import React from "react";

export default function Home (){
  return (
    <div className="home">
      <div className="title">React 練習專案</div>
      <div className="body">歡迎光臨我的頁面</div>
      <center>
        <Link to ="/list">點此開始</Link>
      </center>
    </div>
  );
};

