import { useEffect } from "react";
import Slider from "../components/Slider";
import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";

export default function Home() {
    useEffect(()=>{
        async function fetchUserDeal() {
            const dealsRef = collection(db, 'car-deals')
            const q = query(dealsRef, orderBy('timestamp', 'desc'), limit(5))
            const querySnap = await getDocs(q)
            let deals = []
            querySnap.forEach((doc)=>{
                deals.push(doc)
            })
        }
        fetchUserDeal()
    }, [])
    return (
        <div>
            <Slider/>
        </div>
    )
}