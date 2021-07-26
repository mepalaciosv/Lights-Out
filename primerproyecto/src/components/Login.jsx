import { Form, Input, Button, Checkbox } from 'antd';
import React, {useState} from 'react';
import before from './imgs/atras.png';

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

          <Link to = "/">
              <input className = "left-image" type = "image" src = {before} 
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
      );
}

export default Login; 