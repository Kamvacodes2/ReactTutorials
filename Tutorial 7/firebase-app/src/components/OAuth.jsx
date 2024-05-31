import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { toast } from 'react-toastify';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export default function OAuth() {
    async function onGoogleClick() {
        try {
            const auth = getAuth()
            const provider= new GoogleAuthProvider()
            const result = await signInWithPopup(auth, provider)
            const user = result.user
            console.log(user);
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