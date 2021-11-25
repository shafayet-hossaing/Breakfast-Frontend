import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from '../Firebase/Firebase.init';

// Calling initializeAuthentication Func
initializeAuthentication()

// Getting Auth
const auth = getAuth()

const useAuthProvider = () => {
    const [user, setUser] = useState()
    const [isLoading, setIsLoading] = useState(true)

    // Google SignIn
    const googleSignIn = () =>{
        setIsLoading(true)
        const googleProvider = new GoogleAuthProvider()
        return signInWithPopup(auth, googleProvider)
    }


    // Creating User
    const createUser = (email, password, name) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            setUser(result.user)
            // updateUser(name)
            console.log(result.user);
        }).catch(error => {
            console.log(error.message);
        })
    }



    // Currently Signed In User
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, user => {
            if(user){
                setUser(user)
            }else{
                setUser({})
            }
            setIsLoading(false)
        })
        return () => unsubscribe
    },[])


    // Log-Out User
    const logOut = () => {
        signOut(auth).then(()=>{}).finally(()=>{setIsLoading(false)})
    }


    return {googleSignIn, createUser, logOut, user, setUser, isLoading, setIsLoading}
};

export default useAuthProvider;