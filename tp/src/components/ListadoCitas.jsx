import Cita from './Cita';

function ListadoCitas({ reservas }) {
  return (
    <div className="listado">
      <h2>Reservas</h2>
      {reservas.length === 0 ? (
        <p>No hay reservas aún</p>
      ) : (
        reservas.map((reserva) => (
          <Cita key={reserva.id} reserva={reserva} />
        ))
      )}
    </div>
  );
}

export default ListadoCitas;