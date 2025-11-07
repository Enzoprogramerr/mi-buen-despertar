import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import esLocale from "@fullcalendar/core/locales/es";
import interactionPlugin from "@fullcalendar/interaction";
import { DateSelectArg } from "@fullcalendar/core/index.js";
import { useState } from "react";

export default function Calendar() {
  const [reserva, setReserva] = useState({ inicio: "", fin: "" });

  const handleSelect = (info: DateSelectArg) => {
    const start = info.startStr;
    const end = info.endStr;
    alert(`Estadía seleccionada:\nDesde: ${start}\nHasta: ${end}`);
    setReserva({ inicio: start, fin: end });
  };
  return (
    <div className="calendar_container">
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        locale={esLocale}
        contentHeight={"auto"}
        selectable={true}
        select={handleSelect}
      ></FullCalendar>
      {reserva.inicio && reserva.fin && (
        <div className="reservation">
          <p>
            Reservando desde <strong>{reserva.inicio}</strong>hasta{" "}
            <strong>{reserva.fin}</strong>.
          </p>
        </div>
      )}
    </div>
  );
}
