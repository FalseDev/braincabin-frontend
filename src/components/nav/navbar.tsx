import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

const Navigation = () => {
  return (
    <Navbar collapseOnSelect expand="lg">
      <Navbar.Brand>BrainCabin</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar" />
      <Navbar.Collapse id="responsive-navbar">
        <Nav className="mr-auto">
          <Nav.Link as="div">
            <Link to="/">Questions</Link>
          </Nav.Link>
          <Nav.Link as="div">
            <Link to="/users">Users</Link>
          </Nav.Link>
          <Nav.Link as="div">
            <Link to="/auth">Login</Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
