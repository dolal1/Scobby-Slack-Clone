import React from "react";
import { MessageContainer, MessageInfo } from "../styles/Message.styles";

function Message(props) {
  const { message, timestamp, user, userImage } = props;
  return (
    <MessageContainer>
      <img src={userImage} alt="" />
      <MessageInfo>
        <h4>
          {user} <span>{new Date(timestamp?.toDate()).toUTCString()}</span>
        </h4>
        <p>{message}</p>
      </MessageInfo>
    </MessageContainer>
  );
}

export default Message;
