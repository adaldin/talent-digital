import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/header/Header";
import Home from "../pages/home/Home";
import Login from "../components/login/Login";
import Register from "../components/register/Register";

export const DashboardRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* <Route
              path="/profile/userProfile"
              element={
                <ProtectedRoute>
                  <UserProfile />
                </ProtectedRoute>
              }
            /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
};
