import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const app = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "A", age: 28 },
      { name: "B", age: 16 },
      { name: "C", age: 30 }
    ]
  });

  const [otherState, setOtherState] = useState("Other state");

  console.log(personsState, otherState);

  const switchNameHandler = () => {
    // console.log("Clicked!");
    // DON'T DO THIS: this.state.persons[0].name = "Switch";
    setPersonsState({
      persons: [
        { name: "Switch", age: 28 },
        { name: "B", age: 16 },
        { name: "C", age: 30 }
      ]
    });
  };

  return (
    <div className="App">
      <h1>React</h1>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
      >
        Text
      </Person>
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
      />
    </div>
  );
};

export default app;
