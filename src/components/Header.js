import logo from "../assets/youtubelogo.png";
import hamburger from "../assets/hamburger.png";
import usericon from "../assets/usericon.png";
import search from "../assets/search.png";
import { useDispatch } from "react-redux";
import { sideBarHandeler } from "./utils/appSlice";
import { cacheSearch } from "./utils/searchSlice";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { BellRing } from 'lucide-react';
import { Video } from 'lucide-react';

const Header = () => {
  const dispatch = useDispatch();
  const cachesSearch = useSelector((store) => store.search);
  // console.log(cachesSearch);
  const toggleSidebarHandeler = () => {
    dispatch(sideBarHandeler());
  };
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestion] = useState([]);
  const [suggestionactive, setSuggestionactive] = useState(false);
  // console.log(suggestionactive);
  const onScollevent = () => {
    setSuggestionactive(false);
  };

  window.addEventListener("scroll", onScollevent);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (cachesSearch[query]) {
        setSuggestion(cachesSearch[query]);
      } else {
        getSearchresult();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [query]);

  const getSearchresult = async () => {
    const data = await fetch(
      "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="+query
    );
    const response = await data.json();
    setSuggestion(response[1]);
    
    // update cache
    dispatch(
      cacheSearch({
        [query]: response[1],
      })
    );
  };

  return (
    <div className="grid grid-flow-col justify-between items-center shadow-sm bg-inherit">
      <div className="flex items-center  px-2 ">
        <img
          src={hamburger}
          alt="menu"
          className="h-8 w-8 mr-4 ml-4 cursor-pointer  transition-transform duration-500 ease-in-out transform hover:scale-150"
          onClick={toggleSidebarHandeler}
        />
        <a href="/">
          <img src={logo} alt="logo" className="h-23 w-20 ml-8 scale-150" />
        </a>
      </div>
      <div>
        <div className="flex items-center  pr-40">
          <input
            type="text"
            className="placeholder:italic placeholder:text-slate-400 block  bg-white w-96 border border-slate-300 rounded-l-full py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            placeholder="Search for anything..."
            name="search"
            onChange={(e) => {
              setQuery(e.target.value);
              setSuggestionactive(true);
            }}
            onFocus={() => setSuggestionactive(true)}
//            onBlur={() => setSuggestionactive(false)}
          />
          <button className="rounded-r-full border items-center pr-5 bg-gray-200">
            <img src={search} className="pl-4 h-9 w-19" alt="" />
          </button>
        </div>
        {suggestionactive && (
          <div className="fixed z-50 bg-white w-1/3 rounded-lg pl-5 pb-2 mt-5 shadow-lg">
            <ul>
              {suggestions.map((suggestion) => (
                <a href="searchcontainer">
                  <li
                  key={suggestion}
                  className="hover:bg-slate-200"
                  onClick={() => {
                    
                    setSuggestionactive(false);
                    
                  }}
                >
                  {"🔍 " + suggestion}
                </li>
                </a>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="h-19 w-30  items-center grid grid-flow-col gap-10">
        
        <Video/>
        <BellRing/>
        <img src={usericon} alt="user" className="mr-10 w-10 " />
      </div>
    </div>
  );
};

export default Header;
