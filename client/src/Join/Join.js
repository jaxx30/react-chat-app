import React from "react";
import { Link } from "react-router-dom";

import "./Join.css";

class Join extends React.Component {
  state = {
    name: "",
    room: "",
  };

  render() {
    return (
      <div className="joinOuterContainer">
        <div className="joinInnerContainer">
          <h1 className="heading">Join</h1>
          <input
            type="text"
            placeholder="Name"
            className="joinInput"
            onChange={(e) => {
              this.setState({
                name: e.target.value,
              });
            }}
          />
          <br />
          <input
            type="text"
            placeholder="Room"
            className="joinInput"
            onChange={(e) => {
              this.setState({
                room: e.target.value,
              });
            }}
          />
          <Link
            onClick={(e) =>
              !this.state.name || !this.state.room ? e.preventDefault() : null
            }
            to={`/chat?name=${this.state.name}&room=${this.state.room}`}
          >
            <button className="button mt-20" type="submit">
              Join Room
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Join;
