import React, { useState } from 'react';
import reset from './imgs/reiniciar.png'
import settings from './imgs/ajustes.png'
import Popup from './PopupSettings'

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
        console.log(a,b)
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
                    <div className = "stats-container">
                        <div className = "stats-icons">
                            <input className = "stats-icons" type = "image" src = {reset} 
                                    alt = "reset-button" onClick = {(e) => {createArray2(e)}} 
                            />
                        </div>
                        <div className = "time-counter">
                            <b>  Tiempo: 1:23:02s </b> 
                        </div>
                        <div className = "stats-icons">
                            <input className = "stats-icons" type = "image" src = {settings} 
                                    alt = "settings-button" onClick = {() => {togglePopup()}} 
                            />
                        </div>
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
                <div className = "right-container">
            </div>
            </div>
        </div>
    )
}

export default Inicio;