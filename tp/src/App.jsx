import { useState, useEffect } from 'react';
import './App.css';
import Formulario from './components/Formulario';
import ListadoReservas from './components/ListadoCitas';

function App() {
  // Leer reservas desde localStorage al iniciar
  const [reservas, setReservas] = useState(() => {
    const datosGuardados = localStorage.getItem('reservas');
    return datosGuardados
      ? JSON.parse(datosGuardados)
      : [
          {
            id: 1,
            equipo: 'Los Pibes del Fondo',
            responsable: 'Tomi',
            fecha: '2025-04-20',
            hora: '22:00',
            comentarios: 'Traer pelotas y pecheras',
          },
        ];
  });

  useEffect(() => {
    localStorage.setItem('reservas', JSON.stringify(reservas));
  }, [reservas]);

  const agregarReserva = (reserva) => {
    setReservas([...reservas, reserva]);
  };

  const eliminarReserva = (id) => {
    setReservas(reservas.filter((reserva) => reserva.id !== id));
  };

  return (
    <div className="contenedor-app">
      <h1>Serrano Corner – Reserva de Canchas</h1>
      <div className="contenido-principal">
        <Formulario agregarReserva={agregarReserva} />
        <ListadoReservas reservas={reservas} eliminarReserva={eliminarReserva} />
      </div>
    </div>
  );
}

export default App;
