import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Alert } from "react-bootstrap";
import { useAuth } from "../../context/AuthContext";

function Register() {
  const [user, setUser] = useState({
    email: "",
    password: "",
    fName: "",
    lName: "",
  });
  const [registerError, setRegisterError] = useState("");
  const { signUp } = useAuth();
  const navigate = useNavigate();

  //   logic
  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setRegisterError("");
    try {
      await signUp(user.email, user.password, user.fName, user.lName);
      navigate("/login");
    } catch (error) {
      if (
        error.code === "auth/email-already-in-use" ||
        error.code === "auth/internal-error"
      )
        setRegisterError("Correo inválido");
    }
  };

  return (
    <>
      {registerError && <Alert variant="danger">{registerError}</Alert>}
      <Row as={Form} className="p-3" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicFirstName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your first name"
            onChange={handleChange}
            name="fName"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicLastName">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your last name"
            onChange={handleChange}
            name="lName"
          />
        </Form.Group>

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
          <Link to={"/login"}>Old user? Login.</Link>
        </div>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Row>
    </>
  );
}
export default Register;
