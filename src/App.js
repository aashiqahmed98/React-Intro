import React, { Component } from "react";
import "./App.css";

import PersonComponent from "./Person/persons";

class App extends Component {
  render() {
    return (
      <div className="p1">
        <h1>Aashiq Ahmed</h1>
        <p>Age:21</p>
        <PersonComponent/>
      </div>
      // <h1>Hi</h1> => We cannot use like this,as all the tags should be wrapped inside one root element
      // React.createElement('div',{className:'p1'},React.createElement('h1',null,'This is using createElement()'))
    );
  }
}
export default App;
// default export is the convention if you want to export only one object(variable, function, class) from the file(module). There could be only one default export per file, but not restricted to only one export.
