export const initialState = {
  files: [],
};

const filesReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_FILE":
      console.log("ADD_FILE", payload);
      return { ...state, files: payload.files };
    case "REMOVE_FILE":
      console.log("REMOVE_FILE", payload);
      return { ...state, files: payload.files };
    default:
      throw new Error(`No case for type ${type}`);
  }
};
export default filesReducer;
