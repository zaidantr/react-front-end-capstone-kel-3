import { Box } from "@mui/system";
import { Space, Table, Tag, Button, Modal, Input, Form } from "antd";
import React, { useState } from "react";
import Button1 from "@mui/material/Button";
import warning from '../../assets/warning.svg';
import Sidebar from "../../components/Side Bar/SideBar";
import ModalDecline from "../../components/ModalDecline";

export default function ManageMembership() {
  const [openDelete, setOpenDelete] = useState(false);
  const [openDecline, setOpenDecline] = useState(false);
  const [deleteId, setDeleteId] = useState(-1);

  const handleOk = () => {
    setOpenDelete(false);
  };

  const handleCancel = () => {
    setOpenDelete(false);
  };
  const handleCancelDecline = () => {
    setOpenDecline(false);
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
            id="btn-accept-membership"
            style={{
              border: '1px solid #F27370',
              borderRadius: '4px',
              color: 'white',
              backgroundColor: '#F27370',
            }}
            >ACCEPT</Button>
            <Button 
            id="btn-decline-membership"
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
    status : ['Active'],
  },
  {
    id: '2',
    username: 'John123',
    class: 'Cardio',
    date: '12/02/2022',
    status : ['Expired'],
  },
  {
    id: '3',
    username: 'John123',
    class: 'Cardio',
    date: '12/02/2022',
    status : ['Expired'],
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
    render: (_, { status }) => (
      <>
        {status.map((isActive) => {
          return (
            <h1 style={{
              color: isActive === "Active" ? '#17E243' : '#F60000'
              }} 
              >
              {isActive}
            </h1>
          );
        })}
      </>
    ),
  },
  {
    key: 4,
        title: 'Actions',
        render:(record) => {
          return <>
            <Button 
            id="btn-view-membership"
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
            id="btn-delete-membership"
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
    okId: 'btn-cancel-view-membership',
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

const handleDecline = () => {
  setOpenDecline(false);
  setDataSource1((pre) => {
    return pre.filter((admin) => admin.id !== deleteId);
  });
};
  
  return (
      <>
      <div
      style={{
        position: 'absolute',
      }}
      >
        <Sidebar />
      </div>
      <div 
      className="manage-membership"
      style={{
          minWidth: 1046,
          marginLeft: '400px',
          // backgroundColor: 'black',
          paddingLeft: 62,
          paddingRight: 60,
          paddingTop: 80,
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
          }}>
          Are you sure want to delete this?
        </p>
        <Box 
        display="flex" 
        justifyContent="center">
          <Button1
          id="btn-confirm-delete-membership"
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
            id="btn-cancel-delete-membership"
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
        <ModalDecline 
          handleCancel={handleCancelDecline}
          handleDelete={handleDecline}
          openDelete={openDecline}          
        />
      </div>
      </>
  )
}
