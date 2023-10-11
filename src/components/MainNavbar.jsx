import React, { useContext } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

import { Link } from "react-router-dom";
import { AuthContext } from "../context";

const MainNavbar = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem("authOtus");
  };

  return isAuth ? (
    <Navbar bg="light" data-bs-theme="light" sticky="top">
      <Container>
        <Navbar.Brand>Otus</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link>
            <Link className="nav-link" to="/">
              Home
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link onClick={logout} className="nav-link" to="/login">
              Log out
            </Link>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  ) : (
    <Navbar bg="light" data-bs-theme="light" sticky="top">
      <Container>
        <Navbar.Brand>Otus</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link>
            <Link className="nav-link" to="/login">
              Login
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link className="nav-link" to="/register">
              Register
            </Link>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default MainNavbar;
