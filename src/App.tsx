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
          path:"/add-student",
          element:<CommonAddEdit entity="student" />
        },
        {
          path:"/add-teacher",
          element:<CommonAddEdit entity="teacher" />
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
