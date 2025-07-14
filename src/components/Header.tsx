import React from "react";
import BotonHamburguesa from "./BotonHamburguesa";

interface HeaderProps {
  menu: boolean;
  setMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Header({ menu, setMenu }: HeaderProps) {
  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="header">
      <img
        className="logo_img"
        src="/public/images/android-chrome-512x512.png"
        alt="icono de la página"
      />
      <BotonHamburguesa menu={menu} toggleMenu={toggleMenu} />
    </div>
  );
}

export default Header;
