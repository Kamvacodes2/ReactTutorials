import AuthForm from "../components/AuthForm";

export default function SignIn() {
    return <AuthForm isSignUp={false} />;
}

















// import { useState } from "react"
// import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
// import { Link } from "react-router-dom";
// import OAuth from "../components/OAuth";

// export default function SignIn() {
//     const [formData, setFormData] = useState({
//         email: '',
//         password: ''
//     });

//     const [showPassword, setShowPassword] = useState(false)

//     const { email, password } = formData;

//     function onChange(e) {
//         setFormData((prevState) => ({
//             ...prevState, [e.target.id]: e.target.value
//         }))
//     }

//     return (
//         <section>
//             <h1 className="text-3xl text-center mt-6 font-bold">Sign In</h1>
//             <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto">
//                 <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
//                     <img src="./images/sign-in.jpg" alt="key" className="w-full rounded-2xl" />
//                 </div>
//                 <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">
//                     <form >
//                         <input className="w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out" type="email" id="email" value={email} onChange={onChange} placeholder="Enter Email" />
//                         <div className="relative mt-6 mb-4" >
//                             <input className="w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out" type={showPassword ? "text" : "password"} id="password" placeholder="Enter password" value={password} onChange={onChange} />
//                             {showPassword ? <AiFillEyeInvisible className="absolute right-3 top-3 text-xl cursor-pointer" onClick={() => setShowPassword((prevState) => !prevState)} /> : <AiFillEye className="absolute right-3 top-3 text-xl cursor-pointer" onClick={() => setShowPassword((prevState) => !prevState)} />}
//                         </div>
//                         <div className="flex justify-between whitespace-nowrap text-sm">
//                             <p className="mb-6">
//                                 Do you have an account? <Link to="/sign-up" className="text-red-500 hover:text-red-700 transition duration-200 ease-in-out">Register</Link>
//                             </p>
//                             <p className="mb-6">
//                                 <Link to="/forgot-password" className="text-blue-500 hover:text-blue-700 transition duration-200 ease-in-out">Forgot password?</Link>
//                             </p>
//                         </div>
//                         <button className="w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-blue-800 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-900" type="submit">Sign in</button>
//                         <div className="my-4 flex items-center">
//                             <div className="flex-grow border-t border-gray-400"></div>
//                             <span className="mx-4 font-semibold text-center">OR</span>
//                             <div className="flex-grow border-t border-gray-400"></div>
//                         </div>
//                         <OAuth/>
//                     </form>
//                 </div>
//             </div>
//         </section>
//     )
// }