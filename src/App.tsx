import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import CasaRoute from "./pages/CasaRoute.tsx";
import Departamento from "../src/pages/Departamento.tsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/casa" element={<CasaRoute />} />
        <Route path="/departamento" element={<Departamento />} />
      </Routes>
    </Router>
  );
}

export default App;
