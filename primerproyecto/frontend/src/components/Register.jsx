import React, {useState} from 'react';
import before from './imgs/atras.png';
import axios from 'axios';
import bcrypt from 'bcryptjs'
// Importaciones para enrutar
import {
  Link
} from 'react-router-dom'

const Register = () => {

      const [username, setUsername] = useState("")
      const [email, setEmail] = useState("")
      const [password, setPassword] = useState("")

      const changeUsername = (e) => { setUsername(e) }
      const changeEmail = (e) => { setEmail(e) }
      const changePassword = (e) => { setPassword(e) }

      const onSubmit = async (e) => {
        e.preventDefault();
        const passCripted = bcrypt.hashSync(password, 10);
        const newUser = {
          username: username,
          email: email,
          password: passCripted,
          games: 0,
          wins: 0,
          clues: 0,
          solutions: 0,
          createdAt: Date(),
          verified: "Sin Verificar"
        }

        const response = await axios.get('http://localhost:8000/users/validateRegister', { params : {username: username, email: email}})
        if (response.status === 200) {
          const res = await axios.post('http://localhost:8000/users/add', newUser)
          console.log(`Form submitted:`);
          setUsername("")
          setEmail("")
          setPassword("")
          sessionStorage.setItem('userId', res.data['userId'])
          sessionStorage.setItem('userName', res.data['userName'])

          window.location.href = "/Success";
        } else {
          console.log("Fallo el registro de usuario")
          window.location.href = "/Fail";
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
                  <a href = '/Login'>Iniciar sesión</a>
                </span>
              </div>

              <div className = 'formulario'>
                <h2>Crear cuenta</h2>
                <form id = "registerForm" onSubmit = {(e) => onSubmit(e)} >
                  <div className = 'input-container'>
                    <i className = 'fas fa-user icon'></i>
                    <input type = 'text' placeholder = 'Usuario' required pattern = ".{6,}" title = "Debe contener 6 o más caracteres" value = {username} 
                    onChange = {(e) => {changeUsername(e.target.value)}} />
                  </div>
                  
                  <div className = 'input-container'>
                    <i className = 'fas fa-envelope icon'></i>
                    <input type = 'email' placeholder = 'Correo' required pattern = "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" value = {email} 
                    onChange = {(e) => {changeEmail(e.target.value)}} />
                  </div>

                  <div className = 'input-container'>
                    <i className = 'fas fa-key icon'></i>
                    <input type = 'password' placeholder = 'Contraseña' required pattern = "(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                    title = "Debe contener 8 o más caracteres y al menos un número, una mayúscula y una minúscula" value = {password}
                    onChange = {(e) => {changePassword(e.target.value)}} />
                  </div>

                  <input type = 'submit' value = 'Registrarse' required  ></input>
                </form>
                

                <div className = 'reset-password'>
                  <a href = 'hola'>Olvidé mi contraseña</a>
                </div>

              </div>

              </div>
                
            </div>

        </div>
      </div>
      );
}

export default Register;