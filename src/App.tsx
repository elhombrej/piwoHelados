// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import NotFound from "./components/NotFound";
import Sabores from "./components/Sabores";

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/sabores/es" element={<Sabores />} />
          <Route path="*" element={<LandingPage />} />
        </Routes>
    </Router>
  );
}

export default App;
