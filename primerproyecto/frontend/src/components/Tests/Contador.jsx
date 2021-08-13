import React, {Fragment, useState} from 'react'

const Contador = () => {
    
    //  Acá se hace codigo JavaScript
    const [numero, setNumero] = useState(0)

    const Aumentar = () => {
        setNumero(numero+1)
    }
    const Reducir = () => {
        setNumero(numero-1)
    }

    return (
        // Acá se escribe codigo HTML

        <Fragment>
            <h1> Contador: {numero} </h1>
            <button onClick = {Aumentar}> Aumentar </button>    
            <button onClick = {Reducir}> Reducir </button>
        </Fragment>
    )
}

export default Contador
