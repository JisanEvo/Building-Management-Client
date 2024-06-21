import { MdEmail } from "react-icons/md";
import Loading from "../../../Components/LoadingSpiner/Loading";
import useAuth from "../../../Hooks/useAuth";
import useRole from "../../../Hooks/useRole";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";



const AdminProfile = () => {
    const { user, loading } = useAuth()
    const [role] = useRole()

const axiosSecure = useAxiosSecure()
    //   Fetch all users data
    const {
        data: users = [],
        isLoading,

    } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const { data } = await axiosSecure(`/users`)

            return data

        },

    })
const filterByRole = (role) => users.filter(user => user.role === role);
const members = filterByRole('member');
const use1 = filterByRole('user');
// all room
const { data:room } = useQuery({
    queryKey: ['apartment'],
    queryFn: async () => {
        const { data } = await axiosSecure.get('/apartment')

        return data
    },
})




    if (loading || isLoading) return <Loading></Loading>



    return (
        <div>
             <h1>Admin ami Hoye jabe matha nosto</h1>
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
                    <div className="flex justify-evenly">
                    <p className="flex font-bold justify-center">Total User : {use1?.length}</p>
                    <p className="flex font-bold justify-center">Total Member : {members?.length}</p>
                    </div>
                      <p className="flex font-bold justify-center">Total room :{room?.length}</p>
                </div>

                 <div>
                 </div>




            </div>
        </div>
        </div>
    );
};

export default AdminProfile;