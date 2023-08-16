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
import NavbarHome from "./components/navbar";
import LandingPage from "./pages/LandingPage";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        
        <Route path="/loginregister" element={<AuthPage />} />

        <Route path="/leaderboard" element={<GameLeaderboardPage />} />

        <Route path="/gamelist" element={<GameListPage />} />

        <Route path="/game/:gameId/:id" element={<RpcGamePage />} />



      </Routes>
    </Router>
  );
}

export default App;
