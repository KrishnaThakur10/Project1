import React, { useEffect } from "react";
import Login from "./components/Auth/Login.jsx";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard.jsx";
import AdminDashboard from "./components/Dashboard/AdminDashboard.jsx";
import { getlocalstorage, setlocalstorage } from "./utils/LocalStorage.jsx";
import { useState } from "react";

const App = () => {
  const [user, setUser] = useState(null)

  const handleLogin = (email,password) => {
    if(email == "admin@me.com" && password == 123){
      console.log("This is admin");
    }
    else if(email == "user@me.com" && password == 123){
      console.log("This is user");
    }
    else{
      alert("Please enter a valid email or password")
    }
    
  }
 

  return (
    <>
      {!user ? <Login handleLogin = {handleLogin}/> : ''}
      {/* <EmployeeDashboard/> */}
      {/* <AdminDashboard /> */}
    </>
  );
};

export default App;
