import "../Styles.css";

interface ReservaProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Reserva({ isOpen, onClose }: ReservaProps) {
  if (!isOpen) return null;

  return (
    <div className="container-reserv">
      <button className="close_button" onClick={onClose}>
        <img
          className="close_button_img"
          src="/public/images/cancel_circle_close_delete_discard_file_x_icon_123219.svg"
          alt="cerrar"
        />
      </button>
      <form>
        <label htmlFor="nombre">Nombre</label>
        <input id="nombre" />
        <label htmlFor="apellido">Apellido</label>
        <input id="apellido" />
        <label htmlFor="personas">Personas</label>
        <input id="personas" />
        <label htmlFor="FechaIngreso">Fecha de ingreso:</label>
        <input id="FechaIngreso" />
        <label htmlFor="FechaEgreso">Fecha de egreso:</label>
        <input id="FechaEgreso" />
        <button
          className="send_button"
          type="button" /* onClick={handleEnviarWhatsApp} */
        >
          Enviar
        </button>
      </form>
    </div>
  );
}
