import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Components/Layout/Main";
import Home from "./Components/Home/Home";
import ErrorPage from "./Components/Error/Error";
import LogIn from "./Components/Login/LogIn";
import Registration from "./Components/Registration/Registration";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: ()=> fetch("data.json")
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>
      }
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
