import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

export default function HeadeLeaderboardSection() {

  const [refresh, setRefresh] = useState(1);

  const handleOnRefresh = () => {
    setRefresh(refresh + 1);
  };

  const goToHome = () => {
    // Add logic to navigate to the home page
    // For example: history.push("/home");
  };

  return (
    <div className="p-5">
      <br />
      <br />
      <h1 className="fs-1 text-warning text-center">Game Leaderboard</h1>
      <br />
      <br />
    </div>
  );
}
