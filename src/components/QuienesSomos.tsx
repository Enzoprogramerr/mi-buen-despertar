import { useEffect, useState, useRef } from "react";

interface QuienesSomos {
  menu: boolean;
}

export function QuienesSomos({ menu }: QuienesSomos) {
  const [active, setActive] = useState(false);
  const figureRef = useRef<HTMLIFrameElement | null>(null);

  useEffect(() => {
    setActive(true);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 1 },
    );
    if (figureRef.current) {
      observer.observe(figureRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div className={`inicio ${menu ? "active" : ""}`}>
      <header>
        <h1 className="title_terms">Quiénes somos</h1>
        <p className={`somos-subtitle ${active ? "visible" : ""}`}>
          <em>Descansar, conectar, despertar</em>
        </p>
      </header>
      <div className="somos-contain">
        <section className="hero" id="quienes-somos">
          <article>
            <p>
              <strong>Mi Buen Despertar</strong> nació del sueño y la dedicación
              de
              <strong> Argentino y Beatriz</strong>, dos personas comunes que,
              con esfuerzo y amor, comenzaron construyendo una casa en las
              sierras cordobesas. Con el tiempo, fueron mejorando y ampliando
              ese espacio hasta convertirlo en el hospedaje que hoy abre sus
              puertas en <strong>Cura Brochero</strong>.
            </p>
            <p>
              Nuestro propósito es simple: que cada huésped se sienta cómodo,
              disfrute de una estadía placentera y logre una verdadera conexión
              con la naturaleza, guardando en su memoria la experiencia de
              conocer Cura Brochero.
            </p>
          </article>

          <figure className={`${active ? "visible" : ""}`} ref={figureRef}>
            <img
              src="images\Galeria\casa_frente_1.3.webp"
              alt="Fachada de Mi Buen Despertar"
            />
            <figcaption>
              La calidez de un proyecto familiar en las Sierras de Córdoba.
            </figcaption>
          </figure>
        </section>

        <section id="opiniones">
          <header>
            <h2>Opiniones</h2>
            <p>Lo que dicen nuestros huéspedes</p>
          </header>

          <article>
            <blockquote>
              “Excelente atención y un lugar muy tranquilo para descansar.”
              <footer>— Huésped en Google Maps</footer>
            </blockquote>

            <blockquote>
              “La conexión con la naturaleza es única, volveremos sin dudas.”
              <footer>— Huésped en Google Maps</footer>
            </blockquote>
          </article>

          <nav>
            <a
              className="google-op"
              href="https://www.google.com/maps/place/Mi+Buen+Despertar/@-31.7127649,-65.0145604,17z/data=!3m1!4b1!4m6!3m5!1s0x942d27c36dc9109d:0xc33b78f3fd0d1c5e!8m2!3d-31.7127649!4d-65.0119908!16s%2Fg%2F11j4s3b00t?entry=ttu&g_ep=EgoyMDI2MTAxNC4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver más opiniones en Google Maps
            </a>
          </nav>
        </section>
      </div>
    </div>
  );
}
