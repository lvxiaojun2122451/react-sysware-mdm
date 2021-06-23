import React from 'react';
import { Table, Button } from 'antd';
import 'antd/dist/antd.css';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    width: '12%'
  },
  {
    title: 'Address',
    dataIndex: 'address',
    width: '30%',
    key: 'address'
  }
];

let n = 0;

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          key: 1,
          name: 'John Brown sr.',
          age: 60,
          address: 'New York No. 1 Lake Park',
          children: [
            {
              key: 11,
              name: 'John Brown',
              age: 42,
              address: 'New York No. 2 Lake Park'
            },
            {
              key: 12,
              name: 'John Brown jr.',
              age: 30,
              address: 'New York No. 3 Lake Park',
              children: [
                {
                  key: 121,
                  name: 'Jimmy Brown',
                  age: 16,
                  address: 'New York No. 3 Lake Park'
                }
              ]
            },
            {
              key: 13,
              name: 'Jim Green sr.',
              age: 72,
              address: 'London No. 1 Lake Park',
              children: []
            }
          ]
        },
        {
          key: 2,
          name: 'Joe Black',
          age: 32,
          address: 'Sidney No. 1 Lake Park'
        }
      ]
    };
  }

  handleUpdate = () => {
    const data = [...this.state.data];

    n++;

    data[0].name = data[0].name + n;
    data[0].children[2].name = data[0].children[2].name + n;
    this.setState({
      data: data
    });
  };

  render() {
    const _this = this;
    const expandableConfig = {
      onExpand(expanded, record) {
        if (record.key == 13) {
          setTimeout(() => {
            record.children = [
              {
                key: 131,
                name: 'Jim Green',
                age: 42,
                address: 'London No. 2 Lake Park',
                children: [
                  {
                    key: 1311,
                    name: 'Jim Green jr.',
                    age: 25,
                    address: 'London No. 3 Lake Park'
                  },
                  {
                    key: 1312,
                    name: 'Jimmy Green sr.',
                    age: 18,
                    address: 'London No. 4 Lake Park'
                  }
                ]
              }
            ];

            const data = [..._this.state.data];

            _this.setState({
              data
            });
          }, 1000);
        }
      }
    };

    return (
      <>
        <div>
          <Button onClick={this.handleUpdate}>刷新表</Button>
        </div>
        <Table
          columns={columns}
          expandable={{ ...expandableConfig }}
          dataSource={this.state.data}
        />
      </>
    );
  }
}
