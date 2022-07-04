import { Box, Button } from "@mui/material";
import { Modal } from "antd";
import React from "react";
import warning from "../assets/warning.svg";

export default function ModalDecline({
  openDelete,
  handleCancel,
  handleDelete,
}) {
  return (
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
        Are you sure want to decline membership ?
      </p>
      <Box display="flex" justifyContent="center">
        <Button
          id="btn-confirm-delete-membership"
          style={{
            color: "white",
            fontSize: "16px",
            backgroundColor: "#F27370",
            borderRadius: "8px",
            marginRight: "20px",
            padding: "7px 10px",
          }}
          onClick={handleDelete}
        >
          Decline
        </Button>
        <Button
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
        </Button>
      </Box>
    </Modal>
  );
}