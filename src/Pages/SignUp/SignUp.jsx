import { NavLink, Navigate, useNavigate } from "react-router-dom";
import bg from "../../../public/Banner/reg.jpg"
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import Swal from "sweetalert2";

const SignUp = () => {
    // const handleSign=event=>{
    //     event.preventDefault();
    //     const from=event.target;
    //     const email=from.email.value;
    //     const password=from.password.value;
    //     console.log(email,password)
    //  }
  const navigate=useNavigate()
    const { createUser } = useContext(AuthContext);
    const handleSignUp = async e => {

        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const pass = form.password.value;
        const photo = form.image.files[0];
        const email = form.email.value;
        console.log(name, photo, email,pass)
        try {
            const result = await createUser(email, pass)
            console.log(result)

            Swal.fire({

                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500
              });
              navigate('/')

        } catch (err) {
            console.log(err)
            Swal.fire({
                icon: "error",
                title: "Alass !!",
                text: "Something Went Wrong",

            });
        }
    }
    return (




        <div className="flex justify-center items-center h-screen" style={{ backgroundImage: `url(${bg})`, backgroundAttachment: 'fixed', backgroundSize: 'cover' }}>
            <div className="w-full max-w-md p-8 space-y-3 rounded-xl   dark:bg-gray-50 dark:text-gray-800">
                <h1 className="text-2xl font-bold text-center text-white">Sign Up</h1>
                <form onSubmit={handleSignUp}   noValidate="" action="" className="space-y-6">
                    <div className="space-y-1 text-sm">
                        <label htmlFor="username" className="block text-xl  text-white">Username : </label>
                        <input type="text" name="name" id="username" placeholder="Username" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                    </div>

                    <div className="space-y-1 text-sm">
                        <label htmlFor="username" className="block text-xl  text-white">Username : </label>
                        <input type="email" name="email" id="username" placeholder="Email" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                    </div>
                    <div className="space-y-1 text-sm ">
                        <label htmlFor="password" className="block text-xl  text-white">Password</label>
                        <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                        <div className="flex justify-end text-xs dark:text-gray-600">
                        </div>
                    </div>

                    <div className='mt-4'>
                        <label
                            className='block mb-2 text-sm font-medium text-gray-600 '
                            htmlFor='photo'
                        >
                            Choose Your Profile
                        </label>
                        <input
                            id='photo'
                            autoComplete='photo'
                            name='image'
                            className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                            type='file'
                        />
                    </div>


                    <button   className="block btn btn-warning  w-full p-3 text-center rounded-sm text-black  dark:bg-violet-600 "  >Sign Up</button>
                </form>
                <div className="flex items-center justify-center space-x-1">

                    <p className="text-xs text-center sm:px-6 text-white">Already have an account?
                        <NavLink to="/login"> <span className=" btn btn-link ">Log in</span></NavLink>
                    </p>
                </div>




            </div>

        </div>

    );
};

export default SignUp;