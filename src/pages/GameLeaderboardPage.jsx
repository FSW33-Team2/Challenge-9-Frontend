import React from "react";
import Table from "../components/leaderboard/gameleaderboard";
import HeadeLeaderboardSection from "../components/leaderboard/headleaderboard";
import NavbarHome from "../components/navbar";


function GameLeaderboardPage() {
  return (
      <>
        <NavbarHome />
        <HeadeLeaderboardSection />
        <Table />
      </>
  )
}

export default GameLeaderboardPage;