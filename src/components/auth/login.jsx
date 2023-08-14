import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { FaFacebookF, FaGooglePlusG, FaLinkedinIn } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";


function LoginForm() {
  const [state, setState] = React.useState({
    email: "",
    password: ""
  });
  const [msg, setMsg] = useState('');
  const history = useNavigate();

  const handleChange = evt => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
  };

  const handleOnSubmit = async(evt) => {
    evt.preventDefault();
    
    const { email, password } = state;

    try {
      await axios.post('http://localhost:8000/api/auth/login', {
        email: email ,
        password : password,
      });
      history('/home');
    } catch (error) {
      if(error.response){
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <div className="form-container sign-in-container">
      <form onSubmit={handleOnSubmit}>
      <p className=''>{msg}</p>

        <h1>LOGIN</h1>
        <div className="social-container">
        <a href="#" className="social">
            <FaFacebookF />
          </a>
          <a href="#" className="social">
            <FaGooglePlusG />
          </a>
          <a href="#" className="social">
            <FaLinkedinIn />
          </a>
        </div>
        <span>or use your account</span>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={state.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={state.password}
          onChange={handleChange}
        />
        <a href="#">Forgot your password?</a>
        <button>LOG IN</button>
      </form>
    </div>
  );
}

export default LoginForm;
