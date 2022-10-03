import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/header/Header";
import Home from "../pages/home/Home";
import Login from "../components/login/Login";
import Register from "../components/register/Register";
import ProtectedRoute from "../components/protectedRoute/ProtectedRoute";
import Dropper from "../components/dropper/Dropper";

export const DashboardRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dropper" element={<ProtectedRoute />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
