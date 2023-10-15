import React from "react";

const Button = () => {
  const ArrayofButtons = [
    "All",
    "JavaScript",
    "Gaming",
    "Live",
    "Music",
    "Mixes",
    "News",
    "React",
    "BGMI",
    "Cricket",
    "👉"
  ];
  return (
    <div className="flex">
      {ArrayofButtons.map((button, index) => (
        <div key={index} className="mx-3 bg-slate-100 rounded-lg px-4 py-1 mt-5 cursor-pointer hover:bg-black hover:text-slate-50 font-normal">{button}</div>
      ))}
    </div>
  );
};

export default Button;
