import { useEffect, useState } from "react";
import ApartCard from "./ApartCard";
import bg from "../../../../public/Banner/bgh.jpg"
const Apartment = () => {
    const [apart, setApart] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/apartment')
            .then(res => res.json())
            .then(data => setApart(data))
        console.log(apart)
    }, [apart])

    return (

        <div className=""> <p className="text-3xl text-red-500 text-center py-10">Our  Luxury Appart</p>
            <div className="grid   lg: grid-cols-3  grid-cols-1p-10 bg-red-300" style={{ backgroundImage: `url(${bg})` ,backgroundAttachment: 'fixed',backgroundSize: 'cover'} }   >
                {
                    apart.map(item => <ApartCard key={item.floorNo} item={item} ></ApartCard>)
                }
            </div>
        </div>
    );
};

export default Apartment;