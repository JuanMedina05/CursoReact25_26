import PlatosList from './components/PlatosList'
import Header from './components/Header'
import { Suspense, useState } from 'react'
import LoadingFallBack from './components/LoadingFallBack'
import { fetchPlatos } from './utils/api'

function App() {
  // hooks
  const [platosPromise] = useState(()=>fetchPlatos());

  return (
    <div className="min-h-screen bg-gray-50 py-8 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <Header/>
        <main>
          <Suspense fallback={<LoadingFallBack message="Calentando el horno...🍽"/>}>
            <PlatosList platosPromise={platosPromise}/>
          </Suspense>
        </main>
      </div>
    </div>
  )
}

export default App
