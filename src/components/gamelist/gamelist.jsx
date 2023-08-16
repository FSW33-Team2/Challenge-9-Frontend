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
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop:'20px'}}>
    <div className="wrapper">
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
                <Link to={`/${game.id}/:id`}>
                <div className="img"></div>
                <div className="text-white text-center">{game.title}</div>
                </Link>
              </a>
            ))}
        </div>
        <div className="game-categories">
        <h1>GAME FAVORITE</h1>
        <div className="section-1-img">
          <Link className="mx-3 d-flex flex-column" href="#">
            <div className="d-flex img text-white"></div>
            <div className="text-white text-center">Jumanji</div>
          </Link>
          <Link className="mx-3 d-flex flex-column" href="#">
            <div className="d-flex img img-2 text-white"></div>
            <div className="text-white text-center">NBA 2K20 </div>
          </Link>
          <Link className="mx-3 d-flex flex-column" href="#">
            <div className="d-flex img img-3 text-white"></div>
            <div className="text-white text-center">Battlefield 2024</div>
          </Link>
          <Link className="mx-3 d-flex flex-column" href="#">
            <div className="d-flex img img-4 text-white"></div>
            <div className="text-white text-center">Black Ops</div>
          </Link>
          <Link className="mx-3 d-flex flex-column" href="#">
            <div className="d-flex img img-5 text-white"></div>
            <div className="text-white text-center">Minecraft</div>
          </Link>
          <Link className="mx-3 d-flex flex-column" href="#">
            <div className="d-flex img img-6 text-white"></div>
            <div className="text-white text-center">Fortnite</div>
          </Link>
      </div>
      </div>
      </div>

      <div className="game-categories">
        <h1>GAME CATEGORIES</h1>
        <div className="game-wrapper">
          <Link className="mx-3 d-flex flex-column" href="#">
            <div className="gw gw-1"></div>
            <div className="text-white text-center">Sport</div>
          </Link>
          <Link className="mx-3 d-flex flex-column" href="#">
            <div className="gw gw-2"></div>
            <div className="text-white text-center">Race</div>
          </Link>
          <Link className="mx-3 d-flex flex-column" href="#">
            <div className="gw gw-3"></div>
            <div className="text-white text-center">Action</div>
          </Link>
          <Link className="mx-3 d-flex flex-column" href="#">
            <div className="gw gw-4"></div>
            <div className="text-white text-center">Adventure</div>
          </Link>
          <Link className="mx-3 d-flex flex-column" href="#">
            <div className="gw gw-5"></div>
            <div className="text-white text-center">Card Game</div>
          </Link>
          <Link className="mx-3 d-flex flex-column" href="#">
            <div className="gw gw-6"></div>
            <div className="text-white text-center">FPS</div>
          </Link>
          <Link className="mx-3 d-flex flex-column" href="#">
            <div className="gw gw-7"></div>
            <div className="text-white text-center">FIFA Collection</div>
          </Link>
          <Link className="mx-3 d-flex flex-column" href="#">
            <div className="gw gw-8"></div>
            <div className="text-white text-center">GOTY 2020</div>
          </Link>
        </div>
      </div>
    </div>
    </div>
  );
}
