import React from "react";
import { Route, Routes } from "react-router";
import SignUp from "../ComponentsSignUp/SignUp";
import Login from "../ComponentsLogin/Login";

const AllRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SignUp></SignUp>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
};

export default AllRoute;
