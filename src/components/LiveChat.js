import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addMessgae } from "./utils/chatSlice";
const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.message);
  console.log(chatMessages.length);
  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessgae({
          name: "Suman K",
          message: "This is the next message by suman",
        })
      );
    }, 2000);

    return () => {
      clearInterval(i);
    };
  }, []);

  return (
    <div className="m-3 border-black border-2 h-[350px] w-[500px] bg-slate-100 overflow-y-scroll">
      {chatMessages.length > 0 &&
        chatMessages.map((chatMessage, index) => (
          <ChatMessage name={chatMessage.name} message={chatMessage.message} key={index}/>
        ))}
    </div>
  );
};

export default LiveChat;
