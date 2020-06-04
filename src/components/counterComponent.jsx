// It is highly recommended to use .jsx notation in file format for better code completion

// import React from 'react'; //used the shortcut from 'Simple React Snippet'=> imr

//used the shortcut from 'Simple React Snippet'=> cc
import React, { Component } from "react"; //used the shortcut from 'Simple React Snippet' =>imrc
class Counter extends Component {
  // A state is local or private to the component

  //! We are getting the control of the parent component so no need of state in this component,"Single Source of Truth"

  // state = {
  //   count: this.props.counter.value,
  //   tags: ["tag1"],
  // };

  //Used to use styles as JS  object in HTML tags
  styles = {
    fontWeight: "bold",
    fontSize: 17,
  };

  // Handling Event function using array function which inherits 'this' normally

  // handleIncrement=()=>{
  //   console.log('Clicked!',this)
  // }

  render() {
    console.log("props", this.props);

    return (
      // Fragment is used to seperate into one root element
      <React.Fragment>
        {/* <h1>Hello World!</h1> */}
        {/* <code>AASHIQ AHMED</code> */}
        {this.props.children}
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          className="btn btn-secondary btn-sm"
          onClick={() => this.props.onIncrement(this.props.counter)}
        >
          Increment
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Delete
        </button>
      </React.Fragment>
    );
  }

  //   This function is created using Refractor(ctrl+shift+R)
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const count = this.props.counter.value;
    return count === 0 ? "Zero" : count;
  }
}
export default Counter;

// console.table(tags);
