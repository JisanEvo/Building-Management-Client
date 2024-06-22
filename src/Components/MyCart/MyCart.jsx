import { FaDollarSign } from "react-icons/fa6";
import useCart from "../../Hooks/useCart";
import CartBody from "./CartBody";
import useRole from "../../Hooks/useRole";
import { useState } from "react";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import HostModal from "../Modal/HostRequestModal";
import { Navigate, useNavigate } from "react-router-dom";

const MyCart = () => {
    const { cart } = useCart();
    const [role] = useRole();
    const axiosSecure = useAxiosSecure();
    // const [isModalOpen, setIsModalOpen] = useState(false);
    const { user } = useAuth()
const navigate=useNavigate()
    const [isModalOpen, setIsModalOpen] = useState(false)
    const closeModal = () => {
        setIsModalOpen(false)
    }


    const modalHandler = async () => {
        console.log('I want to be a host');
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
    return (

        <div className='container mx-auto px-4 sm:px-8'>

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
                </div>
            </div>
            <div className="flex justify-center">
            {(role === 'admin' || role === 'member') ? (

                 <button
                 onClick={() => navigate('/dashboard/makePayment')}
                   className="btn btn-info justify-end">Make Payment</button>

            ) : (

            <div>

                                      <button
                        onClick={() => setIsModalOpen(true)}
                        className='disabled:cursor-not-allowed cursor-pointer hover:bg-neutral-100 py-3 px-4 text-sm font-semibold rounded-full transition btn btn-warning text-center'
                    >
                        Request Member
                    </button>
                    <br />
                    <span className="text-red-600 mt-2" >Only Member & Admin Can Payment.</span>
            </div>
                )
            }
                <HostModal isOpen={isModalOpen} closeModal={closeModal} modalHandler={modalHandler} />



        </div>
        </div>
    );
};

export default MyCart;