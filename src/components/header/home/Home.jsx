import React from "react";
import Button from "../../button/Button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Link to={"/flashcard"}>
        <Button>Go to Flashcard</Button>
      </Link>
    </div>
  );
};

export default Home;
