import { NavLink, Outlet } from "react-router-dom";
import Sidebar from "../Pages/Dashboard/Sidebar/Sidebar";

const Dashboard = () => {
  return (
    <div className="relative min-h-screen md:flex">
      <div className="lg:w-64 min-h-full bg-red-200">
        {/* sidedar  */}
        <Sidebar></Sidebar>
      </div>
      {/* outlet */}
      <div className="flex-1 md:ml-64">
        <div className="p-5">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;