import { useState, useEffect } from "react";
import HeaderMobile from "./HeaderMobile";
import { HeaderDesktop } from "./HeaderDesktop";
import { Navbar } from "./Nav";
import Footer from "./Footer";
import { useIsMobile } from "../hooks/useIsMobile";
import "../Styles.css";
import { useScrollToHash } from "../hooks/useScrollToHash";

interface LayoutProps {
  children: (props: { menu: boolean }) => React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  const [menu, setMenu] = useState(false);
  const isMobile = useIsMobile();
  useScrollToHash();

  useEffect(() => {
    document.documentElement.classList.toggle("menu-abierto", menu);

    return () => {
      document.documentElement.classList.remove("menu-abierto");
    };
  }, [menu]);

  useEffect(() => {
    if (!isMobile) {
      setMenu(false);
    }
  }, [isMobile]);

  return (
    <div className="cont_principal">
      {isMobile ? (
        <>
          <HeaderMobile menu={menu} setMenu={setMenu} />
          <Navbar menu={menu} setMenu={setMenu} />
        </>
      ) : (
        <HeaderDesktop />
      )}
      <div className="cont_inicio">
        <main>{children({ menu })}</main>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
