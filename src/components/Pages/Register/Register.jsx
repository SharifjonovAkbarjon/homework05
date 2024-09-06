import React from 'react'
import Model from '../../Model/Model'
import { Button, Form, Input, Checkbox } from 'antd'

const Register = ({show, setShow}) => {
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
        <>
            {
                show && <Model close={() => setShow(false)}>
                    <Form className='w-96 bg-white p-4'
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
                            name="username  "
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
                                Sign up
                            </Button>
                        </Form.Item>
                    </Form>
                </Model>
            }
        </>
    )
}

export default Register