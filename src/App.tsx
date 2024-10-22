import React from "react";
import "./App.css";
import Layout from "./Components/Layout/Layout";
import { RouteObject, useRoutes } from "react-router-dom";
import { CommonFetch } from "./Components/Pages/CommonFetch";
import CommonAddEdit from "./Components/AddEdit/CommonAddEdit";


function App() {
  const route: RouteObject[] = [
    {
      path: "/",
      element: <Layout />,
      children: [

        {
          path: "/students",
          element: <CommonFetch entity="student" />,

        }, {
          path: "/teachers",
          element: <CommonFetch entity="teacher" />,

        },
        {
          path:"/addstudents",
          element:<CommonAddEdit entity="student" />
        },
        

      ],

    },
  ];
  const content = useRoutes(route);

  return (
    <>{content}</>

  );
}

export default App;
