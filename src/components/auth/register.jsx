import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { FaFacebookF, FaGooglePlusG, FaLinkedinIn } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";

function RegisterForm() {
  const [state, setState] = React.useState({
    name: "",
    email: "",
    password: "",
    confPassword: ""
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
    const { name, email, password, confPassword } = state;

    try {
      await axios.post('http://localhost:8000/api/auth/register', {
        username : name,
        email: email ,
        password : password,
        confPassword : confPassword
      });
      window.location.reload(true);
      // history.push("/loginregister");
    } catch (error) {
      if(error.response){
        setMsg(error.response.data.msg);
      }
    }


  };

  return (
    <div className="form-container sign-up-container">
      <form onSubmit={handleOnSubmit}>
      <p className=''>{msg}</p>
        <h1>Register</h1>
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
        <span>or use your email for registration</span>
        <input
          type="text"
          name="name"
          value={state.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          type="email"
          name="email"
          value={state.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          value={state.password}
          onChange={handleChange}
          placeholder="Password"
        />
        <input
          type="password"
          name="confPassword"
          value={state.confPassword}
          onChange={handleChange}
          placeholder="Re type your Password"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default RegisterForm;
