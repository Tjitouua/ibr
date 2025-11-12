import React from 'react'
import { PiMoneyWavyBold } from "react-icons/pi";
import { LuUsers } from "react-icons/lu";
import { TbBrandRedhat } from "react-icons/tb";
import { PiDressBold } from "react-icons/pi";



interface ProgramCardProps {
    name: string;
    budget: number;
    beneficiary: number;
    males: number;
    females: number;
}





const Program: React.FC<ProgramCardProps> = ({ name, budget, beneficiary, males, females }) => {
    return (
        <div className="flex flex-col p-6 py-12 border items-center shadow-md shadow-black/30 border-white gap-6 min-w-92 hover:shadow-xl">
             <label className="font-bold text-xl">{name}</label>

             <div className="w-full flex pb-3 justify-between border-b border-gray-400 gap-5 text-[13px] text-gray-700 items-center">
                  {/* Budget Div  */}
                  <div className="w-1/2 flex flex-col gap-1">
                      <div className="flex items-center gap-2"><PiMoneyWavyBold /><label>Budget</label></div>
                      <label className="text-sm font-bold text-black">N$ {budget}</label>
                  </div>
                  {/* Beneficiaries Div  */}
                  <div className="w-1/2 flex flex-col gap-1">
                      <div className="flex items-center gap-2"><LuUsers /><label>Beneficiaries</label></div>
                      <label className="text-sm font-bold text-black">{beneficiary}</label>
                  </div>
             </div>

             
             <div className="w-full flex pb-3 justify-between border-b border-gray-400 gap-5 text-[13px] text-gray-700 items-center">
                  {/* Male Div  */}
                  <div className="w-1/2 flex flex-col gap-1">
                      <div className="flex items-center gap-2"><TbBrandRedhat /><label>Males</label></div>
                      <label className="text-sm font-bold text-black">{males}</label>
                  </div>
                  {/* Female Div  */}
                  <div className="w-1/2 flex flex-col gap-1">
                      <div className="flex items-center gap-2"><PiDressBold /><label>Females</label></div>
                      <label className="text-sm font-bold text-black">{females}</label>
                  </div>
             </div>

             {/* Buttons Div  */}
             <div className="w-full flex items-center justify-between py-2 gap-2">
                 <button className="w-1/2 font-semibold border border-gray-500 py-2 rounded-lg">View Details</button>
                 <button className="w-1/2 font-semibold bg-gray-100 border border-gray-500 py-2 rounded-lg">Edit</button>
             </div>

        </div>
    );
}

export default Program;