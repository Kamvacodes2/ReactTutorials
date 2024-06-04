import React, { useState } from 'react'
import Spinner from '../components/Spinner';
import { toast } from 'react-toastify';
import { getStorage, ref, uploadBytesResumable } from "firebase/storage";
import { getAuth } from 'firebase/auth';
import { v4 as uuidv4 } from 'uuid';

export default function CreateDeal() {
    const auth = getAuth
    const [formData, setFormData] = useState({
        brand: "",
        model: "",
        year: new Date().getFullYear(),
        type: "automatic",
        kms: "",
        description: "",
        price: 0,
        images: {}
    })
    const [loading, setLoading] = useState(false);

    function onChange(e) {
        let boolean = null;
        if (e.target.value === "true") {
            boolean = true;
        }
        if (e.target.value === "false") {
            boolean = false;
        }
        // This is meant for file uploads
        if (e.target.files) {
            setFormData((prevState) => ({
                ...prevState,
                images: e.target.files
            }))
        }
        //For text or booleans or numbers
        if (!e.target.files) {
            setFormData((prevState) => ({
                ...prevState, [e.target.id]: boolean ?? e.target.value
            }))
        }
    }

    async function onSubmit(e) {
        e.preventDefault()
        setLoading(true)
        if (images.length > 6) {
            setLoading(false)
            toast.error('Maximum 6 images allowed');
            return;
        }

        async function storeImage(image) {
            return new Promise((res, reject) => {
                const storage = getStorage()
                const filename = `${auth.currentUser.uid}-${image.name}-${uuidv4()}`
                const storageRef = ref(storage, filename)
                const uploadTask = uploadBytesResumable(storageRef, image);
                // Listen for state changes, errors, and completion of the upload.
                uploadTask.on('state_changed',
                    (snapshot) => {
                        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                        console.log('Upload is ' + progress + '% done');
                        switch (snapshot.state) {
                            case 'paused':
                                console.log('Upload is paused');
                                break;
                            case 'running':
                                console.log('Upload is running');
                                break;
                        }
                    },
                    (error) => {
                        // A full list of error codes is available at
                        // https://firebase.google.com/docs/storage/web/handle-errors
                        switch (error.code) {
                            case 'storage/unauthorized':
                                // User doesn't have permission to access the object
                                break;
                            case 'storage/canceled':
                                // User canceled the upload
                                break;

                            // ...

                            case 'storage/unknown':
                                // Unknown error occurred, inspect error.serverResponse
                                break;
                        }
                    })
                }
        )}

        const imgUrls = await Promise.all([...images].map((image) => storeImage(image)))
            .catch((error) => {
                setLoading(false)
                toast.error('Images not uploaded');
                return;
            })
    }
    if (loading) {
        return <Spinner />
    }
    const { brand, model, year, type, kms, description, price, images } = formData
    return (
        <main className='max-w-md px-2 mx-auto'>
            <h1 className='text-3xl text-center mt-6 font-bold'>Sell your Car</h1>
            <form onSubmit={onSubmit}>
                <p className='text-lg mt-6 font-semibold'>Car Brand </p>
                <input type="text" id='brand' value={brand} onChange={onChange} placeholder='Brand' maxLength={32} minLength={3} required
                    className='w-full px-4 py-2 text-lg text-gray-700 bg-white border border-gray-300 rounded transition duration-150
            ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6'/>
                <div className='flex space-x-6 items-center mb-6  '>
                    <div>
                        <p className='text-lg font-semibold'>
                            Model
                        </p>
                        <input type="text" id='model' value={model} onChange={onChange} required
                            className='w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded  transition duration-150 ease-in-out focus:text-gray-700
                    focus:border-slate-600'/>
                    </div>
                    <div>
                        <p className='text-lg font-semibold'>
                            Year
                        </p>
                        <input type="number" id='year' value={year} onChange={onChange} required className='w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded  transition duration-150 ease-in-out focus:text-gray-700
                    focus:border-slate-600'/>
                    </div>
                </div>
                <p className='text-lg mt-6 font-semibold'>Manual/Automatic</p>
                <div className='flex'>
                    <button type='button' id='type' value="manual" onClick={onChange} className={`mr-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded
                hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${type === "automatic" ?
                            "bg-white text-black" : "bg-slate-600 text-white"}`}>Manual
                    </button>
                    <button type='button' id='type' value="automatic" onClick={onChange} className={`mr-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded
                hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${type === "manual" ?
                            "bg-white text-black" : "bg-slate-600 text-white"}`}>Automatic
                    </button>
                </div>
                <p className='text-lg mt-6 font-semibold'>Total kilometres </p>
                <input type="text" id='kms' value={kms} onChange={onChange} placeholder='Kms' required
                    className='w-full px-4 py-2 text-lg text-gray-700 bg-white border border-gray-300 rounded transition duration-150
            ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6'/>
                <p className='text-lg mt-6 font-semibold'>Vehicle description </p>
                <textarea type="text" id='description' value={description} onChange={onChange} placeholder='Description' required
                    className='w-full px-4 py-2 text-lg text-gray-700 bg-white border border-gray-300 rounded transition duration-150
            ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6'/>
                <div className='mb-6'>
                    <div className='text-lg font-semibold'>
                        <p>Price</p>
                        <input type="number" id='price' value={price} onChange={onChange} min={5000} max={20000000} required className='w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded 
                    transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 text-center' />
                    </div>
                </div>
                <div className='mb-6'>
                    <p className='text-lg font-semibold'>Images</p>
                    <p className='text-gray-600'>The first image will be the cover (max 6)</p>
                    <input type="file" id="images" onChange={onChange} accept='.jpg, .png,.jpeg' multiple required
                        className='w-full px-3 py-1.5 text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out
                focus:bg-white focus:border-slate-600'/>
                </div>
                <button type='submit' className='mb-6 w-full px-7 py-3 bg-blue-600 text-white font-medium text-sm uppercase
            rounded shadow-md  hover:bg-blue-800 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg active:bg-blue-800
            transition duration-150 ease-in-out'>Create Offer</button>
            </form>
        </main>
    )
}
