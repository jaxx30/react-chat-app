import React from "react";
import ScrollFromBottom from "react-scroll-to-bottom";

import Message from "./message/Message";

class Messages extends React.Component {
  state = {
    messages: [],
    user: [],
  };

  componentDidUpdate(prevProps) {
    if (prevProps.messages !== this.props.messages) {
      this.setState({
        messages: [...this.props.messages],
        name: this.props.name,
      });
    }
  }

  render() {
    return (
      <ScrollFromBottom className="messages">
        {this.props.messages.map((e, i) => (
          <Message
            key={i}
            className="messageContainer"
            clientName={this.props.name}
            name={this.props.user[i]}
            message={e}
          />
        ))}
      </ScrollFromBottom>
    );
  }
}

export default Messages;
