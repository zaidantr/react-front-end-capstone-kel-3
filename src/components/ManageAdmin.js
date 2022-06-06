import 'antd/dist/antd.css';
import '../App.css';
import {Table, Button, Modal, Input, Form } from 'antd';
import { useState} from 'react';
import './antd.css';
// import { EditOutlined, DeleteOutlined, InfoCircleOutlined} from '@ant-design/icons';
// import { height } from '@mui/system';

function App() {
  const [isEditing, setIsEditing] = useState(false);
  const [editingAdmin, setEditingAdmin] = useState(null);

  const [isAdding, setIsAdding] = useState(false);
  const [addingAdmin, setAddingAdmin] = useState(null);

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
          <Button 
          onClick={() => {
            info(record.id);
          }}
          style={{
            border: '1px solid #1A1A1A',
            borderRadius: '4px',
          }}
          >VIEW</Button>
          <Button
          onClick={() => {
            onEditAdmin(record);
          }}
          style={{
            border: '1px solid #1A1A1A',
            borderRadius: '4px',
            marginLeft: 12,
          }}
          >EDIT</Button>
          <Button 
          onClick={() => {
            onDeleteAdmin(record)
          }}
          style={{
            border: '1px solid #1A1A1A',
            borderRadius: '4px',
            marginLeft: 12,
          }}
          >DELETE</Button>
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
    setIsAdding(true);
    // setAddingAdmin(...record);
  };

  const onDeleteAdmin = (record) => {
    Modal.confirm({
      title: 'Are you sure delete this admin?',
      okText: 'Delete',
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

  const resetAdding=() => {
    setIsAdding(false);
    setAddingAdmin(null);
  }

  const info = (id) => {
    const viewData = dataSource.find(item =>  item.id === id)
    console.log(viewData, 'data')
    Modal.info({
      okText:'Cancel',
      title: 'View Admin',
      className: 'view-admin-modal',
      content: (
        <div
        style={{
          fontSize: '20px',
          lineHeight: '23px',
          fontFamily: 'Roboto',
          fontWeight: '400px',
          fontStyle: 'normal',
          color: '#585858',
          paddingTop:'34px',
        }}
        >
        <p 
        >Name <br></br>{viewData.name}</p>
        <p
        >Username <br></br>{viewData.username}</p>
        <p
        >Password <br></br>{viewData.password}</p>
      </div>
      ),
  
      onOk() {},
    });
  };

  return (
    <div className="">
      <header className="">
        <div style={{
          minWidth: 1046,
          // backgroundColor: 'black',
          paddingLeft: 62,
          paddingRight: 60,
          paddingTop: 170,
        }}>
        <h1 
        style={{
          fontSize: '2rem',
        }}
        >
          List Admin
        </h1>
        <Button 
        onClick={onAddAdmin}
        style={{
          position: 'relative',
          left: 0,
          backgroundColor: 'black',
          color: 'white',
          border: '1px solid #1A1A1A',
          borderRadius: '4px',
        }}
        >+ NEW</Button>
        
          <Table
          columns={columns}
          dataSource={dataSource}
          style={{
            paddingTop: 30,
            margin: 0,
          }}
          ></ Table>
        </div>

        <Modal
        title="Edit Admin"
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
          <Form.Item
          // name='Name'
          // label='Name'
          >
            <div 
            style={{
            }}
            >Name Admin</div>
            <Input 
            placeholder='Edit your name' 
            value={editingAdmin?.name} 
            onChange={(e) => {
              setEditingAdmin((pre) => {
                return {...pre, name: e.target.value };
              });
            }}
            />
          </Form.Item>

          <Form.Item
          >
             <div 
            style={{
            }}
            >Username</div>
            <Input 
            placeholder='Edit your username' 
            value={editingAdmin?.name} 
          onChange={(e) => {
            setEditingAdmin((pre) => {
              return {...pre, username: e.target.value };
            });
          }}
            />
          </Form.Item>
          
          <Form.Item
          >
             <div 
            style={{
            }}
            >Password</div>
            <Input 
            placeholder='Edit your password' 
            value={editingAdmin?.password} 
            onChange={(e) => {
              setEditingAdmin((pre) => {
                return {...pre, password: e.target.value };
              });
            }}
            />
          </Form.Item>

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
