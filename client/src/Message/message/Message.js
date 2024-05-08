import React from "react";
import ReactEmoji from "react-emoji";

import "./Message.css";

class Message extends React.Component {
  render() {
    return this.props.message.name === this.props.clientName ? (
      <div className="messageContainer">
        <div className="justifyEnd">
          <div className="messagebox">
            <span>{ReactEmoji.emojify(this.props.message.message)}</span>
          </div>
        </div>
      </div>
    ) : (
      <div className="messageContainer ">
        <div className="justifyStart">
          <h5 className="messageName">{this.props.name}</h5>
          <div className="messageboxStart">
            <span>{ReactEmoji.emojify(this.props.message.message)}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Message;
