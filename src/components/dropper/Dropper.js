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
import Form from "react-bootstrap/Form";
import FileCard from "../fileCard/FileCard";

function Dropper() {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();
  const [show, setShow] = useState(false);
  const [invalidFiles, setInvalidFiles] = useState([]);
  const [validFiles, setValidFiles] = useState([]);
  const [fileDescription, setFileDescription] = useState(
    "ARRASTRA TUS ARCHIVOS AQUÍ"
  );
  const { files } = useContext(FilesContext);

  useEffect(() => {
    getFiles();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [acceptedFiles]);

  useEffect(() => {
    if (files.length !== 0) {
      let filesFromDrive = [...files];
      setValidFiles(filesFromDrive);
    }
  }, [files]);

  // Logic
  const handleClose = () => setShow(false);

  const getFiles = () => {
    acceptedFiles.map((file) => {
      console.log(acceptedFiles);
      if (fileTypes.includes(file.type)) {
        const newValidFiles = [];
        newValidFiles.push(file);
        setValidFiles(newValidFiles);
        setFileDescription(`${file.name} está pendiente de subir`);
      } else {
        const newInvalidFiles = [];
        invalidFiles.push(file);
        setInvalidFiles(newInvalidFiles);
        setShow(true);
      }
      return file;
    });
  };

  const handleSubmit = () => {
    if (!validFiles) {
      setFileDescription(
        `Tu archivo ${validFiles.map(
          (file) => file.name
        )} se ha subido correctamente`
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
          <FileCard />
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
