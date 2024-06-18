import { Link } from "react-router-dom";

const ApartCard = ({ item }) => {
    return (
        <div>
            <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto py-10">
                <div className="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md bg-[url('${item.apartmentImage}')]" style={{ backgroundImage: `url(${item.apartmentImage})` }}></div>

                <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
                    <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">{item.name}</h3>

                    <div className="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
                        <span className="font-bold text-gray-800 dark:text-gray-200">${item.rent}</span>
                        <div className="badge badge-warning  text-white  text-bold p-2 ">Floor No:  {item.floorNo}</div>

                    </div>

                </div>
                <div className="card w-96 bg-base-100 shadow-xl -mt-0">
                    <div className="card-body">
                        <h2 className="card-title text-center items-center ml-16"> Apartment No: {item.apartmentNo}</h2>
                        <p className="text-bold text-xl ml-24">Block Name:   {item.blockName}</p>
                        <Link to={`/room/${item._id}`} className="card-actions  ml-24">
                            <button className="btn btn-warning">Agreement</button>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ApartCard;