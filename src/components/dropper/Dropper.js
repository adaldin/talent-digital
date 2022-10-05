import "../../global.css";
import { useEffect, useState, useContext } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ModalDropper from "../modal-dropper/Modal";
import { fileTypes } from "../../fileTypes";
import { useDropzone } from "react-dropzone";
import DriveButton from "../driveButton/DriveButton";
import FilesContext from "../../context/FilesContext";

function Dropper() {
  // hooks
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();
  const [show, setShow] = useState(false);
  const [invalidFiles, setInvalidFiles] = useState([]);
  const [validFiles, setValidFiles] = useState([]);
  const { files } = useContext(FilesContext);

  useEffect(() => {
    getFiles();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [acceptedFiles]);

  // Logic
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getFiles = () => {
    acceptedFiles.map((file) => {
      if (fileTypes.includes(file.type)) {
        const newValidFiles = [];
        newValidFiles.push(file);
        setValidFiles(newValidFiles);
      } else {
        const newInvalidFiles = [];
        invalidFiles.push(file);
        setInvalidFiles(newInvalidFiles);
        setShow(true);
      }
      return file;
    });
  };

  return (
    <Row className="p-4 bg-dark">
      {show && (
        <ModalDropper
          show={show}
          handleClose={handleClose}
          invalidFiles={invalidFiles}
        />
      )}
      <Col xs={12} md={8} className="text-white d-flex flex-column gap-5 my-3">
        <div
          {...getRootProps()}
          className="dropper border border-success rounded d-flex  flex-column justify-content-center align-items-center"
          style={{ minHeight: "400px" }}
        >
          <label htmlFor="dropOff" className="text-white text-center fs-4">
            {validFiles.length > 0
              ? `Tu archivo ${validFiles.map(
                  (file) => file.name
                )} se ha subido correctamente.`
              : `ARRASTRA TUS ARCHIVOS AQUÍ`}
          </label>
          <input
            className="bg-dark w-100 border-0"
            id="dropOff"
            {...getInputProps()}
          />
          <ul>
            {files.map((file) => (
              <li key={file.id}>{file.name}</li>
            ))}
          </ul>
        </div>
        <div className="d-grid my-3">
          <Button className="btn_green fw-bold" onClick={handleShow}>
            Subir archivos
          </Button>
        </div>
      </Col>
      <Col
        xs={12}
        md={4}
        className="text-white text-center d-flex flex-column justify-content-center"
      >
        <h4>Bienvenido a DDrop</h4>
        <p className="dropper__description">
          Para subir tus archivos de forma simple a drive, puedes hacer LogIn a
          través de Google.
        </p>
        <hr></hr>
        <DriveButton />
      </Col>
    </Row>
  );
}
export default Dropper;
