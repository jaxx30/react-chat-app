import React from "react";
import io from "socket.io-client";
import queryString from "query-string";

import Input from "../Message/Input";
import Messages from "../Message/Messages";
import InfoBar from "../InfoBar/InfoBar";

import "./Chat.css";

let socket;

class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      room: "",
      users: "",
      message: "",
      messages: [],
      sender: [],
    };
  }

  onSubmit = (message) => {
    const room = this.state.room;
    const name = this.state.name;
    socket.emit("messageIn", { name, room }, message);
  };

  componentDidMount() {
    const { name, room } = queryString.parse(this.props.location.search);
    this.setState({
      name: name,
    });
    const ENDPOINT = "http://localhost:8080/";
    socket = io(ENDPOINT);

    socket.emit("join", { name, room }, (error) => {
      if (error) {
        alert(error);
      }
    });

    socket.on("messageOut", (name, message) => {
      this.setState({
        messages: [...this.state.messages, { name: name, message: message }],
        sender: [...this.state.sender, name],
      });
    });

    this.setState({
      room: room,
      name: name,
    });
  }

  render() {
    return (
      <div className="outerContainer">
        <div className="chatContainer">
          <div className="header">
            <h1>Chat App</h1>
          </div>
          <InfoBar room={this.state.room} name={this.state.name} />
          <Messages
            name={this.state.name}
            user={this.state.sender}
            messages={this.state.messages}
          />
          <Input onSubmit={this.onSubmit} />
        </div>
      </div>
    );
  }
}

export default Chat;
