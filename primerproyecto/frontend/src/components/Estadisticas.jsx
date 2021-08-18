import React, {useState, useEffect} from 'react';
import imagen from './imgs/estadisticas.png';
import before from './imgs/atras.png';
import axios from 'axios'
import "./Estadisticas.css";

import {
  Link
} from 'react-router-dom'

const Estadisticas = () => {

  const [games, setGames] = useState(0)
  const [wins, setWins] = useState(0)
  const [clues, setClues] = useState(0)
  const [solutions, setSolutions] = useState(0)

  useEffect( () => {
    async function fetchData() {
      const res = await axios.get('http://localhost:8000/users/find/'+sessionStorage.getItem('userId'))
      setGames(res.data['games'])
      setWins(res.data['wins'])
      setClues(res.data['clues'])
      setSolutions(res.data['solutions'])
    }
    fetchData()
  }, [])

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

        <div className = "stats-container">
          <div className = "stats-column">
            <h1 className = "textoMenor">Partidas</h1>
            
            <div className = "stats-container">
              <div className = "column">
                <h1 className = "numeros">{wins}</h1>
                <h1 className = "textoMenor">Ganadas</h1>
              </div>
              <div className="column">
                <h1 className = "numeros">{games}</h1>
                <h1 className = "textoMenor">Jugadas</h1>
              </div>
            </div>

          </div>
          <div className="stats-column">
            <h1 className = "textoMenor">Ayudas</h1>

            <div className = "stats-container">
              <div className = "column">
                <h1 className = "numeros">{clues}</h1>
                <h1 className = "textoMenor">Pistas</h1>
              </div>
              <div className="column">
                <h1 className = "numeros">{solutions}</h1>
                <h1 className = "textoMenor">Soluciones</h1>
              </div>
            </div>

          </div>
        </div>

      </div>
    );
}
export default Estadisticas;
