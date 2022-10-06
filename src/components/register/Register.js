import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import { useAuth } from "../../context/AuthContext";

function Register() {
  const [user, setUser] = useState({
    email: "",
    password: "",
    fName: "",
    lName: "",
  });
  const [registerError, setRegisterError] = useState("");
  const [checkboxType, setCheckboxType] = useState("password");
  const { signUp } = useAuth();
  const navigate = useNavigate();

  //   logic
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
      <Row className="p-2 justify-content-center min-vh-100">
        <Col as={Form} onSubmit={handleSubmit} xs={12} md={4}>
          <Form.Group className="mb-3" controlId="formBasicFirstName">
            <Form.Label className="text-white">Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your first name"
              onChange={handleChange}
              name="fName"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicLastName">
            <Form.Label className="text-white">Last name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your last name"
              onChange={handleChange}
              name="lName"
            />
          </Form.Group>

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
            <Link to={"/login"}>Old user? Login.</Link>
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
export default Register;
