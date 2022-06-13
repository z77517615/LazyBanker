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
  const [email, setEmail] = useState("test@gmail.com");
  const [password, setPassword] = useState("test111");
  const { error, login, isPending, signInWithGoogle } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <div className="bg">
      <div className="first-title">
        <center className="bg-title">Easy record with LazyBanker</center>
        <center className="bg-discribe">
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
          <button className="google" onClick={signInWithGoogle}>
            <img
              id="google"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png"
            />
            <div className="btn-text">Login with Google</div>
          </button>
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
