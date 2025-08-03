import { StrictMode } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// pages
import { Cores } from "./assets/pages/cores.jsx";
import { EspacamentosTamanhos } from "./assets/pages/espacamentos&tamanhos.jsx";
import { Tipografia } from "./assets/pages/tipografia.jsx";
import { BordasESombras } from "./assets/pages/bordasSombras.jsx";
import { Positions } from "./assets/pages/positions.jsx";
import { Flexbox } from "./assets/pages/flexbox.jsx";
import  {Grid} from "./assets/pages/grid.jsx";
import { DesignResponsivo } from "./assets/pages/designResponsivo.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/cores" element={<Cores />} />
        <Route path="/tipografia" element={<Tipografia />} />
        <Route
          path="/espacamentos-tamanhos"
          element={<EspacamentosTamanhos />}
        />
        <Route path="/bordas-sombras" element={<BordasESombras />} />
        <Route path="/positions" element={<Positions />} />
        <Route path="/flexbox" element={<Flexbox />} />
        <Route path="/grid" element={<Grid />} />
        <Route path="/design-responsivo" element={<DesignResponsivo />} />
      </Routes>
    </Router>
  </StrictMode>
);
