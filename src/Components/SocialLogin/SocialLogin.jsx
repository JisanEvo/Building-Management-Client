// import { useContext } from "react";
// import { FcGoogle } from "react-icons/fc";
// import { AuthContext } from "../../providers/AuthProviders";
// import { GoogleAuthProvider } from "firebase/auth";
// import { useLocation, useNavigate } from "react-router-dom";
// import Swal from "sweetalert2"

// export const googleProvider=new GoogleAuthProvider()

// const SocialLogin = () => {
//     const {googleSignIn}=useContext(AuthContext);
//     const navigate=useNavigate()
//     const location=useLocation()
//     const form=location.state

//     const handleGoogleSign = async () => {
//         try {
//             await googleSignIn();
//             Swal.fire({
//                 icon: "success",
//                 title: "Great",
//                 text: " Log in Sucessfull",

//             });
//             navigate(form)
//         }
//         catch (err) {
//             Swal.fire({
//                 icon: "error",
//                 title: "Oops...",
//                 text: "Something is Wrong"

//             });
//         }

//     }

//     return (
//         <div>
//             <button onClick={handleGoogleSign}  aria-label="Login with Google" type="button"
//                 className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600"
//             >
//                 <FcGoogle className="text-2xl" />
//                 <p>Login with Google</p>
//             </button>
//         </div>
//     );
// };

// export default SocialLogin;


import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../providers/AuthProviders";
import { GoogleAuthProvider } from "firebase/auth";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export const googleProvider = new GoogleAuthProvider();

const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const form = location.state?.from?.pathname || "/";  // Default to home if no state

    const handleGoogleSign = async () => {
        try {
            await googleSignIn();
            Swal.fire({
                icon: "success",
                title: "Great",
                text: "Log in Successful",
            });
            console.log("Navigating to:", form);  // Log the path
            navigate(form);
        } catch (err) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong",
            });
            console.error("Google sign-in error:", err);  // Log the error for debugging
        }
    };

    return (
        <div>
            <button onClick={handleGoogleSign} aria-label="Login with Google" type="button"
                className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600"
            >
                <FcGoogle className="text-2xl" />
                <p>Login with Google</p>
            </button>
        </div>
    );
};

export default SocialLogin;
