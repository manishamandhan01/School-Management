import React, { useState } from "react";
import SideBarData from "../Data/SideBarData";

const SideBar = () => {
  return (
    <>
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        <a href="index3.html" className="brand-link">
          <img
            src="data:image/png;base64,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"
            alt="AdminLTE Logo"
            className="brand-image img-circle elevation-3"
            style={{ opacity: 0.8 }}
          />
          <span className="brand-text font-weight-light">School</span>
        </a>

        <div className="sidebar">
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <img
                src="data:image/jpeg;base64,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"
                className="img-circle elevation-2"
                alt="User Image"
              />
            </div>
            <div className="info">
              <a href="#" className="d-block">
                User
              </a>
            </div>
          </div>

          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              {SideBarData.map((item, index) => {
                return (
                  <li className="nav-item">
                    {item.subNav && item.subNav.length > 0 ? (
                      <>
                        <a href="#" className="nav-link">
                          <i className={`nav-icon fas ${item.icon}`}></i>
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
                                  <i className="far fa-circle nav-icon"></i>
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
                        <i className={`nav-icon fas ${item.icon}`}></i>
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
                  <p>Logout</p>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </aside>

      
    </>
  );
};

export default SideBar;
