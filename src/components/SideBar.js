import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const SideBar = () => {
  const isMenuOpen = useSelector((state) => state.app.isMenuOpen);
  if (!isMenuOpen) {
    return null;
  }
  return (
    <div className="px-7 pt-5">
      <ul className="flex flex-col items-start">
        <li className="rounded-lg   hover:bg-gray-100 p-1 mt-2 w-36">
          <Link to="/">🏠 Home</Link>
        </li>
        <li className="rounded-lg   hover:bg-gray-100 p-1  mt-2 w-36">
          🩳 Shorts
        </li>
        <li className="rounded-lg  hover:bg-gray-100 p-1 mt-2 w-36">
          🙆‍♀️ Subscription
        </li>
        <li className="rounded-lg  hover:bg-gray-100 p-1 mt-2 w-36">
          🎵 Youtube Music
        </li>
        <br />
        <li className="rounded-lg  hover:bg-gray-100 p-1 mt-2 w-36">
          📚 Library
        </li>
        <li className="rounded-lg   hover:bg-gray-100 p-1 mt-2 w-36">
          ⌛ History
        </li>
        <li className="rounded-lg  hover:bg-gray-100 p-1 mt-2 w-36">
          📺 Your Videos
        </li>
        <li className="rounded-lg   hover:bg-gray-100 p-1 mt-2 w-36">
          🔜 Watch later
        </li>
        <li className="rounded-lg  hover:bg-gray-100 p-1 mt-2 w-36">
          🔽 Downloads
        </li>
        <li className="rounded-lg  hover:bg-gray-100 p-1 mt-2 w-36 text-center text-lg">
         👇 Show More
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
