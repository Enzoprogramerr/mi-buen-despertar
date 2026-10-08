// hooks/useIsMobile.js
import { useState, useEffect } from "react";

export function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < breakpoint);

  useEffect(() => {
    //se declara la funcion
    const handleResize = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    window.addEventListener("resize", handleResize); //el navegador registra y  escucha el evento resize.
    return () => window.removeEventListener("resize", handleResize); // cuando el componente que usa useIsMobile se desmonta alli se produce la limpieza del Listener.
  }, [breakpoint]); //el efecto volverá a ejecutarse si cambia breackpoint, pero en el uso de este hook no sucede.

  return isMobile;
}
