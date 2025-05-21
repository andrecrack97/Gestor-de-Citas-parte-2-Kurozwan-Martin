import { useState } from 'react'
import './App.css'
import Formulario from './components/Formulario'
import ListadoReservas from './components/ListadoCitas'

function App() {
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

  return (
    <div className="contenedor-app">
      <h1>Serrano Corner – Reserva de Canchas</h1>
      <div className="contenido-principal">
        <Formulario />
        <ListadoReservas reservas={reservas} />
      </div>
    </div>
  )
}

export default App