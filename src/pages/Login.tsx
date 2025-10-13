import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { FaRegUser } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { MdLockOutline } from "react-icons/md";
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="w-full flex flex-col px-7 xl:px-10">
            <Header />
            <div className="min-h-100 py-13 w-full flex justify-center items-center">
                    
                <div className="px-6 py-15 flex flex-col border border-gray-200 items-center text-gray-800 gap-5 rounded-sm bg-white shadow-lg">
                    {/* User icon  */}
                    <div className="w-15 h-15 rounded-full bg-gray-200 flex justify-center items-center">
                       <FaRegUser className="text-2xl" />
                    </div>

                    {/* Titles  */}
                    <div className="flex flex-col items-center gap-2">
                    <label className="text-2xl font-bold">Welcome Back</label>
                    <label className="text-sm text-gray-500">Sign in to access your IBR account</label>
                    </div>

                    {/* Username and Password div  */}
                    <div className="flex text-sm gap-2 text-gray-500 w-full flex-col">
                        {/* Email Div  */}
                       <label>Email Address</label>
                       <div className="flex gap-3 items-center border border-gray-500 rounded-md px-1 focus-within:border-black">
                        <MdOutlineEmail className="text-lg" />
                       <input type="text" placeholder="Username" className="w-full h-9 rounded-md outline-none border-none focus:ring-0" />
                       </div>

                       {/* Password Div  */}
                      <label>Password</label>
                       <div className="flex gap-3 items-center border border-gray-500 rounded-md px-1 focus-within:border-black">
                        <MdLockOutline className="text-lg" />
                       <input type="text" placeholder="Password" className="w-full h-9 rounded-md outline-none border-none focus:ring-0" />
                       </div>

                       {/* Forgot Password  */}
                       <div className="w-full flex gap-20 justify-between items-center">
                           {/* Remember Me  */}
                           <div className="flex gap-1 items-center">
                              <input type="checkbox" />
                              <label className="text-[12px]">Remember Me</label>
                           </div>
                           {/* Forgot Password  */}
                           <div className="">  
                              <Link to="#" className="text-blue-950 text-[12px] hover:underline">Forgot Password?</Link>
                           </div>
                       </div>

                    </div>
                    
                       {/* Button  */}
                       <button className="rounded-md flex 
                       items-center justify-center bg-blue-500
                        w-full py-2 text-white cursor-pointer 
                        hover:bg-transparent hover:text-black hover:border hover:bg-gray-500">Login</button>

                        <label className="text-[12px] text-gray-500">Don't have An Account? <Link to="#" className="text-blue-950 hover:underline">Register Now.</Link></label>
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default Login