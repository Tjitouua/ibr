import React from 'react';
import { FiPhone } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";

const AdminHeader = () => {
       return (
        <header className="w-full flex flex-col gap-3 border-b-gray-200 border-b mb-5 sticky top-0 z-50 max-w-400">
        <div className="w-full min-h-15 flex flex-col gap-2">
            {/* Top Header  */}
            <div className="w-full flex bg-white items-center flex-wrap justify-between gap-4 min-h-10 py-1 px-5">
                <div className="flex gap-6 flex-wrap">
                {/* Image Div  */}
                <div className="w-25 sm:w-15 h-25 sm:h-15">
                   <img src="/images/namibiaLogo.png" className="w-full h-full" />
                </div>
                {/* IBR name div  */}
                <div className="min-h-15 flex flex-col justify-start pt-1">
                    <label className="font-semibold text-lg">NAMIBIA INTEGRATED BENEFICIARY REGISTRY (IBR)</label>
                    <label className="text-sm">Ministry of Gender Equality, Poverty Eradication and Social Welfare</label>
                </div>
                </div>
                {/* Contact div  */}
                <div className="flex flex-col text-sm">
                    {/* Phone  */}
                    <div className="flex gap-2 items-center">
                        <FiPhone />
                        <label>264 61 283 3111</label>
                    </div>
                    {/* Email  */}
                    <div className="flex gap-2 items-center">
                       <MdOutlineMail />
                       <label>info@ibr.gov.na</label>
                    </div>
                </div>
            </div>
            </div>



        </header>
       );
}

export default AdminHeader;