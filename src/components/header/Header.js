import { Button, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function Header() {
  const { user, logout } = useAuth();

  return (
    <div className="d-flex justify-content-between">
      <Link to="/"> Dropper</Link>
      {user ? (
        <Button onClick={logout}>Log out</Button>
      ) : (
        <Stack direction="horizontal" gap={3}>
          {" "}
          <Button as={Link} to="/login">
            Login
          </Button>{" "}
          <Button as={Link} to="/register">
            Register
          </Button>
        </Stack>
      )}
    </div>
  );
}

export default Header;
