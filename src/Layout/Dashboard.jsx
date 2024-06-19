import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="flex">
          <div className="lg:w-64 min-h-full bg-red-200">
            <ul>
                <li><NavLink to="/dashboard/user">User</NavLink></li>
                <li><NavLink to="/dashboard/announce">Announcement</NavLink></li>
            </ul>
          </div>
          <div className="flex-1">
            <Outlet></Outlet>
          </div>
        </div>
    );
};

export default Dashboard;