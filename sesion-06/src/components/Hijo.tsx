import Nieto from "./Nieto"


const Hijo = () => {
  return (
    <div className="p-4 max-w-2xl mx-auto border-4 border-orange-700 bg-orange-100">
      <div className="border-4 border-orange-500 p-4 bg-orange-50">
        <h1>Hijo</h1>
      </div>
      <div className="mt-4 border-4 border-purple-200">
        <Nieto/>
      </div>
    </div>
  )
}

export default Hijo
