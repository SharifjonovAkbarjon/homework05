import React, { memo, useState } from "react";
import { Button, Checkbox, Form, Input } from "antd";
import axios from "../api";
import { useDispatch, useSelector } from "react-redux";
import Modal from "./Modal/Modal";
import { useNavigate } from "react-router-dom";
import { message, Space } from "antd";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let token = useSelector((state) => state.token);
  const [loading, setLoading] = useState(false);
  console.log(token);
  const [show, setShow] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  const onFinish = (values) => {
    setLoading(true);
    axios
      .post("/admins/sign-in", values)
      .then((res) => {
        if (res.status === 200) {
          messageApi.success("Very Good");
        }
        console.log(res);
        dispatch({ type: "LOGIN", payload: res.data.payload.token });

        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        messageApi.error("Something Went Wrong");
      })
      .finally(() => setLoading(false));
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      {contextHolder}
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Login
        </h2>
        <Form
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
            initialValue={"selena1"}
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input size="large" placeholder="Enter your username" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            initialValue={"123456"}
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password size="large" placeholder="Enter your password" />
          </Form.Item>

       

          <Form.Item className="text-center">
            <Button
              type="primary"
              htmlType="submit"
              loading={loading}
              className="w-full py-2 mb-4"
            >
              Submit
            </Button>

            <Button
              type="default"
              className="w-full py-2"
              onClick={() => setShow(true)}
            >
              Register
            </Button>
          </Form.Item>
        </Form>
        <Modal show={show} setShow={setShow} />
      </div>
    </div>
  );
};

export default memo(Login);
