import React from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import "../assests/Login.css"


export default function Login() {
  return (
    <Container fluid>
      <Row>
        <Col className='imgLogin' style={{ margin: "5%"  }}>
      
        <img src={require("../images/imgLogin.png")}  alt="Your Image" />

        </Col>

        <Col
        className='inputLogin'
          style={{
            width: "30%",
            border: "1px solid ",
            borderRadius: "25px",
            margin: "5%",
            padding: "4%",
          }}
        >
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Password"
              aria-label="Password"
              aria-describedby="basic-addon1"
            />
          </InputGroup>

          <Button variant="primary" size="lg" style={{ width: "100%" }} active>
            Login
          </Button>
        </Col>
      </Row>
    </Container>
  );
}


