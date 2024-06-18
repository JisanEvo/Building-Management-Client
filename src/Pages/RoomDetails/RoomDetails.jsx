// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// const RoomDetails = () => {
//     const {id}=useParams()
//    const [room,setRoom]=useState({})
//     useEffect(() => {
//         fetch(`http://localhost:5000/room/${id}`)
//             .then(res => res.json())
//             .then(data=>{
//                 setRoom(data)
//             });
//     }, [id])
//     console.log(room)
//     return (
//         <div className="">
//             <div className="max-w-lg p-4 shadow-md dark:bg-gray-50 dark:text-gray-800">
//                 <div className="flex justify-between pb-4 border-bottom">
//                     <div className="flex items-center">

//                     </div>

//                 </div>
//                 <div className="space-y-4">
//                     <div className="space-y-2">
//                         <img src={room.apartmentImage}alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
//                         <div className="flex items-center text-xs">
//                             <span>6 min ago</span>
//                         </div>
//                     </div>
//                     <div className="space-y-2">
//                         <a rel="noopener noreferrer" href="#" className="block">
//                             <h3 className="text-xl font-semibold dark:text-violet-600">{room.name}</h3>
//                         </a>

//                     <div className="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
//                         <span className="font-bold text-gray-800 dark:text-gray-200">${room.rent}</span>
//                         <div className="badge badge-warning  text-white  text-bold p-2 ">Floor No:  {room.floorNo}</div>

//                     </div>

//                 </div>
//                 <div className="card w-96 bg-base-100 shadow-xl -mt-0">
//                     <div className="card-body">
//                         <h2 className="card-title text-center items-center ml-16"> Apartment No: {room.apartmentNo}</h2>
//                         <p className="text-bold text-xl ml-24">Block Name:   {room.blockName}</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default RoomDetails;

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RoomDetails = () => {
    const { id } = useParams();
    const [room, setRoom] = useState({});
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`http://localhost:5000/room/${id}`)
            .then(res => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then(data => {
                setRoom(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className="flex justify-center items-center min-h-screen"
        style={{ backgroundImage: `url(${room.apartmentImage})` ,backgroundAttachment: 'fixed',backgroundSize: 'cover'} }

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
                            <button className="btn btn-warning justify-center items-center flex">Payment Now</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoomDetails;
