import { Space, Table, Tag, Button, Modal, Input, Form } from "antd";
import React, { useState } from "react";

export default function ManageOfflineBooking() {
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
                onDeleteAdmin(record);
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
      content: (
        <div>
          <p>Name: {viewData.username}</p>
          <p>Class: {viewData.class}</p>
          <p>Date: {viewData.date}</p>
          <p>Status: {viewData.status}</p>
        </div>
      ),

      onOk() {},
    });
  };

  const onDeleteAdmin = (record) => {
    Modal.confirm({
      title: "Are you sure delete this admin record?",
      okText: "Yes",
      okType: "danger",
      onOk: () => {
        setDataSource((pre) => {
          return pre.filter((admin) => admin.id !== record.id);
        });
      },
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
    </>
  );
}
