import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./components/Login";
import UsersList from "./components/UsersList";
import EditUser from "./components/EditUser";
import 'bootstrap/dist/css/bootstrap.min.css';
import { UserProvider } from "./context";

function App() {
  return (
    <UserProvider>
      <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/users" element={
          <ProtectedRoute>
            <UsersList />
          </ProtectedRoute>
        } />
        <Route path="/edit-user/:id" element={
          <ProtectedRoute>
            <EditUser />
          </ProtectedRoute>
        } />
      </Routes>
    </Router>
    </UserProvider>
  );
}

export default App;