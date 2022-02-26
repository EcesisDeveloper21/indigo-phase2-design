import React from "react";
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";
import { Offcanvas } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import Profile from "../../assets/images/profile.png";
import Logo from "../../assets/images/logo.png";
function Header() {
  return (
    <>
      <div>
        <Navbar bg="#faf0e6" expand={false}>
          <Container fluid>
            <Navbar.Toggle
              aria-controls="offcanvasNavbar"
              style={{ border: "1px solid #faf0e6", outline: "none" }}
            />
            <Navbar.Offcanvas
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
              placement="start"
              style={{ backgroundColor: "#faf0e6", width: "320px" }}
            >
              <Offcanvas.Header
                closeButton
                style={{ display: "flex", justifyContent: "flex-end" }}
              ></Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1" style={{ color: "#000" }}>
                    Home
                  </Nav.Link>
                  <NavDropdown
                    title="Account"
                    id="offcanvasNavbarDropdown"
                    className="dropdown_Nav"
                    style={{ backgroundColor: "#faf0e6", color: "#000" }}
                  >
                    <NavDropdown.Item href="#action3" style={{ color: "#000" }}>
                      My Order
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">Address</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
            <label
              className="Heade_title"
              style={{ fontSize: "22px", color: "#000", fontWeight: "600" }}
            >
              <img
                src={Logo}
                alt="edit"
                width="30px"
                height="30px"
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt=" "
                style={{ marginRight: "20px" }}
              ></img>
              Projekt Indigo
            </label>
            <div className="nav_profile" style={{ display: "flex" }}>
              <Navbar.Brand>
                <img
                  src={Profile}
                  alt="edit"
                  width="30px"
                  height="30px"
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                  alt=" "
                ></img>
              </Navbar.Brand>
              <NavDropdown
                bg="black"
                title="Alice P"
                id="collasible-nav-dropdown"
                style={{ color: "#5299d3" }}
              >
                <NavDropdown.Item style={{ color: "#5299d3" }} href="/">
                  Home
                </NavDropdown.Item>
                <NavDropdown.Item style={{ color: "#5299d3" }} href="/welcome">
                  Admin
                </NavDropdown.Item>
                <NavDropdown.Item style={{ color: "#5299d3" }} href="/users">
                  Users
                </NavDropdown.Item>
              </NavDropdown>
            </div>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default Header;
