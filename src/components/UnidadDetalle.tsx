import GaleriaScroll from "./GaleriaScroll";
import Servicios from "./Servicios";

interface Foto {
  title: string;
  src: string;
}

interface Servicio {
  nombre: string;
  descripcion?: string;
  icono: string;
}

interface UnidadDetalleProps {
  titulo: string;
  descripcion: string;
  servicios: Servicio[];
  galeria: Foto[];
}

export default function UnidadDetalle({
  titulo,
  descripcion,
  servicios,
  galeria,
}: UnidadDetalleProps) {
  return (
    <section className="">
      <h1 className="">{titulo}</h1>
      <p className="">{descripcion}</p>
      <Servicios items={servicios} />
      <div className="">
        <GaleriaScroll fotos={galeria} />
      </div>
    </section>
  );
}
