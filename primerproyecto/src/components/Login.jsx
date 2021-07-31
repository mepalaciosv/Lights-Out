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
        <html>
          <head>
            <link rel = 'stylesheet' href = 'https:use.fontawesome.com/releases/v5.6.3/css/all.css'></link>

          </head>
          <body>

              <div>
              <Link to = '/'>
                <input className = 'retroceso' type = 'image' src = {before} alt = 'home-button'/>
              </Link>

              <div class = 'contenedorFormulario'>

                <div class = 'toggle'>
                  <span>
                    <a href = '/Register'>Registro</a>
                  </span>
                </div>

                <div class = 'formulario'>
                  <h2>Iniciar sesión</h2>
                  <form action = '#'>
                    <i class = 'fas fa-user'></i>
                    <input type = 'text' placeholder = 'Usuario' required></input>
                    
                    <i class = 'fas fa-key'></i>
                    <input type = 'password' placeholder = 'Contraseña' required></input>

                    <input type = 'submit' value = 'Iniciar sesión' required></input>
                  </form>
                </div>

                <div class = 'reset-password'>
                  <a href = '#'>Olvidé mi contraseña</a>
                </div>

                </div>
                  
              </div>

          </body>
        </html>

        



/*
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
*/

        

        /*
        <div>

          <Link to = "/">
              <input className = "retroceso" type = "image" src = {before} 
                                alt = "home-button" />
          </Link>
          <Form
            name = "basic"
            labelCol = {{
              span: 8,
            }}
            wrapperCol = {{
              span: 9,
            }}
            initialValues = {{
              remember: true,
            }}
            onFinish = {onFinish}
            onFinishFailed = {onFinishFailed}
          >
            <Form.Item
              label = "Usuario"
              name = "usuario"
              rules = {[
                {
                  required: true,
                  message: 'Por favor ingresa tu usuario',
                },
              ]}
            >
              <Input />
            </Form.Item>
      
            <Form.Item
              label = "Contraseña"
              name = "contraseña"
              rules = {[
                {
                  required: true,
                  message: 'Por favor ingresa tu contraseña',
                },
              ]}
            >
              <Input.Password />
            </Form.Item>
      
            <Form.Item
              name = "remember"
              valuePropName = "checked"
              wrapperCol = {{
                offset: 8,
                span: 8,
              }}
            >
              <Checkbox>Recuerda mi cuenta</Checkbox>
            </Form.Item>
      
            <Form.Item
              wrapperCol = {{
                offset: 8,
                span: 8,
              }}
            >
              <Button type = "primary" htmlType = "submit">
                Iniciar sesión
              </Button>
            </Form.Item>
          </Form>
        </div>
        */
      );
}

export default Login; 