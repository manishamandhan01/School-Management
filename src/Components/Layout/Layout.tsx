import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import SideBar from "./SideBar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="wrapper">
      {/* <!-- Preloader --> */}
      <div className="preloader flex-column justify-content-center align-items-center">
        <img
          className="animation__shake"
          src="/img/AdminLTELogo.png"
          alt="AdminLTELogo"
          height="60"
          width="60"
        />
      </div>
      <Header />
      <div className="row">
      <SideBar />
      <Outlet />
      </div>
      

     
      <Footer />

     
    </div>
  );
};

export default Layout;
