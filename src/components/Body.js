import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const Body = () => {
  const isMenuOpen = useSelector((state) => state.app.isMenuOpen);
  return (
    <div className={`flex transition-all duration-500 ease-in-out ${isMenuOpen ? '' : '-translate-x-48'}`}>
      <SideBar />
      <Outlet />
    </div>
  );
};

export default Body;
