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
            <a href="" className="navbar-a" onClick={toggleMenu}>
              Casa
            </a>
          </li>
          <li className="navbar-li">
            <a href="" className="navbar-a" onClick={toggleMenu}>
              Departamento
            </a>
          </li>
          <li className="navbar-li">
            <a href="#ubi" className="navbar-a" onClick={toggleMenu}>
              Ubicación
            </a>
          </li>
          <li className="navbar-li">
            <a href="" className="navbar-a" onClick={toggleMenu}>
              Tarifas
            </a>
          </li>
          <li className="navbar-li">
            <a href="#contacto" className="navbar-a" onClick={toggleMenu}>
              Contacto
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
export default Navbar;
