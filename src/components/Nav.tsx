interface NavProps {
  menu: boolean;
}

export function Navbar({ menu }: NavProps) {
  return (
    <>
      <nav className={`navbar ${menu ? "active" : ""}`}>
        <ul className="navbar-ul">
          <li className="navbar-li">
            <a href="" className="navbar-a">
              Servicios
            </a>
          </li>
          <li className="navbar-li">
            <a href="" className="navbar-a">
              Casa
            </a>
          </li>
          <li className="navbar-li">
            <a href="" className="navbar-a">
              Departamento
            </a>
          </li>
          <li className="navbar-li">
            <a href="" className="navbar-a">
              Ubicación
            </a>
          </li>
          <li className="navbar-li">
            <a href="" className="navbar-a">
              Tarifas
            </a>
          </li>
          <li className="navbar-li">
            <a href="#contacto" className="navbar-a">
              Contacto
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
export default Navbar;
