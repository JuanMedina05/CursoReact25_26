import Padre from "./Padre"

const Abuelo = () => {
  return (
    <div className="p-4 max-w-2xl mx-auto border-4 border-green-700 bg-green-100 ">
      <div className=" p-4">
        <h1>Abuelo</h1>
      </div>
      <div className="mt-4 border-4 border-purple-200">
        <Padre/>
      </div>
    </div>
  )
}

export default Abuelo
