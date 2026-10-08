import React from "react";
import BotonHamburguesa from "./BotonHamburguesa";
import { Link } from "react-router-dom";

interface HeaderProps {
  menu: boolean;
  setMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

export function HeaderMobile({ menu, setMenu }: HeaderProps) {
  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="header">
      <Link className="header-button" to="/">
        INICIO
      </Link>

      <BotonHamburguesa menu={menu} toggleMenu={toggleMenu} />
    </div>
  );
}

export default HeaderMobile;
