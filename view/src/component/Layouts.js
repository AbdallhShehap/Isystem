import React from "react";
import { Navbar, Nav, Container, Form, Row, Col } from "react-bootstrap";
import { FaShoppingCart, FaUser, FaSearch } from "react-icons/fa";
import logoApple from "../images/logoApple.png";
import { LinkContainer } from "react-router-bootstrap";
import "../assests/Layouts.css";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import facebook from "../images/facebook.png";
import instagram from "../images/instagram.png";
import youtube from "../images/youtube.png";
import twitter from "../images/twitter.png";

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
import Home from "../pages/Home";
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
              <Nav className="m-auto nav_categories" >
                <LinkContainer to="/cart">
                  <Nav.Link  className="catigories_type">
                    {/* <FaShoppingCart /> */}
                    Mac
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to="/signin">
                  <Nav.Link href="/login" className="catigories_type" id="catigories_type">
                    {/* <FaUser /> */}
                    iPad
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to="/cart">
                  <Nav.Link className="catigories_type" id="catigories_type">
                    {/* <FaShoppingCart /> */}
                    iPhone
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to="/cart">
                  <Nav.Link className="catigories_type" id="catigories_type">
                    {/* <FaShoppingCart /> */}
                    Watch
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to="/cart">
                  <Nav.Link className="catigories_type" id="catigories_type">
                    {/* <FaShoppingCart /> */}
                    Audio
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to="/cart">
                  <Nav.Link className="catigories_type"id="catigories_type">
                    {/* <FaShoppingCart /> */}
                    Apple Tv
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to="/cart">
                  <Nav.Link className="catigories_type"id="catigories_type">
                    {/* <FaShoppingCart /> */}
                    Accessories
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to="/cart">
                  <Nav.Link className="catigories_type" id="catigories_type">
                    {/* <FaShoppingCart /> */}
                    iSystem Care
                  </Nav.Link>
                </LinkContainer>
              </Nav>
              <form class="nosubmit">
                <input class="nosubmit" type="search"  />
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
          <Home />
          <Subscribe />
         
            <MDBContainer className="text-center text-md-start footer"fluid>
              <MDBRow className="mt-3">
                <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
                  <h6 className="fw-bold mb-4 footer_title">
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
                  <h6 className=" fw-bold mb-4 footer_title">
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
                <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
                  <h6 className=" fw-bold mb-4 footer_title">
                    Our Categories
                  </h6>
                  <p>
                    <a href="#!" className="text-reset">
                      Shop All
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                    Mac
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                    iPhone
                    </a>
                  </p>
                </MDBCol>
           
                <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4 ">
                  <h6 className=" fw-bold mb-4 footer_title">
                    <MDBIcon icon="gem"  />
                    Subscribe & Follow us{" "}
                  </h6>
                  <p>
                    Subscribe to our newsletter and get to know our news, deals,
                    and offers.
                  </p>
                  <div className="social_media_icon">
                    <Image src={youtube} fluid width={"20px"} />
                    <Image src={facebook} fluid width={"20px"} />
                    <Image src={instagram} fluid width={"20px"} />
                    <Image src={twitter} fluid width={"20px"} />
                  </div>

                 
                </MDBCol>
              </MDBRow>
            </MDBContainer>
        </MDBFooter>
      </footer>
    </>
  );
}

export default Layouts;
