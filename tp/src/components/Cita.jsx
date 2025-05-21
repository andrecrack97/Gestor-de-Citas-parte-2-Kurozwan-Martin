function Cita({ reserva, eliminarReserva }) {
    return (
      <div className="reserva">
        <h3>{reserva.equipo}</h3>
        <p><strong>Responsable:</strong> {reserva.responsable}</p>
        <p><strong>Fecha:</strong> {reserva.fecha}</p>
        <p><strong>Hora:</strong> {reserva.hora}</p>
        <p><strong>Comentarios:</strong> {reserva.comentarios}</p>
        <button onClick={() => eliminarReserva(reserva.id)} className="eliminar">Eliminar</button>
      </div>
    )
  }
  
  export default Cita
  