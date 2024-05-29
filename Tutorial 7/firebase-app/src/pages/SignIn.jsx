import { useState } from "react"

export default function SignIn() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const {email, password} = formData;

    function onChange(e) {
        setFormData((prevState) => ({
            ...prevState, [e.target.id]: e.target.value
        }))
    }

    return (
        <section>
            <h1 className="text-3xl text-center mt-6 font-bold">Sign In</h1>
            <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto">
                <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
                    <img src="./images/sign-in.jpg" alt="key"  className="w-full rounded-2xl"/>
                </div>
                <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">
                    <form > 
                        <input className="w-full" type="email" id="email" value={email} onChange={onChange} placeholder="Enter Email"/>
                    </form>
                </div>
            </div>
        </section>
    )
}