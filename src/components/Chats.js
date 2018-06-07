/*
 take the list of messages from the state object, map over these, and then render them beautifully.
 Whereas state.messages holds all the messages for every user contact, state.messages[activeUserId] 
 will fetch the messages for the active user.
*/

import React, { Component } from "react";
import "./Chats.css";

const Chat = ({ message }) => {
  const { text, is_user_msg } = message;
  return (
    <span className={`Chat ${is_user_msg ? "is-user-msg" : ""}`}>{text}</span>
  );
};

class Chats extends Component {
  render() {
    return (
      <div className="Chats">
        {this.props.messages.map(message => (
          <Chat message={message} key={message.number} />
        ))}
      </div>
    );
  }
}

export default Chats;