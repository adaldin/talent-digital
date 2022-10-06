import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
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
  const [checkboxType, setCheckboxType] = useState("password");
  const { login } = useAuth();
  const navigate = useNavigate();

  // logic
  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleCheck = (e) => {
    const { checked } = e.target;
    if (checked) {
      setCheckboxType("text");
    } else {
      setCheckboxType("password");
    }
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
      <Row className="p-2 justify-content-center min-vh-100">
        <Col as={Form} onSubmit={handleSubmit} xs={12} md={4}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="text-white">Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={handleChange}
              name="email"
            />
            <Form.Text className="text-white">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="text-white">Password</Form.Label>
            <Form.Control
              type={checkboxType}
              placeholder="Password"
              onChange={handleChange}
              name="password"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label="Check Password"
              onChange={handleCheck}
              className="text-white"
            />
          </Form.Group>
          <div className="d-flex justify-content-center">
            <Link to={"/register"}>New user? Create an Account.</Link>
          </div>
          <div className="d-grid">
            <Button type="submit" className="btn_green py-1">
              Submit
            </Button>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default Login;
