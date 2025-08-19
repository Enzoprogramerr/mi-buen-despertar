import { useEffect, useRef, useState } from "react";

interface Foto {
  title: string;
  src: string;
}

interface GaleriaProps {
  fotos: Foto[];
}

export default function GaleriaScroll({ fotos }: GaleriaProps) {
  const [visible, setVisible] = useState(6);
  const loader = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible((prev) => Math.min(prev + 3, fotos.length));
      }
    });
    if (loader.current) observer.observe(loader.current);
    return () => observer.disconnect();
  }, [fotos.length]);

  return (
    <section>
      {fotos.slice(0, visible).map((foto, i) => (
        <div key={i} className="">
          <img src={foto.src} alt={foto.title} className="" loading="lazy" />
        </div>
      ))}
      <div ref={loader} className=""></div>
    </section>
  );
}
