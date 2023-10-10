import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/App.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// import Root, { rootLoader } from "./routes/root";
// import Team, { teamLoader } from "./routes/team";
import Home from './components/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    // loader: rootLoader,
    children: [
      {
        path: "team",
        element: <div>Team Path</div>,
        // loader: teamLoader,
      },
    ],
  },
]);


function App() {

  return (<RouterProvider router={router} />)
}

export default App
