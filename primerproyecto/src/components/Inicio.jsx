import React, { useState } from 'react';
import Popup from './PopupSettings'

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

const Inicio = () => {

    const [dimensions, setDimensions] = useState([4,4])
    const [array, setArray] = useState([[false,false,false,false],[false,false,false,false],
                                        [false,false,false,false],[false,false,false,false]])
    const [isOpen, setIsOpen] = useState(false)

    const createArray = (e) => {
        e.preventDefault()
        console.log('se creo el array')
        const newArray = Array(dimensions[0]).fill(false).map(row => new Array(dimensions[1]).fill(false))
        setArray(newArray)
        setIsOpen(!isOpen)
    }
    const createArray2 = (e) => {
        e.preventDefault()
        console.log('se creo el array')
        const newArray = Array(dimensions[0]).fill(false).map(row => new Array(dimensions[1]).fill(false))
        setArray(newArray)
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
    }

    const pista = () => {

    }

    const solucion = () => {

    }

    const validarVictoria = () => {

    }

    const nuevoJuego = () => {
        
    }

    const changeDimensions = (a) => {
        setDimensions([a,a])
    }
    const togglePopup = () => {
        console.log('entro')
        setIsOpen(!isOpen);
      }
    return (
        <div>
            {isOpen && <Popup
                content = {<>
                    <b>Ingresa el tamaño del tablero</b>
                    {/* Acá se especifica el tamaño del tablero */}
                    <div>
                        <form onSubmit = {createArray}>
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
                            alt = "settings-button" onClick = {() => {togglePopup()}} 
                        />
                        <b className="buttons-text">Ajustes</b>
                    </div>
                    <div className = "left-button-element">
                        <input className = "left-image" type = "image" src = {rules} 
                            alt = "settings-button" 
                        />
                        <b className="buttons-text">Reglas</b>
                    </div>
                    <div className = "left-button-element">
                        <input className = "left-image" type = "image" src = {stats} 
                            alt = "settings-button" 
                        />
                        <b className="buttons-text">Estadísticas</b>
                    </div>
                </div>
                <div className = "game-container">
                        <div className = "title-text">
                            <b> LIGHTS OUT </b> 
                        </div>
                    {
                        array.map( (item, key) =>
                            <div className = "game-row">
                                {
                                    Object.keys(item).map( (item2, key2) =>
                                        <div className = "button-container">
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
                        <input className = "left-image" type = "image" src = {account} 
                            alt = "account-button"
                        />
                        <b className="buttons-text">Cuenta</b>
                    </div>
                <div className="bottom-button-element"> 
                    <input className = "bottom-image" type = "image" src = {reset}
                        alt = "reset-button" onClick = {(e) => {createArray2(e)}} 
                    />
                    <b className="buttons-text"> Reiniciar </b>
                </div>
                <div className="bottom-button-element">
                    <input className = "bottom-image" type = "image" src = {newGame}
                        alt = "newGame-button"
                    />
                    <b className="buttons-text"> Nuevo </b>
                </div>
                <div className="bottom-button-element">
                    <input className = "bottom-image" type = "image" src = {clue}
                        alt = "clue-button"
                    />
                    <b className="buttons-text"> Pista </b>
                </div>
                <div className="bottom-button-element">
                    <input className = "bottom-image" type = "image" src = {solution}
                        alt = "solution-button"
                    />
                    <b className="buttons-text"> Solucion </b>
                </div>
                <div className="bottom-button-element">
                    <input className = "bottom-image" type = "image" src = {team}
                        alt = "team-button"
                    />
                    <b className="buttons-text"> Equipo </b>
                </div>
            </div>
        </div>
    )
}

export default Inicio;