// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
// import NotFound from "./components/NotFound";
import Sabores from "./components/Sabores";
import SaboresEn from "./components/SaboresEn";
import SaboresBr from "./components/SaboresBr";
import LandingPageBr from "./components/LandingPageBr";
import LandingPageEn from "./components/LandingPageEn";
import Jugos from "./components/Jugos";
import Batidos from "./components/Batidos";

function App() {
  return (
    <Router>
      <Routes>
        {/* @ts-ignore: Unreachable code error */}
        <Route path="/" element={<LandingPage />} />
        {/* @ts-ignore: Unreachable code error */}
        <Route path="/br" element={<LandingPageBr />} />
        {/* @ts-ignore: Unreachable code error */}
        <Route path="/en" element={<LandingPageEn />} />
        {/* @ts-ignore: Unreachable code error */}
        <Route path="/sabores/es" element={<Sabores />} />
        {/* @ts-ignore: Unreachable code error */}
        <Route path="/jugos/es" element={<Jugos />} />
        {/* @ts-ignore: Unreachable code error */}
        <Route path="/batidos/es" element={<Batidos />} />
        {/* @ts-ignore: Unreachable code error */}
        <Route path="/sabores/br" element={<SaboresBr />} />
        {/* @ts-ignore: Unreachable code error */}
        <Route path="/sabores/en" element={<SaboresEn />} />
        {/* @ts-ignore: Unreachable code error */}
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
