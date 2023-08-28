import React from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import "../assests/Registration.css"


export default function Registration() {
  return (
    <Container>
      <Row>
        <Col className='imgRegistration' style={{ margin: "5%"  }}>
          <img
          
            src={require("../images/imgLogin.png")}
            
            alt="Login Image"
           />
        </Col>

        <Col
        className='inputRegistration'
          style={{
            width: "40%",
            border: "1px solid ",
            borderRadius: "25px",
            margin: "5%",
            padding: "5%",
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
              placeholder="email"
              aria-label="email"
              aria-describedby="basic-addon2"
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
            Registration
          </Button>
        </Col>
      </Row>
    </Container>
  );
}


