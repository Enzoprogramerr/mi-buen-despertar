import { useIsMobile } from "../hooks/useIsMobile";
import { CarouselMobile } from "./CarouselMobile";
import { Carousel } from "./Carousel";
import CalendarDuplex from "./CalendarDuplex";
import { useState } from "react";
import Reserva from "./Reserva";
import { Link } from "react-router-dom";

const serviciosDuplex = [
  {
    nombre: "Anafe a gas",
    descripcion: "Con dos hornallas, vajilla, heladera y microondas",
    icono: "images/anafe.ico",
  },
  {
    nombre: "Cochera",
    descripcion: "Cubierta y privada",
    icono: "images/garage_icon_124399.svg",
  },
  {
    nombre: "WiFi",
    descripcion: "",
    icono: "images/modem_wifi_router_network_internet_icon_190949.svg",
  },
  {
    nombre: "DirecTv",
    descripcion: "Televisor en comedor",
    icono: "images/tv_regular_icon_203113.svg",
  },
  {
    nombre: "Aire acondicionado",
    descripcion: "En habitación",
    icono:
      "images/indoor_ac_split_air_conditioning_cooler_air_conditioner_icon_218667.svg",
  },
  {
    nombre: "Ventilador",
    descripcion: "Móvil",
    icono: "images/976627-air-appliances-blow-breeze-cool-fan-wind_106563.svg",
  },
  {
    nombre: "Calefacción",
    descripcion: "Calefactor",
    icono: "images/heating_86243.svg",
  },
  {
    nombre: "Asador",
    descripcion: "Asador techado",
    icono: "images/food_cooking_grill_beer_jar_icon_259017.svg",
  },
  {
    nombre: "Piscina",
    descripcion: "Piscina compartida",
    icono: "images/piscina.svg",
  },
  {
    nombre: "Amplio espacio verde",
    descripcion: "Disposición de mesas y sillas plasticas en todo el parque",
    icono: "images/yoga_outdoor_icon_262555.svg",
  },
];

const duplexImage = [
  {
    key: 1,
    src: "images/Galeria/depto_frente_final.webp",
    alt: "Vista duplex",
    loading: "lazy",
  },
  {
    key: 2,
    src: "images/Galeria/depto_cochera.webp",
    alt: "Vista cochera",
    loading: "lazy",
  },
  {
    key: 3,
    src: "images/Galeria/depto_comedor.webp",
    alt: "Comedor",
    loading: "lazy",
  },
  {
    key: 4,
    src: "images/Galeria/depto_dormi.webp",
    alt: "Dormitorio",
    loading: "lazy",
  },
  {
    key: 5,
    src: "images/Galeria/balcon.webp",
    alt: "Vista balcon",
    loading: "lazy",
  },
  {
    key: 6,
    src: "images/Galeria/depto_baño_1.2.webp",
    alt: "Baño",
    loading: "lazy",
  },
  {
    key: 7,
    src: "images/Galeria/depto_baño_1.1.webp",
    alt: "",
    loading: "lazy",
  },
  {
    key: 8,
    src: "images/Galeria/patio duplex.webp",
    alt: "Vista patio",
    loading: "lazy",
  },
  {
    key: 9,
    src: "images/Galeria/patio_duplex2.webp",
    alt: "Vista patio",
    loading: "lazy",
  },
  {
    key: 10,
    src: "images/Galeria/pileta_depto.webp",
    alt: "Vista patio-pileta",
    loading: "lazy",
  },
  {
    key: 11,
    src: "images/Galeria/patio_mesita.webp",
    alt: "Patio",
    loading: "lazy",
  },
];

interface DuplexProps {
  menu: boolean;
}

export function Duplex({ menu }: DuplexProps) {
  const isMobile = useIsMobile();

  const [isOpen, setOpen] = useState(false);

  const toggleReserva = () => {
    setOpen(!isOpen);
  };

  const sendWP = (message: string) => {
    const numero = "5493516457961";
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <>
      <div className={`inicio ${menu ? "active" : ""}`}>
        <div className="block_title">
          <h1 className="title_accommodation">DUPLEX</h1>
        </div>
        <section className="intro">
          <h3>Duplex, alojamiento completo para hasta 4 personas.</h3>
          <h4>
            Despertá rodeado de sierras, silencio y calidez. Ideal para
            reconectar con la naturaleza y descansar profundamente.
          </h4>
        </section>
        <section className="galery">
          {isMobile ? (
            <CarouselMobile images={duplexImage} />
          ) : (
            <Carousel slides={duplexImage} />
          )}
        </section>
        <section className="popup">
          <button
            className={`mobile-reservation-button ${isOpen ? "hiden" : ""}`}
            onClick={() => {
              setOpen(!isOpen);
            }}
          >
            RESERVAR - ENVIAR WHATSAPP
          </button>
          <Reserva
            isOpen={isOpen}
            onClose={toggleReserva}
            fullMessage={sendWP}
            tipo="duplex"
          ></Reserva>
        </section>
        <h1 className="title_services">Servicios</h1>
        <section className="description-services">
          {serviciosDuplex.map((e, i) => (
            <article key={i} className="element">
              <h3>{e.nombre}</h3>
              {e.descripcion && <p>{e.descripcion}</p>}
              <img src={e.icono} alt="" />
            </article>
          ))}
        </section>
        <div className="info_container">
          <section className="info_important">
            <h1 className="title_service2">Información Importante</h1>
            <ul>
              <li>
                <h3>Horario de ingreso y salida</h3>
                <p>
                  - Check-in: desde las 13:00 hs. <br></br> - Check-out: hasta
                  las 10:00 hs.
                </p>
              </li>
              <li>
                <h3>Politica de mascotas</h3>
                <p>- Se aceptan mascotas pequeñas.</p>
              </li>
              <li>
                <h3>Condiciones básicas de reserva</h3>
                <p>
                  - Precio por persona <br></br> - Seña del 30% para confirmar
                  reserva.
                </p>
              </li>
              <li>
                <h3>Al reservar</h3>
                <p>
                  - Al realizar la reserva de nuestros servicios, el cliente
                  acepta y reconoce todos los
                  <Link to="/terminos">Términos y condiciones.</Link>
                </p>
                <p>
                  - Ofrecemos únicamente servicio de alojamiento, pero las
                  cabañas cuentan con una cocina completamente equipada para su
                  comodidad.
                </p>
              </li>
              <li>
                <h3>Precios</h3>
                <p>- Para 4 personas: $80.000 por día.</p>
              </li>
            </ul>
          </section>
          <section className="video_facebook">
            <h2 className="title-duplex">Descubrí el duplex en detalle</h2>
            <p className="description-duplex">
              Mirá nuestros videos en Facebook y recorré cada rincón de nuestro
              duplex. Te mostramos cómo es por dentro, sus vistas, comodidades y
              el entorno natural que lo rodea. 🌿
            </p>
            <a
              href="https://www.facebook.com/MiBuenDespertar/"
              target="_blank"
              className="btn-facebook"
            >
              Ver videos en Facebook
            </a>
          </section>
          <section className="calendar-container">
            <h2>Calendario de disponibilidad</h2>
            <CalendarDuplex />
            <p className="info_calendar">
              - Las fechas marcadas en color indican que ya han sido reservadas
              y no están disponibles para nuevas solicitudes. Si estás
              planificando tu estadía, te recomendamos elegir días que no estén
              resaltados para asegurar tu lugar.
            </p>
          </section>
          <section className="popup">
            <button
              className={`mobile-reservation-button ${isOpen ? "hiden" : ""}`}
              onClick={() => {
                setOpen(!isOpen);
              }}
            >
              RESERVAR - ENVIAR WHATSAPP
            </button>
            <Reserva
              isOpen={isOpen}
              onClose={toggleReserva}
              fullMessage={sendWP}
              tipo="duplex"
            ></Reserva>
          </section>
        </div>
      </div>
    </>
  );
}
