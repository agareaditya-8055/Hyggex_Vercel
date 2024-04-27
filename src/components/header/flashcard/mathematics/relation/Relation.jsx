import React, { useState } from "react";
import { useParams } from "react-router-dom";
import expand from "../../../../../assets/Expand.png";
import goBack from "../../../../../assets/GoBack.png";
import goForward from "../../../../../assets/GoForward.png";
import reload from "../../../../../assets/Reload.png";
import add from "../../../../../assets/Add.png";
import logo from "../../../../../assets/Hyggex_2.png";
const Relation = () => {
  const [activeCategory, setActiveCategory] = useState(1);
  const categories = [
    {
      id: 1,
      name: "Study",
    },
    {
      id: 2,
      name: "Quize",
    },
    {
      id: 3,
      name: "Test",
    },
    {
      id: 4,
      name: "Game",
    },
    {
      id: 5,
      name: "Others",
    },
  ];
  const { subject, topic } = useParams();
  return (
    <div className="my-14 ">
      {/* <span className="text-[4vw] sm:text-[2.5vw] font-semibold bg-clip-text text-transparent bg-gradient-to-b from-linear_blue_1 to-linear_blue_2 ">
        {topic}({subject})
      </span> */}
      <span className="text-[4vw] sm:text-[2.5vw] font-semibold text-linear_blue_1  ">
        {topic}({subject})
      </span>
      <div className="flex justify-center">
        <div className="flex flex-col  max-w-[650px] mx-auto ">
          <div className="flex my-10 text-xl justify-between sm:justify-center  sm:gap-20 text-categories_text font-medium">
            {categories.map((cat) => {
              return (
                <span
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`cursor-pointer ${
                    activeCategory === cat.id
                      ? "text-linear_blue_1 border-b-2 border-linear_blue_1 "
                      : "text-categories_text"
                  }`}
                >
                  {cat.name}
                </span>
              );
            })}
          </div>
          <div className="flex justify-center items-center w-[300px] h-[200px] sm:w-[450px] sm:h-[250px] max-w-[450px]  mx-auto bg-gradient-to-l from-linear_blue_1 to-linear_blue_2 rounded-[2rem] text-4xl text-white font-semibold ">
            9 + 6 + 7x - 2x -3
          </div>
          <div className="flex justify-around my-8">
            <img src={reload} className="w-10 h-10" alt="reload" />
            <img src={goBack} className="w-10 h-10" alt="goBack" />
            <span className="text-2xl font-bold">1/10</span>
            <img src={goForward} className="w-10 h-10" alt="goForward" />
            <img src={expand} className="w-10 h-10" alt="expand" />
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center my-12   ">
        <div className="sm:w-[150px] w-[100px]">
          <img className="" src={logo} alt="" />
        </div>
        <div className="flex justify-between items-center gap-3 ">
          <img src={add} className="w-10 h-10" alt="add" />
          <span className="text-2xl font-bold text-linear_blue_1">
            Create Flashcard
          </span>
        </div>
      </div>
    </div>
  );
};

export default Relation;
