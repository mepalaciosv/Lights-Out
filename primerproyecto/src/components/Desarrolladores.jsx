import React from 'react'
import margarita from './imgs/margarita.jpg';
import andres from './imgs/andres.png';
import camilo from './imgs/camilo.jfif';
import equipo from './imgs/equipo.png'
import before from './imgs/atras.png';
import "./Desarrolladores.css";

import {
  Link
} from 'react-router-dom'

const Desarrolladores = () => {
    return (
        <div>
          <Link to = "/">
            <input className = "retroceso" type = "image" src = {before} 
                                alt = "home-button" />
          </Link>
          <div>
            <img src = {equipo} className = "imagenSuperior" alt = "imagenSuperior"/>
            <h1 className = "encabezado">Equipo</h1>
          </div>

          <div className = "stats-container">
            <div className = "column">
              <img src = {andres} className = "imagenEquipo" alt = "imagenSuperior"/>
              <h1 className = "desarrollador">Andrés Romero</h1>
              <h1 className = "descripcion">Ingeniero Químico e Industrial</h1>
              <a className = "contacto" href="https://github.com/AndresFRomero">github.com/AndresFRomero</a>
            </div>
            <div className="column">
            <img src = {margarita} className = "imagenEquipo" alt = "imagenSuperior"/>
              <h1 className = "desarrollador">Margarita Palacios</h1>
              <h1 className = "descripcion">Matemática e Ingeniera Mecánica</h1>
              <a className = "contacto" href="https://github.com/mepalaciosv">github.com/mepalaciosv</a>
            </div>
            <div className="column">
            <img src = {camilo} className = "imagenEquipo" alt = "imagenSuperior"/>
              <h1 className = "desarrollador">Camilo Torres</h1>
              <h1 className = "descripcion">Estudiante de Ingeniería de Sistemas</h1>
              <a className = "contacto" href="https://github.com/torrescamilo1998">github.com/torrescamilo1998</a>
            </div>
          </div>

        </div>
    )
}

export default Desarrolladores
