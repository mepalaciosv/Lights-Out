import { Form, Input, Button, Checkbox } from 'antd';
import React from 'react';
import before from './imgs/atras.png';
import axios from 'axios';

// Importaciones para enrutar
import {
  Link
} from 'react-router-dom'

const Register = () => {

      const onFinish = (values) => {
        console.log('Success:', values);
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };

      const onSubmit = (e) => {
        e.preventDefault();

        const newUser = {
          username: 'userTest',
          email: 'emailTest',
          password: 'passwordTest'
        }

        axios.post('http://localhost:8000/users/add', newUser)
            .then(res => console.log(res.data))

        console.log(`Form submitted:`);
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
                <form onSubmit = {(e) => onSubmit(e)}>
                  <div className = 'input-container'>
                    <i className = 'fas fa-user icon'></i>
                    <input type = 'text' placeholder = 'Usuario' required pattern = ".{6,}"
                    title = "Debe contener 6 o más caracteres"></input>
                  </div>
                  
                  <div className = 'input-container'>
                    <i className = 'fas fa-envelope icon'></i>
                    <input type = 'email' placeholder = 'Correo' required pattern = "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"></input>
                  </div>

                  <div className = 'input-container'>
                    <i className = 'fas fa-key icon'></i>
                    <input type = 'password' placeholder = 'Contraseña' required pattern = "(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                    title = "Debe contener 8 o más caracteres y al menos un número, una mayúscula y una minúscula"></input>
                  </div>

                  <input type = 'submit' value = 'Registrarse' required></input>
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