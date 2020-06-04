import React, { Component } from "react";
import Counter from "./counterComponent";

class Counters extends Component {
  state = {
    counters: [
      //Array of objects
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleIncrement = (counter) => {
    // console.log(counter);
    const counters = [...this.state.counters];

    //We can get the position of counter by using indexOf()
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };

    // Incrementing the value of the specific index's counter
    counters[index].value++;
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    // console.log("Event Handler called",counterId);

    // Here the 'filter' method is used to filter all the props except the passed id and thus updating the state
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
    console.log("Reset clicked", this.props);
  };
  render() {
    //  console.log("props", this.props);
    return (
      <div>
        <button
          className="btn btn-primary btn-sm m-2"
          onClick={this.handleReset}
        >
          Reset
        </button>
        {/* Rendering Components dynamically */}
        {this.state.counters.map((counter) => (
          <Counter
            // You can ask why we use id and key as their values are the same,its coz key is internally processed
            // The key is an attribute that you must pass to all components created dynamically from an array.
            // It's a unique and constant id('key') that React uses to identify each component in the DOM and to know whether it's a different component or the same one.
            key={counter.id}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
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
