import { useState, useEffect } from "react";
import HeaderMobile from "./HeaderMobile";
import { HeaderDesktop } from "./HeaderDesktop";
import { Navbar } from "./Nav";
import Footer from "./Footer";
import { useIsMobile } from "../hooks/useIsMobile";
import "../Styles.css";

interface LayoutProps {
  children: (props: { menu: boolean }) => React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  const [menu, setMenu] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (!isMobile) {
      setMenu(false);
    }
  }, [isMobile]);

  return (
    <div className="cont_principal">
      {isMobile ? (
        <HeaderMobile menu={menu} setMenu={setMenu} />
      ) : (
        <HeaderDesktop />
      )}
      <div className="cont_inicio">
        <Navbar menu={menu} setMenu={setMenu} />
        <main>{children({ menu })}</main>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
