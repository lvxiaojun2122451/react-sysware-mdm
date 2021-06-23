import React from 'react';
import './style.css';
import { Button, Modal, Form, Input, Checkbox } from 'antd';

const layout = {
  labelCol: {
    span: 8
  },
  wrapperCol: {
    span: 16
  }
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16
  }
};

export default function App() {
  const [key, setKey] = React.useState(0);

  const handleClick = () => {
    setKey(key + 1);
  };

  return (
    <div>
      <div>
        <Button onClick={handleClick}>重置表单</Button>
      </div>

      <Form {...layout} name="basic" key={key}>
        <Form.Item label="Username" name="username">
          <Input />
        </Form.Item>

        <Form.Item label="Password" name="password">
          <Input.Password />
        </Form.Item>
      </Form>
    </div>
  );
}
