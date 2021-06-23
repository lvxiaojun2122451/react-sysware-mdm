import React from 'react';

let fnObj = {};
let user = {
  age: 20
};
function ProfilePage(props) {
  setTimeout(() => {
    console.log(props.user);
  }, 5000);
  return <div>{props.user}</div>;
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
