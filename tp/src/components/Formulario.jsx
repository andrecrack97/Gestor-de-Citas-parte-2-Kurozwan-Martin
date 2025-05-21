function Formulario() {
    return (
      <div>
        <h2>Crear Reserva</h2>
        <form>
          <label>Nombre del Equipo</label>
          <input type="text" placeholder="Ej: Los de Siempre" />
  
          <label>Responsable</label>
          <input type="text" placeholder="Nombre del responsable" />
  
          <label>Fecha</label>
          <input type="date" />
  
          <label>Hora</label>
          <input type="time" />
  
          <label>Comentarios</label>
          <textarea placeholder="Ej: jugamos 8 vs 8, llevamos pelota" />
  
          <button type="submit">Agregar Reserva</button>
        </form>
      </div>
    )
  }
  
  export default Formulario