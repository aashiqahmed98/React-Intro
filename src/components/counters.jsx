import React, { Component } from "react";
import Counter from "./counterComponent";

class Counters extends Component {
  render() {
    //  console.log("props", this.props);
    return (
      <div>
        <button
          className="btn btn-primary btn-sm m-2"
          onClick={this.props.onReset}
        >
          Reset
        </button>
        {/* Rendering Components dynamically */}
        {this.props.counters.map((counter) => (
          <Counter
            // You can ask why we use id and key as their values are the same,its coz key is internally processed
            // The key is an attribute that you must pass to all components created dynamically from an array.
            // It's a unique and constant id('key') that React uses to identify each component in the DOM and to know whether it's a different component or the same one.
            key={counter.id}
            onIncrement={this.props.onIncrement}
            onDelete={this.props.onDelete}
            counter={counter} //The 'counter' variable in the map() function now holds the id and value
          >
            <h1>Title #{counter.id}</h1>
          </Counter>
        ))}
      </div>
    );
  }
}
export default Counters;
