import "./Navbar.css";
// import bank from '../../assets/bank.svg'

import React from "react";
import { Link } from "react-router-dom";
import { useLogout } from "../../Hooks/useLogout";
import { useAuthContext } from "../../Hooks/useAuthContext";

export default function Navbar() {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  return (
    <nav className="navbar">
      <ul>
        <li className="title">
          {/* <img src={bank} alt="bank logo" /> */}
          <Link to="/">
            <span>Lazybanker</span>
          </Link>
        </li>
        {user && (
          <>
            <li>
              <button className="btn" onClick={logout}>
                Logout
              </button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}