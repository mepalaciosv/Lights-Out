import { Form, Input, Button, Checkbox } from 'antd';
import React from 'react';
import './Login.css'
import $ from 'jquery';

const iniciarSesion = () => {
  $('.toggle').click(function(){
    $('.formulario').animate({
      'height': 'toggle',
      'padding-top': 'toggle',
      'padding-bottom': 'toggle',
      'opacity': 'toggle'
    }, 'slow')
  })
};

const Login = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };

      return (
        <html lang = 'es'>
          <head>
            <title>Cuenta | Lights Out</title>
          </head>

          <body>
            <div class = 'contenedorFormulario'>

              <div class = 'toggle' onClick = {() => {iniciarSesion()}} >
                <span>Crear cuenta</span>
              </div>

              <div class = 'formulario'>
                <h2>Iniciar sesión</h2>
                <form action = '#'>
                  <input type = 'text' placeholder = 'Usuario' required></input>
                  <input type = 'password' placeholder = 'Contraseña' required></input>
                  <input type = 'submit' value = 'Iniciar sesión' required></input>
                </form>
              </div>

              <div class = 'formulario'>
                <h2>Crear cuenta</h2>
                <form action = '#'>
                  <input type = 'text' placeholder = 'Usuario' required></input>
                  <input type = 'email' placeholder = 'Correo' required></input>
                  <input type = 'password' placeholder = 'Contraseña' required></input>
                  <input type = 'submit' value = 'Registrarse' required></input>
                </form>
              </div>

              <div class = 'reset-password'>
                <a href = '#'>Olvidé mi contraseña</a>
              </div>

            </div>
          </body>
        </html>
      );
}

export default Login; 