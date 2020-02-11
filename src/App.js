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
    otherState: "Other state",
    showPersons: false
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

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1x solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map(person => {
            return <Person name={person.name} age={person.age} />;
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>React</h1>
        <button style={style} onClick={this.togglePersonsHandler}>
          Switch Name
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
