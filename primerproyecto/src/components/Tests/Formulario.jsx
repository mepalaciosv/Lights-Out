import React, {useState} from 'react'

const Formulario = () => {

    const [nombre, setNombre] = useState("")
    const [edad, setEdad] = useState("")

    const validar = (event) => {
        // Capturar el evento submit del formulario y evitar que se recarge la pagina
        event.preventDefault()
        console.log("pulsado el boton")

        // Trim evalua si hay una cadena de caracteres
        if (!nombre.trim()) {
            console.log("El nombre esta vacio")
            return
        }
        if (!edad.trim()){
            console.log("El nombre esta vacio")
            return
        }
    }

    return (
        <div className = "containter">
            <form onSubmit = {validar} className = "form-groups">

                {/* Input del nombre */}
                <input 
                    placeholder= "Introduce el nombre"
                    className = "form-control mb-3"
                    type = "text"
                    onChange = {(e) => {setNombre(e.target.value)}}
                />

                {/* Input de la edad */}
                <input 
                    placeholder= "Introduce la edad"
                    className = "form-control mb-3"
                    type = "text"
                    onChange = {(e) => {setEdad(e.target.value)}}
                />

                {/* Boton de submit */}
                <input 
                    className = "btn btn-info btn-block mb-3"
                    type = "submit"
                />
            </form>
            
        </div>
    )
}

export default Formulario;
