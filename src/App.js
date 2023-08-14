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



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/loginregister" element={<AuthPage />} />

        <Route path="/leaderboard" element={<GameLeaderboardPage />} />

        <Route path="/gamelist" element={<GameListPage />} />



      </Routes>
    </Router>
  );
}

export default App;
