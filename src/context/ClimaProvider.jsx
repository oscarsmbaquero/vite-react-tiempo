import { useState, createContext } from 'react';
import axios from 'axios';

const ClimaContext = createContext()

const ClimaProvider =({children}) => {

    const [busqueda,setBusqueda] = useState({
        ciudad: '',
        pais: ''
    })
    
    const [resultado, setResultado] = useState({})
    const [loading, setLoading] = useState(false)
    const [noResultado, setNoResultado] = useState(false)

    const datosBusqueda = (e) => {
        setBusqueda({
            ...busqueda,
            [e.target.name]:e.target.value
        })
    }

    const consultarClima = async (datos)=>{
          setLoading(true)
          setNoResultado(false)
       try {
          const { ciudad, pais } = datos

          const appId = import.meta.env.VITE_API_KEY
        //   const url = `http://api.openweathermap.org/geo/1.0/direct?q=${ciudad},${pais}&limit=1&appid=${appId}`

        //   const { data } = await axios(url)
        //   const { lat, lon } = data[0]
        //   console.log(lat,lon);

          //const urlClima = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`
          const urlClima = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&APPID=1aa4650ee2366b3e966491cab7e240a8`
          const { data: tiempo } = await axios(urlClima)
          setResultado(tiempo);
          
          console.log(tiempo);

       } catch (error) {

        setNoResultado('Ciudad no encontrada')
       }finally{
        setLoading(false);
       }
       
    }

    return (
        <ClimaContext.Provider
            value={{
                busqueda,
                datosBusqueda,
                consultarClima,
                resultado,
                loading,
                noResultado
            }}
        >
            {children}
        </ClimaContext.Provider>
    )
}

export {
    ClimaProvider
}

export default ClimaContext