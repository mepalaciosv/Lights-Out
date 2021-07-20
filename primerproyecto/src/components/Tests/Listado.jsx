import React, {Fragment, useState} from 'react'

const Listado = () => {
    // Se crea una lista de numeros
    const [numeros] = useState(["it1","it2","it3",4,5,6,7])

    return (
        <Fragment>
            <ul>
                {
                    numeros.map( (item,index) => 
                        <li key = {index}>{item}-{index}</li>
                    )
                }
                
            </ul>
        </Fragment>
    )
}

export default Listado;
