import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
/* import Casa from '../pages/Casa';
import Departamento from './pages/Departamento'; */

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/casa" element={<Casa />} />
        <Route path="/departamento" element={<Departamento />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
