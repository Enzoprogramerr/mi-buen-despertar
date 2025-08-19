import React from "react";
import "../Styles.css";

interface BotonProps {
  menu: boolean;
  toggleMenu: () => void;
}

const BotonHamburguesa = ({ menu, toggleMenu }: BotonProps) => {
  return (
    <div className="hamburger">
      <input
        className="checkbox"
        type="checkbox"
        checked={menu}
        onChange={toggleMenu}
      />
      <svg fill="none" viewBox="0 0 50 50">
        <path className="lineTop line" strokeLinecap="round" d="M6 11L44 11" />
        <path className="lineMid line" strokeLinecap="round" d="M6 24H43" />
        <path className="lineBottom line" strokeLinecap="round" d="M6 37H43" />
      </svg>
    </div>
  );
};

export default BotonHamburguesa;
