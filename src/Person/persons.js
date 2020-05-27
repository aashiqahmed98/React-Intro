import React, { Component } from "react";

class Persons extends Component {
  render() {
    return (
      <div>
        <p onClick={this.props.click}>
          This is person {this.props.name} with a random number {""}
          {Math.floor(Math.random() * 30)}
        </p>
        <p>{this.props.children}</p>


        {/* Two way binding */}
        {/* <input type="text" onChange={this.props.changed} /> */}
      </div>

      //  Props are immutable and state is mutable
      // For functions ,we can use props as a args and use.
      // For class like this,we want to use 'this.props.<attr>'
    );
  }
}
export default Persons;
