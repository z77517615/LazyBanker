//style
import "./signup.css";
import avatar from "../../assets/avatar.svg";
import graph from "../../assets/graph.svg";
import demo1 from "../../assets/demo1.png";
import demo2 from "../../assets/demo2.png";

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSignup } from "../../Hooks/useSignup";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [thumbnail, setThumbnail] = useState(null);
  const [thumnailError, setThumbnailError] = useState(null);
  const { error, isPending, signup } = useSignup();

  const handleSubmit = (e) => {
    e.preventDefault();
    //import arguments into signup function
    signup(email, password, displayName, thumbnail);
  };

  const handleFileChange = (e) => {
    setThumbnail(null);
    let photo = e.target.files[0];
    console.log(photo);
    if (!photo) {
      setThumbnailError("Please select a photo");
      return;
    }
    if (!photo.type.includes("image")) {
      setThumbnailError("Selected file must be an image");
      return;
    }
    if (!photo.size > 100000) {
      setThumbnailError("Image file size must less than 100kb");
      return;
    }
    setThumbnailError(null);
    setThumbnail(photo);
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
        <div className="signupform-container">
          <form className="signup-form" onSubmit={handleSubmit}>
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
                placeholder="ex. 123456@gmail.com"
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
                placeholder="ex. 123456"
              />
            </label>
            <label>
              <div className="i">
                <i className="fas fa-user"></i>
              </div>
              <input
                required
                type="text"
                onChange={(e) => setDisplayName(e.target.value)}
                value={displayName}
                placeholder="ex. Sophy"
              />
            </label>
            <label>
              <input required type="file" onChange={handleFileChange} />
              {thumnailError && <div className="error">{thumnailError}</div>}
            </label>
            {!isPending && <button className="lg-btn">Sign up</button>}
            {isPending && (
              <button className="lg-btn" disabled>
                Loading ...
              </button>
            )}
            {error && <p className="error">{error}</p>}
            <button className="lg-btn">
              <Link to="/login">Login</Link>
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
}
