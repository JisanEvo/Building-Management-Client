
import { FaDollarSign } from 'react-icons/fa';

const CartBody = ({ item }) => {
    // console.log(item)
    return (
        <tr>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-20 h-20">
                            <img src={item.image} />
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='font-bold'>{item.roomNo
                }</p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='font-bold'>{item.floor}</p>
            </td>

            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>

                {/* Update User Modal */}
                <p className='font-bold flex items-center'><FaDollarSign className='mr-1 '></FaDollarSign> {item.price}</p>
            </td>
        </tr>
    );
};

export default CartBody;