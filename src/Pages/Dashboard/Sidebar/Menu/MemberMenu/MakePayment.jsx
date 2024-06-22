import { useState } from "react";
import CartBody from "../../../../../Components/MyCart/CartBody";
import useCart from "../../../../../Hooks/useCart";
import BookingModal from "../../../../../Components/Modal/PaymentModal";
import useAuth from "../../../../../Hooks/useAuth";

const MakePayment = () => {
    const [isOpen,setIsOpen]=useState(false)

    const [cart ]= useCart();
const singleCart=cart?.map(item=>item)
console.log(singleCart)

    const closeModal=()=>{
        setIsOpen(false)
    }
    const totalPrice=cart?.reduce((total,item)=>total+item.price,0)
    return (
        <div>
            <div className='py-8'>
                <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
                    <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
                        <table className='min-w-full leading-bold'>
                            <thead>
                                <tr>
                                    <th
                                        scope='col'
                                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-bold'
                                    >
                                        image
                                    </th>
                                    <th
                                        scope='col'
                                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-bold'
                                    >
                                        Room No
                                    </th>
                                    <th
                                        scope='col'
                                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-bold'
                                    >
                                        Floor No
                                    </th>

                                    <th
                                        scope='col'
                                        className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-bold'
                                    >
                                        Price
                                    </th>
                                </tr>
                            </thead>
                            <tbody>

                                {cart?.map(item => <CartBody key={item._id} item={item}></CartBody>)}

                            </tbody>

                        </table>

                    </div>
                    <tfoot className="w-full border border-black">
                        <tr className="flex justify-end ml:5  lg:ml-96">
                            <th className="mr-4 text-xl">Total Price :</th>
                            <th className="text-xl">{totalPrice} Tk</th>
                        </tr>
                    </tfoot>
                    <button
                    onClick={()=>setIsOpen(true)}
                    className="btn btn-info ml:5  lg:ml-96 mt-5">Payment Now </button>
                    {/* payment model */}
                    <BookingModal isOpen={isOpen} closeModal={closeModal} bookingInfo={{...cart,price:totalPrice,guest:{name:''}}}></BookingModal>
                </div>
            </div>
        </div>
    );
};

export default MakePayment;