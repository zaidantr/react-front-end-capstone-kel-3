import "antd/dist/antd.css";
import "../App.css";
import { Table, Button, Modal, Input, Form } from "antd";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import "./antd.css";
import Button1 from "@mui/material/Button";
import warning from "./warning.svg";
import getAPI from "../services/api/api";
// import { EditOutlined, DeleteOutlined, InfoCircleOutlined} from '@ant-design/icons';
// import { height } from '@mui/system';

export default function ManageAdmin() {
  const [openDelete, setOpenDelete] = useState(false);
  const [deleteId, setDeleteId] = useState(-1);
  const [isEditing, setIsEditing] = useState(false);
  const [isAddingAdmin, setIsAddingAdmin] = useState(false);
  const [editingAdmin, setEditingAdmin] = useState(null);
  const [newAdmin, setNewAdmin] = useState({});

  const handleOk = () => {
    setOpenDelete(false);
  };

  const handleCancel = () => {
    setOpenDelete(false);
  };

  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    const api = getAPI(true);
    api.getAdminData().then((data) => setDataSource(data));
  }, []);

  const columns = [
    {
      key: "1",
      title: "Name",
      dataIndex: "name",
    },
    {
      key: "2",
      title: "Username",
      dataIndex: "username",
    },
    {
      key: "3",
      title: "Password",
      dataIndex: "password",
    },
    {
      key: "4",
      title: "Email",
      dataIndex: "email",
      hidden: true,
    },
    {
      key: "5",
      title: "Phone Number",
      dataIndex: "phoneNumber",
      hidden: true,
    },
    {
      key: 6,
      title: "Actions",
      render: (record) => {
        return (
          <>
            <Button
              onClick={() => {
                info(record.id);
              }}
              style={{
                border: "1px solid #F27370",
                borderRadius: "4px",
                color: "white",
                backgroundColor: "#F27370",
              }}
            >
              VIEW
            </Button>
            <Button
              onClick={() => {
                onEditAdmin(record);
              }}
              style={{
                border: "1px solid #F27370",
                borderRadius: "4px",
                color: "white",
                backgroundColor: "#F27370",
                marginLeft: 12,
              }}
            >
              EDIT
            </Button>
            <Button
              onClick={() => {
                setOpenDelete(!openDelete);
                setDeleteId(record.id);
              }}
              style={{
                border: "1px solid #F27370",
                borderRadius: "4px",
                color: "white",
                backgroundColor: "#F27370",
                marginLeft: 12,
              }}
            >
              DELETE
            </Button>
          </>
        );
      },
    },
  ].filter(item => !item.hidden);

  const onEditAdmin = (record) => {
    setIsEditing(true);
    setEditingAdmin({ ...record });
  };

  const resetEditing = () => {
    setIsEditing(false);
    setEditingAdmin(null);
  };

  const resetAddAdmin = () => {
    setIsAddingAdmin(false);
    setNewAdmin({});
  };

  const info = (id) => {
    const viewData = dataSource.find((item) => item.id === id);
    console.log(viewData, "data");
    Modal.info({
      icon: "",
      title: "",
      className: "view-admin-modal",
      okText: "Cancel",
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
            fontSize: "20px",
            // lineHeight: '23px',
            // fontFamily: 'Roboto',
            // fontWeight: '400px',
            // fontStyle: 'normal',
            // color: '#585858',
            // paddingTop:'34px',
          }}
        >
          <h1 style={{ fontSize: "26px" }}>View Admin</h1>
          <p>
            Name <br></br> {viewData.name}
          </p>
          <p>
            Username <br></br> {viewData.username}
          </p>
          <p>
            Password <br></br> {viewData.password}
          </p>
          <p>
            Email <br></br> {viewData.email}
          </p>
          <p>
            Phone Number <br></br> {viewData.phoneNumber}
          </p>
        </div>
      ),

      onOk() {},
    });
  };

  return (
    <div
      style={{
        minWidth: 1046,
        // backgroundColor: 'black',
        paddingLeft: 62,
        paddingRight: 60,
        paddingTop: 170,
      }}
    >
      <h1
        style={{
          fontSize: "2rem",
          // fontWeight: "bold",
          // fontFamily: "Roboto",
        }}
      >
        Manage Admin
      </h1>

      <div
        style={{
          border: "1px solid #F27370",
          paddingLeft: 23,
          paddingRight: 23,
        }}
      >
        <div
          style={{
            display: "flex",
            paddingRight: "44.5px",
            paddingTop: "25px",
          }}
        >
          <h1
            style={{
              fontSize: "2rem",
              // fontWeight: "bold",
              // fontFamily: "Roboto",
            }}
          >
            List Admin
          </h1>
          <Button
            onClick={() => {
              setIsAddingAdmin(true);
            }}
            style={{
              backgroundColor: "#F27370",
              color: "white",
              border: "1px solid #F27370",
              borderRadius: "4px",
              marginLeft: "auto",
            }}
          >
            + NEW
          </Button>
        </div>

        <Table
          columns={columns}
          dataSource={dataSource}
          style={{
            // paddingTop: 30,
            margin: 0,
          }}
        ></Table>
      </div>

      <Modal
        title=""
        visible={isEditing}
        footer={null}
      >
          <h1
          style={{
            fontSize: '32px',
            fontWeight: 'bold',
          }}
        >Edit Admin</h1>

        <Form.Item>
          <div style={{
            fontSize: '20px',
            marginBottom: '5px',
          }}
          >Name Admin</div>
          <Input
            placeholder="Enter Your Name"
            style={{
              border: '1px solid #707070',
              padding: '10px 16px',
              borderRadius: '4px',
              color: '#707070'
            }}
            value={editingAdmin?.name}
            onChange={(e) => {
              setEditingAdmin((pre) => {
                return { ...pre, name: e.target.value };
              });
            }}
          />
        </Form.Item>

        <Form.Item>
          <div style={{
              fontSize: '20px',
              marginBottom: '5px',
            }}>Username</div>
          <Input
            placeholder="Enter Your Username"
            style={{
              border: '1px solid #707070',
              padding: '10px 16px',
              borderRadius: '4px',
              color: '#707070'
            }}            
            value={editingAdmin?.username}
            onChange={(e) => {
              setEditingAdmin((pre) => {
                return { ...pre, username: e.target.value };
              });
            }}
          />
        </Form.Item>

        <Form.Item>
          <div style={{
              fontSize: '20px',
              marginBottom: '5px',
            }}>Password</div>
          <Input
            placeholder="Enter Your Password"
            style={{
              border: '1px solid #707070',
              padding: '10px 16px',
              borderRadius: '4px',
              color: '#707070'
            }}            
            value={editingAdmin?.password}
            onChange={(e) => {
              setEditingAdmin((pre) => {
                return { ...pre, password: e.target.value };
              });
            }}
          />
        </Form.Item>

        <Form.Item>
          <div style={{
              fontSize: '20px',
              marginBottom: '5px',
            }}>Email</div>
          <Input
            placeholder="@gmail.com"
            style={{
              border: '1px solid #707070',
              padding: '10px 16px',
              borderRadius: '4px',
              color: '#707070'
            }}            
            value={editingAdmin?.email}
            onChange={(e) => {
              setEditingAdmin((pre) => {
                return { ...pre, email: e.target.value };
              });
            }}
          />
        </Form.Item>

        <Form.Item>
          <div style={{
              fontSize: '20px',
              marginBottom: '5px',
            }}>Phone Number</div>
          <Input
            placeholder="Enter Your Phone Number"
            style={{
              border: '1px solid #707070',
              padding: '10px 16px',
              borderRadius: '4px',
              color: '#707070'
            }}
            value={editingAdmin?.phoneNumber}
            onChange={(e) => {
              setEditingAdmin((pre) => {
                return { ...pre, phoneNumber: e.target.value };
              });
            }}
          />
        </Form.Item>
      
      <div
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
      >
        
        <Button
        type="primary"
        onClick={() => {
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
          style={{
            width: '100%',
            marginBottom: '15px',
            borderRadius: '8px',
            fontSize: '16px',
            height: '40px',
            alignItems: 'center',
          }}          
        >
          + SAVE
        </Button>
        <Button
        onClick={() => {
          resetEditing();
        }}
        style={{
          width: '100%',
          borderRadius: '8px',
          fontSize: '16px',
          height: '40px',
          alignItems: 'center',
        }}
        >
          CANCEL
        </Button>
      </div>

      </Modal>

      <Modal
        title=""
        visible={isAddingAdmin}
        footer={null}
      >
        <h1
        style={{
          fontSize: '32px',
          fontWeight: 'bold',
        }}
        >Add Admin</h1>

        <Form.Item>
          <div style={{
            fontSize: '20px',
            marginBottom: '5px',
          }}>Name Admin</div>

          <Input
            placeholder="Enter Your Name"
            placeholderTextColor="#707070"
            style={{
              border: '1px solid #707070',
              padding: '10px 16px',
              borderRadius: '4px',
              color: '#707070'
            }}
            value={editingAdmin?.name}
            onChange={(e) => {
              setNewAdmin((pre) => {
                return { ...pre, name: e.target.value };
              });
            }}
          />
        </Form.Item>

        <Form.Item>
          <div 
          style={{
              fontSize: '20px',
              marginBottom: '5px',
          }}>Username</div>
          <Input
            placeholder="Enter Your Username"
            style={{
              border: '1px solid #707070',
              padding: '10px 16px',
              borderRadius: '4px',
              color: '#707070'
            }}
            value={editingAdmin?.username}
            onChange={(e) => {
              setNewAdmin((pre) => {
                return { ...pre, username: e.target.value };
              });
            }}
          />
        </Form.Item>

        <Form.Item>
          <div style={{
              fontSize: '20px',
              marginBottom: '5px',
          }}>Password</div>
          <Input
            placeholder="Enter Your Password"
            style={{
              border: '1px solid #707070',
              padding: '10px 16px',
              borderRadius: '4px',
              color: '#707070'
            }}
            value={editingAdmin?.password}
            onChange={(e) => {
              setNewAdmin((pre) => {
                return { ...pre, password: e.target.value };
              });
            }}
          />
        </Form.Item>

        <Form.Item>
          <div style={{
              fontSize: '20px',
              marginBottom: '5px',
          }}>Email</div>
          <Input
            placeholder="@gmail.com"
            style={{
              border: '1px solid #707070',
              padding: '10px 16px',
              borderRadius: '4px',
              color: '#707070'
            }}
            value={editingAdmin?.email}
            onChange={(e) => {
              setNewAdmin((pre) => {
                return { ...pre, email: e.target.value };
              });
            }}
          />
        </Form.Item>

        <Form.Item>
          <div style={{
              fontSize: '20px',
              marginBottom: '5px',
          }}>Phone Number</div>
          <Input
            placeholder="Enter Your Phone Number"
            style={{
              border: '1px solid #707070',
              padding: '10px 16px',
              borderRadius: '4px',
              color: '#707070'
            }}
            value={editingAdmin?.phoneNumber}
            onChange={(e) => {
              setNewAdmin((pre) => {
                return { ...pre, phoneNumber: e.target.value };
              });
            }}
          />
        </Form.Item>
                  <div
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
      >
        
        <Button
        type="primary"
        onClick={() => {
          setDataSource([...dataSource, newAdmin]);
          resetAddAdmin();
          }}
          style={{
            width: '100%',
            marginBottom: '15px',
            borderRadius: '8px',
            fontSize: '16px',
            height: '40px',
            alignItems: 'center',
          }}          
        >
          + SAVE
        </Button>
        <Button
        onClick={() => {
          resetAddAdmin();
        }}
        style={{
          width: '100%',
          borderRadius: '8px',
          fontSize: '16px',
          height: '40px',
          alignItems: 'center',
        }}
        >
          CANCEL
        </Button>
      </div>
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
          width="300px"
          ></img>
        </Box>
        <p
          style={{
            textAlign: "center",
            padding: "30px",
            fontSize: "24px",
          }}
        >
          Are you sure want to delete this?
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
