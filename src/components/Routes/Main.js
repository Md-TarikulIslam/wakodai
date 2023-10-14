import React from "react";
import Header from "../Shared/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Navigation from "../Shared/Navigation/Navigation";

const Main = () => {
  return (
    <div>
      <Header />
      <div className="w-full">
        <Navigation />
      </div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
