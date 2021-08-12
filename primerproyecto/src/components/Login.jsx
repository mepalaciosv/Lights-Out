import { Form, Input, Button, Checkbox } from 'antd';
import React, {useState} from 'react';
import before from './imgs/atras.png';
import './Login.css'

// Importaciones para enrutar
import {
  Link
} from 'react-router-dom'

const Login = () => {

    // const[nameA, setName] = useState('')
    // const[password, setPassword] = useState('')

    const onFinish = (values) => {
        console.log('Success:', values);
      };
    
    const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
    };
    
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
                  <form action = '#'>
                    <div className = 'input-container'>
                      <i className = 'fas fa-user icon'></i>
                      <input type = 'text' placeholder = 'Usuario' required required pattern = ".{6,}"
                      title = "Debe contener 6 o más caracteres"></input>
                    </div>
                    
                    <div className = 'input-container'>
                      <i className = 'fas fa-key icon'></i>
                      <input type = 'password' placeholder = 'Contraseña' required></input>
                    </div>
                    
                    <input type = 'submit' value = 'Iniciar sesión' required required pattern = "(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                    title = "Debe contener 8 o más caracteres y al menos un número, una mayúscula y una minúscula"></input>
                  </form>

                  <div className = 'reset-password'>
                    <a href = '#'>Olvidé mi contraseña</a>
                  </div>

                  </div>
                </div>       
              </div>
          </div>
        </div>
      );
}

export default Login; 