import { useState } from "react";
import { Navbar } from "./components/Nav";
import { Inicio } from "./components/Inicio";
import { HeaderMobile } from "./components/HeaderMobile";
import { HeaderDesktop } from "./components/HeaderDesktop";
import { Footer } from "./components/Footer";
import { useIsMobile } from "./hooks/useIsMobile";

/* import { useEffect } from "react"; */

import "./Styles.css";

function App() {
  const [menu, setMenu] = useState(false);

  const isMobile = useIsMobile();

  return (
    <>
      <div className="cont_principal">
        {isMobile ? (
          <HeaderMobile menu={menu} setMenu={setMenu} />
        ) : (
          <HeaderDesktop />
        )}
        <div className="cont_inicio">
          <Navbar menu={menu}></Navbar>
          <Inicio menu={menu}></Inicio>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}
export default App;
