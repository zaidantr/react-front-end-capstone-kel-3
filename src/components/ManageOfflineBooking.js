import { Box } from "@mui/system";
import { Space, Table, Tag, Button, Modal, Input, Form } from "antd";
import React, { useState } from "react";
import Button1 from "@mui/material/Button";

export default function ManageOfflineBooking() {
  const [openDelete, setOpenDelete] = useState(false);
  const [deleteId, setDeleteId] = useState(-1);
  const [dataSource, setDataSource] = useState([
    {
      id: "1",
      username: "John123",
      class: "Cardio",
      date: "12/02/2022",
      status: "active",
    },
    {
      id: "2",
      username: "John123",
      class: "Cardio",
      date: "12/02/2022",
      status: "expired",
    },
    {
      id: "3",
      username: "John123",
      class: "Cardio",
      date: "12/02/2022",
      status: "active",
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
      title: "Username",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Class",
      dataIndex: "class",
      key: "name",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Status",
      key: "status",
      dataIndex: "status",
    },
    {
      key: 4,
      title: "Actions",
      render: (record) => {
        return (
          <>
            <Button
              onClick={() => {
                info(record.id);
              }}
            >
              VIEW
            </Button>
            <Button
              onClick={() => {
                setOpenDelete(!openDelete);
                setDeleteId(record.id);
              }}
              style={{
                color: "red",
                marginLeft: 12,
              }}
            >
              DELETE
            </Button>
          </>
        );
      },
    },
  ];

  const info = (id) => {
    const viewData = dataSource.find((item) => item.id === id);
    console.log(viewData, "data");
    Modal.info({
      title: "",
      icon: null,
      okText: "Cancel",
      okButtonProps: {
        type: "primary",
        style: {
          color: "black",
          backgroundColor: "white",
          border: "2px solid black",
        },
      },
      content: (
        <div>
          <h1 style={{ fontSize: "26px" }}>View Booking Status</h1>
          <p>Name: {viewData.username}</p>
          <p>Class: {viewData.class}</p>
          <p>Date: {viewData.date}</p>
          <p>Status: {viewData.status}</p>
        </div>
      ),

      onOk() {},
    });
  };

  return (
    <>
      <h1
        style={{
          fontSize: "2rem",
        }}
      >
        Manage Offline Booking
      </h1>
      <Table
        columns={columns}
        dataSource={dataSource}
        style={{
          minWidth: 1120,
          paddingTop: 30,
        }}
      />
      <Modal visible={openDelete} footer={null} onCancel={handleCancel}>
        <Box display="flex" justifyContent="center">
          <img src="/asset/icondelete.svg" alt="icondelete" width="125vw"></img>
        </Box>
        <p style={{ textAlign: "center", padding: "30px", fontSize: "24px" }}>
          Are sure to delete this Admin?
        </p>
        <Box display="flex" justifyContent="center">
          <Button1
            style={{
              color: "white",
              backgroundColor: "black",
              border: "3px solid black",
              marginRight: "20px",
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
              color: "black",
              border: "2px solid black",
            }}
            onClick={handleCancel}
          >
            Cancel
          </Button1>
        </Box>
      </Modal>
      ;
    </>
  );
}
