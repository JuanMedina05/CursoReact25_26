import React from 'react'
// ------ Uso de RENDERIZADO CONDICIONAL en componentes y propiedades ------
interface TarjetaProps {
    title: string;
    description: string;
    image?: string;
    favorite?: boolean;
}

const Tarjeta = ({title,description,image,favorite=false}:TarjetaProps) => {
  // Renderizado condicional: muestro la imagen si existe
    return (
    <div className={`rounded-lg shadow-md p-6 ${favorite ? "bg-yellow-200" : "bg-white"}`}>
        {image && (
            <img src={image} alt={title} className="w-full h-48 object-cover mb-4 rounded"/>
            
        )}
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-700">{description}</p>
        {favorite && (
            <span className="text-red-500 font-bold mt-2 block">★ Favorito</span>
        )}  
    </div>
  )
}

export default Tarjeta
