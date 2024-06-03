 import React, { useState } from 'react'
 
 export default function CreateDeal() {
    const [formData, setFormData] = useState({
        brand: "",
        model: "",
        year: 2024
    })

    function onChange() {

    }

    const {brand, model, year} = formData
   return (
    <main className='max-w-md px-2 mx-auto'>
        <h1 className='text-3xl text-center mt-6 font-bold'>Sell your Car</h1>
        <form>
            <p className='text-lg mt-6 font-semibold'>Car Brand </p>
            <input type="text" id='brand' value={brand} onChange={onChange} placeholder='Brand' maxLength={32} minLength={3} required
            className='w-full px-4 py-2 text-lg text-gray-700 bg-white border border-gray-300 rounded transition duration-150
            ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6'/>
            <div className='flex justify-between items-center'>
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
        </form>
    </main>
   )
 }
 