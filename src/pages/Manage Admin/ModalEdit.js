import { Button, Form, Input, Modal } from "antd";
import React from "react";
import fldPassword from "../../assets/fld-password.svg";
import fldName from "../../assets/fld-name.svg";
import fldEmail from "../../assets/fld-email.svg";
import fldPhone from "../../assets/fld-phone.svg";

export default function ModalEdit({
  isEditing,
  editingAdmin,
  setEditingAdmin,
  setDataSource,
  resetEditing,
}) {
  console.log(editingAdmin);
  return (
    <Modal title="" visible={isEditing} footer={null} onCancel={resetEditing}>
      <h1
        style={{
          fontSize: "32px",
          fontWeight: "bold",
        }}
      >
        Edit Admin
      </h1>

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
            { whitespace: true },
            { min: 3 },
          ]}
          hasFeedback
        >
          <Input
            id="fld-name-edit-admin"
            placeholder="Enter Your Name"
            style={{
              border: "1px solid #707070",
              padding: "10px 35px",
              borderRadius: "4px",
              color: "#707070",
            }}
            value={editingAdmin?.name}
            onChange={(e) => {
              setEditingAdmin((pre) => {
                return { ...pre, name: e.target.value };
              });
            }}
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
          name="Username"
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
          <Input
            id="fld-username-edit-admin"
            placeholder="Enter Your Username"
            style={{
              border: "1px solid #707070",
              padding: "10px 35px",
              borderRadius: "4px",
              color: "#707070",
            }}
            value={editingAdmin?.username}
            onChange={(e) => {
              setEditingAdmin((pre) => {
                return { ...pre, username: e.target.value };
              });
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
                /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/,
              message: (
                <ul>
                  <li>- At least 8 characters</li>
                  <li>- At least 1 numeric character</li>
                  <li>- At least 1 lowercase character</li>
                  <li>- At least 1 uppercase character</li>
                  <li>- At least 1 special character</li>
                </ul>
              ),
            },
            { required: true, message: "Please enter a valid password" },
          ]}
        >
          <Input
            id="fld-password-edit-admin"
            placeholder="Enter Your Password"
            style={{
              border: "1px solid #707070",
              padding: "10px 35px",
              borderRadius: "4px",
              color: "#707070",
            }}
            value={editingAdmin?.password}
            onChange={(e) => {
              setEditingAdmin((pre) => {
                return { ...pre, password: e.target.value };
              });
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
          alt="email"
          style={{
            position: "absolute",
            zIndex: "900",
            padding: "15px 0 18.5px 17.5px",
          }}
        />
        <Form.Item
          // name="email"
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
          hasFeedback
        >
          <Input
            id="fld-email-edit-admin"
            placeholder="@gmail.com"
            style={{
              border: "1px solid #707070",
              padding: "10px 35px",
              borderRadius: "4px",
              color: "#707070",
            }}
            value={editingAdmin?.email}
            onChange={(e) => {
              setEditingAdmin((pre) => {
                return { ...pre, email: e.target.value };
              });
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
          alt="phone"
          style={{
            position: "absolute",
            zIndex: "900",
            padding: "15px 0 18.5px 17.5px",
          }}
        />
        <Form.Item
          // name="Phone Number"
          rules={[
            {
              required: true,
              message: "Please enter a valid phone number",
            },
            {
              pattern: new RegExp("^[0-9]{10,12}$"),
              message: "Wrong format!",
            },
          ]}
          hasFeedback
        >
          <Input
            id="fld-phone-number-edit-admin"
            placeholder="Enter Your Phone Number"
            style={{
              border: "1px solid #707070",
              padding: "10px 35px",
              borderRadius: "4px",
              color: "#707070",
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
            display: "flex",
            flexDirection: "column",
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
            id="btn-cancel-edit-admin"
            onClick={resetEditing}
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
  );
}