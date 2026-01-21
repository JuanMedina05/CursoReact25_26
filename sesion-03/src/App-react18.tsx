import Header from './components/Header';
import { useFetch } from './hooks/useFetch'
import { API_CONFIG, type Plato } from './types/lomo';
import PlatosList from './components/PlatosList';
import LoadingFallBack from './components/LoadingFallBack';

const App = () => {
    const url = `${API_CONFIG.BASE_URL}${API_CONFIG.PLATOS_ENDPOINT}`;
    const {data:platos,loading,error }=useFetch<Plato[]>(url)
  return (
    <div className="min-h-screen bg-gray-50 py-8 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <Header/>
        <main>
          {loading && (<LoadingFallBack message="Cargando platos...🍽"/>)}
          {error && (<div>Error cargando</div>)}
            {platos && (
                <div className="mt-8">
                    {platos.map((plato:Plato)=>(
                        //<PlatosList key={plato.id} plato={plato}/>
                        0
                    ))}

                </div>
            )}
        </main>
      </div>
    </div>
  )
}

export default App
