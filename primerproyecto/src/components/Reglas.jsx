import React from 'react'
import before from './imgs/atras.png';
import {
    Link
  } from 'react-router-dom'

const Reglas = () => {
    return (
        <div>
            <Link to = "/">
              <input className = "retroceso" type = "image" src = {before} 
                                alt = "home-button" />
            </Link>
            <div className="buttons-text">
                <b> REGLAS </b>
                <ul> 1. Apaga todas las luces </ul> 
                <ul> 2. Cuando alternas una luz, sus vecinas también lo hacen </ul> 
                <ul> 3. Usa pistas cuándo te estanques </ul> 
                <ul> 4. Ve nuestra solución si aún no puedes lograrlo </ul> 
            </div>
            
        </div>
    )
}

export default Reglas
