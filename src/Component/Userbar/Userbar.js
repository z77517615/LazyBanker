import React from "react";
import "./Userbar.css";
import shopping from "../../assets/shopping.svg";
import { useAuthContext } from "../../Hooks/useAuthContext";
import { Link } from "react-router-dom";

export default function Userbar() {
  const { user } = useAuthContext();

  return (
    <nav className="userbar">
      <ul>
        {user && (
          <>
            <img src={user.photoURL}></img>
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
