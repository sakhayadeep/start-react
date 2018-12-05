import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0
  };

  constructor() {
    super();
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    console.log("Increment clicked", this);
  }

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button onClick={this.clickHandler} className="btn btn-primary">
          Increment
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "zero" : count;
  }
}

export default Counter;
