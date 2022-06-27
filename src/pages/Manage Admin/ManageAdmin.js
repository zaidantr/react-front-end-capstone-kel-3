import "antd/dist/antd.css";
import "../../App.css";
import { Table, Button, Modal, Input, Form } from "antd";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import "../../components/antd.css";
import Button1 from "@mui/material/Button";
import warning from "../../assets/warning.svg";
import getAPI from "../../services/api/api";
import userLogo from "../../assets/user-logo.svg"
import Sidebar from "../../components/Side Bar/SideBar";
import { LockOutlined } from '@ant-design/icons';
// import { EditOutlined, DeleteOutlined, InfoCircleOutlined} from '@ant-design/icons';
// import { height } from '@mui/system';
import fldPassword from '../../assets/fld-password.svg';
import fldName from '../../assets/fld-name.svg';
import fldEmail from '../../assets/fld-email.svg';
import fldPhone from '../../assets/fld-phone.svg';
import Manage from "./Manage";

export default function ManageAdmin() {
  const [openDelete, setOpenDelete] = useState(false);
  const [deleteId, setDeleteId] = useState(-1);
  const [isEditing, setIsEditing] = useState(false);
  const [isAddingAdmin, setIsAddingAdmin] = useState(false);
  const [editingAdmin, setEditingAdmin] = useState(null);
  const [newAdmin, setNewAdmin] = useState({});

  // const handleOk = () => {
  //   setOpenDelete(false);
  // };

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
              id="btn-view-admin"
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
              id="btn-edit-admin"
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
              id="btn-delete-admin"
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
      okId: 'btn-cancel-view-admin',
      okButtonProps: {
        type: "primary",
        style: {
          border: "2px solid #F27370",
          color: "#F27370",
          backgroundColor: "white",
          borderRadius: "8px",
        },
      },
      content: (
        <div
          style={{
            fontSize: "20px",
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

  // console.log(editingAdmin.name, "editingAdmin");
  

  return (
    <>
    <div 
    style={{
      position: 'absolute'
    }}
    >
      <Sidebar />
    </div>
    <div
      style={{
        marginLeft: '400px',
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
            // width: "12px",
            // height: "12px",
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
            id="btn-add-admin"
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
            fontFamily: "Inter",
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
        

            <Form
            autoComplete="off"
            // labelCol={{ span: 10 }}
            // wrapperCol={{ span: 14 }}
            onFinish={(values) => {
              console.log({ values });
            }}
            onFinishFailed={(error) => {
              console.log({ error });
            }}
            style={{
              width: '100%'
            }}
            >
              <div style={{
                fontSize: '20px',
                marginBottom: '5px',
              }}
              >Name Admin</div>
        <Form.Item
          // name="Name Admin" 
          // Gara gara ini valuenya ga keambil editingAdmin
          
          rules={[
            {
              required: true,
              message: "Please enter your name",
            },
            { whitespace: true },
            { min: 3 },
          ]}
          hasFeedback
          
        >
          <img
          src={fldName}
          style={{
            position: 'absolute',
            zIndex: '900',
            padding: '15px 0 18.5px 17.5px'
          }}
          />
          <Input
            id="fld-name-edit-admin"
            placeholder="Enter Your Name"
            style={{
              border: '1px solid #707070',
              padding: '10px 35px',
              borderRadius: '4px',
              color: '#707070',
            }}
            value={editingAdmin?.name}
            onChange={(e) => {
              setEditingAdmin((pre) => {
                return { ...pre, name: e.target.value };
              })
            }} 
            />

        </Form.Item>

          <div style={{
            fontSize: '20px',
              marginBottom: '5px',
            }}
            >Username</div>
        <Form.Item
        //  name="Username"
         rules={[
           {
             required: true,
             message: "Please enter a valid username",
           },
           { whitespace: true },
           { min: 3 },
         ]}
         hasFeedback
        >
          <img
          src={fldName}
          style={{
            position: 'absolute',
            zIndex: '900',
            padding: '15px 0 18.5px 17.5px'
          }}
          />
          <Input
            id="fld-username-edit-admin"
            placeholder="Enter Your Username"
            style={{
              border: '1px solid #707070',
              padding: '10px 35px',
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

          <div style={{
            fontSize: '20px',
            marginBottom: '5px',
            }}>Password</div>
        <Form.Item
        // name="password"
        rules={[
          { required: true, message: 'Please enter a valid password' },
          { min: 8, message: 'Password must have a minimum length of 8' },
          {
              pattern: new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[A-Za-z\\d@$!%*?&]{8,}$'),
              message: 'Password must contain at least one lowercase letter, uppercase letter, and number'
          },
        ]}
        hasFeedback
        >
          <img
          src={fldPassword}
          style={{
            position: 'absolute',
            zIndex: '900',
            padding: '15px 0 18.5px 17.5px'
          }}
          />
          <Input
            id="fld-password-edit-admin"
            placeholder="Enter Your Password"
            style={{
              border: '1px solid #707070',
              padding: '10px 35px',
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

          <div style={{
            fontSize: '20px',
            marginBottom: '5px',
            }}>Email</div>
        <Form.Item
        //  name="email"
         rules={[
           { 
            required: true,
            type: "email", 
            message: "Please enter a valid email address" },
         ]}
         hasFeedback
        >
          <img
          src={fldEmail}
          style={{
            position: 'absolute',
            zIndex: '900',
            padding: '15px 0 18.5px 17.5px'
          }}
          />
          <Input
            id="fld-email-edit-admin"
            placeholder="@gmail.com"
            style={{
              border: '1px solid #707070',
              padding: '10px 35px',
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

          <div style={{
            fontSize: '20px',
            marginBottom: '5px',
          }}>Phone Number</div>
        <Form.Item
        // name="Phone Number"
        rules={[
          {
            required: true,
            message: "Please enter a valid phone number",
          },
          {
            pattern: new RegExp('^[0-9]{10,12}$'),
            message: "Wrong format!"
          }
        ]}
        hasFeedback
        >
          <img
          src={fldPhone}
          style={{
            position: 'absolute',
            zIndex: '900',
            padding: '15px 0 18.5px 17.5px'
          }}
          />
          <Input
            id="fld-phone-number-edit-admin"
            placeholder="Enter Your Phone Number"
            style={{
              border: '1px solid #707070',
              padding: '10px 35px',
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
        id="btn-save-edit-admin"
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
        id="btn-cancel-edit-admin"
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

      </Form>
      </Modal>

{/* MODAL ADD ADMIN */}
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

        <Form
        autoComplete="off"
        // labelCol={{ span: 10 }}
        // wrapperCol={{ span: 14 }}
        onFinish={(values) => {
          console.log({ values });
        }}
        onFinishFailed={(error) => {
          console.log({ error });
        }}
        style={{
          width: '100%'
        }}
        >
          
{/* FORM INPUT YANG ADA VALIDASI NYA DISiNI */}
        <Manage/>


                  <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        marginTop: '20px',
      }}
      >
        
        <Button
        id="btn-save-add-admin"
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
        id="btn-cancel-add-admin"
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
      </Form>
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
            id="btn-confirm-delete-admin"
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
            id="btn-cancel-delete-admin"
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

  );
}
