import React from 'react'
import { redirect,Navigate,Outlet } from "react-router-dom";
import useUser from "../Hooks/useUser"

export default function PrivateRoute(props) {
  const[user] = useUser();
    // let user = true;
    if (!user) {
        // return redirect("/login");
        return <Navigate to="/login"/>
      }
  return (<Outlet/>)
}
