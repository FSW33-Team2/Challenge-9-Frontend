import React, { useState } from "react";
import "../assets/css/RegisterLogin.css";
import LoginForm from "../components/auth/login";
import RegisterForm from "../components/auth/register";



function AuthPage() {
  const [type, setType] = useState("logIn");
  const handleOnClick = text => {
    if (text !== type) {
      setType(text);
      return;
    }
  };
  const containerClass =
    "container " + (type === "register" ? "right-panel-active" : "");
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <div className="App">
    <h2>LOGIN / REGISTER</h2>
    <div className={containerClass} id="container">
      <RegisterForm />
      <LoginForm />
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>Welcome Back!</h1>
            <p>
              Please Login to keep connected with us.
            </p>
            <button
              className="ghost"
              id="logIn"
              onClick={() => handleOnClick("logIn")}
            >
              Login
            </button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>Hello Adventurer!!</h1>
            <p>Not have an account yet?
              <br />
              <br />Please press the Register button to start your journey with us.</p>
            <button
              className="ghost "
              id="register"
              onClick={() => handleOnClick("register")}
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  )
}

export default AuthPage;