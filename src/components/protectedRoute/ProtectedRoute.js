import { Navigate } from "react-router-dom";
import Dropper from "../dropper/Dropper";
import { useAuth } from "../../context/AuthContext";

function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();

  if (user) return <Dropper />;
  if (!user) return <Navigate to="/">ProtectedRoute</Navigate>;

  return <>{children}</>;
}
export default ProtectedRoute;
