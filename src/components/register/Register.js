import { Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

function Register() {
  return (
    <Row as={Form} className="p-3">
      <Form.Group className="mb-3" controlId="formBasicFirstName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your first name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicLastName">
        <Form.Label>Last name</Form.Label>
        <Form.Control type="text" placeholder="Enter your last name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <div className="d-flex justify-content-center">
        <Link to={"/login"}>Old user? Login.</Link>
      </div>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Row>
  );
}
export default Register;
