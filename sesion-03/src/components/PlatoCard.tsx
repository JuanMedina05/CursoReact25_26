import React from 'react'
import type { Plato } from '../utils/Api'

interface PlatoCardProps {
    plato:Plato
}
const PlatoCard = ({ plato }:PlatoCardProps ) => {
  return (
    <div>
      <div>
        <img src={`http://localhost.192.168.50.120:1494${plato.imagen}`} alt={plato.nombre} />
        <div>
            {plato.categoria}
        </div>
      </div>
    </div>
  )
}

export default PlatoCard
