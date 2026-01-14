import React from 'react'
// Crear un componente llamado botón que le pase como props un texto el tipo de botón y el evneto onClick.
// El tipo de botón lo llamaré tipoBoton y tendrá tres posibles tipos : "primary", "secondary" y "danger".
// Si es primary tendrá un bg azul 500 y hover bg azul 700.
// Si es secondary tendrá un bg gris 500 y hover bg gris 700.
// Si es danger tendrá un bg rojo 500 y hover bg rojo 700.
// Todos con texto blanco.

type TipoBoton = "primary" | "secondary" | "danger";
interface BotonProps {
    texto: string;
    tipo: TipoBoton;
    submit: boolean;
    onClick: () => void;
}
const Boton = ({ texto, tipo, submit, onClick }:BotonProps) => {
    const estilos ={
        primary: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",
        secondary: "bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded",
        danger: "bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"

    }
  return (
    <button
        type={submit ? "submit" : "button"}
        className={`px-4 py-2 rounded ${estilos[tipo]}`}
        onClick={onClick}
    >{texto}</button>
  )
}

export default Boton
