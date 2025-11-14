import { useState } from "react";
import "../Styles.css";

interface ReservaProps {
  isOpen: boolean;
  onClose: () => void;
  fullMessage: (mensajefinal: string) => void;
}

export default function Reserva({
  isOpen,
  onClose,
  fullMessage,
}: ReservaProps) {
  if (!isOpen) return null;

  const [messageData, setMessageData] = useState({
    nombre: "",
    apellido: "",
    personas: "",
    ingreso: "",
    egreso: "",
  });

  const sendMessage = () => {
    const message = `Hola, quiero reservar en Mi Buen Despertar.
    Nombre: ${messageData.nombre} ${messageData.apellido}
    Somos ${messageData.personas} personas
    Ingreso: ${messageData.ingreso}
    Egreso: ${messageData.egreso}.`;
    fullMessage(message);
  };

  const handleSendAndClose = () => {
    sendMessage();
    onClose();
  };

  return (
    <div className="container-reserv">
      <button className="close_button" onClick={onClose}>
        <img
          className="close_button_img"
          src="images/cancel_circle_close_delete_discard_file_x_icon_123219.svg"
          alt="cerrar"
        />
      </button>
      <form>
        <label htmlFor="nombre">Nombre</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={messageData.nombre}
          onChange={(e) =>
            setMessageData({ ...messageData, nombre: e.target.value })
          }
        />
        <label htmlFor="apellido">Apellido</label>
        <input
          type="text"
          id="apellido"
          name="apellido"
          value={messageData.apellido}
          onChange={(e) =>
            setMessageData({ ...messageData, apellido: e.target.value })
          }
        />
        <label htmlFor="personas">Personas</label>
        <input
          type="text"
          id="personas"
          name="personas"
          value={messageData.personas}
          onChange={(e) =>
            setMessageData({ ...messageData, personas: e.target.value })
          }
        />
        <label htmlFor="ingreso">Fecha de ingreso:</label>
        <input
          type="text"
          id="ingreso"
          name="ingreso"
          value={messageData.ingreso}
          onChange={(e) =>
            setMessageData({ ...messageData, ingreso: e.target.value })
          }
        />
        <label htmlFor="egreso">Fecha de egreso:</label>
        <input
          type="text"
          id="egreso"
          name="egreso"
          value={messageData.egreso}
          onChange={(e) =>
            setMessageData({ ...messageData, egreso: e.target.value })
          }
        />
        <button
          className="send_button"
          type="button"
          onClick={handleSendAndClose}
        >
          Enviar
        </button>
      </form>
    </div>
  );
}
