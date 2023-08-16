import React from "react";
import "../assets/css/Landingpage.css";

import scrollDownImage from "../assets/ilham-img/scroll-down.svg";
import switchLeft from "../assets/ilham-img/switch-left.svg";
import switchRight from "../assets/ilham-img/switch-right.svg";
import ellipse from "../assets/ilham-img/ellipse.svg";
import ellipseOutline from "../assets/ilham-img/ellipse-outline.svg";
import evanlahti from "../assets/ilham-img/evan-lahti.jpg";
import tweeterSvg from "../assets/ilham-img/twitter.svg";
import jadaGriffin from "../assets/ilham-img/jada-griffin.jpg";
import aaronwiliam from "../assets/ilham-img/aaron-williams.jpg";
import skullPng from "../assets/ilham-img/skull.png";
import facebookSvg from "../assets/ilham-img/facebook.svg";
import vector from "../assets/ilham-img/vector.svg";
import twitch from "../assets/ilham-img/twitch.svg";
import NavbarHome from "./navbar";


export default function LandingHome() {
    return (
        <React.Fragment>
      {/* <!--page1-----------> */}
      <section className="page1">
        <NavbarHome />
        <div className="teks1">PLAY TRADITIONAL GAME</div>
        <div className="teks2">Experience new traditional game play</div>
        <a href="/gamelist"> <button className="buttonplay">PLAY NOW</button></a>
        <div className="teks3">THE STORY</div>
        <img className="scrolldown1" src={scrollDownImage} alt="scroll-down" />
      </section>
      {/* <!--endpage1--------> */}

      {/* <!--page2-----------> */}
      <section className="page2">
        <div className="teks1-page2">What's so special?</div>
        <div className="teks2-page2">THE GAMES</div>
        <div className="guntingbatu"></div>
        <div className="switchleft1">
          <img src={switchLeft} alt="panahkiri" />
        </div>
        <div className="switchright1">
          <img src={switchRight} alt="panahkanan" />
        </div>
        <div className="bulet">
          <div className="bulet1">
            <img src={ellipse} alt="buletfull" />
          </div>
          <div>
            <img src={ellipseOutline} alt="buletoutline" />
          </div>
          <div>
            <img src={ellipseOutline} alt="buletoutline" />
          </div>
          <div>
            <img src={ellipseOutline} alt="buletoutline" />
          </div>
          <div>
            <img src={ellipseOutline} alt="buletoutline" />
          </div>
        </div>
      </section>
      {/* <!--endpage2---------> */}

      {/* <!--page3-----------> */}
      <section className="page3">
        <div className="bg1pg3">
          <div className="teks1-page3">What's so special?</div>
          <div className="teks2-page3">FEATURES</div>
          <div className="teks3-page3">TRADITIONAL GAMES</div>
          <div className="teks4-page3">If you miss your childhood, we provide many traditional games here</div>
          <div className="teks5-page3">GAME SUIT</div>
          <div className="teks6-page3">TBD</div>

          <div className="bulet1pg3">
            <img src={ellipse} alt="buletfull" />
          </div>
          <div className="bulet2pg3">
            <img src={ellipseOutline} alt="buletoutline" />
          </div>
          <div className="bulet3pg3">
            <img src={ellipseOutline} alt="buletoutline" />
          </div>
          <div className="verticalline1"></div>
        </div>
      </section>
      {/* <!--endpage3--------> */}

      {/* <!--page4-----------> */}
      <section className="page4">
        <div className="bg2-page4">
          <div className="bg3pg4">
            <div className="teks1-page4">Can My Computer Run this game?</div>
            <div className="teks2-page4">SYSTEM REQUIREMENTS</div>
            <div className="table1">
              <div className="teks3-page4">
                OS:
                <div className="teks4-page4">Window 7 64-bit only (No OSX support at this time)</div>
              </div>

              <div className="teks3-page4">
                PROCESSOR:
                <div className="teks4-page4">INtel Core 2 Duo @ 2.4 GHZ or AMD Athlon X2 @ 2.8 GHZ</div>
              </div>

              <div className="teks3-page4">
                MEMORY:
                <div className="teks4-page4">4 GB RAM</div>
              </div>

              <div className="teks3-page4">
                STORAGE:
                <div className="teks4-page4">8 GB available space</div>
              </div>

              <div className="teks3-page4" id="graphic">
                GRAPHICS:
                <div className="teks4-page4">NVIDIA GeForce GTX 660 2GB or AMD Radeon HD 7850 2GB DirectX11 (Shader Model5)</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--endpage4--------> */}

      {/* <!--page5-----------> */}
      <section className="page5">
        <div className="teks1-page5">
          TOP SCORES
          <div className="teks2-page5">This top score from various games provided on this platform</div>
        </div>
        <button className="button1pg5">see more</button>

        <div className="teks4-page5">
          <div className="teks3-page5">
            <div className="bg1">
              <img className="gmb1" src={evanlahti} alt="" />
            </div>
            <div className="name">
              Evan Lahti
              <div className="job">PC Gamer</div>
            </div>
            <div className="bg2">
              <img src={tweeterSvg} alt="" />
            </div>
          </div>
          <div className="teksbox">"One of my gaming higlights of the year"</div>
          <div className="date">June 18, 2021</div>
        </div>

        <div className="teks6-page5">
          <div className="teks5-page5">
            <div className="bg1">
              <img className="gmb2" src={jadaGriffin} alt="" />
            </div>
            <div className="name">
              Jada Griffin
              <div className="job">Nerdreactor</div>
            </div>
            <div className="bg2">
              <img src={tweeterSvg} alt="" />
            </div>
          </div>
          <div className="teksbox">"The next big thing in the world of streaming and survival games"</div>
          <div className="date">July 10, 2021</div>
        </div>

        <div className="teks8-page5">
          <div className="teks7-page5">
            <div className="bg1">
              <img className="gmb3" src={aaronwiliam} alt="" />
            </div>
            <div className="name">
              Aaron Williams
              <div className="job">Uproxx</div>
            </div>
            <div className="bg2">
              <img src={tweeterSvg} alt="" />
            </div>
          </div>
          <div className="teksbox">"Snoop Dogg Playing The wildly Entertaining 'SOS' Is Ridiculous"</div>
          <div className="date">December 24, 2018</div>
        </div>
      </section>
      {/* <!--endpage5--------> */}

      {/* <!--page6-----------> */}
      <section className="page6">
        <img className="bgskull" src={skullPng} />
        <div className="rgskull"></div>

        <div className="teks1-page6">
          <div className="teks2-page6">Want to stay in touch?</div>
          <div className="teks3-page6">NEWSLETTER SUBSCRIBE</div>
          <div className="teks4-page6">
            In order to start receiving our news, all you have to do is enter your email address. Everything else will be taken care of by us. We will send you emails containing information about game. We don't spam.
          </div>
        </div>

        <div className="teks5-page6">
          <div className="teks6-page6">
            <div className="emailaddress">Your email address</div>
            <div className="emailbinar">youremail@binar.co.id</div>
          </div>
        </div>

        <button className="subsnow">Subsribe now</button>

        <div className="teks7-page6">
          <div>MAIN</div>
          <div>ABOUT</div>
          <div>GAMER FEATURES</div>
          <div>SYSTEM REQUIREMENTS</div>
          <div>QUOTES</div>
        </div>
        <div className="teks8-page6"></div>
        <div className="teks9-page6">&copy; 2018 Your Games, Inc. All Rights Reserved</div>
        <div className="teks10-page6">PRIVACY POLICY | TERMS OF SERVICE | CODE OF CONDUCT</div>
      </section>
      {/* <!--endpage6--------> */}
    </React.Fragment>
    );

};
