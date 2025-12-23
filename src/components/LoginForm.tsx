import React, { useState } from 'react';
import { FaRegUser } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { MdLockOutline } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';


const LoginForm = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");


    const handleLogin = () => {

        let valid = true;

         setEmailError("");
         setPasswordError("");

         if (!email) {
            setEmailError("Please enter your email.");
            valid=false;
         }

         if (!password) {
           setPasswordError("Please enter your password.");
           valid=false;
         }

         if (!valid) return;

         navigate('/dashboard')
    }



    return (
        <div className="min-h-screen py-13 w-full flex justify-center items-center">
                    
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
               <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Username" className="w-full h-9 rounded-md outline-none border-none focus:ring-0" />
               </div>

               {emailError && <p className="text-red-600 text-xs">{emailError}</p>}

               {/* Password Div  */}
              <label>Password</label>
               <div className="flex gap-3 items-center border border-gray-500 rounded-md px-1 focus-within:border-black">
                <MdLockOutline className="text-lg" />
               <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="w-full h-9 rounded-md outline-none border-none focus:ring-0" />
               </div>

               {passwordError && <p className="text-red-600 text-xs">{passwordError}</p>}

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
               <button onClick={handleLogin} className="rounded-md flex 
               items-center justify-center bg-blue-500
                w-full py-2 text-white cursor-pointer 
                hover:bg-transparent hover:text-black hover:border hover:bg-gray-500">Login</button>

                <label className="text-[12px] text-gray-500">Don't have An Account? <Link to="#" className="text-blue-950 hover:underline">Register Now.</Link></label>
        </div>

    </div>
    );
}

export default LoginForm;