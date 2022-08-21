import React,{ useState} from 'react';
import useClima from '../hooks/UseClima';


const Formulario = () => {

    const [alerta,setAlerta] = useState('')
    const { busqueda, datosBusqueda, consultarClima} = useClima()

    const { ciudad, pais } = busqueda

    const handleSubmit = (e) => {
      e.preventDefault()
      
      if(Object.values(busqueda).includes('')){
        setAlerta('Campos Obligatorios');
        return
      }
      setAlerta('')
      consultarClima(busqueda)
    }
        return (
            <div className='contenedor'>

            {alerta && <p>{alerta}</p>}

            <form onSubmit={handleSubmit}>
                <div className='campo'>
                <label htmlFor='ciudad'>Cuidad</label>
                <input type='text'
                        id='ciudad'
                        name='ciudad'
                        onChange={datosBusqueda}
                        value={ciudad}
                    />
                </div>
                <div className='campo'>
                <label htmlFor='pais'>Pais</label>
                    <select 
                    id='pais'
                    name='pais'
                    onChange={datosBusqueda}
                    value={pais}
                    >
                        <option value=''>Selecciona pais</option>
                        <option value='ES'>España</option>
                        <option value='US'>EEUU</option>
                        <option value='MX'>Mexico</option>
                        <option value='PT'>Portugal</option>
                        <option value='IT'>Italia</option>
                    </select>
                </div>
                <input type='submit' value='Consultar'/>
            </form>
            
            </div>
        )
}

export default Formulario