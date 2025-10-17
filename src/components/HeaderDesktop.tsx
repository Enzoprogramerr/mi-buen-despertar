import { Link } from "react-router-dom";

export function HeaderDesktop() {
  return (
    <>
      <header className="header-desktop"></header>
      <nav className="navbar-sticky">
        <ul className="ul-header-desk">
          <li className="li-header-desk">
            <Link to="/" className="navbar-a">
              Inicio
            </Link>
          </li>
          <li className="li-header-desk">
            <Link to="/casa" className="navbar-a">
              Casa
            </Link>
          </li>
          <li className="li-header-desk">
            <Link to="/duplex" className="navbar-a">
              Duplex
            </Link>
          </li>
          <li className="li-header-desk">
            <Link to={{ pathname: "/", hash: "#ubi" }} className="navbar-a">
              Ubicación
            </Link>
          </li>
          <li className="li-header-desk">
            <Link to="/tarifa" className="navbar-a">
              Tarifa
            </Link>
          </li>
          <li className="li-header-desk">
            <a href="#contacto" className="navbar-a">
              Contacto
            </a>
          </li>
          <li className="li-header-desk">
            <Link to="/terminos" className="navbar-a">
              Terminos y condiciones
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
