import React, { useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import SideBarData from "../Data/SideBarData";
import { ListItemIcon } from "@mui/material";
import { NavLink } from "react-router-dom";

const SideBar = () => {

  return (
    <>
      <aside className="main-sidebar sidebar-dark-primary elevation-4">

        <a href="index3.html" className="brand-link">
          <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: .8}} />
          <span className="brand-text font-weight-light">AdminLTE 3</span>
        </a>

        <div className="sidebar">

          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
            </div>
            <div className="info">
              <a href="#" className="d-block">Alexander Pierce</a>
            </div>
          </div>


          <nav className="mt-2">
            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">

              {SideBarData.map((item, index) => {
                return (
                  <li className="nav-item">


                    {item.subNav && item.subNav.length > 0 ? (
                      <>
                        <a href="#" className="nav-link ">
                          {item.icon}
                          <p>
                            {item.title}
                            <i className="right fas fa-angle-left"></i>
                          </p>
                        </a>
                        <ul className="nav nav-treeview">
                          {item.subNav?.map((subItem, index) => {
                            return (
                              <li className="nav-item">
                                <a href={subItem.path} className="nav-link">
                                  {/* <i className="far fa-circle nav-icon"></i> */}
                                  <p>{subItem.title}</p>
                                </a>
                              </li>

                            );
                          })}
                        </ul>
                      </>

                    ) : (
                      <li className="nav-item">
                        <a href={item.path} className="nav-link ">
                          {item.icon}
                          <p>{item.title}</p>
                        </a>
                      </li>
                    )}

                   
                  </li>
                );
              })}
               <li className="nav-item">
                      <a href="/" className="nav-link ">
                        <i className="nav-icon far fa-image"></i>
                        <p>
                          Logout
                        </p>
                      </a>
                    </li>
            </ul>
          </nav>

        </div>

      </aside>





      <Menu className="bg-[rgb(4,41,84)] text-[rgb(158,168,181)] text-lg hover:text-black">
        <MenuItem> Logout </MenuItem>
      </Menu>




    </>
  );
};

export default SideBar;
