import React from 'react';

let fnObj = {};
let user = {
  age: 20
};

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
  }

  static getDerivedStateFromProps(props, state) {
    setTimeout(() => {
      //console.log(props.user);
    }, 5000);
  }

  render() {
    setTimeout(() => {
      console.log(this.props.user);
    }, 5000);
    return <div>{this.props.user}</div>;
  }
}

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      n: 0
    };
  }

  componentDidMount() {
    setTimeout(() => {
      user.age = 30;
      this.setState({});
    }, 1000);
  }

  render() {
    return <ProfilePage user={user.age} />;
  }
}
