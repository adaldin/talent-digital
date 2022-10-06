import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function Home() {
  const { user } = useAuth();
  return (
    <>
      <Row className="min-vh-100">
        {!user ? (
          <div className="text-white">HOME LANDING INFO</div>
        ) : (
          <Link to="/dropper">Comienza a cargar tus archivos</Link>
        )}
      </Row>
    </>
  );
}
export default Home;
