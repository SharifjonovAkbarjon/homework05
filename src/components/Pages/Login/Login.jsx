import { Button, Form, Input, Checkbox } from 'antd';
import React, { useState } from 'react'
import Register from '../Register/Register';
import mainUrl from '../../../api/Index'

const Login = () => {
    const [show, setShow] = useState(false)


    const onFinish = (values) => {
      console.log(values);
      mainUrl.post("/admins/sign-in", values)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    };
    const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
    };
  return (
    <React.Fragment>
    <div className='flex h-screen items-center justify-center'>
      <Form className='w-96'
        name="basic"
        layout="vertical"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button onClick={() => setShow(true)}>Register</Button>
        </Form.Item>
      </Form>
    </div>
    <Register show={show} setShow={setShow}/>
  </React.Fragment>
  )
}

export default Login