import Hijo from "./Hijo"

const Padre = () => {
  return (
    <div className="p-4 max-w-2xl mx-auto border-4 border-red-700 bg-red-100">
      <div className="">
        <h1>Padre</h1>
      </div>
      <div className="mt-4 border-4 border-purple-200">
        <Hijo/>
      </div>
    </div>
  )
}

export default Padre
