import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import { useAuth } from "../../context/AuthContext";

function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [loginError, setLoginError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  // logic
  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoginError("");
    try {
      await login(user.email, user.password);
      navigate("/dropper");
    } catch (error) {
      console.log(error.message);
      setLoginError("Correo inválido");
    }
  };

  return (
    <>
      {loginError && <Alert variant="danger">{loginError}</Alert>}
      <Row as={Form} className="p-3" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={handleChange}
            name="email"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={handleChange}
            name="password"
          />
        </Form.Group>
        <div className="d-flex justify-content-center">
          <Link to={"/register"}>New user? Create an Account.</Link>
        </div>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Row>
    </>
  );
}

export default Login;
