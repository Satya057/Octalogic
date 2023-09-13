import React from "react";
import { Route, Routes } from "react-router-dom";
import Register from "../Pages/Signup/Register";


const Routers = () => {
  return (
    <div>
      <Routes>
        <Route path="/register" element={<Register/>} />
      </Routes>
    </div>
  );
};

export default Routers;
