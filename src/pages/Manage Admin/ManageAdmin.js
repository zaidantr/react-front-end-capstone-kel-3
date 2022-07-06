import "antd/dist/antd.css";
import "../../App.css";
import { Table, Button, Modal, Input, Form } from "antd";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import "../../components/antd.css";
import Button1 from "@mui/material/Button";
import warning from "../../assets/warning.svg";
import getAPI from "../../services/api/api";
import userLogo from "../../assets/user-logo.svg";
import Sidebar from "../../components/Side Bar/SideBar";
import { LockOutlined } from "@ant-design/icons";
// import { EditOutlined, DeleteOutlined, InfoCircleOutlined} from '@ant-design/icons';
// import { height } from '@mui/system';
import fldPassword from "../../assets/fld-password.svg";
import fldName from "../../assets/fld-name.svg";
import fldEmail from "../../assets/fld-email.svg";
import fldPhone from "../../assets/fld-phone.svg";
import ModalEdit from "./ModalEdit";

export default function ManageAdmin() {
  const [openDelete, setOpenDelete] = useState(false);
  const [deleteId, setDeleteId] = useState(-1);
  const [isEditing, setIsEditing] = useState(false);
  const [isAddingAdmin, setIsAddingAdmin] = useState(false);
  const [editingAdmin, setEditingAdmin] = useState([
    { name: ["name"], value: "Ant Design" },
    { name: ["username"], value: "Ant Design" },
    { name: ["password"], value: "Ant Design" },
    { name: ["email"], value: "Ant Design" },
    { name: ["phoneNumber"], value: "Ant Design" },
  ]);
  const [newAdmin, setNewAdmin] = useState({
    name: "",
    username: "",
    password: "",
    phoneNumber: "",
  });
  const [form] = Form.useForm();

  // const handleOk = () => {
  //   setOpenDelete(false);
  // };

  form.setFieldsValue(newAdmin);

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
      render: (_, record) => {
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
  ].filter((item) => !item.hidden);

  const onEditAdmin = (record) => {
    setIsEditing(true);
    console.log(record);
    setEditingAdmin([
      { name: ["name"], value: record.name },
      { name: ["username"], value: record.username },
      { name: ["password"], value: record.password },
      { name: ["email"], value: record.email },
      { name: ["phoneNumber"], value: record.phoneNumber },
    ]);
  };

  const resetEditing = () => {
    setIsEditing(false);
    setEditingAdmin(null);
  };

  const resetAddAdmin = () => {
    setNewAdmin({});
    setIsAddingAdmin(false);
    form.resetFields();
  };

  const info = (id) => {
    const viewData = dataSource.find((item) => item.id === id);
    console.log(viewData, "data");
    Modal.info({
      icon: "",
      title: "",
      className: "view-admin-modal",
      okText: "Cancel",
      okId: "btn-cancel-view-admin",
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
          position: "absolute",
        }}
      >
        <Sidebar />
      </div>
      <div
        style={{
          marginLeft: "400px",
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

        <ModalEdit
          isEditing={isEditing}
          editingAdmin={editingAdmin}
          setEditingAdmin={setEditingAdmin}
          setDataSource={setDataSource}
          resetEditing={resetEditing}
        />

        {/* Add Admin */}
        <Modal
          title=""
          visible={isAddingAdmin}
          footer={null}
          onCancel={resetAddAdmin}
        >
          <h1
            style={{
              fontSize: "32px",
              fontWeight: "bold",
            }}
          >
            Add Admin
          </h1>

          <Form
            form={form}
            autoComplete="off"
            onFinish={(values) => {
              console.log(values);
              setDataSource([...dataSource, { ...values }]);
              resetAddAdmin();
            }}
            onFinishFailed={(error) => {
              console.log({ error });
            }}
            style={{
              width: "100%",
            }}
          >
            <div
              style={{
                fontSize: "20px",
                marginBottom: "5px",
              }}
            >
              Name Admin
            </div>

            <img
              src={fldName}
              alt="name"
              style={{
                position: "absolute",
                zIndex: "900",
                padding: "15px 0 18.5px 17.5px",
              }}
            />
            <Form.Item
              name="name"
              rules={[
                {
                  required: true,
                  message: "Please enter your name",
                },
              ]}
            >
              <Input
                id="fld-name-add-admin"
                placeholder="Enter Your Name"
                placeholderTextColor="#707070"
                name="name"
                value={newAdmin.name}
                style={{
                  border: "1px solid #707070",
                  padding: "10px 35px",
                  borderRadius: "4px",
                  color: "#707070",
                }}
                // value={editingAdmin?.name}
                // onChange={(e) => {
                //   setNewAdmin((pre) => {
                //     return { ...pre, name: e.target.value };
                //   });
                // }}
              />
            </Form.Item>

            <div
              style={{
                fontSize: "20px",
                marginBottom: "5px",
              }}
            >
              Username
            </div>
            <img
              src={fldName}
              alt="username"
              style={{
                position: "absolute",
                zIndex: "900",
                padding: "15px 0 18.5px 17.5px",
              }}
            />
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please enter your username",
                },
                {
                  whitespace: false,
                  message: "There cannot be a whitespace",
                },
              ]}
            >
              <Input
                id="fld-username-add-admin"
                placeholder="Enter Your Username"
                name="username"
                value={newAdmin.username}
                style={{
                  border: "1px solid #707070",
                  padding: "10px 35px",
                  borderRadius: "4px",
                  color: "#707070",
                }}
              />
            </Form.Item>

            <div
              style={{
                fontSize: "20px",
                marginBottom: "5px",
              }}
            >
              Password
            </div>
            <img
              src={fldPassword}
              alt="password"
              style={{
                position: "absolute",
                zIndex: "900",
                padding: "15px 0 18.5px 17.5px",
              }}
            />
            <Form.Item
              name="password"
              rules={[
                {
                  pattern:
                    /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{6,32}$/,
                  message: (
                    <ul>
                      <li>- At least 6 characters</li>
                      <li>- At least 1 numeric character</li>
                      <li>- At least 1 lowercase character</li>
                      <li>- At least 1 uppercase character</li>
                      <li>- At the end must be a string</li>
                    </ul>
                  ),
                },
                {
                  required: true,
                  message: "Password is required",
                },
              ]}
            >
              <Input
                id="fld-password-add-admin"
                placeholder="Enter Your Password"
                name="password"
                value={newAdmin.password}
                style={{
                  border: "1px solid #707070",
                  padding: "10px 35px",
                  borderRadius: "4px",
                  color: "#707070",
                }}
              />
            </Form.Item>

            <div
              style={{
                fontSize: "20px",
                marginBottom: "5px",
              }}
            >
              Email
            </div>
            <img
              src={fldEmail}
              alt="/"
              style={{
                position: "absolute",
                zIndex: "900",
                padding: "15px 0 18.5px 17.5px",
              }}
            />
            <Form.Item
              name="email"
              rules={[
                {
                  type: "email",
                  message: "The input is not valid E-mail!",
                },
                {
                  required: true,
                  message: "Email is required",
                },
              ]}
            >
              <Input
                id="fld-email-add-admin"
                placeholder="@gmail.com"
                name="email"
                value={newAdmin.email}
                style={{
                  border: "1px solid #707070",
                  padding: "10px 35px",
                  borderRadius: "4px",
                  color: "#707070",
                }}
              />
            </Form.Item>

            <div
              style={{
                fontSize: "20px",
                marginBottom: "5px",
              }}
            >
              Phone Number
            </div>

            <img
              src={fldPhone}
              alt="/"
              style={{
                position: "absolute",
                zIndex: "900",
                padding: "15px 0 18.5px 17.5px",
              }}
            />
            <Form.Item
              name="phoneNumber"
              initialValue={newAdmin.phoneNumber}
              rules={[
                {
                  pattern: new RegExp("^[0-9]{10,12}$"),
                  message: "The input is not valid Phone!",
                },
                {
                  required: true,
                  message: "Phone is required",
                },
              ]}
            >
              <Input
                id="fld-phone-number-add-admin"
                placeholder="Enter Your Phone Number"
                name="phoneNumber"
                value={newAdmin.phoneNumber}
                style={{
                  border: "1px solid #707070",
                  padding: "10px 35px",
                  borderRadius: "4px",
                  color: "#707070",
                }}
              />
            </Form.Item>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Button
                id="btn-save-add-admin"
                type="primary"
                htmlType="submit"
                style={{
                  width: "100%",
                  marginBottom: "15px",
                  borderRadius: "8px",
                  fontSize: "16px",
                  height: "40px",
                  alignItems: "center",
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
                  width: "100%",
                  borderRadius: "8px",
                  fontSize: "16px",
                  height: "40px",
                  alignItems: "center",
                }}
              >
                CANCEL
              </Button>
            </div>
          </Form>
        </Modal>

        <Modal visible={openDelete} footer={null} onCancel={handleCancel}>
          <Box display="flex" justifyContent="center">
            <img src={warning} alt="iconwarning" width="300px"></img>
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
          <Box display="flex" justifyContent="center">
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
