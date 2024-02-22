import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
// import NotFound from "./components/NotFound"; // Asegúrate de quitar esto si no lo estás usando
import Sabores from "./components/Sabores";
import SaboresEn from "./components/SaboresEn";
import SaboresBr from "./components/SaboresBr";
import LandingPageBr from "./components/LandingPageBr";
import LandingPageEn from "./components/LandingPageEn";
import Jugos from "./components/Jugos";
import Batidos from "./components/Batidos";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BatidosBr from "./components/BatidosBr";
import JugosEn from "./components/JugosEn";
import BatidosEn from "./components/BatidosEn";
import JugosBr from "./components/JugosBr";

function RedirectToUY() {
  let navigate = useNavigate();

  useEffect(() => {
    navigate("/inicio/uy");
  }, [navigate]);

  return null; // O podrías renderizar algún tipo de carga o componente de transición si lo prefieres
}

function App() {
  return (
    <Router>
      <Routes>
        {/* @ts-ignore: Unreachable code error */}
        <Route path="/inicio/uy" element={<LandingPage />} />
        {/* @ts-ignore: Unreachable code error */}
        <Route path="/inicio/br" element={<LandingPageBr />} />
        {/* @ts-ignore: Unreachable code error */}
        <Route path="/inicio/en" element={<LandingPageEn />} />
        {/* @ts-ignore: Unreachable code error */}
        <Route path="/sabores/uy" element={<Sabores />} />
        {/* @ts-ignore: Unreachable code error */}
        <Route path="/sabores/br" element={<SaboresBr />} />
        {/* @ts-ignore: Unreachable code error */}
        <Route path="/sabores/en" element={<SaboresEn />} />
        {/* @ts-ignore: Unreachable code error */}
        <Route path="/jugos/uy" element={<Jugos />} />
        {/* @ts-ignore: Unreachable code error */}
        <Route path="/jugos/br" element={<JugosBr />} />
        {/* @ts-ignore: Unreachable code error */}
        <Route path="/jugos/en" element={<JugosEn />} />
        {/* @ts-ignore: Unreachable code error */}
        <Route path="/batidos/uy" element={<Batidos />} />
        {/* @ts-ignore: Unreachable code error */}
        <Route path="/batidos/br" element={<BatidosBr />} />
        {/* @ts-ignore: Unreachable code error */}
        <Route path="/batidos/en" element={<BatidosEn />} />
        {/* @ts-ignore: Unreachable code error */}
        <Route path="*" element={<RedirectToUY />} />{" "}
      </Routes>
    </Router>
  );
}

export default App;
