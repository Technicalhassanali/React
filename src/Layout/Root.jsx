import React from "react";

import { Outlet } from "react-router";
import Header from "../components/Header"

export default function Root({ children }) {
  return(
    <>
    <Header/>
    {children}
    <Outlet/>
    </>
  );
}
