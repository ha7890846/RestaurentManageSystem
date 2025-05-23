import logo from "../assets/BK.png"
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Homepage = () => {
  return (
    <>
      <div className="first">
        <img src={logo} alt="logo" />
      </div>
      <div className="second">2</div>
      <div className="third">
        <Sidebar />
      </div>
      <div className="fourth">
        <Outlet/>
      </div>
    </>
  );
};
export default Homepage;