import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import useRole from "../../Hooks/useRole";
import { MdEmail } from "react-icons/md";
import Loading from "../../Components/LoadingSpiner/Loading";


const MyProfile = () => {
    const { user, loading } = useContext(AuthContext);
    const [role, isLoading] = useRole()
    if (loading || isLoading) return <Loading></Loading>
    return (

        <div className="max-w-2xl py-5  justify-center items-center   overflow-hidden  rounded-lg shadow-md  bg-red-200">
            <div className="flex justify-center items-center">
                <img className="cover w-64 h-64 rounded-full ring ring-green-500" src={user?.photoURL} alt="Article" />
            </div>
            <div>

                <div className="mt-4">
                    <h1 className="font-bold justify-center flex">Name:{user?.displayName}</h1>
                    <p className="flex justify-center items-center font-bold"><MdEmail /> :<span className="ml-2">{user?.email}</span>
                    </p>
                    <p className="flex font-bold justify-center">Role:  :{role}
                    </p>
                </div>






            </div>
        </div>
    );
};

export default MyProfile;
