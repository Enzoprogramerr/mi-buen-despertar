import { useEffect, useState } from "react";

declare global {
  interface Window {
    FB: {
      XFBML: {
        parse: () => void;
      };
    };
    fbAsyncInit: () => void;
  }
}

interface ReservaVideo {
  isOpenVideo: boolean;
  onClose: () => void;
}

export default function FacebookVideo({ isOpenVideo, onClose }: ReservaVideo) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(false); // reinicia al abrir

    window.fbAsyncInit = function () {
      if (window.FB && window.FB.XFBML) {
        window.FB.XFBML.parse();
      }
    };

    if (!document.getElementById("facebook-jssdk")) {
      const script = document.createElement("script");
      script.id = "facebook-jssdk";
      script.src =
        "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v24.0";
      script.async = true;
      script.defer = true;
      script.crossOrigin = "anonymous";
      document.body.appendChild(script);
    } else {
      if (window.FB && window.FB.XFBML) {
        window.FB.XFBML.parse();
      }
    }

    // Simular carga con timeout (ya que no hay evento real del iframe)
    const timeout = setTimeout(() => {
      setIsLoaded(true);
    }, 1000); // ajustable

    return () => clearTimeout(timeout);
  }, [isOpenVideo]);

  if (!isOpenVideo) return null;
  return (
    <section className="video_contain">
      <div id="fb-root"></div>
      <div className="video-wrapper">
        <button className="close_button" onClick={onClose}>
          <img
            className="close_button_img"
            src="/images/cancel_circle_close_delete_discard_file_x_icon_123219.svg"
            alt="cerrar"
          />
        </button>

        {!isLoaded && <div className="video-loader">Cargando video...</div>}

        <div
          className={`fb-video ${isLoaded ? "visible" : "hidden"}`}
          data-href="https://www.facebook.com/100063737036623/videos/786505419952543/"
          data-width="400"
          data-allowfullscreen="true"
          data-autoplay="false"
          data-lazy="true"
          data-show-captions="true"
        >
          <div className="fb-xfbml-parse-ignore">
            <blockquote cite="https://www.facebook.com/100063737036623/videos/786505419952543/">
              <a href="https://www.facebook.com/100063737036623/videos/786505419952543/">
                Video institucional – Mi Buen Despertar
              </a>
              <p>Conocé el entorno, la calidez y los espacios que ofrecemos</p>
              Publicado por{" "}
              <a href="https://www.facebook.com/facebook/">Mi Buen Despertar</a>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
