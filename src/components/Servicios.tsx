interface Servicio {
  nombre: string;
  descripcion?: string;
  icono: string; // Podés usar emojis o pasar SVG
}

interface ServiciosProps {
  items: Servicio[];
}

export default function Servicios({ items }: ServiciosProps) {
  return (
    /*TODO- RELLENAR classname CORRECTAMENTE */
    <div className="">
      {items.map((servicio, i) => (
        <div key={i} className="">
          <span className="">{servicio.icono}</span>
          <div>
            <div className="">{servicio.nombre}</div>
            <div className="">{servicio.descripcion}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
