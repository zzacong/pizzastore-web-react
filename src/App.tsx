import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './App.css'
import PizzaList from './components/PizzaList'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <PizzaList />
      </div>
    </QueryClientProvider>
  )
}

export default App
