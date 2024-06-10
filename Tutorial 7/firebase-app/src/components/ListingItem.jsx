import React from 'react';
import { Link } from "react-router-dom"
import Moment from 'react-moment';

export default function ListingItem({ deal, id }) {
    return (
        <li className=' relative bg-white flex flex-col justify-between items-center shadow-md hover:shadow-xl rounded-md overflow-hidden
        transition-shadow duration-150'>
            <Link to={`/category/${deal.type}/${id}`}>
                <img className='h-[170px] w-full object-cover hover:scale-150 transition-scale duration-200 ease-in'
                    loading='lazy' src={deal.imgUrls[0]} alt="" />
                <Moment className='absolute top-2 left-2 bg-[#3377cc] text-white uppercase text-xs font-semibold rounded-md
            px-2 py-1 shadow-lg' fromNow>
                    {deal.timestamp?.toDate()}
                </Moment>
                <div className='w-full p-[10px]' >
                    <p className='font-semibold m-0 text-xl truncate'>{deal.brand}</p>
                    <p className='font-bold uppercase'>{deal.type}</p>
                    <p>{`R ${deal.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}</p>
                    <div>
                        <p className='font-bold text-xs'>{`Total kms: ${deal.kms}`}</p>
                    </div>
                </div>
            </Link>
        </li>
    )
}
