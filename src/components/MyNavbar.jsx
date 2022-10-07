import React, { useState } from "react";
import { Button, Container, Nav, Navbar} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import '../App.css'
import CartSidebar from "./CartSidebar";
const MyNavbar = () => {

  const navigate = useNavigate();
  const logout = () => {
    localStorage.setItem("token", "");
    navigate("/login");
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar bg="primary" variant="dark" expand="lg">
        <Container className="navbar">
          <Navbar.Brand href="#home"></Navbar.Brand>
          <Nav.Link as={Link} to="/" style={{fontWeight: "700"}}>
          <h6>E-COMMERCE PRODUCTS{" "}</h6>
          </Nav.Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <div className="icons">
              <Nav.Link as={Link} to="/login">
              <i className="fa-regular fa-user"></i>
              </Nav.Link>
              <Nav.Link as={Link} to="/purchases">
              <i className="fa-solid fa-shop"></i>
              </Nav.Link>
              <Nav.Link onClick={() => handleShow()}>
              <i className="fa-solid fa-cart-shopping"></i>
              </Nav.Link>
              <Nav.Link onClick={logout}>
              <i className="fa-solid fa-right-to-bracket"></i>
              </Nav.Link>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <CartSidebar show={show} handleClose={handleClose}/>
    </>
  );
};

export default MyNavbar;
