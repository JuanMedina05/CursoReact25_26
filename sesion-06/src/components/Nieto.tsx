import useFamily from "../hooks/useFamily"

const Nieto = () => {
  const { mensaje,setMensaje } = useFamily();
  return (
    <div className="p-4 max-w-2xl mx-auto border-4 border-yellow-700 bg-yellow-100">
      <div className="border-4 border-yellow-500 p-4 bg-yellow-50">
        <h1>Nieto</h1>
        <p>
          <strong>{mensaje}</strong>
        </p>
        <button onClick={()=>{setMensaje("Mensaje actualizado desde nieto")}}>
          Actualizar mensaje
        </button>
      </div>
    </div>
  )
}

export default Nieto
