export function Footer() {
  return (
    <footer className="footer">
      <div className="footer_one">
        <div className="footer__brand">
          <h4>MI BUEN DESPERTAR</h4>
          <p>Cabaña y duplex de campo en las Sierras de Córdoba</p>
          <p>🌿 Despertá rodeado de naturaleza y tranquilidad</p>
        </div>
        <div className="footer__contact">
          <p>📍 Ubicación: Juan Manuel De Rosas 662, Cura Brochero, Córdoba</p>
          <p>📞 +54 9 351 5488289</p>
          <p>✉️ contacto@mibuendespertar.com</p>
        </div>

        <div className="footer_social">
          <a
            className="social-icon instagram"
            href="https://www.instagram.com/mibuendespertar/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/public/images/instagram.svg" alt="Instagram" />
            Instagram
          </a>
          <a
            className="social-icon facebook"
            href="https://www.facebook.com/profile.php?id=100063737036623"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/public/images/facebook.svg" alt="Facebook" />
            Facebook
          </a>
        </div>
        <div className="footer__legal">
          <p>
            © {new Date().getFullYear()} MI BUEN DESPERTAR. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
