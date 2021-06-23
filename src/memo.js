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
        <p>{this.state.name}</p>
        <Children />
        {/* <FunChildren /> */}
      </div>
    );
  }
}

class Children extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    console.log(9);
    return <div>23岁</div>;
  }
}

const MemoChildren = React.memo(Children);
