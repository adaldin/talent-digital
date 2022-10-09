import { Button, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function Header() {
  const { user, logout } = useAuth();

  return (
    <div className="d-flex justify-content-between bg-dark pt-2">
      <Link
        to="/"
        className="text-decoration-none text-white fw-bold fs-3 d-flex justify-content-center align-items-baseline gap-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="white"
          className="bi bi-box-arrow-in-down-right"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M6.364 2.5a.5.5 0 0 1 .5-.5H13.5A1.5 1.5 0 0 1 15 3.5v10a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 2 13.5V6.864a.5.5 0 1 1 1 0V13.5a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5v-10a.5.5 0 0 0-.5-.5H6.864a.5.5 0 0 1-.5-.5z"
          />
          <path
            fillRule="evenodd"
            d="M11 10.5a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1 0-1h3.793L1.146 1.854a.5.5 0 1 1 .708-.708L10 9.293V5.5a.5.5 0 0 1 1 0v5z"
          />
        </svg>
        DDrop
      </Link>
      {user ? (
        <Stack direction="horizontal" gap={3}>
          <Button onClick={logout} className="btn_green py-1">
            Log out
          </Button>
        </Stack>
      ) : (
        <Stack direction="horizontal" gap={3}>
          <Button as={Link} to="/login" className="btn_green py-1">
            Login
          </Button>
          <Button as={Link} to="/register" className="btn_green py-1">
            Register
          </Button>
        </Stack>
      )}
    </div>
  );
}

export default Header;
