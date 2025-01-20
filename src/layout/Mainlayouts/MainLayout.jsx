import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../pages/shared/Navbar";
import Nav from "../../pages/shared/Nav";
import Footer from "../../pages/Footer/Footer";
const MainLayout = () => {
  return (
    <div className="">
      <Nav></Nav>
        {/* <Navbar></Navbar>   */}
      <div className="mr-auto ml-auto">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
