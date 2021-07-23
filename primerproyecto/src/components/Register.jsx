import { Form, Input, Button, Checkbox } from 'antd';
import React from 'react';

const Register = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
    
      return (
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
      );
}

export default Register; 