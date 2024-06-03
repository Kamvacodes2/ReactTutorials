import { getAuth, updateProfile } from "firebase/auth"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { doc, updateDoc } from "firebase/firestore";
import { Link } from "react-router-dom";
import { db } from '../firebase';
import { toast } from "react-toastify";
import { IoCarSportSharp } from "react-icons/io5";



export default function Profile() {
    const auth = getAuth()
    const navigate = useNavigate()
    const [changeDetail, setChangeDetail] = useState(false)
    const [formData, setFormData] = useState({
        name: auth.currentUser.displayName,
        email: auth.currentUser.email
    })

    function onLogout() {
        auth.signOut()
        navigate('/')
    }
    const { name, email } = formData

    function onChange(e) {
        setFormData((prevState) => ({
            ...prevState, [e.target.id]: e.target.value
        }))

    }

    async function onSubmit() {
        try {
            if (auth.currentUser.displayName !== name) {
                //update display name in firebase
                await updateProfile(auth.currentUser, {
                    displayName: name
                });
                //update name in firestore
                const docRef = doc(db, 'users', auth.currentUser.uid)
                await updateDoc(docRef, {
                    name
                })
            }
            toast.success('Profile updated successfully')
        } catch (error) {
            toast.error('Something went wrong')
        }
    }
    return (
        <>
            <section className="max-w-6xl mx-auto flex justify-center items-center flex-col">
                <h1 className="text-3xl text-center mt-6 font-bold">My Profile</h1>
                <div className="w-full md:w-[50%] mt-6 px-3">
                    <form action="">
                        {/*Name Input*/}
                        <input type="text" id="name" value={name} disabled={!changeDetail} onChange={onChange} className={`mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out ${changeDetail && "bg-red-200 focus:bg-red-200"}`} />
                        {/*Email Input*/}
                        <input type="email" id="email" value={email} disabled className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out" />
                        <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg">
                            <p className="flex items-center">Do you want to change your name?
                                <span onClick={() => {
                                    changeDetail && onSubmit();
                                    setChangeDetail((prevState) => !prevState)
                                }} className="text-red-600 hover:text-red-800 transition ease-in-out duration-200 ml-1 cursor-pointer"> {changeDetail ? "Apply change" : "Edit"}</span>
                            </p>
                            <p onClick={onLogout} className="text-blue-600 hover:text-blue-800 transition ease-in-out duration-200 ml-1 cursor-pointer">
                                Sign out
                            </p>
                        </div>
                    </form>
                    <button type="submit" className="w-full bg-blue-600 text-white uppercase px-7 py-3 text-sm font-medium rounded shadow-md hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800">
                        <Link to="/create-deal" className="flex justify-center  items-center">
                            <IoCarSportSharp className="mr-2 text-3xl bg-green-400 rounded-full p-1 border-2" />Sell your car
                        </Link>
                    </button>
                </div>
            </section>
        </>
    )
}