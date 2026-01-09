// Crear un componente llamado saludo que lance un saludo personalizado
// a través de las props
import React from 'react'

// interfaz
interface SaludoProps {
    nombre: string;
    edad: number;
}

const Saludo = ({nombre,edad}:SaludoProps) => {
  return (
    <div className="p-4 bg-green-300 rounded-lg shadow">
        <h2 className='text-2xl font-bold'>Hola, {nombre}!</h2>
        <p>Tienes {edad} años.</p>
    </div>
  )
}

export default Saludo
