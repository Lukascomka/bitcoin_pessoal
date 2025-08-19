import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Solucoes from "./pages/Solucoes";


import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/solucoes" element={<Solucoes />} />
      </Routes>
    </Router>

    

  );
}


export default App;

