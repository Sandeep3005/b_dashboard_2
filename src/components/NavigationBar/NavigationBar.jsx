import React, { Component } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import styles from "./NavigationBar.module.css";

class NavigationBar extends Component {
  render() {
    return (
      <Container>
        <Navbar
          fixed="top"
          bg="dark"
          variant="dark"
          expand="lg"
          className={styles.NavContainer}
        >
          <Navbar.Brand href="" className={styles.Brand}>
            Dashboard
          </Navbar.Brand>
          <Nav className={styles.AutoLeft}>
            <Nav.Link style={{ marginRight: "1em" }} href="/">
              Link 1
            </Nav.Link>
            <Nav.Link style={{ marginRight: "1em" }} href="/">
              Link 2
            </Nav.Link>
          </Nav>
        </Navbar>
      </Container>
    );
  }
}

export default NavigationBar;
