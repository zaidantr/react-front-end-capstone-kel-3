import { Space, Table, Tag, Button, Modal, Input, Form } from 'antd';
import React, { useState }from 'react';

export default function ManageTransaction() {


// Tabel 1

const [dataSource1, setDataSource1] = useState([
  {
    id: '1',
    name: 'John123',
    class: 'Cardio',
    trainer: 'Joko',
    date: '12/02/2022',
  },
  {
    id: '2',
    name: 'John123',
    class: 'Cardio',
    trainer: 'Joko',
    date: '12/02/2022',
    status : 'expired',
  },
  {
    id: '3',
    name: 'John123',
    class: 'Cardio',
    trainer: 'Joko',
    date: '12/02/2022',
    status : 'active',
  },
]);

const columns1= [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Class',
    dataIndex: 'class',
    key: 'name',
  },
  {
    title: 'Trainer',
    dataIndex: 'trainer',
    key: 'trainer',
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
  },
  {
    key: 4,
        title: 'Actions',
        render:(record) => {
          return <>
            <Button 
            >ACCEPT</Button>
            <Button 
            onClick={() => {
              onDeleteAdmin(record)
            }}
            style={{
              color: 'red',
              marginLeft: 12
            }}
            >DECLINE</Button>
            </>
        }
  }
];


// Tabel 2

const [dataSource2, setDataSource2] = useState([
  {
    id: '1',
    username: 'John123',
    class: 'Cardio',
    date: '12/02/2022',
    status : 'active',
  },
  {
    id: '2',
    username: 'John123',
    class: 'Cardio',
    date: '12/02/2022',
    status : 'expired',
  },
  {
    id: '3',
    username: 'John123',
    class: 'Cardio',
    date: '12/02/2022',
    status : 'active',
  },
]);

const columns2 = [
  {
    title: 'Username',
    dataIndex: 'username',
    key: 'username',
  },
  {
    title: 'Class',
    dataIndex: 'class',
    key: 'name',
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Status',
    key: 'status',
    dataIndex: 'status',
  },
  {
    key: 4,
        title: 'Actions',
        render:(record) => {
          return <>
            <Button 
            onClick={() => {
              info(record.id);
            }}
            >VIEW</Button>
            <Button 
            onClick={() => {
              onDeleteAdmin(record)
            }}
            style={{
              color: 'red',
              marginLeft: 12
            }}
            >DELETE</Button>
            </>
        }
  }
];


const info = (id) => {
  const viewData = dataSource2.find(item =>  item.id === id)
  console.log(viewData, 'data')
  Modal.info({
    title: 'This is a notification message',
    content: (
      <Modal
      dataSource={dataSource2}
      />
    ),

    onOk() {},
  });
};

const onDeleteAdmin = (record) => {
  Modal.confirm({
    title: 'Are you sure delete this admin record?',
    okText: 'Yes',
    okType: 'danger',
    onOk:() => {
      setDataSource2((pre)=> {
        return pre.filter(admin => admin.id !== record.id);
      });
    }
  });
};
  
  return (
      <>
        <h1
          style={{
            fontSize: '2rem',
          }}>
          Manage Transaction
        </h1>
        <h1
          style={{
            fontSize: '1.5rem',
          }}>
          Waiting Transaction
        </h1>
        <Table 
        columns={columns1} 
        dataSource={dataSource1} 
        style={{
          minWidth: 1120,
          paddingTop: 30,
        }}
        />
        <h1
          style={{
            fontSize: '1.5rem',
          }}>
          List Transaction
        </h1>
        <Table 
        columns={columns2} 
        dataSource={dataSource2} 
        style={{
          minWidth: 1120,
          paddingTop: 30,
        }}
        />
      </>
  )
}
