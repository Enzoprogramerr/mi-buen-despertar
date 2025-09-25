import { Carousel } from "react-responsive-carousel";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface CarouselProps {
  images: { src: string; alt: string; key: number }[];
}

export function CarouselMobile({ images }: CarouselProps) {
  return (
    <Carousel
      className="carousel"
      showThumbs={false}
      infiniteLoop={true}
      autoPlay={false} // ❌ Desactiva el cambio automático
      swipeable={false} // ❌ Desactiva el gesto táctil (swipe)
      emulateTouch={false} // ❌ Evita que el mouse simule swipe
      showArrows={true}
      renderArrowPrev={(clickHandler, hasPrev) =>
        hasPrev && (
          <button
            type="button"
            onClick={clickHandler}
            style={{
              position: "absolute",
              left: 15,
              top: "50%",
              transform: "translateY(-50%)",
              backgroundColor: "rgba(0,0,0,0.6)",
              borderRadius: "50%",
              width: 40,
              height: 40,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "none",
              zIndex: 2,
              cursor: "pointer",
            }}
          >
            <FaChevronLeft color="white" size={20} />
          </button>
        )
      }
      renderArrowNext={(clickHandler, hasNext) =>
        hasNext && (
          <button
            type="button"
            onClick={clickHandler}
            style={{
              position: "absolute",
              right: 15,
              top: "50%",
              transform: "translateY(-50%)",
              backgroundColor: "rgba(0,0,0,0.6)",
              borderRadius: "50%",
              width: 40,
              height: 40,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "none",
              zIndex: 2,
              cursor: "pointer",
            }}
          >
            <FaChevronRight color="white" size={20} />
          </button>
        )
      }
    >
      {images.map(({ src, alt, key }) => (
        <div className="carrousel_conten" key={key}>
          <img src={src} alt={alt} loading="lazy" className="carousel-img" />
        </div>
      ))}
    </Carousel>
  );
}
