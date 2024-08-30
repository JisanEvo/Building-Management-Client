import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../../../providers/AuthProviders";
import HostModal from "../../../../../Components/Modal/HostRequestModal";
import useAxiosSecure from "../../../../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import useRole from "../../../../../Hooks/useRole";
import { MdShoppingCart } from "react-icons/md";
import useCart from "../../../../../Hooks/useCart";


const Navbar = () => {
    const axiosSecure = useAxiosSecure();
    // const [isModalOpen, setIsModalOpen] = useState(false);
    const { user, logOut } = useContext(AuthContext);
    const [role] = useRole()
  const [cart]=useCart()


    const [isModalOpen, setIsModalOpen] = useState(false)
    const closeModal = () => {
        setIsModalOpen(false)
    }


    const modalHandler = async () => {
        // console.log('I want to be a host');
        try {
            const currentUser = {
                email: user?.email,
                role: 'user',
                status: 'Requested',
            };
            const { data } = await axiosSecure.put(`/user`, currentUser);
            // console.log(data);
            if (data.modifiedCount > 0) {
                // toast.success('Successfully send!');
                Swal.fire("Success send your member request!");

            } else {
                // toast.success('Success! Please wait ');
                Swal.fire("Wait a few minutes..For admin Approval");

            }
        } catch (err) {
            console.log(err);
            toast.error(err.message);
        } finally {
            closeModal();
        }

    };


    const navlink = (
        < >
            <li><NavLink to="/" className='bg-white'>Home</NavLink></li>
            <li><NavLink to="/apartment">Apartment</NavLink></li>
            <li><NavLink to="myCart"> Cart  <MdShoppingCart className=""/> <p className="badge badge-secondary lg:-ml-2 mb-2">+0{cart?.length}</p>
            </NavLink></li>

        </>
    );

    return (
        <div>
            <div className="navbar bg-base-100  bg-opacity-30 fixed z-40 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navlink}
                        </ul>
                    </div>
                    <div className="flex items-center justify-center ">
                    <img className="w-12 h-12 btn-circle hidden md:block" src="/logo.jpg" alt="Logo" />
                        <a className="btn btn-ghost text-xl hidden md:block mt-4">Heaven</a>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navlink}
                    </ul>
                </div>
                <div className="navbar-end">
                    {user ? (
                        <div className="flex items-center">
                            {role === 'user' && (
                                <button
                                    onClick={() => setIsModalOpen(true)}
                                    className='disabled:cursor-not-allowed cursor-pointer hover:bg-neutral-100 py-3 px-4 text-sm font-semibold rounded-full transition bg-white'
                                >
                                    Request Member
                                </button>
                            )
                            }
                            <HostModal isOpen={isModalOpen} closeModal={closeModal} modalHandler={modalHandler} />
                            <div title={user?.displayName} className="dropdown dropdown-end z-40">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img src={user?.photoURL || "https://i.postimg.cc/QNkbjGzf/images.png"} alt={user?.displayName} />
                                    </div>
                                </label>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 items-center">
                                    <li>
                                        <button className="btn btn-sm btn-ghost">{user?.displayName || "Jisan"}</button>
                                    </li>
                                    <li>
                                        <Link to="/dashboard">
                                            <button className="btn btn-sm btn-ghost">Dashboard</button>
                                        </Link>
                                    </li>
                                    <li>
                                        <button className="btn btn-sm btn-ghost" onClick={logOut}>Logout</button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    ) : (
                        <Link to="/login">
                            <button className="btn btn-sm btn-ghost text-center bg-white">Login</button>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
