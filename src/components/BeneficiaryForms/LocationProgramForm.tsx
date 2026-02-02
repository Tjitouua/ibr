import { useState } from "react";
import { FaRegBuilding } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { LiaFileAlt } from "react-icons/lia";
import { useNavigate } from "react-router-dom";





const LocationProgramForm = ({ locationInfo, setLocationInfo, errors }) => {


      const handleChange = (e) => {
           const {name, value} = e.target;
           setLocationInfo({ ...locationInfo, [name]: value })
      }







     return (
                    <div className="px-6 py-10 pb-13 w-full xl:w-2/3 flex flex-col border border-gray-200 items-center text-gray-800 gap-5 rounded-sm bg-white shadow-lg">
            
                        <div className="flex flex-col w-full gap-2">
                        <label className="text-2xl font-bold">Location & Program Assignment</label>
                        <label className="text-sm text-gray-500">Assign region and program for the beneficiary</label>
                        </div>
            
                         {/* Region & Town  */}
                        <div className="w-full flex gap-3 justify-between flex-wrap">
                                <div className="w-full sm:w-[48%] flex flex-col gap-2">
                                   <label>Region *</label>
                                   <div className="flex gap-3 items-center border border-gray-500 rounded-md px-1 focus-within:border-black">
                                      <IoLocationOutline className="text-lg" />
            
                                      <select
                                         name="region"
                                         value={locationInfo.region}
                                         onChange={handleChange}
                                         className="w-full h-9 rounded-md outline-none border-none bg-transparent focus:ring-0"
                                       >
                                            <option value="">Select region</option>
                                            <option value="Erongo">Erongo</option>
                                            <option value="Hardap">Hardap</option>
                                            <option value="Kavango East">Kavango East</option>
                                            <option value="Kavango West">Kavango West</option>
                                            <option value="Khomas">Khomas</option>
                                            <option value="Kunene">Kunene</option>
                                            <option value="Karas">Karas</option>
                                            <option value="Ohangwena">Ohangwena</option>
                                            <option value="Omaheke">Omaheke</option>
                                            <option value="Omusati">Omusati</option>
                                            <option value="Oshana">Oshana</option>
                                            <option value="Oshikoto">Oshikoto</option>
                                            <option value="Otjozondjupa">Otjozondjupa</option>
                                            <option value="Zambezi">Zambezi</option>
                                      </select>
                                   </div>
            
                                   {errors.region && <p className="text-red-600 text-xs">{errors.region}</p>}
            
                               </div>
            
                                <div className="w-full sm:w-[48%] flex flex-col gap-2">
                                    <label>Town *</label>
                                      <div className="flex gap-3 items-center border border-gray-500 rounded-md px-1 focus-within:border-black">
                                         <FaRegBuilding className="text-lg" />
                                         <input type="text" name="town" value={locationInfo.town} onChange={handleChange} placeholder="Enter town" className="w-full h-9 rounded-md outline-none border-none focus:ring-0" />
                                      </div>
            
                                    {errors.town && <p className="text-red-600 text-xs">{errors.town}</p>}
                                </div>
                        </div>
            
            
                        
                         {/* Program & Status  */}
                        <div className="w-full flex gap-3  justify-between flex-wrap">
                                <div className="w-full sm:w-[48%] flex flex-col gap-2">
                                   <label>Program *</label>
                                   <div className="flex gap-3 items-center border border-gray-500 rounded-md px-1 focus-within:border-black">
                                      <LiaFileAlt className="text-lg" />
            
                                      <select
                                         name="program"
                                         value={locationInfo.program}
                                         onChange={handleChange}
                                         className="w-full h-9 rounded-md outline-none border-none bg-transparent focus:ring-0"
                                       >
                                            <option value="">Select program</option>
                                            <option value="Old Age Grant">Old Age Grant</option>
                                            <option value="Permanent Disability Grant">Permanent Disability Grant</option>
                                            <option value="Orphans Grant">Orphans Grant</option>
                                            <option value="Vulnerable Children Grant">Vulnerable Children Grant</option>
                                      </select>
                                   </div>
            
                                   {errors.program && <p className="text-red-600 text-xs">{errors.program}</p>}
            
                               </div>
            
            
            
                                <div className="w-full sm:w-[48%] flex flex-col gap-2">
                                   <label>Status *</label>
                                   <div className="flex gap-3 items-center border border-gray-500 rounded-md px-1 focus-within:border-black">
                                      <LiaFileAlt className="text-lg" />
            
                                      <select
                                         name="status"
                                         value={locationInfo.status}
                                         onChange={handleChange}
                                         className="w-full h-9 rounded-md outline-none border-none bg-transparent focus:ring-0"
                                       >
                                            <option value="">Select status</option>
                                            {/* <option value="Pending">Pending</option> */}
                                            <option value="Active">Active</option>
                                            <option value="Exit">Exit</option>
                                      </select>
                                   </div>
            
                                   {errors.status && <p className="text-red-600 text-xs">{errors.status}</p>}
            
                               </div>
            
            
                        </div>
                       
                        
                            
                    </div>
            
            
     );
}

export default LocationProgramForm;