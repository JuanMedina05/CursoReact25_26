import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './components/About'
import NotFound from './components/NotFound'
import Navbar from './components/Navbar'
import Saludo from './components/Saludo'

function App() {
  return (
    <div>
      <Header/>
      <Navbar/>
      <main className="max-w-4xl mx-auto mt-10 bg-white shadow-md border border-slate-200 borderZ ">
      
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/saludo/:nombre" element={<Saludo/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </main>
    </div>
  )
}

export default App