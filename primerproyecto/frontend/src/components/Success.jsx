import React from 'react'

const Success = () => {
    return (
        <div id='card'>
        <div id='upper-side'>
          <h3 id='status'> <b> Registro Exitoso </b> </h3> 
        </div>
        <div id='lower-side'>
          <p id='message'>
             Felicitaciones, tu cuenta ha sido creada satisfactoriamente
          </p>
         <a href="/" id="contBtn">Jugar</a>
        </div>
      </div>
    )
}

export default Success;