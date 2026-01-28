import Abuelo from "./Abuelo"

const Bisabuelo = () => {
  return (
    <div className="p-4 max-w-2xl mx-auto">
      <div className="border-4 border-purple-500 p-3 bg-purple-50">
        <h1 className="text-xl font-bold">Bisabuelo</h1>
      
      <div className="mt-4 border-4 border-purple-200">
        <p>Aquí empieza el árbol genealógico de los componentes utilizando Context
          <strong></strong>
        </p>
        
        <Abuelo/>
        </div>
      </div>
    </div>
  )
}

export default Bisabuelo
