import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../providers/AuthProviders";
import { GoogleAuthProvider } from "firebase/auth";
import { useLocation, useNavigate } from "react-router-dom";

export const googleProvider=new GoogleAuthProvider()

const SocialLogin = () => {
    const {googleSignIn}=useContext(AuthContext);
    const navigate=useNavigate()
    const location=useLocation()
    const from=location.state

    const handleGoogle=()=>{
        googleSignIn()
        .then(result=>{
          navigate(from,{replace:true})
        })
    }
    return (
        <div>
            <button onClick={handleGoogle}  aria-label="Login with Google" type="button"
                className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600"
            >
                <FcGoogle className="text-2xl" />
                <p>Login with Google</p>
            </button>
        </div>
    );
};

export default SocialLogin;