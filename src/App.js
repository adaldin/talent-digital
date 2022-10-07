import { DashboardRoutes } from "./routes/routes";
import Container from "react-bootstrap/Container";
import AuthProvider from "./context/AuthContext.js";
import { FilesProvider } from "./context/FilesContext.js";

function App() {
  return (
    <AuthProvider>
      <FilesProvider>
        <Container fluid className="bg-dark">
          <DashboardRoutes />
        </Container>
      </FilesProvider>
    </AuthProvider>
  );
}

export default App;
