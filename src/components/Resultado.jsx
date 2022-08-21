import React from 'react';
import useClima from '../hooks/UseClima';

const Resultado = () => {

    const { resultado } =useClima();
    const { name, main } =resultado;
    const gradosKelvin=273.15
  return (
    <div className='contenedor clima'>
         <h2> La temperatura en {name} :</h2>
         <p>{parseInt(main.temp -gradosKelvin)}<span>&#x2103;</span></p>
         <div className="temp_min_max">
                <p>
                Mín: { parseInt(main.temp_min - gradosKelvin) } <span>&#x2103;</span>
                </p>
                <p>
                Máx: { parseInt(main.temp_max - gradosKelvin) } <span>&#x2103;</span>
                </p>
        </div>
    </div>
  )
}

export default Resultado