import React from 'react';
import './style.css';

const data = [];
for (var i = 0; i < 5000; i++) {
  data.push({
    key: '第' + i + '行'
  });
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      pageSize: 10,
      //list: data.splice(0, 10)
      list: data
    };
  }

  handleScroll = el => {
    // const div = el.target;
    // const scrollTop = div.scrollTop;
    // if (scrollTop > 150) {
    //   const list = [...this.state.list];
    //   this.setState({
    //     page: this.state.page + 1,
    //     list: list.concat(data.splice(this.state.page, 10))
    //   });
    // }
  };

  render() {
    return (
      <div className="d" onScroll={this.handleScroll}>
        {this.state.list.map(item => {
          return (
            <p className="p" key={item.key}>
              {item.key}
            </p>
          );
        })}
      </div>
    );
  }
}
