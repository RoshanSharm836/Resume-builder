import React from "react";

import "../Style/Login.css";
function Login() {
  return (
    <div className="login-box">
      <h1>Login</h1>
      <form>
        <div className="user-box">
          <input required="" name="" type="text" />
          <label>Email</label>
        </div>
        <div className="user-box">
          <input required="" name="" type="password" />
          <label>Password</label>
        </div>
        <a href="#">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Submit
        </a>
      </form>
      <p>
        Don't have an account?{" "}
        <a href="" className="a2">
          Sign up!
        </a>
      </p>
    </div>
  );
}

export default Login;
