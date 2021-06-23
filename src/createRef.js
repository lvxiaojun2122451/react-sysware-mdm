import React from 'react';

let _ref = null;

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this._ref = React.createRef();
    //_ref = React.createRef();
  }

  componentDidMount() {
    console.log(this._ref);
    //console.log(_ref);
  }

  render() {
    return (
      <div ref={this._ref}>
        <FancyButton />
      </div>
    );
  }
}
console.log(_ref);

const FancyButton = function() {
  return (
    <button
      className="FancyButton"
      ref={ele => {
        console.log(ele);
      }}
    >
      按钮
    </button>
  );
};
