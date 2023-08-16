import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "../lib/axios";
import {
  faMedal,
} from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useParams } from "react-router-dom";

export default function Table({ refresh }) {
  const {gameId} = useParams();
  const [players, setPlayers] = useState([]);
  const searchField = "player";
  const searchQuery = "";

  const loadPlayersFromApi = async () => {
    try {
      const response = await axios.get(`/api/score/${gameId}`);
      const playerData = response.data.result;

      // Sort data based on score in descending order
      playerData.sort((a, b) => b.totalScore - a.totalScore);
      setPlayers(playerData);
    } catch (error) {
      console.error("Error fetching player data:", error);
    }
  };

  useEffect(() => {
    loadPlayersFromApi();
  }, [refresh]);

  const filteredPlayers = () => {
    return players.filter(
      (player) =>
        player[searchField].toString().toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

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
    <div className="d-flex justify-content-center align-items-center">
    <div className="text-center" style={{width: "80%" }}>
      <table className="table table-striped table-warning">
        <thead>
          <tr>
            <th>RANK</th>
            <th>Username</th>
            <th>Score</th>
            <th>Achivement</th>
          </tr>
        </thead>
        <tbody>
            {filteredPlayers().map((player, key) => (
              <tr key={key}>
                <td>{key + 1}</td>
                <td>{player.player}</td>
                <td>{player.totalScore}</td>
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
        </div>
      </div>
    </>
  );
}