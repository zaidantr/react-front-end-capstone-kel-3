import { Box } from "@mui/system";
import { Space, Table, Tag, Button, Modal, Input, Form } from "antd";
import React, { useState } from "react";
import Button1 from "@mui/material/Button";
import warning from './warning.svg';

export default function ManageMembership() {
  const [openDelete, setOpenDelete] = useState(false);
  const [deleteId, setDeleteId] = useState(-1);

  const handleOk = () => {
    setOpenDelete(false);
  };

  const handleCancel = () => {
    setOpenDelete(false);
  };

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
            style={{
              border: '1px solid #F27370',
              borderRadius: '4px',
              color: 'white',
              backgroundColor: '#F27370',
            }}
            >ACCEPT</Button>
            <Button 
            // onClick={() => {
            //   onDeleteAdmin(record)
            // }}
            style={{
              border: '1px solid #F27370',
              borderRadius: '4px',
              color: 'white',
              backgroundColor: '#F27370',
              marginLeft: 12,
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
            style={{
              border: '1px solid #F27370',
              borderRadius: '4px',
              color: 'white',
              backgroundColor: '#F27370',
            }}
            >VIEW</Button>
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


const info = (id) => {
  const viewData = dataSource2.find(item =>  item.id === id)
  console.log(viewData, 'data')
  Modal.info({
    title: "",
    icon: '',
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
        >View Membership</h1>
      <p
      >Name <br></br> {viewData.username}</p>
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
      <>

      <div 
      className="manage-membership"
      style={{
          minWidth: 1046,
          // backgroundColor: 'black',
          paddingLeft: 62,
          paddingRight: 60,
        }}>

        <h1
          style={{
            fontSize: '2rem',
          }}>
          Manage Membership
        </h1>
      <div
        style={{
          border: '1px solid #F27370',
          paddingLeft: 23,
          paddingRight: 23,
          marginTop: 32,
        }}>
        <h3
          style={{
            paddingTop: 23,
          fontSize: '24px',
          }}>
          Waiting Membership
        </h3>
        <Table 
          columns={columns1} 
          dataSource={dataSource1} 
          style={{
            paddingTop: 30,
          }}
          />
      </div>

      
      <div
      style={{
        border: '1px solid #F27370',
        paddingLeft: 23,
        paddingRight: 23,
        marginTop: 32,
      }}>
        <h1
          style={{
            paddingTop: 23,
            fontSize: '24px',
          }}
        >
        List Membership
        </h1>
        <Table 
          columns={columns2} 
          dataSource={dataSource2} 
          style={{
            paddingTop: 30,
          }}
          />
      </div>

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
          fontSize: "24px",
          fontWeight: "700",
          }}>
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
              setDataSource2((pre) => {
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
      </>
  )
}
