import { Form, Input, Button, Checkbox } from 'antd';
import React from 'react';
import before from './imgs/atras.png';

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
                  <a href = '/Login'>Iniciar sesión</a>
                </span>
              </div>

              <div class = 'formulario'>
                <h2>Crear cuenta</h2>
                <form action = '#'>
                  <div class = 'input-container'>
                    <i class = 'fas fa-user icon'></i>
                    <input type = 'text' placeholder = 'Usuario' required pattern = ".{6,}"
                    title = "Debe contener 6 o más caracteres"></input>
                  </div>
                  
                  <div class = 'input-container'>
                    <i class = 'fas fa-envelope icon'></i>
                    <input type = 'email' placeholder = 'Correo' required pattern = "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"></input>
                  </div>

                  <div class = 'input-container'>
                    <i class = 'fas fa-key icon'></i>
                    <input type = 'password' placeholder = 'Contraseña' required pattern = "(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                    title = "Debe contener 8 o más caracteres y al menos un número, una mayúscula y una minúscula"></input>
                  </div>

                  <input type = 'submit' value = 'Registrarse' required></input>
                </form>

                <div class = 'reset-password'>
                  <a href = '#'>Olvidé mi contraseña</a>
                </div>

              </div>

              </div>
                
            </div>

        </body>
      </html>




/*

        <div>
        <Link to = '/'>
          <input className = 'retroceso' type = 'image' src = {before} alt = 'home-button'/>
        </Link>
        
        <h1>Crear cuenta</h1>
        
        <form action = '#'>
          <input type = 'text' placeholder = 'Usuario' required></input>
          <input type = 'email' placeholder = 'Correo' required></input>
          <input type = 'password' placeholder = 'Contraseña' required></input>
          <input type = 'submit' value = 'Registrarse' required></input>
        </form>
        <p>¿Ya tienes una cuenta?
          <Link to = '/Login'>Iniciar sesión</Link>
        </p>

      </div>

        /*
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
            label = "Correo"
            name = "email"
            rules = {[
              {
                required: true,
                message: 'Por favor ingresa tu correo',
              },
            ]}
          >
              <Input />
          </Form.Item>
          
          <Form.Item
            label = "Usuario"
            name = "username"
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
            name = "password"
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
              Crear cuenta
            </Button>
          </Form.Item>
        </Form>
      */
      );
}

export default Register;