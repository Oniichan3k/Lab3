import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  Button,
  Container,
  Row,
  Modal,
} from "react-bootstrap";
import Header from "./components/Header";
import Login from "./components/Login";
import Banner from "./components/Banner";
import CardItem from "./components/CardItem";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Container fluid>
    <Header handleShow = {handleShow} />
    <Login show={showLogin} />
    <Modal/>                                                  
    <Banner/>
    <CardItem/>

    <Row>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Shopping Cart</Modal.Title>
          </Modal.Header>
          <Modal.Body>Empty.</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </Row>
    </Container>
  );
}

export default App;
