import React, { useEffect } from "react";
import Login from "./components/Auth/Login.jsx";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard.jsx";
import AdminDashboard from "./components/Dashboard/AdminDashboard.jsx";
import { getlocalstorage, setlocalstorage } from "./utils/LocalStorage.jsx";

const App = () => {
  useEffect(() => {
    // setlocalstorage();
    getlocalstorage();
  });

  return (
    <>
      {/* <Login /> */}
      {/* <EmployeeDashboard/> */}
      <AdminDashboard />
    </>
  );
};

export default App;
