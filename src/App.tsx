import { useState } from "react";
import { Navbar } from "./components/Nav";
import { Inicio } from "./components/Inicio";
import { Header } from "./components/Header";
/* import { useEffect } from "react"; */

import "./Styles.css";

function App() {
  const [menu, setMenu] = useState(false);

  /* useEffect(() => {
  if (menu) {
    document.body.classList.add('no-scroll');
  } else {
    document.body.classList.remove('no-scroll');
  }
}, [menu]);   TODO- HACER EL BLOQUEO DEL SCROOL AL ACTIVAR NAVBAR.
 */

  return (
    <>
      <div className="cont_principal">
        <Header menu={menu} setMenu={setMenu}></Header>
        <div className="cont_inicio">
          <Inicio menu={menu}></Inicio>
          <Navbar menu={menu}></Navbar>
        </div>
      </div>
    </>
  );
}
export default App;
