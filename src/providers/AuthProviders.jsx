import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged,  signInWithEmailAndPassword,   signInWithPopup,   signOut } from "firebase/auth";
import { app } from "../firebase/firebase.config";
import { googleProvider } from "../Components/SocialLogin/SocialLogin";

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
useEffect(()=>{
  const unSubscribe=  onAuthStateChanged(auth,currentUser=>{
        setUser(currentUser);
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
        googleSignIn
    }
    return (

        <AuthContext.Provider value={AuthInfo}>
          {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;