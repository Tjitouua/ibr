import { useState } from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import { LiaAddressCardSolid } from "react-icons/lia";
import { LuCalendarFold, LuUserRound } from "react-icons/lu";
import { useNavigate } from "react-router-dom";




const PersonalInfoForms = () => {




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
                        <label className="text-2xl font-bold">Personal Information</label>
                        <label className="text-sm text-gray-500">Enter the beneficiary's personal details</label>
                        </div>
            
                         {/* First name & Last Name  */}
                        <div className="w-full flex gap-3 items-center justify-between flex-wrap">
                                <div className="w-full sm:w-[48%] flex flex-col gap-2">
                                    <label>First name *</label>
                                      <div className="flex gap-3 items-center border border-gray-500 rounded-md px-1 focus-within:border-black">
                                         <LuUserRound className="text-lg" />
                                         <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter first name" className="w-full h-9 rounded-md outline-none border-none focus:ring-0" />
                                      </div>
            
                                    {emailError && <p className="text-red-600 text-xs">{emailError}</p>}
                                </div>
            
                                <div className="w-full sm:w-[48%] flex flex-col gap-2">
                                    <label>Last Name *</label>
                                      <div className="flex gap-3 items-center border border-gray-500 rounded-md px-1 focus-within:border-black">
                                         <LuUserRound className="text-lg" />
                                         <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter last name" className="w-full h-9 rounded-md outline-none border-none focus:ring-0" />
                                      </div>
            
                                    {emailError && <p className="text-red-600 text-xs">{emailError}</p>}
                                </div>
                        </div>
            
            
                        
                         {/* ID Nummber & DOB  */}
                        <div className="w-full flex gap-3 items-center justify-between flex-wrap">
                                <div className="w-full sm:w-[48%] flex flex-col gap-2">
                                    <label>ID Number *</label>
                                      <div className="flex gap-3 items-center border border-gray-500 rounded-md px-1 focus-within:border-black">
                                         <LiaAddressCardSolid className="text-lg" />
                                         <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="e.g., 45768723456" className="w-full h-9 rounded-md outline-none border-none focus:ring-0" />
                                      </div>
            
                                    {emailError && <p className="text-red-600 text-xs">{emailError}</p>}
                                </div>
            
                                <div className="w-full sm:w-[48%] flex flex-col gap-2">
                                    <label>Date of Birth *</label>
                                      <div className="flex gap-3 items-center border border-gray-500 rounded-md px-1 focus-within:border-black">
                                         <LuCalendarFold className="text-lg" />
                                         <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="dd/mm/yyyy" className="w-full h-9 rounded-md outline-none border-none focus:ring-0" />
                                      </div>
            
                                    {emailError && <p className="text-red-600 text-xs">{emailError}</p>}
                                </div>
                        </div>
            
            
                         {/* Gender and Marital Status */}
                        <div className="w-full flex gap-3 items-center justify-between flex-wrap">
                                <div className="w-full sm:w-[48%] flex flex-col gap-2">
                                   <label>Gender *</label>
                                   <div className="flex gap-3 items-center border border-gray-500 rounded-md px-1 focus-within:border-black">
                                      <LiaAddressCardSolid className="text-lg" />
            
                                      <select
                                         value={email}
                                         onChange={(e) => setEmail(e.target.value)}
                                         className="w-full h-9 rounded-md outline-none border-none bg-transparent focus:ring-0"
                                       >
                                            <option value="">Select Gender</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                      </select>
                                   </div>
            
                                   {emailError && <p className="text-red-600 text-xs">{emailError}</p>}
            
                               </div>
            
            
                                <div className="w-full sm:w-[48%] flex flex-col gap-2">
                                   <label>Marital Status *</label>
                                   <div className="flex gap-3 items-center border border-gray-500 rounded-md px-1 focus-within:border-black">
                                      <IoMdHeartEmpty className="text-lg" />
            
                                      <select
                                         value={email}
                                         onChange={(e) => setEmail(e.target.value)}
                                         className="w-full h-9 rounded-md outline-none border-none bg-transparent focus:ring-0"
                                       >
                                            <option value="">Single</option>
                                            <option value="married">Married</option>
                                            <option value="divorced">Divorced</option>
                                            <option value="widowed">Widowed</option>
                                      </select>
                                   </div>
            
                                   {emailError && <p className="text-red-600 text-xs">{emailError}</p>}
            
                               </div>
            
                        </div>
            
                       
                        
                            
                    </div>
     );
}

export default PersonalInfoForms;