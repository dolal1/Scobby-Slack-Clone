import React, { useState } from "react";
import firebase from "firebase";
import { Button } from "@material-ui/core";
import { auth, db } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

import { ChatInputContainer } from "../styles/ChatInput.styles";

function ChatInput(props) {
  const { channelName, channelId, chatRef } = props;
  const [user] = useAuthState(auth);
  const [input, setInput] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();

    if (!channelId) {
      return false;
    }

    const message = {
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      user: user.displayName,
      userImage: user.photoURL,
    };
    console.log(message);
    console.log(channelId);
    db.collection("rooms").doc(channelId).collection("messages").add(message);

    chatRef.current.scrollIntoView({
      behavior: "smooth",
    });

    setInput("");
  };

  return (
    <ChatInputContainer>
      <form>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Message #${channelName}`}
        />
        <Button hidden type="submit" onClick={sendMessage}>
          SEND
        </Button>
      </form>
    </ChatInputContainer>
  );
}

export default ChatInput;
