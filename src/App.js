import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/homepage";
import Profilepage from "./components/Profilepage";

function App() {
  return (
    <div className="App">
      <main>
        {/* <Homepage /> */}
        <Profilepage />
      </main>
    </div>
  );
}

export default App;
