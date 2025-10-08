import { Carousel } from "../components/Carousel";
import { CarouselMobile } from "../components/CarouselMobile";
import { useIsMobile } from "../hooks/useIsMobile";
import "../Styles.css";

const serviciosCasa = [
  {
    nombre: "Cocina y horno",
    descripcion: "Con horno, vajilla, heladera y microondas",
    icono: "/public/images/icon_cocina.svg",
  },
  {
    nombre: "Cochera",
    descripcion: "Cubierta y privada",
    icono: "/public/images/garage_icon_124399.svg",
  },
  {
    nombre: "WiFi",
    descripcion: "",
    icono: "/public/images/modem_wifi_router_network_internet_icon_190949.svg",
  },
  {
    nombre: "DirecTv",
    descripcion: "Televisor en comedor",
    icono: "/public/images/tv_regular_icon_203113.svg",
  },
  {
    nombre: "Aire acondicionado",
    descripcion: "En habitacion",
    icono:
      "/public/images/indoor_ac_split_air_conditioning_cooler_air_conditioner_icon_218667.svg",
  },
  {
    nombre: "Ventilador",
    descripcion: "Móvil",
    icono:
      "/public/images/976627-air-appliances-blow-breeze-cool-fan-wind_106563.svg",
  },
  {
    nombre: "Calefacción",
    descripcion: "Garrafera con pantalla",
    icono: "/public/images/heating_86243.svg",
  },
  {
    nombre: "Asador",
    descripcion: "Asador privado y techado",
    icono: "/public/images/food_cooking_grill_beer_jar_icon_259017.svg",
  },
  {
    nombre: "Piscina",
    descripcion: "Piscina compartida",
    icono: "/public/images/piscina.svg",
  },
  {
    nombre: "Amplio espacio verde",
    descripcion: "Disposicion de mesas y sillas plasticas en todo el parque",
    icono: "/public/images/yoga_outdoor_icon_262555.svg",
  },
];

const mobileImages = [
  {
    key: 1,
    src: "/public/images/Galeria/casa_frente_mobile.webp",
    alt: "Vista frente casa",
    loading: "lazy",
  },
  {
    key: 2,
    src: "/public/images/Galeria/casa_cochera.webp",
    alt: "Vista de cochera casa",
    loading: "lazy",
  },
  {
    key: 3,
    src: "/public/images/Galeria/casa_comedor_1.2.webp",
    alt: "comedor de casa",
    loading: "lazy",
  },
  {
    key: 4,
    src: "/public/images/Galeria/casa_comedor_1.webp",
    alt: "comedor de casa",
    loading: "lazy",
  },
  {
    key: 5,
    src: "/public/images/Galeria/cas_hab_1.jpg",
    alt: "habitacion una",
    loading: "lazy",
  },
  {
    key: 6,
    src: "/public/images/Galeria/casa_hab.1.2.webp",
    alt: "habitacion una",
    loading: "lazy",
  },
  {
    key: 7,
    src: "/public/images/Galeria/casa_hab_2.1.webp",
    alt: "habitacion dos",
    loading: "lazy",
  },
  {
    key: 8,
    src: "/public/images/Galeria/casa_hab_2.2.webp",
    alt: "habitacion dos ",
    loading: "lazy",
  },
  {
    key: 9,
    src: "/public/images/Galeria/casa_baño.webp",
    alt: "baño",
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
];

interface CasaProps {
  menu: boolean;
}

export function Casa({ menu }: CasaProps) {
  const isMobile = useIsMobile();
  return (
    <>
      <div className={`inicio ${menu ? "active" : ""}`}>
        <div className="block_title">
          <h1>CASA</h1>
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
            <Carousel slides={desktopImages} />
          )}
        </section>
        <h3 className="title_services">Servicios</h3>
        <section className="description">
          {serviciosCasa.map((e, i) => (
            <article key={i} className="element">
              <h3>{e.nombre}</h3>
              {e.descripcion && <p>{e.descripcion}</p>}
              <img src={e.icono} alt="" />
            </article>
          ))}
        </section>
        {/* TODO- VER HOJA DE WP */}
        <section className="info_important">
          <h3 className="title_services">Información Importante</h3>
          <ul>
            <li>
              <h3>Horario de ingreso y salida</h3>
              <p>
                - Check-in: desde las 10:00 hs <br></br> - Check-out: hasta las
                13:00 hs
              </p>
            </li>
            <li>
              <h3>Politica de mascotas</h3>
              <p>- Se aceptan mascotas pequeñas</p>
            </li>
            <li>
              <h3>Condiciones básicas de reserva</h3>
              <p>
                - Precio por persona <br></br> - Seña del 30% para confirmar
                reserva
              </p>
            </li>
            <li>
              <h3>Al reservar</h3>
              <p>
                - Al realizar la reserva de nuestros servicios, el cliente
                acepta y reconoce todos los{" "}
                <a href="">Términos y Condiciones</a>.
              </p>
              <p>
                - Ofrecemos únicamente servicio de alojamiento, pero las cabañas
                cuentan con una cocina completamente equipada para su comodidad.
              </p>
            </li>
            <li>
              <h3>Precios</h3>
              <p>- $60.000 por persona.</p>
            </li>
          </ul>
        </section>
        <button className="mobile-reservation-button">
          RESERVAR - DISPONIBILIDAD
        </button>
      </div>
    </>
  );
}

export default Casa;
