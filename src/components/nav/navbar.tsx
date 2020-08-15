import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Navigation = () => {
  return (
    <Navbar collapseOnSelect expand="lg">
      <Navbar.Brand>BrainCabin</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Link to="/">Questions</Link>
        <Link to="/auth">Auth</Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
