import React from 'react'

const Fail = () => {
    return (
        <div id='card'>
        <div id='upper-side-fail'>
          <h3 id='status'> <b> Registro Fallido </b> </h3> 
        </div>
        <div id='lower-side'>
          <p id='message'>
             Ya hay alguien con tu usuario o correo, intentalo denuevo
          </p>
         <a href="/Register" id="contBtn-fail">Reintentar Registro</a>
        </div>
      </div>
    )
}

export default Fail;