import React from "react";
import { Routes as ReactDomRoutes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";

import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Verify from "../pages/Verify/Verify";
import Turno from "../pages/CrearTurno/Turno";
import User from "../pages/UserProfile/User";
import Admin from "../pages/Admin/Admin";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";
import AdminProtectedRoute from "../components/AdminProtectedRoute/AdminProtectedRoute";

const Routes = () => {
  return (
    <ReactDomRoutes>
      <Route path="/" element={<Home />} />

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/verify" element={<Verify />} />
      <Route
        path="/turno"
        element={
          <ProtectedRoute redirectTo="/login">
            <Turno />
          </ProtectedRoute>
        }
      />
      <Route
        path="/user"
        element={
          <ProtectedRoute redirectTo="/login">
            <User />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin"
        element={
          <AdminProtectedRoute redirectTo="/">
            <Admin />
          </AdminProtectedRoute>
        }
      />

      
    </ReactDomRoutes>
  );
};

export default Routes;
