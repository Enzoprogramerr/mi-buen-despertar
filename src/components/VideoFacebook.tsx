import { useEffect } from "react";

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

export default function FacebookVideo() {
  useEffect(() => {
    // Definir fbAsyncInit sin appId
    window.fbAsyncInit = function () {
      // Solo parseo, sin init
      if (window.FB && window.FB.XFBML) {
        window.FB.XFBML.parse();
      }
    };

    // Cargar el SDK si no está presente
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
      // Si ya está cargado, parsear directamente
      if (window.FB && window.FB.XFBML) {
        window.FB.XFBML.parse();
      }
    }
  }, []);

  return (
    <section className="video_contain">
      <div id="fb-root"></div>
      <div className="video-wrapper">
        <div
          className="fb-video"
          data-href="https://www.facebook.com/100063737036623/videos/786505419952543/"
          data-width="400px"
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
