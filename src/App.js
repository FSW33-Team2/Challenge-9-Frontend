import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";
import GameLeaderboardPage from "./pages/GameLeaderboardPage";
import AuthPage from "./pages/AuthPage";
import GameListPage from "./pages/GameListPage";
import RpcGamePage from "./pages/RpcGamePage";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/loginregister" element={<AuthPage />} />

        <Route path="/leaderboard" element={<GameLeaderboardPage />} />

        <Route path="/gamelist" element={<GameListPage />} />

        <Route path="/:gameId/:id" element={<RpcGamePage />} />

      </Routes>
    </Router>
  );
}

export default App;
