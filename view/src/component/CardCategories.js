import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

export default function CardCategories() {
  return (
    <div>
         <br></br>
         <br></br>
        <Container >
      <Row>
        <Col xs={12} >
         <Link to="">
            <img src={require("../images/image.png")} width="100%" />
      
         </Link>
        </Col>
      </Row>
        <br></br>
      <Row>
        <Col xs={12} md={12} lg={6} >
        <Link to="">
        <img src={require("../images/image (1).png")} width="70%" />
        </Link>
        </Col>

        <Col xs={12} md={12} lg={5} >
        <Link to="">
        <img md={{ span: 4, offset: 4 }} src={require("../images/image (1).png")} width="120%" />
        </Link>
        </Col>
      
      </Row>

      <br></br>
      <Row>

      <Col xs={12} md={12} lg={8} style={{marginTop:"-15%"}} >
      <Link to="">
        <img src={require("../images/image (1).png")} width="100%" />
       </Link>
        </Col>


      <Col xs={12} md={12} lg={4} >
      <Link to="">
        <img src={require("../images/image (1).png")} width="100%" />
       </Link>
       </Col>

       
       
      
      </Row>


      <Row>
      {/* <Col xs={12} lg={5} style={{marginTop:"-15%"}} >
        <img  src={require("../images/image (1).png")} width="120%" />
        </Col> */}
      <Col xs={12} md={12} lg={6}  >
      <Link to="">
        <img  src={require("../images/image (1).png")} width="100%" />
        </Link>
        </Col>

        <Col xs={12} md={12} lg={6}  >
        <Link to="">
        <img src={require("../images/image (1).png")} width="100%" />
        </Link>
        </Col>
       
       
      
      </Row>

    </Container>
    </div>
  )
}
