import React, { useContext, useEffect } from "react";
import Login from "./components/Auth/Login.jsx";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard.jsx";
import AdminDashboard from "./components/Dashboard/AdminDashboard.jsx";
import { getlocalstorage, setlocalstorage } from "./utils/LocalStorage.jsx";
import { useState } from "react";
import { AuthContext } from "./context/AuthProvider.jsx";

const App = () => {
  const Authdata = useContext(AuthContext);  
  
  const handleLogin = (email, password) => {
    if (
      email == Authdata.admin[0].email &&
      password == Authdata.admin[0].password
    ) {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (Authdata) {
      const employee = Authdata.employees.find(
        (e) => email == e.email && password == e.password
      );
      if (employee) {
        setUser("employee");
        setLoggedInUserData(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee", data: employee })
        );
      } else {
        alert("Please enter a valid email or password");
      }
    } else {
      alert("Please enter a valid email or password");
    }
  };
  
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);

  useEffect(() => {
    const status = JSON.parse(localStorage.getItem("loggedInUser"))

    if(status ){
      setUser(status.role)
      setLoggedInUserData(status.data)
    }
  }, [])


  return (
    <>
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : user === "admin" ? (
        <AdminDashboard />
      ) : user === "employee" ? (
        <EmployeeDashboard data={loggedInUserData} />
      ) : (
        <Login handleLogin={handleLogin} />
      )}
    </>
  );
};

export default App;
