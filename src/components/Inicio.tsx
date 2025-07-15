import { useEffect, useRef } from "react";
import { Carousel_img } from "./Carousel_img";

interface InicioProps {
  menu: boolean;
}

export function Inicio(props: InicioProps) {
  const { menu } = props;

  const mapRef = useRef<HTMLIFrameElement | null>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && mapRef.current) {
          mapRef.current.classList.add("visible");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );
    if (mapRef.current) {
      observer.observe(mapRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const images = [
    {
      key: 1,
      src: "/public/images/Galeria/patio_mobile(webp).webp",
      alt: "Vista patio completa",
      loading: "lazy",
    },
    {
      key: 2,
      src: "/public/images/Galeria/casa_frente_1.2.webp",
      alt: "Vista de casa",
      loading: "lazy",
    },
    {
      key: 3,
      src: "/public/images/Galeria/pileta_depto.webp",
      alt: "Pileta con vista a departamento",
      loading: "lazy",
    },
  ];

  return (
    <>
      <div className={`inicio ${menu ? "active" : ""}`}>
        <section className="inicio-container">
          <div className="overlay">
            <h1 className="inicio-title">Desconectate, respirá y disfrutá.</h1>
            <p className="inicio-subtitle">
              En Cura Brochero te esperan paisajes soñados, tranquilidad serrana
              y la calidez de nuestra hospitalidad.
            </p>
            <p className="inicio-text">
              Tus días perfectos empiezan acá.{" "}
              <strong>Reservá tu estadía con nosotros.</strong>
            </p>
            <button className="inicio-boton">Consultar disponibilidad</button>
          </div>
        </section>
        <section className="galery">
          <Carousel_img images={images} />
        </section>
        <section className="map-section">
          <h2 className="map-title">Ubicación de Mi Buen Despertar</h2>
          <iframe
            ref={mapRef}
            className="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3394.11458186575!2d-65.01456572539695!3d-31.712764874126524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942d27c36dc9109d%3A0xc33b78f3fd0d1c5e!2sMi%20Buen%20Despertar!5e0!3m2!1sfr!2sar!4v1751650779068!3m2!1ses!2sar"
            allow="fullscreen"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
        <section className="experiencias">
          <h2>¿Qué podés hacer en Cura Brochero?</h2>
          <ul className="lista-actividades">
            <li>
              <h3>🌊 Balnearios naturales</h3>
              <p>
                Ríos cristalinos como Los Elefantes y El Perchel para relajarte
                y disfrutar del paisaje serrano.
              </p>
            </li>
            <li>
              <h3>🕍 Historia y cultura</h3>
              <p>
                Visitá el Santuario del Cura Brochero y conocé su legado en la
                Casa Museo y Parque Temático.
              </p>
            </li>
            <li>
              <h3>🥾 Senderismo y cabalgatas</h3>
              <p>
                Recorré los senderos serranos a pie o a caballo, ideales para
                conectar con la naturaleza.
              </p>
            </li>
            <li>
              <h3>🎶 Peñas y gastronomía</h3>
              <p>
                Viví la cultura local con música folclórica, cabrito a la llama
                y dulces típicos.
              </p>
            </li>
            <li>
              <h3>🦅 Excursiones cercanas</h3>
              <p>
                Conocé el Museo Rocsen, el Dique La Viña o el Parque Quebrada
                del Condorito.
              </p>
            </li>
          </ul>
        </section>
        <img
          className="wp-icon"
          src="/public/images/whatsapp.svg"
          alt="Whatsapp"
        />
      </div>
    </>
  );
}
export default Inicio;
