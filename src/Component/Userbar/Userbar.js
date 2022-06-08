import React, { useState, useEffect } from "react";
import "./Userbar.css";
import shopping from "../../assets/shopping.svg";
import search from "../../assets/search.png";
import { useAuthContext } from "../../Hooks/useAuthContext";
import { useSelectContext } from "../../Hooks/useSelectContext";
import { Link } from "react-router-dom";

export default function Userbar() {
  const { user } = useAuthContext();
  const { changeAccount } = useSelectContext();
  const [searchaccount, setSearchaccount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    changeAccount(searchaccount), setSearchaccount("");
  };

  return (
    <nav className="userbar">
      <ul className="Dashboard">
        <form onSubmit={handleSubmit} className="search-container">
          <input
            type="text"
            value={searchaccount}
            onChange={(e) => setSearchaccount(e.target.value)}
            placeholder="please enter an amount， ex : 600 "
          ></input>
          <button className="search">
            <img className="search" src={search} onClick={() => handleSubmit} />
          </button>
        </form>
      </ul>
      <ul>
        {user && (
          <>
            <img className="photo" src={user.photoURL}></img>
            <div>
              <li className="name">Hello , {user.displayName}</li>
              <p>Welcome to create your own Financial Tracker</p>
            </div>
            <Link to="/create">
              <span className="shopping-container">
                <img className="shopping" src={shopping} />
              </span>
            </Link>
          </>
        )}
      </ul>
    </nav>
  );
}
