import React from "react";
import usericon from "../assets/usericon.png";
const Comments = ({ data }) => {
  const { name, text, reply } = data;
  return (
    <div className="flex py-2 shadow-md bg-gray-100 rounded-2xl my-1">
      <img src={usericon} alt="user" className="h-12  w-12" />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Comments;
