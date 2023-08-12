import { useState } from "react";
import Table from "./components/gameleaderboard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

function App() {
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
            <button className="btn btn-outline-warning" onClick={goToHome}>
          <FontAwesomeIcon icon={faHome} />
        </button>
      <br />
      <br />
<h1 className="fs-1 text-warning text-center">Game Leaderboard</h1>
<br />
<br />
        <Table refresh={refresh} />
    </div>
  );
}

export default App;