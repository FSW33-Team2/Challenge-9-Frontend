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
import LandingPage from "./pages/LandingPage";
import HomePage from "./components/home";
import GamesLeaderboardPage from "./pages/GamesLeaderboardPage";
import Profilepage from "./components/ProfilePage";





function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route path="/home" element={<HomePage />} />

        <Route path="/profile" element={<Profilepage />} />

        <Route path="/leaderboard" element={<GamesLeaderboardPage />} />
        
        <Route path="/loginregister" element={<AuthPage />} />

        <Route path="/gamelist" element={<GameListPage />} />

        <Route path="/game/:gameId" element={<RpcGamePage />} />



      </Routes>
    </Router>
  );
}

export default App;
