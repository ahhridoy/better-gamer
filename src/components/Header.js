import React from "react";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          {" "}
          <img src="/assets/logo.png" alt="" />{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">
              {" "}
              <img src="/assets/gameIcon.png" alt="" />{" "}
            </Nav.Link>
            <Nav.Link href="#link">Our Coaches</Nav.Link>
            <Nav.Link href="#link">Loyalty</Nav.Link>
            <Nav.Link href="#link">Blog</Nav.Link>
            <NavDropdown title="Contact Us 24/7" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Navbar.Text>
            <Button variant="link" className="text-none text-light">
              Sign up
            </Button>
            <Button variant="outline-primary">Login</Button>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
