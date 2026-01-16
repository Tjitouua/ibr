import { useState } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5";
import { LuPhone } from "react-icons/lu";
import { useNavigate } from "react-router-dom";




const ContactInfoForm = () => {




    
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
                   <div className="px-6 py-10 pb-13 w-full xl:w-2/3 flex flex-col border border-gray-200 items-center text-gray-800 gap-5 rounded-sm bg-white shadow-lg">
           
                       <div className="flex flex-col w-full gap-2">
                       <label className="text-2xl font-bold">Contact Information</label>
                       <label className="text-sm text-gray-500">How can we reach the beneficiary?</label>
                       </div>
           
                        {/* First name & Last Name  */}
                       <div className="w-full flex gap-3 items-center justify-between flex-wrap">
                               <div className="w-full sm:w-[48%] flex flex-col gap-2">
                                   <label>Phone Number *</label>
                                     <div className="flex gap-3 items-center border border-gray-500 rounded-md px-1 focus-within:border-black">
                                        <LuPhone className="text-lg" />
                                        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="+264 XX XXX XXXX" className="w-full h-9 rounded-md outline-none border-none focus:ring-0" />
                                     </div>
           
                                   {emailError && <p className="text-red-600 text-xs">{emailError}</p>}
                               </div>
           
                               <div className="w-full sm:w-[48%] flex flex-col gap-2">
                                   <label>Email Address *</label>
                                     <div className="flex gap-3 items-center border border-gray-500 rounded-md px-1 focus-within:border-black">
                                        <HiOutlineMail className="text-lg" />
                                        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email@example.com" className="w-full h-9 rounded-md outline-none border-none focus:ring-0" />
                                     </div>
           
                                   {emailError && <p className="text-red-600 text-xs">{emailError}</p>}
                               </div>
                       </div>
           
           
           
           
                       {/* Physical Address  */}
                       <div className="w-full flex gap-3 items-center justify-between flex-wrap">
                               <div className="w-full flex flex-col gap-2">
                                   <label>Physical Address *</label>
                                     <div className="flex gap-3 py-2 border border-gray-500 rounded-md px-1 focus-within:border-black">
                                        <IoLocationOutline className="text-lg" />
                                        <textarea  value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter full address" className="w-full h-20 rounded-md outline-none border-none focus:ring-0"/>
                                     </div>
           
                                   {emailError && <p className="text-red-600 text-xs">{emailError}</p>}
                               </div>
                       </div>
           
                    </div>
           
           
           
      );
}

export default ContactInfoForm;