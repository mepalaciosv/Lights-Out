import React, { useState, useEffect } from 'react';
import Popup from './PopupSettings'
import axios from 'axios';

// Importaciones para enrutar
import {
    Link
  } from 'react-router-dom'

// Import de imagenes
import settings from './imgs/ajustes.png'
import rules from './imgs/reglas.png'
import stats from './imgs/estadisticas.png'
import account from './imgs/cuenta.png'
import newGame from './imgs/nuevo.png'
import clue from './imgs/pista.png'
import solution from './imgs/solucion.png'
import team from './imgs/equipo.png'
import reset from './imgs/reiniciar.png'

import './Inicio.css'

const Inicio = () => {

    const [isOpen, setIsOpen] = useState(false)

    const [dimensions, setDimensions] = useState([4,4])

    const [array, setArray] = useState([])
    const [solArray, setSolArray] = useState([])
    const [showSol, setShowSol] = useState(false)

    useEffect( () => {

    }, [array, solArray])

    const updateDB = (a,b,c,d) => {
        if (sessionStorage.getItem("userId") !== null ){
            axios.post('http://localhost:8000/users/update/'+sessionStorage.getItem('userId'), {data:{}}, {params: {games:a, wins: b, solutions:c, clues:d}})
        }
    }
    const changeColor = (a,b) => {
        
        const aN = Number(a)
        const bN = Number(b)
        const newArray = [...array]

        newArray[aN][bN] = !newArray[aN][bN]
        if(aN-1 >= 0){
            newArray[aN-1][bN] = !newArray[aN-1][bN]
        }
        if(aN+1 < dimensions[0]){
            newArray[aN+1][bN] = !newArray[aN+1][bN]
        }
        if(bN-1 >= 0){
            newArray[aN][bN-1] = !newArray[aN][bN-1]
        }
        if(bN+1 < dimensions[1]){
            newArray[aN][bN+1] = !newArray[aN][bN+1]
        }


        setArray( newArray )  

        const newSolArray = [...solArray]
        newSolArray[aN][bN] = !newSolArray[aN][bN]

        setSolArray(newSolArray)

        // Se verifica si se encontró solucion
        validarVictoria(newArray)
    }

    const createArray = (e, pop) => {

        e.preventDefault()
        const newArray = Array(dimensions[0]).fill(false).map(row => new Array(dimensions[1]).fill(false))
        const newSolArray = Array(dimensions[0]).fill(false).map(row => new Array(dimensions[1]).fill(false))

        for (var i=0; i < dimensions[0] ; i++){
            for (var j=0; j < dimensions[1] ; j++) {

                let action = Math.random() < 0.2
                newSolArray[i][j] = action

                if(action) {
                    newArray[i][j] = !newArray[i][j]
                    if(i-1 >= 0){
                        newArray[i-1][j] = !newArray[i-1][j]
                    }
                    if(i+1 < dimensions[0]){
                        newArray[i+1][j] = !newArray[i+1][j]
                    }
                    if(j-1 >= 0){
                        newArray[i][j-1] = !newArray[i][j-1]
                    }
                    if(j+1 < dimensions[1]){
                        newArray[i][j+1] = !newArray[i][j+1]
                    }
                }
            }
        }

        setSolArray(newSolArray)
        setArray(newArray)

        if (pop) {
            setIsOpen(!isOpen)
        }
            updateDB(1,0,0,0)
    }

    const pista = () => {
        if (!showSol) {
            updateDB(0,0,0,1)
        }
        setShowSol(!showSol)
    }

    const showSolution = () => {
        if (!showSol) {
            updateDB(0,0,1,0)
        }
        setShowSol(!showSol)
    }

    const validarVictoria = (array) => {

        let win = true

        for( var i=0; i < dimensions[0] ; i++) {
            for (var j=0; j < dimensions[1] ; j++) {
                if (array[i][j]){
                    win = false
                }
            }
        }
        if (win) {
            console.log("Gano la partida")
            setShowSol(false)
            alert('Has ganado. :D');
            updateDB(0,1,0,0)
        }
    }

    const changeDimensions = (a) => {
        setDimensions([a,a])
    }
    const togglePopup = () => {
        setIsOpen(!isOpen);
      }
    return (
        <div>
            {/* POPUP de tamaño */}
            {isOpen && <Popup
                content = {<>
                    <b>Ingresa el tamaño del tablero</b>
                    {/* Acá se especifica el tamaño del tablero */}
                    <div>
                        <form onSubmit = {(e) => createArray(e, true)}>
                            <p></p>
                            <input 
                                placeholder = "Ingresa un número entero"
                                className = "form-control mb-3"
                                type = "text"
                                onChange = { (e) => {changeDimensions(Number(e.target.value))} }
                            />
                            {/* Boton de submit */}
                            <input 
                                    className = "btn btn-warning btn-block mb-3"
                                    type = "submit"
                            />
                        </form>
                    </div>
                </>}
                handleClose = {togglePopup}
            />}
            <div className = "main-container">
                <div className = "left-container">
                    <div className = "left-button-element">
                        <input className = "left-image" type = "image" src = {settings} 
                            alt = "settings-button" onClick = {() => {togglePopup()}} />
                        <b className = "buttons-text" onClick = {() => {togglePopup()}} > Ajustes </b>
                    </div>
                    <div className = "left-button-element">
                        <Link className = 'link' to="./Reglas">
                            <input className = "left-image" type = "image" src = {rules} 
                                alt = "settings-button" />
                            <b className="buttons-text">Reglas</b>
                        </Link>
                    </div>
                    <div className = "left-button-element">
                        <Link className = 'link' to = "./Estadisticas">
                            <input className = "left-image" type = "image" src = {stats} 
                                alt = "settings-button" />
                        <b className="buttons-text">Estadísticas</b>
                        </Link>
                    </div>
                </div>
                <div className = "game-container">
                        <div className = "title-text">
                            <b> LIGHTS OUT {sessionStorage.getItem('userName')}</b> 
                        </div>
                    {
                        array.map( (item, key) =>
                            <div className = "game-row">
                                {
                                    Object.keys(item).map( (item2, key2) =>
                                        <div className = { (solArray[key][key2] && showSol) === true ? 'button-container-sol' : 'button-container'}>
                                            <button className = {array[key][key2] === true ? 'on-button' : 'off-button' } 
                                            type="button" onClick = { () => {changeColor(key,key2)} } > </button>
                                        </div>
                                    )
                                }
                            </div>
                        )
                    }
                </div>
            </div>
            <div className="bottom-container">
                <div className = "left-button-element">
                        <Link className = 'link' to={ sessionStorage.getItem('userId') === null ? "./Login" : "./Account" }>
                            <input className = "left-image" type = "image" src = {account} 
                                alt = "account-button"/>
                        <b className="buttons-text">Cuenta</b>
                        </Link>
                    </div>
                <div className="bottom-button-element"> 
                    <input className = "bottom-image" type = "image" src = {reset}
                        alt = "reset-button" onClick = {(e) => {createArray(e, false)}} />
                    <b className="buttons-text" onClick = {(e) => {createArray(e, false)}}> Reiniciar </b>
                </div>
                <div className="bottom-button-element">
                    <input className = "bottom-image" type = "image" src = {newGame}
                        alt = "newGame-button" onClick = {(e) => {createArray(e, false)}}/>
                    <b className="buttons-text" onClick = {(e) => {createArray(e, false)}}> Nuevo </b>
                </div>
                <div className="bottom-button-element">
                    <input className = "bottom-image" type = "image" src = {clue}
                        alt = "clue-button" onClick = { ()=> {pista() }} />
                    <b className="buttons-text"> Pista </b>
                </div>
                <div className="bottom-button-element">
                    <input className = "bottom-image" type = "image" src = {solution}
                        alt = "solution-button" onClick = { ()=> {showSolution() }} />
                    <b className="buttons-text"> Solución </b>                    
                </div>
                <div className="bottom-button-element">
                    <Link className = 'link' to="./Desarrolladores">
                        <input className = "bottom-image" type = "image" src = {team}
                            alt = "team-button"/>
                    <b className="buttons-text"> Equipo </b>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Inicio;