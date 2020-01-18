import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "A", age: 28 },
      { name: "B", age: 16 },
      { name: "C", age: 30 }
    ]
  };

  switchNameHandler = () => {
    // console.log("Clicked!");
    // DON'T DO THIS: this.state.persons[0].name = "Switch";
    this.setState({
      persons: [
        { name: "Switch", age: 28 },
        { name: "B", age: 16 },
        { name: "C", age: 30 }
      ]
    });
  };

  render() {
    return (
      <div className="App">
        <h1>React</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
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
