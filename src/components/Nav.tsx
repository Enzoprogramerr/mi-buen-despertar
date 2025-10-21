import { Link } from "react-router-dom";

interface NavProps {
  menu: boolean;
  setMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Navbar({ menu, setMenu }: NavProps) {
  const toggleMenu = () => {
    setMenu(!menu);
  };
  return (
    <>
      <nav className={`navbar ${menu ? "active" : ""}`}>
        <ul className="navbar-ul">
          <li className="navbar-li">
            <Link to="/" className="navbar-a" onClick={toggleMenu}>
              Inicio
            </Link>
          </li>
          <li className="navbar-li">
            <Link to="/casa" className="navbar-a" onClick={toggleMenu}>
              Casa
            </Link>
          </li>
          <li className="navbar-li">
            <Link to="/duplex" className="navbar-a" onClick={toggleMenu}>
              Duplex
            </Link>
          </li>
          <li className="navbar-li">
            <Link
              to={{ pathname: "/", hash: "#ubi" }}
              className="navbar-a"
              onClick={toggleMenu}
            >
              Ubicación
            </Link>
          </li>
          <li className="navbar-li">
            <a href="#contacto" className="navbar-a" onClick={toggleMenu}>
              Contacto
            </a>
          </li>
          <li className="navbar-li">
            <Link to="/terminos" className="navbar-a" onClick={toggleMenu}>
              Terminos y condiciones
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
export default Navbar;
