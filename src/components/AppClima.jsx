import React from 'react'
import Formulario from './Formulario'
import Resultado from './Resultado';
import Loading from './Loading';
import useClima from '../hooks/UseClima';

const AppClima = () => {

  const { resultado,loading, noResultado } =useClima();
  return (
    <>
        <main className='dos-columnas'>
           <Formulario/>

           { loading ? <Loading/>
           : resultado?.name ? <Resultado/> 
           : noResultado ? <p>{noResultado}</p>
           :<p>La temperatura se muestra aqui </p>
           }
           
        </main>
    </>
  )
}

export default AppClima