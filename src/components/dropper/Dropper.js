import "../../global.css";
import { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ModalDropper from "../modal-dropper/Modal";
import { fileTypes } from "../../fileTypes";
import { useDropzone } from "react-dropzone";
import DriveButton from "../driveButton/DriveButton";
import Form from "react-bootstrap/Form";
import useFiles from "../../context/FilesContext";
import { render } from "@testing-library/react";

function Dropper() {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    noClick: true,
  });
  const [show, setShow] = useState(false);
  const [invalidFiles, setInvalidFiles] = useState([]);
  const [fileDescription, setFileDescription] = useState(
    "ARRASTRA TUS ARCHIVOS AQUÍ"
  );
  const { files, addFile } = useFiles();

  useEffect(() => {
    loadFile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [acceptedFiles]);

  useEffect(() => {
    function displayFiles() {
      if (files !== undefined && files.length === 1) {
        setFileDescription(
          `Tu archivo ${files[0].name} está listo para subirse`
        );
      } else if (files !== undefined && files.length > 2) {
        setFileDescription(
          `Tus archivos ${files.map(
            (file) => ` ${file.name}`
          )} están listos para subirse`
        );
      }
    }
    displayFiles();
  }, [files]);

  // Logic
  const handleClose = () => setShow(false);

  const loadFile = () => {
    acceptedFiles.forEach((file) => {
      if (fileTypes.includes(file.type)) {
        console.log(render.result);
        addFile(file);
      } else {
        const newInvalidFiles = [];
        invalidFiles.push(file);
        setInvalidFiles(newInvalidFiles);
        setShow(true);
      }
    });
  };

  const handleSubmit = () => {
    if (files.length > 0 && files.length < 2) {
      setFileDescription(
        `Tu archivo ${files[0].name} se ha subido correctamente`
      );
    } else if (files.length > 2) {
      setFileDescription(
        `Tus archivos ${files.map(
          (file) => ` ${file.name}`
        )} se han subido correctamente`
      );
    } else {
      setFileDescription("Carga un archivo para poder subirlo");
    }
  };

  return (
    <Row className="p-4 bg-dark min-vh-100">
      {show && (
        <ModalDropper
          show={show}
          handleClose={handleClose}
          invalidFiles={invalidFiles}
        />
      )}
      <Col
        as={Form}
        onSubmit={handleSubmit}
        xs={12}
        md={8}
        className="text-white d-flex flex-column gap-5 my-3"
      >
        <div
          {...getRootProps()}
          className="dropper border border-success rounded d-flex  flex-column justify-content-center align-items-center"
          style={{ minHeight: "400px" }}
        >
          <p htmlFor="dropOff" className="text-white text-center fs-4">
            {fileDescription}
          </p>
          <input className="w-100" {...getInputProps()} />
        </div>
        <div className="d-grid my-3">
          <Button className="btn_green fw-bold" onClick={handleSubmit}>
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
