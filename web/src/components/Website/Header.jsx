import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function Header() {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
        <LinkContainer to="/">
          <Navbar.Brand>BookCheck</Navbar.Brand>
          </LinkContainer>
          <Nav className="me-auto">
            <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/top-10">
            <Nav.Link>Top 10</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/books">
            <Nav.Link>Books</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
            <Nav.Link>Contact</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/cart">
            <Nav.Link>Cart (10) </Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
