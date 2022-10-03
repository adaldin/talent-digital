import { DashboardRoutes } from "./routes/routes";
import Container from "react-bootstrap/Container";
import AuthProvider from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Container fluid>
        <DashboardRoutes />
      </Container>
    </AuthProvider>
  );
}

export default App;
