import React from 'react';
import { Button, Modal, Alert, Form, Input } from 'antd';
import { v4 as uuidv4 } from 'uuid';
import 'antd/dist/antd.css';
//用key来避免派生问题

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

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }

  handleClick = () => {
    this.setState({
      visible: true
    });
  };

  handleUpdate = () => {
    this.setState({
      update: true
    });
  };

  render() {
    return (
      <div>
        <div>
          <Button onClick={this.handleClick}>弹出</Button>
          <Button onClick={this.handleUpdate}>其他按钮</Button>
        </div>

        {this.state.visible && <Keys key={uuidv4()} />}
      </div>
    );
  }
}

class Keys extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true
    };
  }

  handleOk = () => {
    this.setState({
      visible: false
    });
  };

  render() {
    return (
      <Modal
        visible={this.state.visible}
        title="Basic Modal"
        onOk={this.handleOk}
      >
        <Form {...layout} name="basic">
          <Form.Item label="Username" name="username">
            <Input />
          </Form.Item>

          <Form.Item label="Password" name="password">
            <Input.Password />
          </Form.Item>
        </Form>
      </Modal>
    );
  }
}
