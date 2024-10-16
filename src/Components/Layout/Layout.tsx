import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import SideBar from "./SideBar";
import Footer from "./Footer";
import { Students } from "../Pages/Students";

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
      <SideBar />

      {/* <!-- Content Wrapper. Contains page content --> */}
      <div className="content-wrapper">
        {/* <!-- Content Header (Page header) --> */}

        {/* <!-- /.content-header --> */}

        {/* <!-- Main content --> */}
        <Students/>
        <Outlet />
      </div>
      <Footer />

      {/* <!-- Control Sidebar --> */}
      <aside className="control-sidebar control-sidebar-dark">
        {/* <!-- Control sidebar content goes here --> */}
      </aside>
      {/* <!-- /.control-sidebar --> */}
    </div>
  );
};

export default Layout;
