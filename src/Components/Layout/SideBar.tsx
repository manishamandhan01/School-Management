import React, { useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import SideBarData from "../Data/SideBarData";
import { ListItemIcon } from "@mui/material";

const SideBar = () => {
  return (
    <>
      <div
        style={{ display: "flex", height: "100vh" }}
        className="bg-[rgb(240,241,243)]"
      >
        <div className="bg-[rgb(4,41,84)]">
          <Sidebar className="app ">
            {SideBarData.map((item, index) => {
              return (
                <Menu className="bg-[rgb(4,41,84)] text-[rgb(158,168,181)] text-lg hover:text-black ">
                  {item.subNav && item.subNav.length > 0 ? (
                    <SubMenu icon={item.icon} label={item.title}>
                      {item.subNav?.map((subItem, index) => {
                        return (
                          <MenuItem className="bg-[rgb(5,31,62)] text-[rgb(158,168,181)]  text-lg hover:text-black">
                            <ListItemIcon >
                              {subItem.icon}
                            </ListItemIcon>

                            {subItem.title}
                          </MenuItem>
                        );
                      })}
                    </SubMenu>
                  ) : (
                    <MenuItem className="bg-[rgb(4,41,84)] text-[rgb(158,168,181)] text-lg hover:text-black">
                      <ListItemIcon>{item.icon}</ListItemIcon>

                      {item.title}
                    </MenuItem>
                  )}
                </Menu>
              );
            })}
            <Menu className="bg-[rgb(4,41,84)] text-[rgb(158,168,181)] text-lg hover:text-black">
              <MenuItem> Logout </MenuItem>
            </Menu>
          </Sidebar>
        </div>

        <h1>WELCOME TO QUICKPAY</h1>
      </div>
    </>
  );
};

export default SideBar;
