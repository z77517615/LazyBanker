//style
import "./login.css";
import avatar from "../../assets/avatar.svg";
import graph from "../../assets/graph.svg";
import demo1 from "../../assets/demo1.png";
import demo2 from "../../assets/demo2.png";

//react
import React, { useState } from "react";
import { useLogin } from "../../Hooks/useLogin";
import { Link } from "react-router-dom";

const login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { error, login, isPending } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <div className="bg">
      {/* <div className="bg">
        <img src={lazybanker}></img>
      </div> */}
      <div className="first-title">
        <center className="lg-title">Easy record with LazyBanker</center>
        <center className="lg-discribe">
          Make your own financial tracker with simple input and graph analysis
        </center>
      </div>
      <main>
        <div className="loginform-container">
          <form className="login-form" onSubmit={handleSubmit}>
            <img className="avatar" src={avatar} />
            <label>
              <div className="i">
                <i className="fas fa-envelope"></i>
              </div>
              <input
                required
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder="test@gmail.com"
              />
            </label>
            <label>
              <div className="i">
                <i className="fas fa-lock"></i>
              </div>
              <input
                required
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                placeholder="test111"
              />
            </label>
            {!isPending && <button className="lg-btn">Login</button>}
            {isPending && (
              <button className="lg-btn" disabled>
                loading...
              </button>
            )}
            {error && <p className="error">{error}</p>}
            <p></p>
            <button className="lg-btn">
              <Link to="/signup">Signup</Link>
            </button>
          </form>
        </div>
        <div className="demo-container">
          <div className="analysis">
            <img src={graph}></img>
          </div>
          <div className="demo">
            <img src={demo1}></img>
            <img src={demo2}></img>
          </div>
        </div>
      </main>
    </div>
  );
};

export default login;
