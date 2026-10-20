import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import CasaRoute from "./pages/CasaRoute.tsx";
import DuplexRoute from "./pages/DuplexRoute.tsx";
import TerminosRoute from "./pages/TerminosRoute.tsx";
import SomosRoute from "./pages/QuienesSomos.tsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/casa" element={<CasaRoute />} />
        <Route path="/duplex" element={<DuplexRoute />} />
        <Route path="/terminos" element={<TerminosRoute />} />
        <Route path="/quienes-somos" element={<SomosRoute />} />
      </Routes>
    </Router>
  );
}

export default App;
