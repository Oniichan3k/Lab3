import { useState } from "react";
import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
  Badge,
} from "react-bootstrap";
import Login from "./Login";

const Header = (props) => {
  const [showLogin, setShowLogin] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLoginShow = () => setShowLogin(true);
  const handleLoginClose = () => setShowLogin(false);

  const handleLogout = () => {
    setLoggedIn(false);
  };

  const handleLoginSuccess = () => {
    setLoggedIn(true);
    setShowLogin(false);
  };

  return (
    <Container>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#">PizzaHouse</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">About us</Nav.Link>
              <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#" disabled>
                Contact
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
            <Button
              className="ms-2"
              variant="primary"
              onClick={props.handleShow}
            >
              Cart <Badge bg="secondary">{props.count}</Badge>
              <span className="visually-hidden">Cart items</span>
            </Button>
            {loggedIn ? (
              <Button
                className="ms-2"
                variant="outline-danger"
                onClick={handleLogout}
              >
                Logout
              </Button>
            ) : (
              <Button
                className="ms-2"
                variant="outline-primary"
                onClick={handleLoginShow}
              >
                Login
              </Button>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Login
        show={showLogin}
        handleClose={handleLoginClose}
        setLoggedIn={handleLoginSuccess}
      />
    </Container>
  );
};

export default Header;
