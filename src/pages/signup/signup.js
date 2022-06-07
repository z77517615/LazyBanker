//style
import "./signup.css";
import analysis from "../../assets/analysis.png";
import demo1 from "../../assets/demo1.png";
import demo2 from "../../assets/demo2.png";

import React, { useState } from "react";
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
      <main>
        <form className="signup-form" onSubmit={handleSubmit}>
          <h2>Signup</h2>
          <label>
            <span>email:</span>
            <input
              required
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </label>
          <label>
            <span>password:</span>
            <input
              required
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </label>
          <label>
            <span>Display Name:</span>
            <input
              required
              type="text"
              onChange={(e) => setDisplayName(e.target.value)}
              value={displayName}
            />
          </label>
          <label>
            <span>Profile thumbnail:</span>
            <input required type="file" onChange={handleFileChange} />
            {thumnailError && <div className="error">{thumnailError}</div>}
          </label>
          {!isPending && <button className="btn">Sign up</button>}
          {isPending && (
            <button className="btn" disabled>
              Loading ...
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
}
