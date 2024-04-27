import React from "react";
import "./index.css";
import Header from "./components/header/Header";

import Breadcrumb from "./components/body/breadcrumbs/BreadCrumb";
import { Outlet, useLocation } from "react-router-dom";
import About from "./components/header/about/About";

const App = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div className="w-full  h-screen mx-auto px-6 py-2">
      <Header />
      <div className="mt-36 sm:px-44">
        <Breadcrumb />
        <Outlet />
        {location.pathname !== "/faq" && <About />}
      </div>
    </div>
  );
};

export default App;
