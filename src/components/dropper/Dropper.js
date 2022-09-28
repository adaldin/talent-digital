import "../../global.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
function Dropper() {
  return (
    <Container fluid className="bg-dark">
      <Row>
        <Col
          xs={12}
          md={8}
          className="text-white d-flex flex-column gap-5 my-3"
        >
          <div className="dropper p-5 border border-success rounded">
            <p className="text-center">ARRASTRA TUS ARCHIVOS AQUÍ</p>
          </div>
          <div className="d-grid my-3">
            <Button className="btn_green fw-bold">Subir archivos</Button>
          </div>
        </Col>
        <Col
          xs={12}
          md={4}
          className="text-white text-center d-flex flex-column justify-content-center"
        >
          <h4>Bienvenido a DDrop</h4>
          <p className="dropper__description">
            Para subir tus archivos de forma simple a drive, puedes hacer LogIn
            a través de Google.
          </p>
        </Col>
      </Row>
    </Container>
  );
}
export default Dropper;
