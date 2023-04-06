import React from "react";
import Container from "react-bootstrap/Container";

import Navbar from "react-bootstrap/Navbar";
import Carosoul from "./Carosoul";
import { LinkContainer } from "react-router-bootstrap";
const Header = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>Carosoul</Navbar.Brand>
          </LinkContainer>
        </Container>
      </Navbar>
      <Carosoul />
    </>
  );
};

export default Header;
