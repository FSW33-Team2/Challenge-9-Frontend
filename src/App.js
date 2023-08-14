import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/homepage";
import Profilepage from "./components/Profilepage";
import Landingpage from "./components/Landingpage";

function App() {
  return (
    <div className="App">
      <main>
        <Router>
          <Routes>
            {/* routing tiap halaman---------- */}
            <Route exact path="/" element={<Landingpage />} />
            <Route path="/profile" element={<Profilepage />} />
            <Route path="/login" element={<Homepage />} />
          </Routes>
        </Router>
      </main>
    </div>
  );
}

export default App;
