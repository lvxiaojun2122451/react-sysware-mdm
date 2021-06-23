import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '小明'
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        name: '小红'
      });
    }, 3000);
  }

  render() {
    return (
      <div>
        {this.state.name}
        <Children />
      </div>
    );
  }
}

class Children extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: '小明'
    };
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   return true;
  // }

  render() {
    console.log(9);
    return <div>123</div>;
  }
}
