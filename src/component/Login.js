import React from "react";
import { Button, Container, Form, Row, Col } from "react-bootstrap";

export default function Login() {
  return (
    <Container>
      <img
        style={{ margin: "40px", paddingLeft: "480px" }}
        src="/asset/logofigma.svg"
        alt="logo"
        height="80px"
      ></img>
      <Row style={{ justifyContent: "center" }}>
        <Col lg={5}>
          <p style={{ textAlign: "left", color: "#666666" }}>
            Please fill in your unique admin login details below
          </p>
          <Form style={{ color: "#666666" }}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control type="email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" />
            </Form.Group>

            <div className="d-grid">
              <Button
                variant="secondary"
                size="lg"
                style={{ backgroundColor: "black", marginTop: "50px" }}
              >
                Sign In
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
