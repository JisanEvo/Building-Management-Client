import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged,  signInWithEmailAndPassword,   signInWithPopup,   signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase.config";
import { googleProvider } from "../Components/SocialLogin/SocialLogin";
import axios from "axios";
import { getToken } from "firebase/app-check";

export const AuthContext=createContext(null)
const auth=getAuth(app)

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);

const createUser=(email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
}
const signIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  const googleSignIn=()=>{
    setLoading(true);
    return signInWithPopup(auth,googleProvider)
  }

const logOut=()=>{
    setLoading(true);
    return signOut(auth)
}

const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    })
  }
  // get token from server
  const getToken= async email=>{
    const {data}=await axios.post(
      `${import.meta.env.VITE_API_URL}/jwt`,
      {email},
      {withCredentials:true}
    )
    return data
  }
// save user
const saveUser=async user=>{
  const currentUser={
    email: user?.email,
    role:'user',
    status:'Verified'
  }
  const {data}=await axios.put(`${import.meta.env.VITE_API_URL}/user`,currentUser)
  return data
}

useEffect(()=>{
  const unSubscribe=  onAuthStateChanged(auth,currentUser=>{
        setUser(currentUser);
        if(currentUser){
          getToken(currentUser.email)
          saveUser(currentUser)
        }
        // console.log('current user', currentUser)
        setLoading(false);
    })
    return()=>{
        return unSubscribe();
    }
},[])

    const AuthInfo={
        user,
        loading,
        createUser,
        signIn,
        logOut,
        googleSignIn,
        updateUserProfile
    }
    return (

        <AuthContext.Provider value={AuthInfo}>
          {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;