import React from "react";
import "./Root.css";
import { Outlet } from "react-router-dom";
import Header from "../pages/SharedPages/Header/Header";
import Footer from "../pages/SharedPages/Footer/Footer";

const Root = () => {
  const heroContainerStyles = {
    minHeight: "90vh",
  };
  return (
    <div>
      <div style={heroContainerStyles}>
        <Header></Header>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
