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
      src="https://calendar.google.com/calendar/embed?height=600&wkst=2&ctz=America%2FArgentina%2FCordoba&showPrint=0&src=YWxxdWlsZXJicm9jaGVyb0BnbWFpbC5jb20&color=%23039be5"
      frameBorder="0"
      scrolling="no"
      title="Calendario de reservas casa"
    ></iframe>
  );
}
