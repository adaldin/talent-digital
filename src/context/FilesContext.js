import { createContext, useReducer, useContext } from "react";
import filesReducer, { initialState } from "./filesReducer";

export const FilesContext = createContext(initialState);

export const FilesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(filesReducer, initialState);

  const addFile = (file) => {
    const updatedFiles = state.files.concat(file);
    dispatch({
      type: "ADD_FILE",
      payload: {
        files: updatedFiles,
      },
    });
  };

  const removeFile = (file) => {
    const updatedFiles = state.file.filter(
      (currentFile) => currentFile.id !== file.id
    );
    dispatch({
      type: "REMOVE_FILE",
      payload: {
        files: updatedFiles,
      },
    });
  };

  const value = {
    files: state.files,
    addFile,
    removeFile,
  };

  return (
    <FilesContext.Provider value={value}>{children}</FilesContext.Provider>
  );
};

// useContext Hook
const useFiles = () => {
  const context = useContext(FilesContext);

  if (context === undefined) {
    throw new Error("useFiles must be used within FilesContext");
  }
  return context;
};

export default useFiles;
