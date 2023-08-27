import React from "react";
import { Navbar, Nav, Container, Form, Row, Col } from "react-bootstrap";
import { FaShoppingCart, FaUser, FaSearch } from "react-icons/fa";
import logoApple from "../images/logoApple.png";
import { LinkContainer } from "react-router-bootstrap";
import "../assests/Layouts.css";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput,
} from "mdb-react-ui-kit";
import Button from "@mui/material/Button";
import Subscribe from "./Subscribe";

function Layouts() {
  return (
    <>
      <header>
        <Navbar
          variant="dark"
          expand="md"
          collapseOnSelect
          className="main_nav"
        >
          <Container fluid>
            <LinkContainer to="/">
              <Navbar.Brand className="brand">
                <img src={logoApple} alt="" className="logo" />| iSystem
              </Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="m-auto nav_categories">
                <LinkContainer to="/cart">
                  <Nav.Link>
                    {/* <FaShoppingCart /> */}
                    Mac
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to="/signin">
                  <Nav.Link href="/login">
                    {/* <FaUser /> */}
                    iPad
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to="/cart">
                  <Nav.Link>
                    {/* <FaShoppingCart /> */}
                    iPhone
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to="/cart">
                  <Nav.Link>
                    {/* <FaShoppingCart /> */}
                    Watch
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to="/cart">
                  <Nav.Link>
                    {/* <FaShoppingCart /> */}
                    Audio
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to="/cart">
                  <Nav.Link>
                    {/* <FaShoppingCart /> */}
                    Apple Tv
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to="/cart">
                  <Nav.Link>
                    {/* <FaShoppingCart /> */}
                    Accessories
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to="/cart">
                  <Nav.Link>
                    {/* <FaShoppingCart /> */}
                    iSystem Care
                  </Nav.Link>
                </LinkContainer>
              </Nav>
              <form class="nosubmit">
                <input class="nosubmit" type="search" placeholder="Search..." />
              </form>

              <Nav className="ml-auto">
                <LinkContainer to="/cart">
                  <Nav.Link>
                    <FaShoppingCart />
                    Cart
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to="/signin">
                  <Nav.Link href="/login">
                    <FaUser />
                    LogIn
                  </Nav.Link>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>

      <Outlet />

      <footer>
        <MDBFooter
          bgColor="light"
          className="text-center text-lg-start text-muted"
        >
          {/* <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
            <div className="me-5 d-none d-lg-block">
              <span>Get connected with us on social networks:</span>
            </div>

            <div>
              <a href="" className="me-4 text-reset">
                <MDBIcon fab icon="facebook-f" />
              </a>
              <a href="" className="me-4 text-reset">
                <MDBIcon fab icon="twitter" />
              </a>
              <a href="" className="me-4 text-reset">
                <MDBIcon fab icon="google" />
              </a>
              <a href="" className="me-4 text-reset">
                <MDBIcon fab icon="instagram" />
              </a>
              <a href="" className="me-4 text-reset">
                <MDBIcon fab icon="linkedin" />
              </a>
              <a href="" className="me-4 text-reset">
                <MDBIcon fab icon="github" />
              </a>
            </div>
          </section> */}
<Subscribe/>
          <section className="footer">
            <MDBContainer className="text-center text-md-start mt-5">
              <MDBRow className="mt-3">
                <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4 footer_title">
                    Our Company
                  </h6>
                  <p>
                    <a href="#!" className="text-reset">
                      About Us{" "}
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Join Our Team
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Shipping & Return Policy{" "}
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Contact Us
                    </a>
                  </p>
                </MDBCol>

                <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4 footer_title">
                    Our Services
                  </h6>
                  <p>
                    <a href="#!" className="text-reset">
                      Installment Plans{" "}
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Trade-In
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      iSystem Care{" "}
                    </a>
                  </p>
                </MDBCol>

                <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
                  <h6 className="text-uppercase fw-bold mb-4 footer_title">
                    Categories
                  </h6>
                  <p>
                    <MDBIcon icon="home" className="me-2" />
                    Shop All{" "}
                  </p>
                  <p>
                    <MDBIcon icon="envelope" className="me-3" />
                    Mac{" "}
                  </p>
                  <p>
                    <MDBIcon icon="phone" className="me-3" />
                    iPhone
                  </p>
                  <p>
                    <MDBIcon icon="print" className="me-3" /> iPad
                  </p>
                </MDBCol>
                <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4 footer_title">
                    <MDBIcon icon="gem" className="me-3" />
                    Subscribe & Follow us{" "}
                  </h6>
                  <p>
                    Subscribe to our newsletter and get to know our news, deals,
                    and offers.
                  </p>
                  <div className="subscribe">
                    <MDBInput
                      placeholder="Enter your email"
                      id="form1 send"
                      type="text"
                    />

                    <Button variant="contained" >Send</Button>
                  </div>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </section>

         
        </MDBFooter>
      </footer>
    </>
  );
}

export default Layouts;
