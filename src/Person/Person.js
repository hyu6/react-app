import React from "react";

const person = props => {
  return (
    <div>
      <p onClick={props.click}>
        Name: {props.name}, Age: {props.age}, Random:{" "}
        {Math.floor(Math.random() * 30)}
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default person;
