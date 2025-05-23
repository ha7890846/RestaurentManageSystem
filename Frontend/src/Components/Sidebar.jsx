import { MdDashboard } from "react-icons/md";
import { MdEventSeat } from "react-icons/md";
import { BiSolidFoodMenu } from "react-icons/bi";
import { MdBarChart } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <nav style={{display:"flex",flexDirection:'column'}}>
        <NavLink to="/dashboard" className="nav-link">
          <MdDashboard size={30} />
          {/* <span>Dashboard</span> */}
        </NavLink>
        <NavLink to="/tables" className="nav-link">
          <MdEventSeat size={30}/>
        </NavLink>
        <NavLink to="/orders" className="nav-link">
          <BiSolidFoodMenu size={30}/>
        </NavLink>
        <NavLink className="nav-link">
          <MdBarChart size={30}/>
        </NavLink>
      </nav>
    </>
  );
};
export default Sidebar;
