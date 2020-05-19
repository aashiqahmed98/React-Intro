import React, { Component } from "react";

class Persons extends Component {
  render() {
    return (
    <div>
      <p>
        This is person {this.props.name} component {Math.floor(Math.random() * 30)}
      
      </p>
      
    <p>{this.props.children}</p>
        </div>
     
      // For functions ,we can use props as a args and use.
      // For class like this,we want to use 'this.props.<attr>'
    );
  }
}
export default Persons;
