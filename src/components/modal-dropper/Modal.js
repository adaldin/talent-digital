import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
function ModalDropper({ show, handleClose }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header className="bg_modal_dropper">
        <Modal.Title className="text-white fw-bold">
          Ups, algo ha ido mal
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg_modal_dropper text-white">
        No hemos podido subir tu archivo, revisa el formato o bien inténtalo de
        nuevo
      </Modal.Body>
      <Modal.Footer className="bg_modal_dropper justify-content-start">
        <div className="d-grid w-50 ">
          <Button className="btn_green fw-bold" onClick={handleClose}>
            Cerrar
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalDropper;
