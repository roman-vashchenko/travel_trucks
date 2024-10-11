import React from "react";
import { Outlet } from "react-router-dom";
import css from "./Layout.module.css";
import Logo from "../Logo/Logo";
import NavBar from "../NavBar/NavBar";

const Layout = () => {
  return (
    <div>
      <header>
        <Logo />
        <NavBar />
      </header>
      <Outlet />
    </div>
  );
};

export default Layout;
