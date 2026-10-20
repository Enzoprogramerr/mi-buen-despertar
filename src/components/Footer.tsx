import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer id="contacto" /* className="footer" */>
      <div className="footer">
        <div className="footer-column">
          <Link to="/terminos">Terminos y condiciones</Link>
          <Link to="/terminos#preguntas-frecuentes">Preguntas frecuentes</Link>
        </div>

        <div className="footer-column">
          <Link to="/quienes-somos">Quiénes somos</Link>
          <a
            href="https://www.google.com/maps/place/Mi+Buen+Despertar/@-31.7127649,-65.0145604,17z/data=!3m1!4b1!4m6!3m5!1s0x942d27c36dc9109d:0xc33b78f3fd0d1c5e!8m2!3d-31.7127649!4d-65.0119908!16s%2Fg%2F11j4s3b00t?entry=ttu&g_ep=EgoyMDI2MTAxNC4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
          >
            Testimonios
          </a>
        </div>

        <div className="footer-column">
          <p>Hablemos</p>
          <a
            href="https://wa.me/5493515488289"
            target="_blank"
            rel="noopener noreferrer"
          >
            +54 9 351 5488289
          </a>
          <a href="mailto:contacto@mibuendespertar.com?subject=Reserva%20Mi%20Buen%20Despertar&body=Hola%2C%20quiero%20reservar%20una%20caba%C3%B1a.">
            contacto@mibuendespertar.com
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
