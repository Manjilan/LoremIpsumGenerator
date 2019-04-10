import React, { Component } from "react";

class Form extends Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <input type="text" placeholder="No. of Paragraphs" name="amount" />
        <button>Request</button>
      </form>
    );
  }
}

export default Form;
