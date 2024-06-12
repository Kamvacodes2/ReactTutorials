
import React, { useEffect, useState } from 'react'
import { doc, getDoc } from 'firebase/firestore';
import { useParams } from 'react-router-dom'
import Spinner from '../components/Spinner';
import { db } from '../firebase';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectFade, Autoplay, Navigation, Pagination } from 'swiper';
import 'swiper/css/bundle'

export default function Deal() {
    const params = useParams();
    const [deal, setDeals] = useState(null)
    const [loading, setLoading] = useState(true)
    SwiperCore.use([Autoplay, Navigation, Pagination])
    useEffect(() => {
        async function fetchUserDeal() {
            const docRef = doc(db, 'car-deals', params.dealID)
            const docSnap = await getDoc(docRef)
            if (docSnap.exists()) {
                setDeals(docSnap.data())
                setLoading(false)
            }
        }
        fetchUserDeal();
    }, [params.dealID])
    if (loading) {
        return <Spinner />
    }
    return (
        <main>
            <Swiper slidesPerView={1} navigation pagination={{ type: "progressbar" }}
                effect='fade' modules={[EffectFade]} autoplay={{ delay: 3000 }}>
                {deal.imgUrls.map((url, index) => (
                    <SwiperSlide key={index}>
                        <div className=' relative w-full overflow-hidden h-[300px]'
                            style={{
                                background: `url(${deal.imgUrls[index]}) center no-repeat`,
                                backgroundSize: "cover",
                            }}
                        >
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </main>
    )
}
