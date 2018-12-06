import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.counter.value
  };

  decrementHandler = () => {
    console.log("Decrement clicked");
    const { value } = this.state;
    if (value > 0) this.setState({ value: value - 1 });
  };
  incrementHandler = () => {
    console.log("Increment clicked");
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.state.value}</span>

        <div className="badge">
          <button onClick={this.decrementHandler} className="btn btn-sm">
            -
          </button>

          <button
            onClick={this.incrementHandler}
            className="btn btn-info btn-sm"
          >
            +
          </button>
        </div>

        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge  m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }
}

export default Counter;
