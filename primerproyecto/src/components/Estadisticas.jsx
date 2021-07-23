import React from 'react';
import imagen from '../images/estadisticas.png';
import "./Estadisticas.css";

const Estadisticas = () => {

  return (
    <div>
      <div>
        <img src = {imagen} className = "imagenSuperior" alt = "imagenSuperior"/>
        <h1 className = "encabezado">Estadísticas</h1>
      </div>
      <div>
        <h1 className = "numeros">01:50:35</h1>
        <h1 className = "textoTiempo">Tiempo de juego</h1>
      </div>
    </div>
  );
}
export default Estadisticas;
