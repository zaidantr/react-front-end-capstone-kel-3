import { Box } from "@mui/system";
import { Space, Table, Tag, Button, Modal, Input, Form } from "antd";
import React, { useState } from "react";
import Button1 from "@mui/material/Button";
import warning from '../../assets/warning.svg';
import Sidebar from "../../components/Side Bar/SideBar";

export default function ManageOnlineBooking() {
  const [openDelete, setOpenDelete] = useState(false);
  const [deleteId, setDeleteId] = useState(-1);
  const [dataSource, setDataSource] = useState([
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
    status : ['Active'],
  },
  ]);

  const handleOk = () => {
    setOpenDelete(false);
  };

  const handleCancel = () => {
    setOpenDelete(false);
  };

  const columns = [
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
            return (
            <>
              <Button 
              id="btn-view-offline-booking"
              onClick={() => {
                info(record.id);
              }}
              style={{
                border: '1px solid #F27370',
                borderRadius: '4px',
                color: 'white',
                backgroundColor: '#F27370',
              }}
              >VIEW
              </Button>
              <Button 
              id="btn-delete-offline-booking"
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
            )
          }
    }
  ];


const info = (id) => {
  const viewData = dataSource.find((item) =>  item.id === id)
  console.log(viewData, 'data')
  Modal.info({
    title: "",
    icon: '',
    okText:'Cancel',
    okId: 'btn-cancel-view-offline-booking',
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
        >View Booking Status</h1>
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
      <>
      <div
      style={{
        position: 'absolute',
      }}
      >
        <Sidebar/>
      </div>

    <div style={{
          minWidth: 1046,
          marginLeft: '400px',
          // backgroundColor: 'black',
          paddingLeft: 62,
          paddingRight: 60,
          paddingTop: 187,
        }}>

      <h1
        style={{
          fontSize: "32px",
          fontWeight: "bold",
          fontFamily: "Roboto",
        }}
        >
        Manage Online Class Booking
      </h1>

      <div
      style={{
        border: '1px solid #F27370',
        paddingLeft: 23,
        paddingRight: 23,
      }}
      >
        <h3
        style={{
          paddingTop: 23,
          fontSize: '24px',
        }}
        >List Booking Status</h3>

      <Table
        columns={columns}
        dataSource={dataSource}
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
            id="btn-confirm-delete-offline-booking"
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
            id="btn-cancel-delete-offline-booking"
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
