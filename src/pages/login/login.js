//style
import "./login.css";
import analysis from "../../assets/analysis.png";
import demo1 from "../../assets/demo1.png";
import demo2 from "../../assets/demo2.png";

//react
import React, { useState } from "react";
import { useLogin } from "../../Hooks/useLogin";

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
      <main>
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Login</h2>
          <label>
            <span>email:</span>
            <input
              required
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="test@gmail.com"
            />
          </label>
          <label>
            <span>password:</span>
            <input
              required
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              placeholder="test111"
            />
          </label>
          {!isPending && <button className="btn">Login</button>}
          {isPending && (
            <button className="btn" disabled>
              loading...
            </button>
          )}
          {error && <p className="error">{error}</p>}
        </form>
        <div className="demo-container">
          <div>
          <center className="sign-title">Easy record with LazyBanker</center>
          <center className="sign-discribe">
              Make your own financial tracker with simple input and graph
              analysis
          </center>
          </div>
          <div className="analysis">
            <img src={analysis}></img>
          </div>
          <div>
            <img src={demo1}></img>
            <img src={demo2}></img>
          </div>
        </div>
      </main>
    </div>
  );
};

export default login;
