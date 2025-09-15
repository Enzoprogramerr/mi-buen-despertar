import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface CarouselProps {
  images: { src: string; alt: string; key: number }[];
}

export function Carousel_img({ images }: CarouselProps) {
  return (
    <Carousel
      className="carousel"
      showThumbs={false}
      infiniteLoop={true}
      autoPlay={false} // ❌ Desactiva el cambio automático
      swipeable={false} // ❌ Desactiva el gesto táctil (swipe)
      emulateTouch={false} // ❌ Evita que el mouse simule swipe
      showArrows={true}
    >
      {images.map(({ src, alt, key }) => (
        <div className="carrousel_conten" key={key}>
          <img src={src} alt={alt} loading="lazy" className="carousel-img" />
        </div>
      ))}
    </Carousel>
  );
}
