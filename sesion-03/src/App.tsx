import React from 'react'
import PlatosList from './components/PlatosList'

function App() {


  return (
    <div className="min-h-screen bg-gray-50 py-8 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Platos 
            <span className="text-orange-600 ml-2">
               PREMIUM 
            </span>
          </h1>
          <p>Explora nuestra carta de platos internacionales Usando: React19</p>
        </header>
        <main>
          <PlatosList />
        </main>
      </div>
    </div>
  )
}

export default App
