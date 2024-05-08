import React from "react";
import "./input.css";
class Input extends React.Component {
  state = {
    formData: {},
    input: "",
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.input);
    this.setState({ input: "" });
  };

  render() {
    return (
      <form className="form" onSubmit={this.onSubmit}>
        <input
          type="text"
          onChange={(e) => this.setState({ input: e.target.value })}
          placeholder="Enter message here"
          className="input"
          value={this.state.input}
        />
        <button type="submit">Send</button>
      </form>
    );
  }
}

export default Input;
