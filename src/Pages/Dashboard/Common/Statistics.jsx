import bg from '../../../../public/Banner/welcomee.jpg'
import useAuth from '../../../Hooks/useAuth';
const Statistics = () => {
    const {user}=useAuth()
    return (
        <div className='h-screen  w-full' >
            <h1>Welcome to Dashboard </h1>
            <img src={bg} alt="" />
            <p className='text-2xl lg:ml-56  ml-24 font-bold'>{user?.displayName.toUpperCase()}</p>
        </div>
    );
};

export default Statistics;