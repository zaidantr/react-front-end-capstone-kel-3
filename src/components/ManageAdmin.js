import 'antd/dist/antd.css';
import '../App.css';
import {Table, Button, Modal, Input, Form } from 'antd';
import { Box } from "@mui/system";
import { useState} from 'react';
import './antd.css';
import Button1 from "@mui/material/Button";
import warning from './warning.svg';
// import { EditOutlined, DeleteOutlined, InfoCircleOutlined} from '@ant-design/icons';
// import { height } from '@mui/system';

export default function ManageAdmin() {
  const [openDelete, setOpenDelete] = useState(false);
  const [deleteId, setDeleteId] = useState(-1);
  const [isEditing, setIsEditing] = useState(false);
  const [editingAdmin, setEditingAdmin] = useState(null);

  const handleOk = () => {
    setOpenDelete(false);
  };

  const handleCancel = () => {
    setOpenDelete(false);
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
          <Button 
          onClick={() => {
            info(record.id);
          }}
          style={{
            border: '1px solid #F27370',
            borderRadius: '4px',
            color: 'white',
            backgroundColor: '#F27370',
          }}
          >VIEW</Button>
          <Button
          onClick={() => {
            onEditAdmin(record);
          }}
          style={{
            border: '1px solid #F27370',
            borderRadius: '4px',
            color: 'white',
            backgroundColor: '#F27370',
            marginLeft: 12,
          }}
          >EDIT</Button>
          <Button 
          onClick={() => {
            setOpenDelete(!openDelete);
            setDeleteId(record.id);
      }}
          style={{
            border: '1px solid #F27370',
            borderRadius: '4px',
            color: 'white',
            backgroundColor: '#F27370',
            marginLeft: 12,
          }}
          >DELETE</Button>

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
    // setAddingAdmin(...record);
  };

  const onEditAdmin = (record) => {
    setIsEditing(true);
    setEditingAdmin({...record});
  }

  const resetEditing=() => {
    setIsEditing(false);
    setEditingAdmin(null);
  }


  const info = (id) => {
    const viewData = dataSource.find(item =>  item.id === id)
    console.log(viewData, 'data')
    Modal.info({
      okText:'',
      icon: '',
      title: '',
      className: 'view-admin-modal',
      okText:'Cancel',
      okButtonProps: {
        type: "primary",
        style: {
          border: "2px solid #F27370",
          color: "#F27370",
          backgroundColor: "white",
          borderRadius: "8px",
          // paddingBottom: '2px',
        },
      },
      content: (
        <div
        style={{
          fontSize: '20px',
          // lineHeight: '23px',
          // fontFamily: 'Roboto',
          // fontWeight: '400px',
          // fontStyle: 'normal',
          // color: '#585858',
          // paddingTop:'34px',
        }}
        >
          <h1 
          style={{ fontSize: "26px" }}
          >View Admin</h1>
          <p
          >Name <br></br> {viewData.username}
          </p>
          <p
          >Class <br></br> {viewData.class}</p>
          <p
          >Date <br></br> {viewData.date}</p>
          <p
          >Status <br></br> {viewData.status}</p>
        </div>
      ),
  
      onOk() {},
    });
  };

  return (
        <div style={{
          minWidth: 1046,
          // backgroundColor: 'black',
          paddingLeft: 62,
          paddingRight: 60,
          paddingTop: 170,
        }}>
      <h1
        style={{
          fontSize: "32px",
          fontWeight: "bold",
          fontFamily: "Roboto",
        }}
        >
        Manage Admin
      </h1>

        <div
             style={{
              border: '1px solid #F27370',
              paddingLeft: 23,
              paddingRight: 23,
            }}
        >

        <div
          style={{
            display: 'flex',
            paddingRight: '44.5px',
            paddingTop: '25px'
          }}
          >
          <h1 
          style={{
            fontSize: "32px",
            fontWeight: "bold",
            fontFamily: "Roboto",
          }}
          >
            List Admin
          </h1>
          <Button 
          onClick={onAddAdmin}
          style={{
            backgroundColor: '#F27370',
            color: 'white',
            border: '1px solid #F27370',
            borderRadius: '4px',
            marginLeft: 'auto',

          }}
          >+ NEW</Button>
        </div>
          
            <Table
            columns={columns}
            dataSource={dataSource}
            style={{
              // paddingTop: 30,
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

        <Modal 
      visible={openDelete} 
      footer={null} 
      onCancel={handleCancel}>
        <Box 
        display="flex" 
        justifyContent="center">
          <img 
          src={warning} 
          alt="iconwarning" 
          width='300px'
          ></img>
        </Box>
        <p 
        style={{ 
          textAlign: "center", 
          padding: "30px", 
          fontSize: "24px" }}>
          Are sure to delete this?
        </p>
        <Box 
        display="flex" 
        justifyContent="center">
                 <Button1
            style={{
              color: "white",
              fontSize: "16px",
              backgroundColor: "#F27370",
              borderRadius: "8px",
              marginRight: "20px",
              padding: "7px 10px",
            }}
            onClick={() => {
              setOpenDelete(false);
              setDataSource((pre) => {
                return pre.filter((admin) => admin.id !== deleteId);
              });
            }}
          >
            Delete
          </Button1>
          <Button1
            variant="outlined"
            style={{
              color: "#F27370",
              border: "2px solid #F27370",
              backgroundColor: "white",
            }}
            onClick={handleCancel}
          >
            Cancel
          </Button1>
        </Box>
      </Modal>

    </div>
  );
}

