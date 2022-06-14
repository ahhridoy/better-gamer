import React from "react";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div style={{ overflow: "hidden" }}>
      <Navbar bg="black" expand="lg" variant="dark" collapseOnSelect>
        <Container>
          <Navbar.Brand as={Link} to="/" eventKey="/">
            {" "}
            <img src="/assets/logo.png" alt="" />{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/" eventKey="/">
                {" "}
                <img src="/assets/gameIcon.png" alt="" />{" "}
              </Nav.Link>
              <Nav.Link as={Link} to="/coaches" eventKey="/coaches">
                Our Coaches
              </Nav.Link>
              <Nav.Link as={Link} to="/loyalty" eventKey="/loyalty">
                Loyalty
              </Nav.Link>
              <Nav.Link as={Link} to="/blog" eventKey="/blog">
                Blog
              </Nav.Link>
              <NavDropdown title="Contact Us 24/7" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
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
              <Link to="/login">
                <Button variant="outline-primary">Login</Button>
              </Link>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
