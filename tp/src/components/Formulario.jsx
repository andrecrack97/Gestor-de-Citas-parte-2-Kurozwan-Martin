import { useState } from 'react'

function Formulario({ agregarReserva }) {
  const [equipo, setEquipo] = useState('')
  const [responsable, setResponsable] = useState('')
  const [fecha, setFecha] = useState('')
  const [hora, setHora] = useState('')
  const [comentarios, setComentarios] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    // Validación básica
    if ([equipo, responsable, fecha, hora].includes('')) {
      alert('Por favor completá todos los campos obligatorios.')
      return
    }

    const nuevaReserva = {
      id: Date.now(),
      equipo,
      responsable,
      fecha,
      hora,
      comentarios
    }

    agregarReserva(nuevaReserva)

    // Limpiar campos
    setEquipo('')
    setResponsable('')
    setFecha('')
    setHora('')
    setComentarios('')
  }

  return (
    <div>
      <h2>Crear Reserva</h2>
      <form onSubmit={handleSubmit}>
        <label>Nombre del Equipo</label>
        <input type="text" value={equipo} onChange={e => setEquipo(e.target.value)} placeholder="Ej: Los de Siempre" />

        <label>Responsable</label>
        <input type="text" value={responsable} onChange={e => setResponsable(e.target.value)} placeholder="Nombre del responsable" />

        <label>Fecha</label>
        <input type="date" value={fecha} onChange={e => setFecha(e.target.value)} />

        <label>Hora</label>
        <input type="time" value={hora} onChange={e => setHora(e.target.value)} />

        <label>Comentarios</label>
        <textarea value={comentarios} onChange={e => setComentarios(e.target.value)} placeholder="Ej: jugamos 8 vs 8, llevamos pelota" />

        <button type="submit">Agregar Reserva</button>
      </form>
    </div>
  )
}

export default Formulario
