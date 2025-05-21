function Cita({ reserva }) {
    return (
      <div className="reserva">
        <h3>{reserva.equipo}</h3>
        <p><strong>Responsable:</strong> {reserva.responsable}</p>
        <p><strong>Fecha:</strong> {reserva.fecha}</p>
        <p><strong>Hora:</strong> {reserva.hora}</p>
        <p><strong>Comentarios:</strong> {reserva.comentarios}</p>
      </div>
    );
  }
  
  export default Cita;