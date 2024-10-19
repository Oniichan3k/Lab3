import { useState } from "react";
import {
  Button,
  Form,
  Row,
  Col,
  Modal,
} from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const trimmedUsername = username.trim();
    const trimmedPassword = password.trim();

    if (!trimmedUsername || !trimmedPassword) {
      setError("Email and password cannot be empty!");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(
        "https://api-demo-4gqb.onrender.com/users/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username: trimmedUsername, password: trimmedPassword }),
        }
      );

      if (!response.ok) {
        const errorMessage = await response.json();
        throw new Error("Login failed! Incorrect username or password.");
      }

      const data = await response.json();
      console.log("Login successful:", data);

      toast.success("Login Succesfully!");
      
      props.setLoggedIn(true);

      props.handleClose();
    } catch (error) {
      setError(error.message);
      toast.error("Login Failed! Please check your credentials.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <Form>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextEmail"
            >
              <Form.Label column sm="2">
                Email
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  value={username}
                  placeholder="Email address"
                  onChange={(e) => setUsername(e.target.value)}
                  aria-label="Email address"
                  autoFocus
                />
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextPassword"
            >
              <Form.Label column sm="2">
                Password
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="password"
                  value={password}
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Col>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleLogin} disabled={loading}> 
            {loading ? 'Logging in...' : 'Login'}
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer/>
    </>
  );
};

export default Login;
