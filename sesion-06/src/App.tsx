import './App.css'
import Bisabuelo from './components/Bisabuelo'
import { FamilyProvider } from './context/FamilyContext'

function App() {
  return (
    <FamilyProvider>
      <div>
        <Bisabuelo />
      </div>
    </FamilyProvider>
  )
}

export default App
