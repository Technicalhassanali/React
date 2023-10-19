import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";


import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Layout/Root";
import Home from "./components/Home"
import FetchUser from "./components/FetchUser"
import FetchAllUser from "./components/FetchUser/FetchAllUser"
import FetchComments from "./components/FetchComments"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    // loader: rootLoader,
    children: [
      {
        path: "/",
        element: <Home/>,
        // loader: teamLoader,
      },
      {
        path: "find-user",
        element: <FetchUser/>
      },
      {
        path: "fetch-all-user",
        element: <FetchAllUser/>
      },
      {
        path: "fetch-comments",
        element: <FetchComments/>
      },
    ],
  },
]);





function App() {
  return (  <RouterProvider router={router} /> );
}

export default App;
