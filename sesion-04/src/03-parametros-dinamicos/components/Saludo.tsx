import { Link, useParams } from "react-router-dom"

const Saludo = () => {
  const { nombre } = useParams<{ nombre: string }>()
    return (
    <div className="p-20 text-center duration-500">
        <title>Saludos a {nombre}</title>
        <meta
          name="description"
          content={`Página de saludo para ${nombre}`}
        />
        <div className="text-6xl mb-6">
            <h1 className="text-6xl text-slate-900">¡Hola, {nombre}!</h1>
            <p className="mt-5 italic">Dato recuperado con el hook useParams</p>
        </div>
        <Link to="/" className="text-orange-600 hover:text-orange-400 text-2xl transition-all active:scale-95">Volver al inicio</Link>
    </div>
  )
}

export default Saludo
