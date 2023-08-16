import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "../lib/axios";
import {
  faMedal,
} from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useParams } from "react-router-dom";
import jwtDecode from "jwt-decode";

export default function Tables({ refresh }) {
  const {gameId} = useParams();
  const [players, setPlayers] = useState([]);

  const searchField = "player";
  const searchQuery = "";

  useEffect(() => {
    loadPlayersFromApi();
  }, [refresh]);

  const loadPlayersFromApi = async () => {
    try {
      const response = await axios.get(`/api/score/leaderboard`);
      const playerData = response.data.data ;


      // Sort data based on score in descending order

      setPlayers(playerData);
    } catch (error) {
      console.error("Error fetching player data:", error);
    }
  };


  // const filteredPlayers = () => {
  //   return players.filter(
  //     (player) =>
  //       player[searchField].toString().toLowerCase().includes(searchQuery.toLowerCase())
  //   );
  // };

  const editPlayer = (playerId, updatedData) => {
    // Simulate updating data
    const updatedPlayers = players.map((player) =>
      player.id === playerId ? updatedData : player
    );
    setPlayers(updatedPlayers);
  };

  const deletePlayer = (playerId) => {
    // Simulate deleting data
    const updatedPlayers = players.filter((player) => player.id !== playerId);
    setPlayers(updatedPlayers);
  };

  
  const getMedalIcon = (position) => {
    switch (position) {
      case 1:
        return <FontAwesomeIcon icon={faMedal} color="gold" />;
      case 2:
        return <FontAwesomeIcon icon={faMedal} color="silver" />;
      case 3:
        return <FontAwesomeIcon icon={faMedal} color="brown" />;
      default:
        return null;
    }
  };

  return (
    <>
      <table className="table table-striped table-warning text-center">
        <thead>
          <tr>
            <th>RANK</th>
            <th>Username</th>
            <th>Score</th>
            <th>Achivement</th>
          </tr>
        </thead>
        <tbody>
            {players.map((player, key) => (
              <tr key={key}>
                <td>{key + 1}</td>
                <td>{player.username}</td>
                <td>{player.score}</td>
                <td>{/* Position is determined by array index */}
              {getMedalIcon(key + 1)}</td> {/* Pass position to getMedalIcon */}
              </tr>
            ))}
        </tbody>
      </table>
      <button className="btn btn-outline-warning btn-sm my-2 w-50 " onClick={() => loadPlayersFromApi()}> 
        Load </button>
        <button className="btn btn-outline-danger btn-sm my-2 w-50" onClick={() => setPlayers([])}>
        Clear
        </button>
    </>
  );
}