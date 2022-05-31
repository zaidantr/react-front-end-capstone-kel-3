import { Space, Table, Tag } from 'antd';
import React from 'react'

const columns = [
  {
    title: 'Username',
    dataIndex: 'username',
    key: 'username',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Class',
    dataIndex: 'class',
    key: 'name',
    render: (text) => <a>{text}</a>
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Time',
    key: 'time',
    dataIndex: 'time',
    render: (text) => <a>{text}</a>
  },
  {
    title: 'ID',
    key: 'id',
    dataIndex: 'id',
    render: (text) => <a>{text}</a>
  },
];
const data = [
  {
    key: '1',
    username: 'John123',
    class: 'Cardio',
	date: '12/02/2022',
    time : '17.00',
    id: '#ID009',
  },
  {
    key: '1',
    username: 'John123',
    class: 'Cardio',
	date: '12/02/2022',
    time : '17.00',
    id: '#ID009',
  },
  {
    key: '1',
    username: 'John123',
    class: 'Cardio',
	date: '12/02/2022',
    time : '17.00',
    id: '#ID009',
  },
];



export default function manageMembership() {
  return (
      <>
        <div>manageMembership</div>
        <Table columns={columns} dataSource={data} />
      </>
  )
}
