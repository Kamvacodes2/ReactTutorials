import { useEffect } from "react";
import Slider from "../components/Slider";
import { collection, query } from "firebase/firestore";

export default function Home() {
    useEffect(()=>{
        async function fetchUserDeal() {
            const dealsRef = collection(db, 'car-deals')
            const q = query(dealsRef)
        }
        fetchUserDeal()
    }, [])
    return (
        <div>
            <Slider/>
        </div>
    )
}