import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface CarouselProps {
  images: { src: string; alt: string; key: number; loading: string }[];
}

export const Carousel_img: React.FC<CarouselProps> = ({ images }) => {
  return (
    <Carousel className="carousel" showThumbs={false} infiniteLoop autoPlay>
      {images.map(({ src, alt, key }) => (
        <div className="carrousel_conten" key={key}>
          <img src={src} alt={alt} loading="lazy" className="carousel-img" />
        </div>
      ))}
    </Carousel>
  );
};
