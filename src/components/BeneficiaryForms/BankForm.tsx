import { useState } from "react";
import { HiMiniHashtag } from "react-icons/hi2";
import { RiBankCardLine, RiBankLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";





const BankForm = ({ bankInfo, setBankInfo, errors }) => {


     const handleChange = (e) => {
           const {name, value} = e.target;
           setBankInfo({ ...bankInfo, [name]: value })
      }




     return (
                  <div className="px-6 py-10 pb-13 w-full xl:w-2/3 flex flex-col border border-gray-200 items-center text-gray-800 gap-5 rounded-sm bg-white shadow-lg">
          
                      <div className="flex flex-col w-full gap-2">
                      <label className="text-2xl font-bold">Bank Details</label>
                      <label className="text-sm text-gray-500">Payment information for grant disbursement</label>
                      </div>
          
                       {/* Bank name & Account number  */}
                      <div className="w-full flex gap-3 justify-between flex-wrap">
                              <div className="w-full sm:w-[48%] flex flex-col gap-2">
                                 <label>Bank Name *</label>
                                 <div className="flex gap-3 items-center border border-gray-500 rounded-md px-1 focus-within:border-black">
                                    <RiBankLine className="text-lg" />
          
                                    <select
                                       name="bankName"
                                       value={bankInfo.bankName}
                                       onChange={handleChange}
                                       className="w-full h-9 rounded-md outline-none border-none bg-transparent focus:ring-0"
                                     >
                                          <option value="">Select bank</option>
                                          <option value="FNB">FNB</option>
                                          <option value="Bank Windhoek">Bank Windhoek</option>
                                          <option value="Standard Bank">Standard Bank</option>
                                          <option value="Nedbank">Nedbank</option>
                                    </select>
                                 </div>
          
                                 {errors.bankName && <p className="text-red-600 text-xs">{errors.bankName}</p>}
          
                             </div>
          
                              <div className="w-full sm:w-[48%] flex flex-col gap-2">
                                  <label>Account Number *</label>
                                    <div className="flex gap-3 items-center border border-gray-500 rounded-md px-1 focus-within:border-black">
                                       <RiBankCardLine className="text-lg" />
                                       <input type="text" name="accountNumber" value={bankInfo.accountNumber} onChange={handleChange} placeholder="Enter account number" className="w-full h-9 rounded-md outline-none border-none focus:ring-0" />
                                    </div>
          
                                  {errors.accountNumber && <p className="text-red-600 text-xs">{errors.accountNumber}</p>}
                              </div>
                      </div>
          
          
                      
                       {/* Branch code & Account type  */}
                      <div className="w-full flex gap-3 justify-between flex-wrap">
                              <div className="w-full sm:w-[48%] flex flex-col gap-2">
                                  <label>Branch code *</label>
                                    <div className="flex gap-3 items-center border border-gray-500 rounded-md px-1 focus-within:border-black">
                                       <HiMiniHashtag className="text-lg" />
                                       <input type="text" name="branchCode" value={bankInfo.branchCode} onChange={handleChange} placeholder="Enter branch code" className="w-full h-9 rounded-md outline-none border-none focus:ring-0" />
                                    </div>
          
                                  {errors.branchCode && <p className="text-red-600 text-xs">{errors.branchCode}</p>}
                              </div>
          
                              <div className="w-full sm:w-[48%] flex flex-col gap-2">
                                 <label>Account Type *</label>
                                 <div className="flex gap-3 items-center border border-gray-500 rounded-md px-1 focus-within:border-black">
                                    <RiBankCardLine className="text-lg" />
          
                                    <select
                                       name="accountType"
                                       value={bankInfo.accountType}
                                       onChange={handleChange}
                                       className="w-full h-9 rounded-md outline-none border-none bg-transparent focus:ring-0"
                                     >
                                          <option value="">Select type</option>
                                          <option value="Savings">Savings</option>
                                          <option value="Check">Check/Current</option>
                                    </select>
                                 </div>
          
                                 {errors.accountType && <p className="text-red-600 text-xs">{errors.accountType}</p>}
          
                             </div>
                      </div>
          
                
                  </div>
          
     );
}

export default BankForm;