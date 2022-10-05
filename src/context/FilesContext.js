import { createContext } from "react";

const FilesContext = createContext({
  files: [],
  setFiles: () => {},
});
export default FilesContext;
