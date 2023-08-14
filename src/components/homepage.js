import React from "react";
import "../style/Homepage.css";

const Homepage = () => {
  return (
    <section className="page1">
      <nav className="navbar navbar-light">
        <div className="navteks1">
          <a className="click" href="/">
            LOGO
          </a>
        </div>
        <div className="navteks2">
          <a className="click" href="/">
            HOME
          </a>
        </div>
        <div className="navteks3">
          <a className="click" href="/score">
            SCORE
          </a>
        </div>
        <div className="gamelist">
          <a className="click" href="/gamelist">
            GAME LIST
          </a>
        </div>
        <div className="navteks5">
          <a className="click" href="/profile">
            PROFILE
          </a>
        </div>
        <div className="welcome">
          <a className="click" href="/">
            WELCOME BACK
          </a>
        </div>
      </nav>
      <div className="teks1">PLAY TRADITIONAL GAME</div>
      <div className="teks2">Experience new traditional game play</div>
      <button className="button1">PLAY NOW</button>
      <div className="teks3">THE STORY</div>
    </section>
  );
};

export default Homepage;
