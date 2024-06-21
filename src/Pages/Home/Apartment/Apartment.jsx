
import ApartCard from "./ApartCard";
import bg from "../../../../public/Banner/bgh.jpg"
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
const Apartment = () => {
    const axiosSecure = useAxiosSecure()


    const { data, isLoading } = useQuery({
        queryKey: ['apartment'],
        queryFn: async () => {
            const { data } = await axiosSecure.get('/apartment')

            return data
        },
    })
   



    if (isLoading) return
    <div>
        <span className="loading loading-spinner loading-xs"></span>
        <span className="loading loading-spinner loading-sm"></span>
        <span className="loading loading-spinner loading-md"></span>
        <span className="loading loading-spinner loading-lg"></span>
        </div>

    return (

        <div className=""> <p className="text-3xl text-red-500 text-center py-10">Our  Luxury Appart</p>
            <div className="grid   lg: grid-cols-3  grid-cols-1p-10 bg-red-300" style={{ backgroundImage: `url(${bg})`, backgroundAttachment: 'fixed', backgroundSize: 'cover' }}   >
                {
                    data.map(item => <ApartCard key={item.floorNo} item={item} ></ApartCard>)
                }
            </div>
        </div>
    );
};

export default Apartment;