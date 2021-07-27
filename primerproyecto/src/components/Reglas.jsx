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
                1. Apaga todas las luces
                2. Cuando alternas una luz, sus vecinas también lo hacen
                3. Usa pistas cuándo te estanques
                4. Ve nuestra solución si aún no puedes lograrlo
            </div>
            
        </div>
    )
}

export default Reglas
