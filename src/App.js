import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28},
      { name: 'Stefan', age: 57},
      { name: 'Willy', age: 60}
    ]
  }
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React app</h1>
        <p>This is really working!</p>
        <button>Switch Names</button>
        <Person name= {this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name= {this.state.persons[1].name} age={this.state.persons[0].age}>My Hobbie: Front-end</Person>
        <Person name= {this.state.persons[2].name} age={this.state.persons[0].age} />

      </div>
    );
  }
}

export default App;
