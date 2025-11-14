import { useState } from "react";
import { Carousel } from "../components/Carousel";
import { CarouselMobile } from "../components/CarouselMobile";
import { useIsMobile } from "../hooks/useIsMobile";
import "../Styles.css";
import CalendarGoogle from "./CalendarGoogle";
import Reserva from "./Reserva";
import { Link } from "react-router-dom";
import VideoFacebook from "./VideoFacebook";

const serviciosCasa = [
  {
    nombre: "Cocina y horno",
    descripcion: "Con horno, vajilla, heladera y microondas",
    icono: "/images/icon_cocina.svg",
  },
  {
    nombre: "Cochera",
    descripcion: "Cubierta y privada",
    icono: "/images/garage_icon_124399.svg",
  },
  {
    nombre: "WiFi",
    descripcion: "",
    icono: "/images/modem_wifi_router_network_internet_icon_190949.svg",
  },
  {
    nombre: "DirecTv",
    descripcion: "Televisor en comedor",
    icono: "/images/tv_regular_icon_203113.svg",
  },
  {
    nombre: "Aire acondicionado",
    descripcion: "En ambas habitaciones",
    icono:
      "/images/indoor_ac_split_air_conditioning_cooler_air_conditioner_icon_218667.svg",
  },
  {
    nombre: "Ventilador",
    descripcion: "Móvil",
    icono: "/images/976627-air-appliances-blow-breeze-cool-fan-wind_106563.svg",
  },
  {
    nombre: "Calefacción",
    descripcion: "Garrafera con pantalla",
    icono: "/images/heating_86243.svg",
  },
  {
    nombre: "Asador",
    descripcion: "Asador privado y techado",
    icono: "/images/food_cooking_grill_beer_jar_icon_259017.svg",
  },
  {
    nombre: "Piscina",
    descripcion: "Piscina compartida",
    icono: "/images/piscina.svg",
  },
  {
    nombre: "Amplio espacio verde",
    descripcion: "Disposición de mesas y sillas plasticas en todo el parque",
    icono: "/images/yoga_outdoor_icon_262555.svg",
  },
];

const mobileImages = [
  {
    key: 1,
    src: "mi-buen-despertar/images/Galeria/casa_frente_mobile.webp",
    alt: "Vista frente casa",
    loading: "lazy",
  },
  {
    key: 2,
    src: "/images/Galeria/casa_cochera.webp",
    alt: "Vista de cochera casa",
    loading: "lazy",
  },
  {
    key: 3,
    src: "/dist/images/Galeria/casa_comedor_1.webp",
    alt: "Comedor de casa",
    loading: "lazy",
  },
  {
    key: 4,
    src: "/images/Galeria/casa_comedor_1.webp",
    alt: "Comedor de casa",
    loading: "lazy",
  },
  {
    key: 5,
    src: "/images/Galeria/casa_cocina.webp",
    alt: "Cocina",
    loading: "lazy",
  },
  {
    key: 6,
    src: "/images/Galeria/cas_hab_1.jpg",
    alt: "Habitacion a",
    loading: "lazy",
  },
  {
    key: 7,
    src: "/images/Galeria/casa_hab.1.2.webp",
    alt: "Habitacion a",
    loading: "lazy",
  },
  {
    key: 8,
    src: "/images/Galeria/casa_hab_2.1.webp",
    alt: "Habitacion b",
    loading: "lazy",
  },
  {
    key: 9,
    src: "/images/Galeria/casa_hab_2.2.webp",
    alt: "Habitacion b",
    loading: "lazy",
  },
  {
    key: 10,
    src: "/images/Galeria/baño_final.webp",
    alt: "Baño",
    loading: "lazy",
  },
  {
    key: 11,
    src: "/images/Galeria/patio_completa_mobile.webp",
    alt: "Vista patio completa",
    loading: "lazy",
  },
  {
    key: 12,
    src: "/images/Galeria/piletajpg.jpg",
    alt: "Vista de pileta",
    loading: "lazy",
  },
];

interface CasaProps {
  menu: boolean;
}

export function Casa({ menu }: CasaProps) {
  const isMobile = useIsMobile();

  const [isOpenVideo, setOpenVideo] = useState(false);
  const toggleVideo = () => {
    setOpenVideo(!isOpenVideo);
  };

  const [isOpen, setOpen] = useState(false);

  const toggleReserva = () => {
    setOpen(!isOpen);
  };

  const sendWP = (message: string) => {
    const numero = "5493515488289";
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <>
      <div className={`inicio ${menu ? "active" : ""}`}>
        <div className="block_title">
          <h1 className="title_accommodation">CASA</h1>
        </div>
        <section className="intro">
          <h3>Casa de campo, alojamiento completo para hasta 8 personas.</h3>
          <h4>
            Despertá rodeado de sierras, silencio y calidez. Ideal para
            reconectar con la naturaleza y descansar profundamente.
          </h4>
        </section>
        <section className="galery">
          {isMobile ? (
            <CarouselMobile images={mobileImages} />
          ) : (
            <Carousel slides={mobileImages} />
          )}
        </section>
        <h1 className="title_services">Servicios</h1>
        <section className="description-services">
          {serviciosCasa.map((e, i) => (
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
                  - Check-in: desde las 10:00 hs <br></br> - Check-out: hasta
                  las 13:00 hs.
                </p>
              </li>
              <li>
                <h3>Politica de mascotas</h3>
                <p>- Se aceptan mascotas pequeñas.</p>
              </li>
              <li>
                <h3>Condiciones básicas de reserva</h3>
                <p>- Seña del 30% para confirmar reserva.</p>
              </li>
              <li>
                <h3>Al reservar</h3>
                <p>
                  - Al realizar la reserva de nuestros servicios, el cliente
                  acepta y reconoce todos los{" "}
                  <Link to="/terminos">Términos y condiciones.</Link>
                </p>
                <p>
                  - Ofrecemos únicamente servicio de alojamiento, pero las
                  cabañas cuentan con una cocina completamente equipada para su
                  comodidad.
                </p>
                <p>- Debe llevar ropa blanca (toallas, sábanas y fundas).</p>
              </li>
              <li>
                <h3>Precios</h3>
                <p>- Para 6 personas: $132.000 por día.</p>
                <p>-Para 8 personas: $176.000 por día</p>
              </li>
            </ul>
          </section>
        </div>
        <button
          className={`send_button ${isOpenVideo ? "hiden" : ""}`}
          onClick={() => {
            setOpenVideo(!isOpenVideo);
          }}
        >
          Ver video de casa
        </button>
        <VideoFacebook
          isOpenVideo={isOpenVideo}
          onClose={toggleVideo}
        ></VideoFacebook>
        <section className="calendar-container">
          <h2>Calendario de disponibilidad</h2>
          <CalendarGoogle />
          <p className="info_calendar">
            - Las fechas marcadas en color indican que ya han sido reservadas y
            no están disponibles para nuevas solicitudes. Si estás planificando
            tu estadía, te recomendamos elegir días que no estén resaltados para
            asegurar tu lugar.
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
          ></Reserva>
        </section>
      </div>
    </>
  );
}

export default Casa;
