import React, { useState } from 'react'

export default function CreateDeal() {
    const [formData, setFormData] = useState({
        brand: "",
        model: "",
        year: new Date().getFullYear(),
        type: "automatic",
        kms: "",
        description: "",
        price: 0
    })

    function onChange() {

    }

    const { brand, model, year, type, kms, description, price } = formData
    return (
        <main className='max-w-md px-2 mx-auto'>
            <h1 className='text-3xl text-center mt-6 font-bold'>Sell your Car</h1>
            <form>
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
