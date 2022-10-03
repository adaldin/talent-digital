import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Row>
        <p className="text-center">Please, log in to drop-off your files</p>
      </Row>
      <Row>
        <Button as={Link} to="/login">
          Login
        </Button>
        <Button as={Link} to="/register">
          Register
        </Button>
      </Row>
    </>
  );
}
export default Home;
