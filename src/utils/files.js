import { useContext } from "react";
import FilesContext from "../context/FilesContext";

export const addFiles = (filesList) => {
  const { setFiles } = useContext(FilesContext);
  let newFiles = [];
  newFiles.push(filesList);
  setFiles(newFiles);
};

export const validFiles = (filesList) => {
  // aqui filtro
};
