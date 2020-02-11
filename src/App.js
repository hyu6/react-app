import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "A", age: 28 },
      { name: "B", age: 16 },
      { name: "C", age: 30 }
    ],
    otherState: "Other state"
  };

  switchNameHandler = newName => {
    // console.log("Clicked!");
    // DON'T DO THIS: this.state.persons[0].name = "Switch";
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: "B", age: 16 },
        { name: "C", age: 30 }
      ]
    });
  };

  nameChangedHandler = event => {
    this.setState({
      persons: [
        { name: "A", age: 28 },
        { name: event.target.value, age: 16 },
        { name: "C", age: 30 }
      ]
    });
  };

  render() {
    return (
      <div className="App">
        <h1>React</h1>
        <button onClick={() => this.switchNameHandler("Switch")}>
          Switch Name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "Person")}
          changed={this.nameChangedHandler}
        >
          Text
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
}

export default App;
