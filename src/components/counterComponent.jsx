// It is highly recommended to use .jsx notation in file format for better code completion

// import React from 'react'; //used the shortcut from 'Simple React Snippet'=> imr

//used the shortcut from 'Simple React Snippet'=> cc
import React, { Component } from "react"; //used the shortcut from 'Simple React Snippet' =>imrc
class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1"],
  };

  
  constructor() {
    super(); //Using super() to get the class properties

    // console.log("This is a constructor",this);

    // this.handleIncrement = this.handleIncrement.bind(this);
  }
  //Used to use styles as JS  object in HTML tags
  styles = {
    fontWeight: "bold",
    fontSize: 17,
  };

  // Rendering tags based on Condition
  renderTags() {
    if (this.state.tags.length === 0) {
      return <p>There are no tags!</p>;
    } else {
      return (
        <li>
          {this.state.tags.map((tag) => (
            <li>{tag}</li>
          ))}
        </li>
      );
    }
  }

  // Handling Event function using array function which inherits 'this' normally

  // handleIncrement=()=>{
  //   console.log('Clicked!',this)
  // }

  handleIncrement = () => {
    // console.log("Clicked!", this);

    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      // Fragment is used to seperate into one root element
      <React.Fragment>
        {/* <h1>Hello World!</h1> */}
        {/* <code>AASHIQ AHMED</code> */}

        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          className="btn btn-secondary btn-sm"
          onClick={this.handleIncrement}
        >
          Increment
        </button>
        <ul>
          {this.state.tags.length === 0 && "No tags"}{" "}
          {/*True && 'Strig' returns true */}
        
          {/* {this.renderTags()} */}
       
        </ul>
      </React.Fragment>
    );
  }

  //   This function is created using Refractor(ctrl+shift+R)
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state; //We are using curly braces,cos count is array
    return count === 0 ? "Zero" : count;
  }
}
export default Counter;

// console.table(tags);
