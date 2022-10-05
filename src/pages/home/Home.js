import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function Home() {
  const { user } = useAuth();
  return (
    <>
      <Row>
        {!user ? (
          <div>HOME LANDING INFO</div>
        ) : (
          <Link to="/dropper">Comienza a cargar tus archivos</Link>
        )}
      </Row>
    </>
  );
}
export default Home;
