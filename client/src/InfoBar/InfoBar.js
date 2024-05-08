import React from "react";

import "./infoBar.css";

class InfoBar extends React.Component {
  state = {
    name: "",
    room: "",
  };

  componentDidUpdate(prevProps) {
    if (prevProps.name !== this.props.name) {
      this.setState({
        name: this.props.name,
        room: this.props.room,
      });
    }
  }

  render() {
    return (
      <div className="infoContainer">
        <div className="infoInnerContainer">
          <div className="item">Room: {this.state.room}</div>
          <div className="item"> {this.state.name}</div>
        </div>
      </div>
    );
  }
}

export default InfoBar;
