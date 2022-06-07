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

export default function ManageOnlineClass() {
  const [openDelete, setOpenDelete] = useState(false);
  const [deleteId, setDeleteId] = useState(-1);
  const [isEditing, setIsEditing] = useState(false);
  const [editingOnlineClass, setEditingOnlineClass] = useState(null);

  const handleOk = () => {
    setOpenDelete(false);
  };

  const handleCancel = () => {
    setOpenDelete(false);
  };

  const [dataSource, setDataSource] = useState([
    {
      id: 1,
      nameClass: 'Zumba',
      trainer: 'John55',
      date: '02/22/2022',
      price: 'Rp 300.000',
    }, 
    {
      id: 2,
      nameClass: 'Gym',
      trainer: 'David55',
      date: '02/22/2022',
      price: 'Rp 300.000',
    }, 
    {
      id: 3,
      nameClass: 'Weightlifting',
      trainer: 'Sam55',
      date: '02/22/2022',
      price: 'Rp 300.000',
    }, 
    {
      id: 4,
      nameClass: 'Running',
      trainer: 'Will55',
      date: '02/22/2022',
      price: 'Rp 300.000',
    }, 
    
  ]);

  const columns = [
    {
      key: '1',
      title: 'Name Class',
      dataIndex: 'nameClass',
    },
    {
      key: '2',
      title: 'Trainer',
      dataIndex: 'trainer',
    },
    {
      key: '3',
      title: 'Date',
      dataIndex: 'date',
    },
    {
      key: '4',
      title: 'Price',
      dataIndex: 'price',
    },
    {
      key: 5,
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
            onEditOnlineClass(record);
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

  const onAddOnlineClass = () => {
    const randomNumber = parseInt(Math.random()*1000);
    const newOnlineClass = {
      id: randomNumber,
      username: '',
      password: '',
    }

    setDataSource(pre=> {
      return  [...pre, newOnlineClass]
    })
    // setAddingAdmin(...record);
  };

  const onEditOnlineClass = (record) => {
    setIsEditing(true);
    setEditingOnlineClass({...record});
  }

  const resetEditing=() => {
    setIsEditing(false);
    setEditingOnlineClass(null);
  }


  const info = (id) => {
    const viewData = dataSource.find(item =>  item.id === id)
    console.log(viewData, 'data')
    Modal.info({
      okText:'',
      icon: '',
      title: '',
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
          >View Class</h1>
          <p
          >Name Class <br></br> {viewData.nameClass}
          </p>
          <p
          >Trainer <br></br> {viewData.trainer}</p>
          <p
          >Date <br></br> {viewData.date}</p>
          <p
          >Price <br></br> {viewData.price}</p>
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
        Manage Online Class
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
            List Online Class
          </h1>
          <Button 
          onClick={onAddOnlineClass}
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
        title="Edit Online Class"
        visible={isEditing}
        okText="Save"
        onCancel={() => {
          resetEditing();
        }}
        onOk={() => {
          setDataSource((pre) => {
            return pre.map((onlineclass) => {
              if (onlineclass.id === editingOnlineClass.id) {
                return editingOnlineClass;
              } else {
                return onlineclass;
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
            >Name Class</div>
            <Input 
            placeholder='Edit your name class' 
            value={editingOnlineClass?.nameClass} 
            onChange={(e) => {
              setEditingOnlineClass((pre) => {
                return {...pre, nameClass: e.target.value };
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
            placeholder='Edit trainer' 
            value={editingOnlineClass?.trainer} 
          onChange={(e) => {
            setEditingOnlineClass((pre) => {
              return {...pre, trainer: e.target.value };
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
            placeholder='Edit date' 
            value={editingOnlineClass?.date} 
            onChange={(e) => {
              setEditingOnlineClass((pre) => {
                return {...pre, date: e.target.value };
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
            placeholder='Edit price' 
            value={editingOnlineClass?.price} 
            onChange={(e) => {
              setEditingOnlineClass((pre) => {
                return {...pre, price: e.target.value };
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
                return pre.filter((onlineclass) => onlineclass.id !== deleteId);
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

