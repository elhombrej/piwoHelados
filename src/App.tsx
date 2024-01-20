// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
// import NotFound from "./components/NotFound";
import Sabores from "./components/Sabores";

function App() {
  return (
    <Router>
      <Routes>
        {/* @ts-ignore: Unreachable code error */}
        <Route path="/" element={<LandingPage />} />
        {/* @ts-ignore: Unreachable code error */}
        <Route path="/sabores/es" element={<Sabores />} />
        {/* @ts-ignore: Unreachable code error */}
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
