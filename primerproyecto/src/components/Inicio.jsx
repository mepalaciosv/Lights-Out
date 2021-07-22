import React, { useState } from 'react';

const Inicio = () => {

    // Antes del return se puede poner codigo JS

    const [dimensions, setDimensions] = useState([4,4])
    const [array, setArray] = useState([[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]])

    const createArray = (e)=> {
        e.preventDefault()
        console.log('se creo el array')
        const newArray = Array(dimensions[0]).fill(0).map(row => new Array(dimensions[1]).fill(0))
        setArray(newArray)

    }

    const changeColor = (a,b) => {

        const aN = Number(a)
        const bN = Number(b)
        const newArray = [...array]

        if (newArray[aN][bN] === 1) {
            newArray[aN][bN] = 0
        } else {
            newArray[aN][bN] = 1
        }
        
        setArray( newArray )  
    }

    const changeDimensions = (a) => {
        setDimensions([a,a])
    }
    
    return (

        // En el return se puede escribir codigo .html
        <div>
            {/* Acá se especifica el tamaño del tablero */}
            <div>
            <form onSubmit={createArray}>
                <input 
                    placeholder = "Ingresa el tamaño"
                    className = "form-control mb-3"
                    type = "text"
                    onChange = {(e) => {changeDimensions(Number(e.target.value))}}
                />
                {/* Boton de submit */}
                <input 
                        className = "btn btn-info btn-block mb-3"
                        type = "submit"
                />

            </form>
                
            </div>

            {/* Tablero de juego que se crea de forma dinamica */}
            <div className="game-board">     
                {
                    array.map( (item, key) =>
                        <div>
                            {
                                Object.keys(item).map( (item2, key2) =>
                                    <div>
                                        <button className = {array[key][key2] === 1 ? 'on-button' : 'off-button' } 
                                        type="button" onClick = { () => {changeColor(key,key2)} } > 
                                            Light 
                                        </button>
                                    </div>
                                )
                            }
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Inicio;