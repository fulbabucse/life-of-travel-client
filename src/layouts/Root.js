import React from "react";
import "./Root.css";
import { Outlet } from "react-router-dom";
import Header from "../pages/SharedPages/Header/Header";

const Root = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
