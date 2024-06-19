import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../../../providers/AuthProviders";

const Navbar = () => {

    const navlink = <>
        <li><NavLink to="/">Home</NavLink></li>


        <li><NavLink to="/apartment">Appartment</NavLink></li>

    </>
    const { user,logOut } = useContext(AuthContext)


    return (
        <div>
            <div className="navbar bg-base-100 fixed bg-opacity-30 z-10 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navlink}
                        </ul>
                    </div>
                    <div className="flex items-center justify-center">
                        <img className="w-12 h-12 btn-circle" src="../../../../../../public/logo.jpg" alt="" />
                        <a className="btn btn-ghost text-xl  ">Heaven <br />
                        </a>

                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navlink}
                    </ul>
                </div>
                <div className="navbar-end">
                    {/* <li><NavLink to="/login">Login</NavLink></li> */
                    }
                    {user ? (
                        <div title={user?.displayName} className="dropdown dropdown-end z-40">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user?.photoURL || "https://i.postimg.cc/QNkbjGzf/images.png"} alt={user.displayName} />
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <button className="btn btn-sm btn-ghost">{user?.displayName || "Jisan"}</button>
                                </li>
                                <li>
                              <Link to="/dashboard">  <button className="btn btn-sm btn-ghost  " >Dashboard</button></Link>
                                </li>
                                <li>
                                    <button className="btn btn-sm btn-ghost" onClick={() => logOut()}>Logout</button>
                                </li>

                            </ul>
                        </div>
                    ) : (
                        <Link to="/login">
                            <button className="btn btn-sm btn-ghost text-center">Login</button>
                        </Link>
                    )}

            </div>
        </div>
        </div >
    );
};

export default Navbar;