import React from 'react'


// Crear un componente buscar que permita buscar por nombre de plato
// o por ingrediente
const Search = () => {
    const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        
    }
  return (
    <div className="">
      <input onChange={onChange} type="text" placeholder="Buscar plato o ingrediente..." className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"/>
    </div>
  )
}

export default Search
