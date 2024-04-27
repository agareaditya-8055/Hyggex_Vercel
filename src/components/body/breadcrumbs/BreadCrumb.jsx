import React from "react";
import homeImg from "../../../assets/Home.png";
import { Link, useLocation } from "react-router-dom";

const Breadcrumb = () => {
  const { pathname } = useLocation();
  const pathnames = pathname.split("/").filter((x) => x);

  return (
    <div className="flex justify-start items-center flex-wrap">
      {pathnames.length > 0 && (
        <Link to={"/"}>
          <img className="w-7 mr-2" src={homeImg} alt="home" />
        </Link>
      )}
      {pathnames.map((name, index) => {
        const breadcrumbPath = `/${pathnames.slice(0, index + 1).join("/")}`;
        const breadcrumbName = decodeURIComponent(name);
        const isLast = index === pathnames.length - 1;

        return !isLast ? (
          <span key={index} className="mr-2 text-xl text-wrap">
            <span> {">"} </span>
            <Link to={breadcrumbPath}>{breadcrumbName}</Link>
          </span>
        ) : (
          <span key={index} className="text-linear_blue_1 text-xl font-medium">
            {">"} {breadcrumbName}
          </span>
        );
      })}
    </div>
  );
};

export default Breadcrumb;
