import React from "react";

const Button = (props) => {
  return (
    <button className="bg-gradient-to-r from-linear_blue_1 to-linear_blue_2 text-white text-2xl  py-4 px-10 rounded md:ml-8 hover:bg-indigo-400">
      {props.children}
    </button>
  );
};

export default Button;
