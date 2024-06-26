import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { toast } from 'react-toastify';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getDoc, serverTimestamp, setDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { doc } from 'firebase/firestore';
import { useNavigate } from 'react-router';

export default function OAuth() {
    const navigate = useNavigate()
    async function onGoogleClick() {
        try {
            const auth = getAuth()
            const provider= new GoogleAuthProvider()
            const result = await signInWithPopup(auth, provider)
            const user = result.user
            //check for the user
            const docRef = doc(db, "users", user.uid)

            const docSnap =  await getDoc(docRef)

            if (!docSnap.exists()){
                await setDoc(docRef, {
                    name: user.displayName,
                    email: user.email,
                    timestamp: serverTimestamp() 
                })
            }
            navigate('/');
        } catch (error) {
            toast.error('Could not authorize with Google')
            console.log(error)
        }
    }
    return (
       <button type="button" onClick={onGoogleClick}  className="flex items-center justify-center w-full bg-red-700 rounded text-white px-7 py-3 uppercase text-sm font-medium hover:bg-red-800 active:bg-red-900 shadow-md hover:shadow-lg active:shadow-lg transition duration-150 ease-in-out">
        <FcGoogle className="text-2xl bg-white mr-2 rounded-full" />Continue with Google
        </button>
    )
}