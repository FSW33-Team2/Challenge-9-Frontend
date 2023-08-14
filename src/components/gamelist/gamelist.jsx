import React, { useEffect, useState } from "react";
import "../../assets/css/gamelist.css";
import { Link } from "react-router-dom";
import axios from "../lib/axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";


export default function IndexGamelist({ refresh }) {
  const [games, setGames] = useState([]);
  const getGamesFromBe = async () => {
    try {
      const gamesData = await axios.get("/api/game");
      setGames(gamesData.data.data);
    } catch (error) {
      alert("something went wrong");
    }
  };
  useEffect(() => {
    getGamesFromBe();
  }, [refresh]);

  const goToHome = () => {
    // Add logic to navigate to the home page
    // For example: history.push("/home");
  };

  return (
    <div className="wrapper">
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <button className="btn btn-outline-warning" onClick={goToHome}><FontAwesomeIcon icon={faHome} /></button>
      <br />
      <br />
      <h1>Game Recomendation</h1>
      <div className="section-1-wrapper">
        <br />
        {/* {games &&
          games.map((game, key) => (
            <div key={key}>
              <div className="align-middle text-white">{game.title}</div>
            </div>
          ))} */}
        <div className="section-1-img">
          {games &&
            games.map((game, key) => (
              <a key={key} className="mx-3 text-center">
                <Link to={"/rockpaperscissor/:id"}>
                <div className="img"></div>
                <div className="text-white text-center">{game.title}</div>
                </Link>
              </a>
            ))}
        </div>
        <div className="game-categories">
        <h1>GAME FAVORITE</h1>
        <div className="section-1-img">
                    <a href="#"><div className="img img-1 text-white"></div></a>
                    <a href="#"><div className="img img-2"></div></a>
                    <a href="#"><div className="img img-3"></div></a>
                    <a href="#"><div className="img img-4"></div></a>
                    <a href="#"><div className="img img-5"></div></a>
                    <a href="#"><div className="img img-6"></div></a>
                    <a href="#"><div className="img img-2"></div></a>
                    <a href="#"><div className="img img-3"></div></a>
                </div>
      </div>
      </div>

      <div className="game-categories">
        <h1>GAME CATEGORIES</h1>
        <div className="game-wrapper">
          <a href="#">
            <div className="gw gw-1"></div>
          </a>
          <a href="#">
            <div className="gw gw-2"></div>
          </a>
          <a href="#">
            <div className="gw gw-3"></div>
          </a>
          <a href="#">
            <div className="gw gw-4"></div>
          </a>
          <a href="#">
            <div className="gw gw-5"></div>
          </a>
          <a href="#">
            <div className="gw gw-6"></div>
          </a>
          <a href="#">
            <div className="gw gw-7"></div>
          </a>
          <a href="#">
            <div className="gw gw-8"></div>
          </a>
        </div>
      </div>
    </div>
  );
}
