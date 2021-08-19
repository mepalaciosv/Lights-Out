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
                <h3> <b>  REGLAS  </b> </h3>
                <li> Apaga todas las luces </li>
                <li> Cuando alternas una luz, sus vecinas también lo hacen</li>
                <li> Usa pistas cuándo te estanques </li>
                <li> Ve nuestra solución si aún no puedes lograrlo </li>
            </div>
            
        </div>
    )
}

export default Reglas
