import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const app = (
  <div className="container">
    <div className="mid-container">
      <h3>SUBSCRIBE</h3>
      <p>sign up with your email address to recieve news and updates</p>
      <form>
        <input placeholder="First Name" />
        <input placeholder="Last Name" />
        <input type="email" placeholder="Email" />
      </form>
      <button>SUBSCRIBE</button>
    </div>
  </div>
);

ReactDOM.render(app, document.getElementById("root"));
