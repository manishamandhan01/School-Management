import React from "react";
import "./App.css";
import Layout from "./Components/Layout/Layout";
import { RouteObject, useRoutes } from "react-router-dom";
import Dashboard from "./Components/Pages/Dashboard";
import  { Students } from "./Components/Pages/Students";


function App() {
  const route: RouteObject[] = [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path:"/dashboard",
          element:<Dashboard/>,

      },
      {
        path:"/students",
        element:<Students/>,

    }
    ],
    
    },
  ];
  const content = useRoutes(route);

  return (
    <>{content}</>
    
  )
}

export default App;
