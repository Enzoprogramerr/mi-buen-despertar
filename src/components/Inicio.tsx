import { useEffect, useRef } from "react";
import { CarouselMobile } from "./CarouselMobile";
import { Carousel } from "./Carousel";
import { useIsMobile } from "../hooks/useIsMobile";
import { useScrollToHash } from "../hooks/useScrollToHash";

interface InicioProps {
  menu: boolean;
}

export function Inicio({ menu }: InicioProps) {
  useScrollToHash();
  const mapRef = useRef<HTMLIFrameElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(
            entry.target
          ); /* Esta línea le dice al IntersectionObserver que deje de 
          observar el elemento que acaba de entrar en el viewport. */
        }
      },
      {
        threshold: 0.3,
      } /*  significa que se activa cuando al menos el 30% del iframe es visible en pantalla. */
    );
    const observerTitle = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(
            entry.target
          ); /* Esta línea le dice al IntersectionObserver que deje de 
          observar el elemento que acaba de entrar en el viewport. */
        }
      },
      {
        threshold: 0.1,
      } /*  significa que se activa cuando al menos el 30% del iframe es visible en pantalla. */
    );
    if (mapRef.current) {
      observer.observe(mapRef.current);
    }
    if (titleRef.current) {
      observerTitle.observe(titleRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const isMobile = useIsMobile();

  const mobileImages = [
    {
      key: 1,
      src: "/public/images/Galeria/patio_completa_mobile.webp",
      alt: "Vista patio completa",
      loading: "lazy",
    },
    {
      key: 2,
      src: "/public/images/Galeria/casa_frente_mobile.webp",
      alt: "Vista de casa",
      loading: "lazy",
    },
    {
      key: 3,
      src: "/public/images/Galeria/Mobile/casa_comedor_1.2.webp",
      alt: "Vista departamento",
      loading: "lazy",
    },
    {
      key: 4,
      src: "/public/images/Galeria/Mobile/cas_hab_1.2.jpg",
      alt: "Vista habitacion casa",
      loading: "lazy",
    },
  ];
  const desktopImages = [
    {
      key: 1,
      src: "/public/images/Galeria/patio_completa_mobile.webp",
      alt: "Vista patio completa",
      loading: "lazy",
    },
    {
      key: 2,
      src: "/public/images/Galeria/casa_frente_mobile.webp",
      alt: "Vista de casa",
      loading: "lazy",
    },
    {
      key: 3,
      src: "/public/images/Galeria/depto_frente_final.webp",
      alt: "Vista departamento",
      loading: "lazy",
    },
    {
      key: 4,
      src: "/public/images/Galeria/techo_casa.webp",
      alt: "Vista segunda cochera",
      loading: "lazy",
    },
    {
      key: 5,
      src: "/public/images/Galeria/pileta_vistacompleta.webp",
      alt: "Vista patio desde balcón",
      loading: "lazy",
    },
  ];

  /* const imagesFinal = useMemo(() => {
    return baseImages.map((img) => {
      if (img.key === 3) {
        return {
          ...img,
          src: isMobile
            ? "/public/images/Galeria/depto_frente.webp"
            : "/public/images/Galeria/depto_frente_recortada.jpg",
        };
      }
      return img;
    });
  }, [isMobile]);
 */
  return (
    <>
      <div className={`inicio ${menu ? "active" : ""}`}>
        <section className="inicio-container">
          <div className="overlay">
            <span className="inicio-title">
              Desconectate, respirá y disfrutá.
            </span>
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
        <div className="subtitle">
          <h1>Un adelanto de tu estadía</h1>
        </div>
        <section className="galery">
          {isMobile ? (
            <CarouselMobile images={mobileImages} />
          ) : (
            <Carousel slides={desktopImages} />
          )}
        </section>
        <section id="ubi" className="map-section">
          <h1 className="map-title">Ubicación de Mi Buen Despertar</h1>
          <iframe
            ref={mapRef}
            className="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3394.11458186575!2d-65.01456572539695!3d-31.712764874126524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942d27c36dc9109d%3A0xc33b78f3fd0d1c5e!2sMi%20Buen%20Despertar!5e0!3m2!1sfr!2sar!4v1751650779068!3m2!1ses!2sar"
            allow="fullscreen"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
        <section className="experiencias" id="actividades">
          <h1 className="titleref" ref={titleRef}>
            ¿Qué podés hacer en Cura Brochero?
          </h1>
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
        <div className="wp-div">
          <a href="https://wa.me/3516457961">
            <p>¿Dudas? Contáctenos...</p>
            <img
              className="wp-icon"
              src="/public/images/whatsapp.svg"
              alt="Whatsapp"
            />
          </a>
        </div>
      </div>
    </>
  );
}
export default Inicio;
