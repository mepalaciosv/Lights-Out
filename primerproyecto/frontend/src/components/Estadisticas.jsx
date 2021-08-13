import React from 'react';
import imagen from './imgs/estadisticas.png';
import before from './imgs/atras.png';
import "./Estadisticas.css";

import {
  Link
} from 'react-router-dom'

const Estadisticas = () => {

  return (
    <div>
        <Link to = "/">
          <input className = "retroceso" type = "image" src = {before} 
                                alt = "home-button" />
        </Link>
      <div>
        <img src = {imagen} className = "imagenSuperior" alt = "imagenSuperior"/>
        <h1 className = "encabezado">Estadísticas</h1>
      </div>

      <div>
        <h1 className = "numeros">01:50:35</h1>
        <h1 className = "textoMenor">Tiempo de juego</h1>
      </div>
      
      <div class = "stats-container">
        <div class = "stats-column">
          <h1 className = "textoMenor">Partidas</h1>
          
          <div class = "stats-container">
            <div class = "column">
              <h1 className = "numeros">5</h1>
              <h1 className = "textoMenor">Ganadas</h1>
            </div>
            <div class="column">
              <h1 className = "numeros">15</h1>
              <h1 className = "textoMenor">Jugadas</h1>
            </div>
          </div>

        </div>
        <div class="stats-column">
          <h1 className = "textoMenor">Ayudas</h1>

          <div class = "stats-container">
            <div class = "column">
              <h1 className = "numeros">8</h1>
              <h1 className = "textoMenor">Pistas</h1>
            </div>
            <div class="column">
              <h1 className = "numeros">2</h1>
              <h1 className = "textoMenor">Soluciones</h1>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
export default Estadisticas;
