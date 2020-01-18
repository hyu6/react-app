import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>React</h1>
        <Person name="A" age="28" />
        <Person name="B" age="17">
          Text
        </Person>
      </div>
    );
  }
}

export default App;
