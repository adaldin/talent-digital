import Button from "react-bootstrap/Button";
import useDrivePicker from "react-google-drive-picker/dist";
import useFiles from "../../context/FilesContext";
import { fileTypes } from "../../fileTypes";

function DriveButton() {
  const [openPicker, authResponse] = useDrivePicker();
  const { addFile } = useFiles();

  const handleOpenPicker = () => {
    openPicker({
      clientId: process.env.REACT_APP_DRIVE_CLIENT_ID,
      developerKey: process.env.REACT_APP_DRIVE_API_KEY,
      // replace this token with your token generated at https://developers.google.com/oauthplayground/
      // token: "process.env.REACT_APP_DRIVE_TOKEN",
      viewId: "DOCS",
      showUploadView: true,
      showUploadFolders: true,
      supportDrives: false,
      multiselect: true,
      setSelectFolderEnabled: true,
      viewMimeTypes: "application/json",
      callbackFunction: (data) => {
        if (data.action === "picked") {
          data.docs.forEach((file) => {
            if (fileTypes.includes(file.mimeType)) {
              addFile(file);
            } else {
              console.log("invalidType");
            }
          });
        }
      },
    });
  };

  return (
    <div className="d-grid">
      <Button
        className="btn-outline-light bg-transparent"
        id="authorize_button"
        onClick={handleOpenPicker}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="me-4"
        >
          <path
            d="M25.7729 10.5716C25.7267 10.3288 25.5145 10.1531 25.2673 10.1531H13.2744C12.9902 10.1531 12.7599 10.3834 12.7599 10.6676V15.6069C12.7599 15.891 12.9902 16.1214 13.2744 16.1214H19.1634C18.5666 17.2969 17.6366 18.2897 16.4887 18.963C15.436 19.5809 14.2297 19.9075 13 19.9075C10.1351 19.9075 7.53518 18.1058 6.53027 15.4237C6.2398 14.6512 6.09253 13.8357 6.09253 12.9999C6.09253 12.2314 6.21801 11.4761 6.46527 10.7551C7.42356 7.96626 10.0497 6.09248 13.0001 6.09248C14.2964 6.09248 15.5593 6.45354 16.652 7.13659C16.8391 7.25354 17.08 7.23821 17.2506 7.09841L21.2954 3.78701C21.4143 3.68966 21.4834 3.54428 21.484 3.39072C21.4845 3.23705 21.4163 3.09126 21.2981 2.9931C18.9735 1.063 16.0265 0 13 0C5.83177 0 0 5.83177 0 13C0 15.1503 0.535844 17.2808 1.54964 19.1611C3.82418 23.3795 8.21173 26 13 26C15.9963 26 18.9204 24.9561 21.2336 23.0608C23.5148 21.1917 25.1067 18.5824 25.7156 15.714C25.9043 14.8279 26 13.9147 26 12.9999C26 12.1827 25.9236 11.3657 25.7729 10.5716ZM13 1.02903C15.5769 1.02903 18.0912 1.86575 20.1476 3.39686L16.8773 6.07425C15.6971 5.41191 14.3645 5.0635 13 5.0635C9.85491 5.0635 7.03168 6.91757 5.76088 9.74472L2.56933 7.13182C4.62511 3.49207 8.53008 1.02903 13 1.02903ZM1.02903 13C1.02903 11.2437 1.40928 9.57465 2.09158 8.07061L5.38317 10.7654C5.17126 11.4891 5.0635 12.239 5.0635 13C5.0635 13.8343 5.19172 14.6516 5.44446 15.4345L2.17354 18.112C1.42396 16.5237 1.02903 14.7696 1.02903 13ZM13 24.971C8.73184 24.971 4.80944 22.7096 2.66271 19.0413L5.84543 16.436C6.42962 17.6541 7.31235 18.7007 8.42964 19.4891C9.77163 20.436 11.352 20.9366 12.9999 20.9366C14.291 20.9366 15.5599 20.6219 16.6927 20.0255L19.9861 22.7217C17.9608 24.1768 15.508 24.971 13 24.971ZM24.7092 15.5C24.1694 18.0424 22.7903 20.3635 20.8136 22.0691L17.6186 19.4535C18.8941 18.5386 19.881 17.2593 20.4325 15.7873C20.4918 15.6294 20.4697 15.4523 20.3736 15.3137C20.2775 15.1751 20.1195 15.0923 19.9508 15.0923H13.7889V11.182H24.8335C24.9248 11.7802 24.971 12.3899 24.971 12.9999C24.971 13.8429 24.8829 14.684 24.7092 15.5Z"
            fill="white"
          />
        </svg>
        Login con Google
      </Button>
    </div>
  );
}
export default DriveButton;
