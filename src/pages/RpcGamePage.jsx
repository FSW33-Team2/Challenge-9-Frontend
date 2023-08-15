import React, {useState} from "react";
import RpcGame from "../components/gamelist/RpcGame";
import Table from "../components/leaderboard/gameleaderboard";
import HeadeLeaderboardSection from "../components/leaderboard/headleaderboard";

function Rpc() {
  const [refresh, setRefresh] = useState(0);

  const handleOnRefresh = () => {
    setRefresh(refresh + 1);
  };
  return (
    <>
      <RpcGame onRefresh={handleOnRefresh}/>
      <HeadeLeaderboardSection />
      <Table refresh={refresh}/>
      
    </>
  );
}

export default Rpc;
