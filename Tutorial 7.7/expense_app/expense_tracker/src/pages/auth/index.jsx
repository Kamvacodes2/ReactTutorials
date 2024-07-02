import { auth, provider } from "../../config/firebase-config"
import {signInWithPopup} from 'firebase/auth';
import { useNavigate, Navigate } from "react-router-dom";
import { userGetUserInfo } from "../../hooks/useGetUserInfo";
import "./styles.css";

export const Auth = () => {
    const navigate = useNavigate()
    const {isAuth} = userGetUserInfo()

    const signInGoogle = async () =>{
        const results = await signInWithPopup(auth, provider)
        console.log(results);
        const authInfo = {
            userID: results.user.uid,
            name: results.user.displayName,
            profilePhoto: results.user.photoURL,
            isAuth: true
        }
        localStorage.setItem("auth", JSON.stringify(authInfo))
        navigate("/expense-tracker")
    }

    if (isAuth) {
        return <Navigate to='/expense-tracker' />
    }
    return <div className="login-page">
        <p>Sign In With Google</p>
        <button className="login-with-google-btn" onClick={signInGoogle}>Sign In With Google</button>
    </div>
}