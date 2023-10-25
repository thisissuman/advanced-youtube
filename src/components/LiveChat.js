import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addMessgae } from "./utils/chatSlice";
import { addMyMessgae } from "./utils/chatSlice";
import generateRandomChat from "./utils/randomnameandmessage";
import usericon from "../assets/usericon.png";
import send from "../assets/send.png";
const LiveChat = () => {
  const dispatch = useDispatch();
  const [mymessage, setMymessage] = useState("ok");
  console.log(mymessage);
  const chatMessages = useSelector((store) => store.chat.message);

  useEffect(() => {
    const i = setInterval(() => {
      const { name, message } = generateRandomChat();
      dispatch(
        addMessgae({
          name: name,
          message: message,
        })
      );
    }, 5000);

    return () => {
      clearInterval(i);
    };
  }, []);

  return (
    <div className="border rounded-lg">
      <div className="m-3 border-black border-2 h-[350px] w-[500px] bg-slate-100 overflow-y-scroll flex flex-col-reverse ">
        <div>
          {chatMessages.length > 0 &&
            chatMessages.map((chatMessage, index) => (
              <ChatMessage
                name={chatMessage.name}
                message={chatMessage.message}
                key={index}
              />
            ))}
        </div>
      </div>
      <div className="mt-5  flex items-center border-t-2">
        <img src={usericon} alt="user" className="h-17 w-6 mr-2 mx-5 my-5" />
        <h2 className="mx-3">Suman Kumar</h2>
      </div>
      <form
        className="flex items-center"
        onSubmit={(e) => {
          e.preventDefault();
          setMymessage("")
          dispatch(
            addMyMessgae({
              name: "Suman",
              message: mymessage,
            })
          );
        }}
      >
        <input
          className="flex  my-3 mx-14 mb-6 border-b-2 "
          type="text"
          placeholder="Chat as a subscriber"
          value={mymessage}
          onChange={(e) => setMymessage(e.target.value)}
        />
        <button className="w-5">
          <img src={send} alt="" />
        </button>
      </form>
    </div>
  );
};

export default LiveChat;
