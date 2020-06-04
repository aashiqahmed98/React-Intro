import React, { Component } from "react";
import Counters from "./components/counters";

import NavBar from "./components/navbar";

// We can also use Destructuring arguments for props as,
// const {onReset,.........}=this.props

class App1 extends Component {
  // Always have the state in the root component of SPA
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
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="container">
          <Counters
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            counters={this.state.counters}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App1;
