import React, { Component } from "react";
import "./App.css";

import PersonComponent from "./Person/persons";

class App extends Component {
  // We can use state={} function only inside the class extened with Component
  state = {
    persons: [
      {
        name: "AashiqAhmed",
      },
      {
        name: "Maxy",
      },
      {
        name: "",
      },
    ],
  };
  switchEventHandler = (newName) => {
    console.log("I clicked!");

    // DONT DO THIS=>this.state.persons[0].name='Allah';

    this.setState({
      persons: [
        { name: "Aadhil Ahmed" },
        { name: newName },
        { name: "Abdulah" },
      ],
    });
  };

  render() {
    return (
      <div className="">
        {/* <h1>Aashiq Ahmed</h1>
        <p>Age:21</p> */}

        <button onClick={this.switchEventHandler}>Switch</button>

        <PersonComponent name="Aashiq">
          This is a children content
        </PersonComponent>

        <PersonComponent
          name={this.state.persons[0].name}
          click={this.switchEventHandler}
        />

        {/* TO change the value of state using bind */}

        <PersonComponent
          click={this.switchEventHandler.bind(this, "Zubair Ahmed")}
          name={this.state.persons[2].name}
        >
          Click above me to see the change
        </PersonComponent>
      </div>
      // <h1>Hi</h1> => We cannot use like this,as all the tags should be wrapped inside one root element
      // React.createElement('div',{className:'p1'},React.createElement('h1',null,'This is using createElement()'))
    );
  }
}
export default App;
// default export is the convention if you want to export only one object(variable, function, class) from the file(module). There could be only one default export per file, but not restricted to only one export.
