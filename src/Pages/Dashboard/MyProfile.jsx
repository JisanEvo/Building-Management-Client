import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";

const MyProfile = () => {
    const {user}=useContext(AuthContext)
    return (
        <div className="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <img className="w-44 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 justify-center flex items-center ml-14" src={user?.photoURL} alt="avatar"/>

        <div className="py-5 text-center">
            <p href="#" className="block text-xl font-bold text-gray-800 dark:text-white" role="link">{user?.displayName}</p>
            <span className="text-sm text-gray-700 dark:text-gray-200">{user?.email}</span>
        </div>
    </div>
    );
};

export default MyProfile;
