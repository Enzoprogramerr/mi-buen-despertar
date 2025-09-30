import { Carousel } from "../components/Carousel";
import { CarouselMobile } from "../components/CarouselMobile";
import { useIsMobile } from "../hooks/useIsMobile";

const serviciosDepto = [
  {
    nombre: "Cocina",
    descripcion: "Con anafe a gas 2 hornallas, vajilla, heladera y microondas",
    icono: "🍽️",
  },
  {
    nombre: "Cochera",
    descripcion: "Cubierta y privada",
    icono: "🚗",
  },
  {
    nombre: "WiFi",
    descripcion: "",
    icono: "📶",
  },
  {
    nombre: "DirecTv",
    descripcion: "Televisor en comedor",
    icono: "",
  },
  {
    nombre: "Aire acondicionado",
    descripcion: "En habitacion",
    icono: "",
  },
  {
    nombre: "Ventilador",
    descripcion: "Móvil",
    icono: "",
  },
  {
    nombre: "Calefacción",
    descripcion: "Calefactor a gas",
    icono: "",
  },
  {
    nombre: "Asador",
    descripcion: "Asador privado y techado",
    icono: "",
  },
  {
    nombre: "Piscina",
    descripcion: "Piscina compartida",
    icono: "",
  },
  {
    nombre: "Amplio espacio verde",
    descripcion: "Disposicion de mesas y sillas plasticas en todo el parque",
    icono: "",
  },
];

export function Departamento() {
  const isMobile = useIsMobile();
  return (
    <>
      <h1>CASA</h1>
      <section className="galery">
        {/*TODO-completar array de imagenes {isMobile ? <CarouselMobile images={} /> : <Carousel slides={} />}*/}
      </section>
      <section className="description">
        {serviciosDepto.map((e, i) => (
          <article key={i} className="element">
            <h3>{e.nombre}</h3>
            {e.descripcion && <p>{e.descripcion}</p>}
            <img src={e.icono} alt="" />
          </article>
        ))}
      </section>
    </>
  );
}

export default Departamento;
