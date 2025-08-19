import UnidadDetalle from "./UnidadDetalle";

export default function Casa() {
  return (
    /*TODO- RELLENAR CAMPOS CORRECTAMENTE */
    <UnidadDetalle
      titulo="Casa principal"
      descripcion="Casa completa hasta 8 personas, ideal para disfrutar en familia."
      servicios={[
        {
          nombre: "Cocina",
          descripcion: "Con horno, vajilla y heladera",
          icono: "🍽️",
        },
        {
          nombre: "Cochera",
          descripcion: "Cubierta y privada",
          icono: "🚗",
        },
        {
          nombre: "WiFi",
          descripcion: "Conexión rápida",
          icono: "📶",
        },
      ]}
      galeria={[
        {
          title: "Fachada de la casa",
          src: "/images/casa-fachada.jpg",
        },
        {
          title: "Living amplio",
          src: "/images/casa-living.jpg",
        },
        {
          title: "Cocina equipada",
          src: "/images/casa-cocina.jpg",
        },
      ]}
    />
  );
}
