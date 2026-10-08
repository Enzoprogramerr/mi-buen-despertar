export function Footer() {
  return (
    <footer id="contacto" className="footer">
      <div className="footer_one">
        {/* <h4>MI BUEN DESPERTAR</h4>
        <p>Cabaña y duplex de campo en las Sierras de Córdoba.</p>
        <p>🌿 Despertá rodeado de naturaleza y tranquilidad.</p>
        <p>
          📍 Ubicación: Juan Manuel De Rosas 662, Villa Cura Brochero, Córdoba.
        </p> */}
        <a
          href="https://wa.me/5493515488289"
          target="_blank"
          rel="noopener noreferrer"
        >
          📞 +54 9 351 5488289
        </a>
        <a href="mailto:contacto@mibuendespertar.com?subject=Reserva%20Mi%20Buen%20Despertar&body=Hola%2C%20quiero%20reservar%20una%20caba%C3%B1a.">
          contacto@mibuendespertar.com
        </a>
        <div className="footer_social">
          <a
            className="social-icon instagram"
            href="https://www.instagram.com/mibuendespertar/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="social_red"
              src="images/instagram.svg"
              alt="Instagram"
            />
            Instagram
          </a>
          <a
            className="social-icon facebook"
            href="https://www.facebook.com/MiBuenDespertar/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="social_red"
              src="images/facebook.svg"
              alt="Facebook"
            />
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
