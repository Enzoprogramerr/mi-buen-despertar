import { useEffect } from "react";
import { Link } from "react-router-dom";

interface TerminosProps {
  menu: boolean;
}

export function Terminos({ menu }: TerminosProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={`inicio ${menu ? "active" : ""}`}>
      <header>
        <h1 className="title_terms">Términos y Condiciones</h1>
      </header>
      <article className="containerTerminos">
        <section id="reservas">
          <h2>Reservas</h2>
          <p>
            Para realizar la reserva, se requiere un pago inicial del 30% del
            total a través de transferencia bancaria en pesos argentinos.
          </p>
          <p>
            El saldo restante se abona en efectivo o transferencia al momento
            del check-in. Dólares billete o pesos argentinos al tipo de cambio
            del Dólar Blue vigente en ese día. Es importante tener en cuenta que
            la tarifa en pesos argentinos no se congela y está sujeta a la
            cotización del tipo de cambio.{" "}
          </p>
        </section>

        <section id="cancelacion">
          <h2>Política de cancelación</h2>
          <p>
            La seña no es reembolsable en caso de cancelación. Sin embargo, se
            permite reprogramar la reserva una única vez si la cancelación se
            realiza con al menos 30 días de anticipación al check-in. La nueva
            fecha debe ser dentro de los meses disponibles a la fecha.{" "}
          </p>
        </section>

        <section id="personas permitidas">
          <h2>Importante: cantidad de personas permitidas</h2>
          <p>
            La propiedad se alquila para ser ocupada por la cantidad de personas
            pactada a la hora de la reserva, NO pudiendo alojar más de dicha
            cantidad. Caso contrario se cobrara $20.000 por día y por persona
            que exceda esa cantidad y el propietario detecte.
          </p>
        </section>

        <section id="responsabilidad">
          <h2>Responsabilidad</h2>
          <p>
            Durante su estadía, el huésped asume la responsabilidad por
            accidentes o incidentes que pudieran ocurrir en la propiedad (como
            golpes, picaduras de insectos, filtraciones, cortes de luz o agua,
            etc.). El propietario no será responsable por daños a personas o
            bienes ocasionados por causas ajenas a su control, incluyendo hechos
            fortuitos, fuerza mayor, robos o fallas en los servicios públicos.
          </p>
        </section>

        <section id="preguntas frecuentes">
          <h1>Preguntas frecuentes</h1>
          <h3>¿Ofrecen servicio de desayuno?</h3>
          <p>
            Solo brindamos servicios de estadía. No incluye desayuno, mucama,
            toallas ni ropa de cama.
          </p>
          <h3>¿Son pet friendly ?</h3>
          <p>¡Tu mascota es bienvenida! (tamaños pequeños).</p>
          <h3>¿Que actividades se pueden realizar en los alrededores?</h3>
          <p>
            <Link to={{ pathname: "/", hash: "actividades" }}>
              Ir a actividades
            </Link>
          </p>
          <h3>¿Dónde está ubicada la cabaña?</h3>
          <p>
            <Link to={{ pathname: "/", hash: "#ubi" }}>Ubicación</Link>
          </p>
          <h3>¿Se puede acceder fácilmente en auto?</h3>
          <p>
            Sí, el acceso al complejo es muy sencillo. El camino es
            completamente plano, lo que permite llegar cómodamente en cualquier
            tipo de vehículo.
          </p>
          <h3>¿La piscina es de uso compartida?</h3>
          <p>Sí, con duplex del mismo complejo.</p>
          <h3>¿Formas de pago?</h3>
          <p>Transferencia o efectivo en pesos o dólares.</p>
        </section>
      </article>
    </div>
  );
}
