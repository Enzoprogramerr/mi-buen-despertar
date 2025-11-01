import { useEffect, useState } from "react";

export default function CalendarGoogle() {
  const [reloadKey, setReloadKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setReloadKey((prev) => prev + 1); // cambia la key para forzar el re-render
    }, 300000); // 300.000 ms = 5 minutos

    return () => clearInterval(interval); // limpia el intervalo al desmontar
  }, []);

  return (
    <iframe
      key={reloadKey}
      src="https://calendar.google.com/calendar/embed?height=600&wkst=2&ctz=America%2FArgentina%2FCordoba&showPrint=0&src=YWMyY2RmODQ0MzQ5YmE2ZGVlZDgwNjVkNTY3NzAxMGM0MWI3ZGIwN2U1NDRjYmI2NGNhZTJkMzZlMDg2NDNjOEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23d50000"
      width="800"
      height="600"
      title="Calendario de reservas duplex"
    ></iframe>
  );
}
