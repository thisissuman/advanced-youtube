import logo from "../assets/youtubelogo.png";
import hamburger from "../assets/hamburger.png";
import usericon from "../assets/usericon.png";
import search from "../assets/search.png";
import { useDispatch } from "react-redux";
import { sideBarHandeler } from "./utils/appSlice";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Header = () => {
  const dispatch = useDispatch();

  const toggleSidebarHandeler = () => {
    dispatch(sideBarHandeler());
  };
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestion] = useState({});

  useEffect(() => {
    const timer = setTimeout(() => {
      getSearchresult();
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, [query]);

  const getSearchresult = async () => {
    const data = await fetch(
      "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=" +
        query
    );
    const response = await data.json();
    setSuggestion(response[1]);
    console.log(suggestions + query);
  };

  return (
    <div className="grid grid-flow-col justify-between items-center shadow-sm">
      <div className="flex items-center  px-2 ">
        <img
          src={hamburger}
          alt="menu"
          className="h-8 w-8 mr-4 ml-4 cursor-pointer"
          onClick={toggleSidebarHandeler}
        />
        <a href="/">
          <img src={logo} alt="logo" className="h-23 w-20 ml-8 scale-150" />
        </a>
      </div>
      <div className="flex items-center  pr-40">
        <input
          type="text"
          className="placeholder:italic placeholder:text-slate-400 block  bg-white w-96 border border-slate-300 rounded-l-full py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="Search for anything..."
          name="search"
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="rounded-r-full border items-center pr-5 bg-gray-200">
          <img src={search} className="pl-4 h-9 w-19" alt="" />
        </button>
      </div>
      <div>
        <ul>
          <li>{suggestions[0]}</li>
          <li>{suggestions[1]}</li>
          <li>{suggestions[2]}</li>
        </ul>
        {/* {suggestions.map((suggestion) => (
            <li>{suggestion}</li>
          ))} */}
      </div>
      <div className="h-19 w-9 mr-10">
        <img src={usericon} alt="user" className="" />
      </div>
    </div>
  );
};

export default Header;
