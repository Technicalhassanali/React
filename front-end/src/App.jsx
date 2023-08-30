import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./Layouts/RootLayout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ContactLayout from "./Layouts/ContactLayout";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";

import PrivateRoute from "./auth/PrivateRoute";
import UserInfoPage from "./pages/UserInfoPage";
import UserContexts from "./context/UserContexts";
import UpdateForm from "./pages/UpdateForm";
function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      // loader: rootLoader,
      children: [
        {
          path: "login",
          element: <LoginPage />,
        },
        {
          path: "signup",
          element: <SignUpPage />,
        },
        {
          path: "user",
          element: <PrivateRoute />,
          children: [
            {
              path: "/user",
              element: <UserInfoPage />,
            },
            {
              path: "/user/:id",
              element: <UpdateForm/>
            }
          ],
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "contact",
          element: <ContactLayout />,
          children: [
            {
              path: "/contact",
              element: <Contact />,
            },
          ],
        },
      ],
    },
    // {
    //   path: "contact",
    //   element: <ContactLayout />,
    //   children:[
    //     {
    //       path: "/contact",
    //       element: <Contact />,
    //       // loader: teamLoader,
    //     },
    //   ]
    // }
  ]);

  return (
    <>
    <UserContexts>
        <RouterProvider router={router} />
        </UserContexts>
    </>
  );
}

export default App;
