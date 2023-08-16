import React from "react";
import "../assets/css/Landingpage.css";


export default function NavbarHome() {
    return (
        <nav className="navbar navbar-light">
          <div className="navteks1">
          <a className="click1" href="/">
              LOGO
            </a>
          </div>
          <div className="navteks2">
          <a className="click1" href="/">
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
            <a className="click1" href="/loginregister">
              REGISTER / LOGIN
            </a>
          </div>
        </nav>
    );

};
