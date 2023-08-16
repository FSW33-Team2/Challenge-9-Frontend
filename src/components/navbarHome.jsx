import React, { useState, useEffect } from "react";
import "../assets/css/Landingpage.css";
import axios from "./lib/axios";
import jwtDecode from "jwt-decode";

export default function NavbarHome() {
  const [username, setUsername] = useState('')

  useEffect(() => {
    refreshToken();
  }, []);

  const refreshToken = async() => {
    try {
      
      const response = await axios.get('/api/auth/token');
      const decoded = jwtDecode(response.data.accessToken)
      setUsername(decoded.username);
    } catch (error) {
      
    }
  }
    return (
        <nav className="navbar navbar-light">
          <div className="navteks1">
          <a className="click1" href="/home">
              {username}
            </a>
          </div>
          <div className="navteks2">
          <a className="click1" href="/home">
              HOME
            </a>
          </div>
          <div className="navteks3">
            <a className="click1" href="/leaderboard">
              LEADERBOARD
            </a>
          </div>
          <div className="game-list">
            <a className="click1" href="/gamelist">
              GAME LIST
            </a>
          </div>
          <div className="navteks5">
            <a className="click1" href="/profile">
              PROFILE
            </a>
          </div>
          <div className="navteks6">
            <a className="click1" href="/">
              LOGOUT
            </a>
          </div>
        </nav>
    );

};
