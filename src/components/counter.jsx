import React, { Component } from "react";

class Counter extends Component {
  /*
  decrementHandler = () => {
    console.log("Decrement clicked");
    const { value } = this.state;
    if (value > 0) this.setState({ value: value - 1 });
  };
  incrementHandler = () => {
    console.log("Increment clicked");
    this.setState({ value: this.state.value + 1 });
  };*/

  render() {
    const { onDecrement, onIncrement, onDelete, counter } = this.props;
    return (
      <div>
        <span className={this.getBadgeClasses()}>{counter.value}</span>

        <div className="badge">
          <button onClick={() => onDecrement(counter)} className="btn btn-sm">
            -
          </button>

          <button
            onClick={() => onIncrement(counter)}
            className="btn btn-info btn-sm"
          >
            +
          </button>
        </div>

        <button
          onClick={() => onDelete(counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge  m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
}

export default Counter;
