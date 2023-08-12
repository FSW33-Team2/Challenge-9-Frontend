import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMedal,
} from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Table() {
  const [players, setPlayers] = useState([]);
  const [refresh, setRefh] = useState(0);
  const [originalPlayers, setOriginalPlayers] = useState([]);
  const [searchField, setSearchField] = useState("username");
  const [searchQuery, setSearchQuery] = useState("");

  const loadPlayersFromApi = () => {
    // Simulate fetching data from API
    const fakeApiData = [
          { id: 1, username: "user1", email: "user1@example.com", experience: 100, lvl:20, score: 1000 },
          { id: 2, username: "user2", email: "user2@example.com", experience: 200, lvl:30, score: 2000 },
          { id: 3, username: "user3", email: "user3@example.com", experience: 150, lvl:20, score: 3000 },
          { id: 4, username: "user4", email: "user3@example.com", experience: 50, lvl:10, score: 300 },
          { id: 5, username: "user5", email: "user5@example.com", experience: 160, lvl:10, score: 5000 },
          // ... more player data
        ];

    // Sort data based on score in descending order
    const sortedData = fakeApiData.sort((a, b) => b.score - a.score);

    setPlayers(fakeApiData);
    setOriginalPlayers(fakeApiData);
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
            {filteredPlayers().map((player, key) => (
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