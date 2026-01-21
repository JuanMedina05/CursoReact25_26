import { useState } from 'react'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Concat from './components/Concat'
import About from './components/About'
import NotFound from './components/NotFound'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header/>
      <main className="max-w-4xl mx-auto mt-10 bg-white shadow-md border border-slate-200">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/contact" element={<Concat/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </main>
    </div>
  )
}

export default App