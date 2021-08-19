import React, {useState} from 'react';
import before from './imgs/atras.png';
import axios from 'axios'
import './Login.css'

// Importaciones para enrutar
import {
  Link
} from 'react-router-dom'

const Login = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const tryLogin = async (e) => {

      e.preventDefault()
      const res = await axios.get('http://localhost:8000/users/findUser/' + username +'/'+ password)

      if (res.data === "data is not found") {
        alert("Usuario no registrado")

      } else if (res.data === "password incorrect") {
        alert("Constraseña incorrecta")
      } else {
        sessionStorage.clear()
        sessionStorage.setItem("userId", res.data['_id']) 
        sessionStorage.setItem("userName", res.data['username'])
        window.location.href = "/Account";
      }
    }

      return (
        <div>
          <div>
            <link rel = 'stylesheet' href = 'https:use.fontawesome.com/releases/v5.6.3/css/all.css'></link>
          </div>
          <div>
              <div>
                <Link to = '/'>
                  <input className = 'retroceso' type = 'image' src = {before} alt = 'home-button'/>
                </Link>

                <div className = 'contenedorFormulario'>

                  <div className = 'toggle'>
                  <span>
                    <a href = '/Register'>Crear cuenta</a>
                  </span>
                </div>

                  <div className = 'formulario'>
                  <h2>Iniciar sesión</h2>
                  <form onSubmit={ (e) => {tryLogin(e)}}>
                    <div className = 'input-container'>
                      <i className = 'fas fa-user icon'></i>
                      <input type = 'text' placeholder = 'Usuario' required pattern = ".{6,}"
                      title = "Debe contener 6 o más caracteres"
                      onChange = {(e) => { setUsername(e.target.value) }}></input>
                    </div>
                    
                    <div className = 'input-container'>
                      <i className = 'fas fa-key icon'></i>
                      <input type = 'password' placeholder = 'Contraseña' required pattern = "(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
                      title = "Debe contener 8 o más caracteres y al menos un número, una mayúscula y una minúscula"
                      onChange = { (e) => { setPassword(e.target.value) }}></input>
                    </div>
                    
                    <input type = 'submit' value = 'Iniciar sesión'></input>
                  </form>

                  <div className = 'reset-password'>
                    Olvidé mi contraseña
                  </div>
                  </div>
                </div>       
              </div>
          </div>
        </div>
      );
}

export default Login; 