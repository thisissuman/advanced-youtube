import React from "react";
import usericon from "../assets/usericon.png";
const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center m-2">
      <img src={usericon} alt="user" className="h-17 w-6 mr-2" />
      <span className="px-2 font-bold">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
