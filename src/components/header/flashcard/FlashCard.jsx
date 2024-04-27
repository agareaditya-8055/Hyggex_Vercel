import React from "react";
import { Link } from "react-router-dom";
import Button from "../../button/Button";

const FlashCard = () => {
  const subjectData = [{ id: 1, subject: "Mathematics" }];
  return (
    <div className="mt-10 ">
      <div>
        {subjectData.map((sub) => {
          return (
            <Link key={sub.id} to={`${sub.subject}`}>
              <Button>{sub.subject}</Button>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default FlashCard;
