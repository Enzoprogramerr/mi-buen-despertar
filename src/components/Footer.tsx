export function Footer() {
  return (
    <footer id="contacto" className="footer">
      <div className="footer_one">
        <div className="footer__brand">
          <h4>MI BUEN DESPERTAR</h4>
          <p>Cabaña y duplex de campo en las Sierras de Córdoba</p>
          <p>🌿 Despertá rodeado de naturaleza y tranquilidad</p>
        </div>
        <div className="footer__contact">
          <p>📍 Ubicación: Juan Manuel De Rosas 662, Cura Brochero, Córdoba</p>
          <p>📞 +54 9 351 5488289</p>
          <a href="mailto:contacto@mibuendespertar.com?subject=Reserva%20Mi%20Buen%20Despertar&body=Hola%2C%20quiero%20reservar%20una%20caba%C3%B1a.">
            &#x1F4E7;&nbsp; contacto@mibuendespertar.com
          </a>
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
