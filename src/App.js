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
    ],
  };
  switchEventHandler = (newName) => {
   

    // DONT DO THIS=>this.state.persons[0].name='Allah';

    this.setState({
      persons: [{ name: newName }, { name: "Maxy" }],
    });
  };

  nameChangedHandler(event) {
    this.setState({
      persons: [{ name: "AashiqAhmed" }, { name: event.target.value }],
    });
  }
  render() {
    return (
      <div className="">
        {/* <h1>Aashiq Ahmed</h1>
        <p>Age:21</p> */}

        <button onClick={this.switchEventHandler.bind(this, "Iqbal")}>
          Switch
        </button>

        {/* 'Aashiq' is passes as props */}
        <PersonComponent name="Aashiq" />

        <hr></hr>

        {/* Using onclick event handler */}
        <PersonComponent
          name={this.state.persons[0].name}
          click={this.switchEventHandler.bind(this, "Mohamed")}
        >
          Click above to see the change
        </PersonComponent>

        <hr></hr>

        {/* To change the value of state using bind */}

        <PersonComponent
          // click={this.switchEventHandler.bind(this, "Zubair Ahmed")}
          name={this.state.persons[1].name}
          changed={this.nameChangedHandler}
        ></PersonComponent>
      </div>
      // <h1>Hi</h1> => We cannot use like this,as all the tags should be wrapped inside one root element
      // React.createElement('div',{className:'p1'},React.createElement('h1',null,'This is using createElement()'))
    );
  }
}
export default App;
// default export is the convention if you want to export only one object(variable, function, class) from the file(module). There could be only one default export per file, but not restricted to only one export.
const element=<h1>Hello World</h1> //<h1> is a </h1>Virtual dom here ,it will be converted into Real dom using Babel
console.log(element)
