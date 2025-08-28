import React, { useContext, useEffect } from "react";
import Login from "./components/Auth/Login.jsx";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard.jsx";
import AdminDashboard from "./components/Dashboard/AdminDashboard.jsx";
import { getlocalstorage, setlocalstorage } from "./utils/LocalStorage.jsx";
import { useState } from "react";
import { AuthContext } from "./context/AuthProvider.jsx";

const App = () => {
  const Authdata = useContext(AuthContext);
  useEffect(() => {
    if (Authdata) {
      const status = JSON.parse(localStorage.getItem("loggedInUser"));
      if (status) {
        console.log(status.role);
      }
    }
  }, [Authdata]);

  const [user, setUser] = useState(null);

  const handleLogin = (email, password) => {
    if (
      email == Authdata.admin[0].email &&
      password == Authdata.admin[0].password
    ) {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (
      Authdata &&
      Authdata.employees.find((e) => email == e.email && password == e.password)
    ) {
      setUser("employee");
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "employee" })
      );
    } else {
      alert("Please enter a valid email or password");
    }
  };

  return (
    <>
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : user === "admin" ? (
        <AdminDashboard />
      ) : user === "employee" ? (
        <EmployeeDashboard />
      ) : (
        <Login handleLogin={handleLogin} />
      )}
    </>
  );
};

export default App;
