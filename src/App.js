import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: "aqwe", name: "A", age: 28 },
      { id: "fscz", name: "B", age: 16 },
      { id: "lgfk", name: "C", age: 30 }
    ],
    otherState: "Other state",
    showPersons: false
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

  deletePersonHandler = personIndex => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
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
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
              />
            );
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>React</h1>
        <button style={style} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
