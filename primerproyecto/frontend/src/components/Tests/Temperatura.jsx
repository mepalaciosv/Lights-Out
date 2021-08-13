import React, {Fragment, useState} from 'react'

const Temperatura = () => {

    const [numero, setNumero] = useState(19);
    const Aumentar = () => {
        setNumero(numero+1)
    }
    const Reducir = () => {
        setNumero(numero-1)
    }

    return (
        // Acá se escribe codigo HTML
        <Fragment>
            <h1 className="container-fluid"> Temperatura: {numero} °C </h1>
            <p>
                { numero > 22 ? "Hace calor" : "Hace frio"}
            </p>
            <button className ="btn btn-success btn-block" onClick = {Aumentar}> Aumentar </button>    
            <button className ="btn btn-primary" onClick = {Reducir}> Reducir </button>
        </Fragment>
    )
}

export default Temperatura;
