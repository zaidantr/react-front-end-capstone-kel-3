import 'antd/dist/antd.css';
import '../App.css';
import {Table, Button, Modal, Input, Space } from 'antd';
import { useState} from 'react';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

function App() {
  const [isEditing, setIsEditing] = useState(false);
  const [editingAdmin, setEditingAdmin] = useState(null);

  // const [isAdding, setIsAdding] = useState(false);
  // const [addingAdmin, setAddingAdmin] = useState(null);

  const info = () => {
    Modal.info({
      title: 'This is a notification message',
      content: (
        <div>{value}</div>
      ),
  
      onOk() {},
    });
  };

  const [dataSource, setDataSource] = useState([
    {
      id: 1,
      name: 'John',
      username: 'John55',
      password: 'dicoba12',
    }, 
    {
      id: 2,
      name: 'David',
      username: 'David55',
      password: 'dicoba1245',
    }, 
    {
      id: 3,
      name: 'James',
      username: 'James232',
      password: 'dicoba1276',
    }, 
    {
      id: 4,
      name: 'Sam',
      username: 'Sam445',
      password: 'dicoba1254',
    }, 
    
  ]);

  const columns = [
    // {
    //   key: '1',
    //   title: 'ID',
    //   dataIndex: 'id',
    // },
    {
      key: '1',
      title: 'Name',
      dataIndex: 'name',
    },
    {
      key: '2',
      title: 'Username',
      dataIndex: 'username',
    },
    {
      key: '3',
      title: 'Password',
      dataIndex: 'password',
    },
    {
      key: 4,
      title: 'Actions',
      render:(record) => {
        return <>
          <EditOutlined
          onClick={() => {
            onEditAdmin(record);
          }}
          />
          <DeleteOutlined 
          onClick={() => {
            onDeleteAdmin(record)
          }}
          style={{
            color: 'red',
            marginLeft: 12
          }}/>
          {/* <EditOutlined
          onClick={() => {
            onAddAdmin(record);
          }}
          /> */}
        </>
      }
    } 
  ];

  const onAddAdmin = () => {
    const randomNumber = parseInt(Math.random()*1000);
    const newAdmin = {
      id: randomNumber,
      username: '',
      password: '',
    }

    setDataSource(pre=> {
      return  [...pre, newAdmin]
    })
    // setIsAdding(true);
    // setAddingAdmin(...record);
  };

  const onDeleteAdmin = (record) => {
    Modal.confirm({
      title: 'Are you sure delete this admin record?',
      okText: 'Yes',
      okType: 'danger',
      onOk:() => {
        setDataSource((pre)=> {
          return pre.filter(admin => admin.id !== record.id);
        });
      }
    });
  };

  const onEditAdmin = (record) => {
    setIsEditing(true);
    setEditingAdmin({...record});
  }

  const resetEditing=() => {
    setIsEditing(false);
    setEditingAdmin(null);
  }

  // const resetAdding=() => {
  //   setIsAdding(false);
  //   setAddingAdmin(null);
  // }

  return (
    <div className="App">
      <header className="">
        <Button
        onClick={onAddAdmin}
        >Add a new admin</Button>

        <Button onClick={info}>Info</Button>

        <Table
        columns={columns}
        dataSource={dataSource}
        ></ Table>

        <Modal
        title="Edit admin"
        visible={isEditing}
        okText="Save"
        onCancel={() => {
          resetEditing();
        }}
        onOk={() => {
          setDataSource((pre) => {
            return pre.map((admin) => {
              if (admin.id === editingAdmin.id) {
                return editingAdmin;
              } else {
                return admin;
              }
            });
          });
          resetEditing();
        }}
        >
          <Input
          value={editingAdmin?.name} 
          onChange={(e) => {
            setEditingAdmin((pre) => {
              return {...pre, name: e.target.value };
            });
          }}
          />
          <Input
          value={editingAdmin?.username} 
          onChange={(e) => {
            setEditingAdmin((pre) => {
              return {...pre, username: e.target.value };
            });
          }}
          />
          <Input
          value={editingAdmin?.password} 
          onChange={(e) => {
            setEditingAdmin((pre) => {
              return {...pre, password: e.target.value}
            });
          }}
          />
        </Modal>

          {/* Add Admin */}
        {/* <Modal
        title="Add admin"
        visible={isAdding}
        okText="Save"
        onCancel={() => {
          resetAdding();
        }}
        onOk={() => {
          setDataSource((pre) => {
            return pre.map((admin) => {
              if (admin.id === addingAdmin.id) {
                return addingAdmin;
              } else {
                return admin;
              }
            });
          });
          resetAdding();
        }}
        >
          <Input
          value={addingAdmin?.username} 
          onChange={(e) => {
            setAddingAdmin((pre) => {
              return {...pre, username: e.target.value };
            });
          }}
          />
          <Input
          value={addingAdmin?.password} 
          onChange={(e) => {
            setAddingAdmin((pre) => {
              return {...pre, password: e.target.value}
            });
          }}
          />
        </Modal> */}

      </header>
    </div>
  );
}

export default App;
