import React from "react";
import Tables from "../components/leaderboard/gamesleaderboard";
import HeadeLeaderboardSection from "../components/leaderboard/headleaderboard";
import NavbarHome from "../components/navbar";


function GamesLeaderboardPage() {
  return (
      <>
        <NavbarHome />
        <HeadeLeaderboardSection />
        <Tables />
      </>
  )
}

export default GamesLeaderboardPage;