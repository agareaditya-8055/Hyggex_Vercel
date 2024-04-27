import React, { useState } from "react";
import Logo from "../../assets/Hyggex_Logo.png";
import { Link } from "react-router-dom";
const Header = () => {
  const [open, setOpen] = useState(false);
  const links = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "Flashcard", link: "/flashcard" },
    { id: 3, name: "Contact", link: "/contact" },
    { id: 4, name: "FAQ", link: "/faq" },
  ];
  return (
    <div className="w-full  mx-auto fixed top-0 left-0 right-0 bg-white ">
      <div className=" flex flex-col lg:flex lg:flex-row lg:justify-between lg:items-center py-5 lg:px-32 px-7 ">
        <div className="">
          <img className="w-[15rem] sm:w-[20rem]" src={Logo} alt="logo" />
        </div>

        <div
          className="text-4xl absolute right-8 top-6 lg:hidden cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          {open ? <span>&#10005;</span> : <span>&#9776;</span>}
        </div>

        <ul
          className={`lg:flex lg:items-center lg:px-0 px-7 lg:gap-8 lg:pb-0 pb-12 absolute lg:static bg-white lg:z-auto z-[-1] left-0 w-full lg:w-auto   ${
            open ? "top-20" : "top-[-490px]"
          }  `}
        >
          {links.map((item) => {
            return (
              <li
                onClick={() => setOpen(false)}
                key={item.id}
                className=" text-2xl font-medium lg:my-0 my-7"
              >
                <Link
                  to={item.link}
                  className="text-nav_text  md:hover:text-gray-400"
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
          <button className="text-xl rounded-3xl w-28 px-2 py-2 text-white bg-gradient-to-r from-linear_blue_1 to-linear_blue_2 ">
            Login
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
