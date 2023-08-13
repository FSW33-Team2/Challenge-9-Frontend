import React from "react";
import Table from "../components/leaderboard/gameleaderboard";
import HeadeLeaderboardSection from "../components/leaderboard/headleaderboard";


function GameLeaderboardPage() {
  return (
      <>
        <HeadeLeaderboardSection />
        <Table />
      </>
  )
}

export default GameLeaderboardPage;