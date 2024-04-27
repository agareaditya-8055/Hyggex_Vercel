import React from "react";
import { Link, useParams } from "react-router-dom";
import Button from "../../../button/Button";

const Mathematics = () => {
  const { subject } = useParams();
  console.log(subject);
  return (
    <div className="mt-10">
      <Link to={`/flashcard/${subject}/Relation%20and%20Function`}>
        <Button>Relation and Function</Button>
      </Link>
    </div>
  );
};

export default Mathematics;
