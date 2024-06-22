
import { useNavigate, useParams } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import useCart from "../../Hooks/useCart";

const RoomDetails = () => {

    const axiosSecure = useAxiosSecure()
    const { id } = useParams();
     const {user}=useAuth();
  const navigate=useNavigate()
  const{refetch}=useCart()
    const { data:room={}, isLoading } = useQuery({
        queryKey: ['room',id],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/room/${id}`)
            // console.log(data)
            return data
        },
    })
    // console.log(room)
  const handleAdd=apart=>{
    // console.log(apart)
    if(user && user?.email){
 const cartItem={
    roomId:apart?._id,
    email:user?.email,
    image:apart?.apartmentImage,
    floor:apart.floorNo,
    block:apart.blockName,
    price:apart.rent,
  roomNo:apart.apartmentNo
 }
   axiosSecure.post('/carts',cartItem)
   .then(res=>{
    // console.log(res.data)
    if(res.data.insertedId){
        Swal.fire({

            icon: "success",
            title: "Congrats!!  Successfully Added ",
            showConfirmButton: false,
            timer: 2000
          });
          navigate('/myCart')
          refetch()
    }
   })
    }
    else{
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Go to Login Page Please!",
          });
    }
  }


    if (isLoading) return
    <div>
        <span className="loading loading-spinner loading-xs"></span>
        <span className="loading loading-spinner loading-sm"></span>
        <span className="loading loading-spinner loading-md"></span>
        <span className="loading loading-spinner loading-lg"></span>
    </div>

    return (
        <div className="flex justify-center items-center min-h-screen px-4"
            style={{ backgroundImage: `url(${room.apartmentImage})`, backgroundAttachment: 'fixed', backgroundSize: 'cover' }}

         >
            <div className="max-w-lg p-4 shadow-md bg-red-200 dark:text-gray-800">
                <div className="flex justify-between pb-4 border-bottom">
                    <div className="flex items-center">
                    </div>
                </div>
                <div className="space-y-4">
                    <div className="space-y-2">
                        {room.apartmentImage && (
                            <img src={room.apartmentImage} alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                        )}
                        <div className="flex items-center text-xs">

                        </div>
                    </div>
                    <div className="space-y-2">
                        <a rel="noopener noreferrer" href="#" className="block">
                            <h3 className="text-xl text-center   font-semibold dark:text-violet-600">{room.name}</h3>
                        </a>
                        <div className="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
                            <span className="font-bold text-gray-800 dark:text-gray-200">Price  :{room.rent}$</span>
                            <div className="badge badge-warning text-white text-bold p-2">Floor No: {room.floorNo}</div>
                        </div>
                    </div>
                    <div className="card w-96  ml-6 shadow-xl -mt-0 justify-center">
                        <div className="card-body ">
                            <h2 className="card-title text-center items-center ml-16">Apartment No: {room.apartmentNo}</h2>
                            <p className="text-bold text-xl ml-24">Block Name: {room.blockName}</p>
                            <button
                            onClick={()=>handleAdd(room)}

                            className="btn btn-warning justify-center items-center flex">Add to cart</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoomDetails;
