import React from "react";
import NavBar from "../Components/Root/NavBar";
import Footer from "../Components/Root/Footer";
import { Outlet, useNavigation } from "react-router";
import { HashLoader } from "react-spinners";

const Layout = () => {
  const { state } = useNavigation();
  return (
    <div>
      <NavBar></NavBar>
      {state == "loading" ? <HashLoader /> : <Outlet></Outlet>}
      <Footer></Footer>
    </div>
  );
};

export default Layout;
