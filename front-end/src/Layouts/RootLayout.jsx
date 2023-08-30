import React, { useEffect, useMemo, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "../App.css";
import Navbar from "../components/Navbar";

import useUser from "../Hooks/useUser";

export default function RootLayout() {
  const[user] = useUser();


  return (
    <>
        <Navbar />
        <main>
          <Outlet />
        </main>
    </>
  );
}
