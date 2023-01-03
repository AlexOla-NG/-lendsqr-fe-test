import React, { useState } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Home from "./components/dashboard/Home";
import Login from "./views/Login";
import Users from "./views/Users";
import UserDetails from "./views/UserDetails";
import Error from "./views/Error";

function App() {
  const [auth, setAuth] = useState<string>(
    JSON.parse(localStorage.getItem("auth_token") as string) || false
  );

  const location = useLocation();

  // STUB: create function to save auth token to localStorage
  const saveToLocalStorage = () => {
    localStorage.setItem("auth_token", JSON.stringify(true));
  };
  return (
    <>
      <Routes>
        <Route path="login" element={<Login userAuth={saveToLocalStorage} />} />
        <Route
          path="/"
          element={
            auth ? (
              <Home />
            ) : (
              <Navigate to="/login" state={{ from: location }} replace />
            )
          }
        >
          <Route path="users" element={<Users />} />
          <Route path="users/:id" element={<UserDetails />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
