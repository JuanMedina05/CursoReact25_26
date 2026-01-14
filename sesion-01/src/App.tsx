import { useState } from 'react'
import Header from './components/Header'
//import './App.css'
import Saludo from './components/Saludo'
import Tarjeta from './components/Tarjeta'
import ForumalrioUsuario from './components/ForumalrioUsuario'
import FormularioLogin from './components/FormularioLogin'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Saludo nombre="Juan" edad={20}/>
      <Tarjeta 
        title="lomo" 
        description="lomillo al ajillo"
        image=""
      />
      <ForumalrioUsuario/>
      <FormularioLogin/>
    </>
  )
}

export default App
