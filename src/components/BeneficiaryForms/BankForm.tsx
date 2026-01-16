import { useState } from "react";
import { HiMiniHashtag } from "react-icons/hi2";
import { RiBankCardLine, RiBankLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";





const BankForm = () => {


        
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
                      <label className="text-2xl font-bold">Bank Details</label>
                      <label className="text-sm text-gray-500">Payment information for grant disbursement</label>
                      </div>
          
                       {/* Bank name & Account number  */}
                      <div className="w-full flex gap-3 items-center justify-between flex-wrap">
                              <div className="w-full sm:w-[48%] flex flex-col gap-2">
                                 <label>Bank Name *</label>
                                 <div className="flex gap-3 items-center border border-gray-500 rounded-md px-1 focus-within:border-black">
                                    <RiBankLine className="text-lg" />
          
                                    <select
                                       value={email}
                                       onChange={(e) => setEmail(e.target.value)}
                                       className="w-full h-9 rounded-md outline-none border-none bg-transparent focus:ring-0"
                                     >
                                          <option value="">Select bank</option>
                                          <option value="male">Male</option>
                                          <option value="female">Female</option>
                                    </select>
                                 </div>
          
                                 {emailError && <p className="text-red-600 text-xs">{emailError}</p>}
          
                             </div>
          
                              <div className="w-full sm:w-[48%] flex flex-col gap-2">
                                  <label>Account Number *</label>
                                    <div className="flex gap-3 items-center border border-gray-500 rounded-md px-1 focus-within:border-black">
                                       <RiBankCardLine className="text-lg" />
                                       <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter account number" className="w-full h-9 rounded-md outline-none border-none focus:ring-0" />
                                    </div>
          
                                  {emailError && <p className="text-red-600 text-xs">{emailError}</p>}
                              </div>
                      </div>
          
          
                      
                       {/* Branch code & Account type  */}
                      <div className="w-full flex gap-3 items-center justify-between flex-wrap">
                              <div className="w-full sm:w-[48%] flex flex-col gap-2">
                                  <label>Branch code *</label>
                                    <div className="flex gap-3 items-center border border-gray-500 rounded-md px-1 focus-within:border-black">
                                       <HiMiniHashtag className="text-lg" />
                                       <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter branch code" className="w-full h-9 rounded-md outline-none border-none focus:ring-0" />
                                    </div>
          
                                  {emailError && <p className="text-red-600 text-xs">{emailError}</p>}
                              </div>
          
                              <div className="w-full sm:w-[48%] flex flex-col gap-2">
                                 <label>Account Type *</label>
                                 <div className="flex gap-3 items-center border border-gray-500 rounded-md px-1 focus-within:border-black">
                                    <RiBankCardLine className="text-lg" />
          
                                    <select
                                       value={email}
                                       onChange={(e) => setEmail(e.target.value)}
                                       className="w-full h-9 rounded-md outline-none border-none bg-transparent focus:ring-0"
                                     >
                                          <option value="">Select type</option>
                                          <option value="male">Savings</option>
                                          <option value="female">Check/Current</option>
                                    </select>
                                 </div>
          
                                 {emailError && <p className="text-red-600 text-xs">{emailError}</p>}
          
                             </div>
                      </div>
          
                
                  </div>
          
     );
}

export default BankForm;