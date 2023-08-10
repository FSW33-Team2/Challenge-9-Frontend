import React from "react";
import '../style/Homepage.css'

const Homepage = () => {

    return (
        <section className="page1">
          <nav className="navbar navbar-light">
            <div className="navteks1">LOGO</div>
            <div className="navteks2">HOME</div>
            <div className="navteks3">WORK</div>
            <div className="navteks4">CONTACT</div>
            <div className="navteks5">ABOUT ME</div>
            <div className="navteks6">
              <a className="click" href="/register">WELCOME BACK</a>
            </div>
            
          </nav>
          <div className="teks1">PLAY TRADITIONAL GAME</div>
          <div className="teks2">Experience new traditional game play</div>
          <button className="button1" >PLAY NOW</button>
          <div className="teks3">THE STORY</div>
       
        </section>
    )
}

export default Homepage;