import { Navigate } from "react-router-dom";
import Dropper from "../dropper/Dropper";

function ProtectedRoute({ children }) {
  const user = true;

  if (user) return <Dropper />;
  if (!user) return <Navigate to="/login">ProtectedRoute</Navigate>;

  return <>{children}</>;
}
export default ProtectedRoute;
