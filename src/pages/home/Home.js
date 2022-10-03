import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Container>
      <Row>
        <Col xs={12}>
          <p className="text-center">Please, log in to drop-off your files</p>
        </Col>
        <Col className="d-grid" xs={12}>
          <Button as={Link} to="/login">
            Login
          </Button>
          <Button as={Link} to="/register">
            Register
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
export default Home;
