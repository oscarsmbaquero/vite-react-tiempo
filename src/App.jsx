import { useState } from 'react'
import AppClima from './components/AppClima';
import { ClimaProvider } from './context/ClimaProvider'


function App() {
  

  return (
    <ClimaProvider>
       <header>
          <h1>Consulta el tiempo</h1>
       </header>
       <AppClima/>
    </ClimaProvider>
    
  )
}

export default App
