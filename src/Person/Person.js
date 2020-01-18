import React from "react";

const person = props => {
  return (
    <div>
      <p>
        Name: {props.name}, Age: {props.age}, Random:{" "}
        {Math.floor(Math.random() * 30)}
      </p>
      <p>{props.children}</p>
    </div>
  );
};

export default person;
