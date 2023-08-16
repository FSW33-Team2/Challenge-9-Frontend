import React, {useState} from "react";
import RpcGame from "../components/gamelist/RpcGame";
import Table from "../components/leaderboard/gameleaderboard";
import HeadeLeaderboardSection from "../components/leaderboard/headleaderboard";
import NavbarHome from "../components/navbar";

function Rpc() {
  const [refresh, setRefresh] = useState(0);

  const handleOnRefresh = () => {
    setRefresh(refresh + 1);
  };
  return (
    <>
      <NavbarHome />
      <RpcGame onRefresh={handleOnRefresh}/>
      <HeadeLeaderboardSection />
      <Table refresh={refresh}/>
      
    </>
  );
}

export default Rpc;
