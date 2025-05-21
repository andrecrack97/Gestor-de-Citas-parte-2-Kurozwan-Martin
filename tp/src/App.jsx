import { useState } from 'react'
import './App.css'
import Formulario from './components/Formulario'
import ListadoReservas from './components/ListadoCitas'

function App() {
  const eliminarReserva = (id) => {
    setReservas(reservas.filter(reserva => reserva.id !== id))
  }

  const [reservas, setReservas] = useState([
    {
      id: 1,
      equipo: 'Los Pibes del Fondo',
      responsable: 'Tomi',
      fecha: '2025-04-20',
      hora: '22:00',
      comentarios: 'Traer pelotas y pecheras'
    }
  ])

  const agregarReserva = (reserva) => {
    setReservas([...reservas, reserva])
  }

  return (
    <div className="contenedor-app">
      <h1>Serrano Corner – Reserva de Canchas</h1>
      <div className="contenido-principal">
        <Formulario agregarReserva={agregarReserva} />
        <ListadoReservas reservas={reservas} eliminarReserva={eliminarReserva} />
      </div>
    </div>
  )
}

export default App
