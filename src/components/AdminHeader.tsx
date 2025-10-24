import React, { useState } from 'react';
import { FiPhone } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import { IoMenu } from "react-icons/io5";

// import Navigation from './Navigation';
import { FaHome } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";
import { FaMoneyBill1 } from "react-icons/fa6";
import { BsGraphUpArrow } from "react-icons/bs";
import { BiSolidMessageRoundedError } from "react-icons/bi";
import { IoMdSettings } from "react-icons/io";
import Navigation from '../ui/Navigation';
import { RxCross2 } from "react-icons/rx";

const AdminHeader: React.FC = () => {


    const [menuOpen, setMenuOpen] = useState(false);



    const NavigationList = [
        {
            icon: <FaHome />,
            nav: "Dashboard",
            path: "/dashboard",
        },
                {
            icon: <FaUsers />,
            nav: "Beneficiaries",
            path: "/beneficiaries",
        },
                {
            icon: <FaMoneyBill1 />,
            nav: "Payments",
            path: "/payments",
        },
                {
            icon: <BsGraphUpArrow />,
            nav: "Reports",
            path: "/reports",
        },
                {
            icon: <BiSolidMessageRoundedError />,
            nav: "Grievances",
            path: "#",
        },
                {
            icon: <IoMdSettings />,
            nav: "Administration",
            path: "#",
        },
    ];



       return (
        <header className="w-full flex flex-col gap-3 border-b-gray-200 sticky top-0 z-50 border-b max-w-400">
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



            <div className="flex flex-col">
            {/* Bottom Header  */}
            <div className="bg-black text-white w-full items-center py-2 flex xl:hidden justify-between px-5">
               <label>IBR Management</label>
               <div className="flex gap-3">
                {!menuOpen && (
                 <IoMenu className="cursor-pointer text-lg" onClick={() => setMenuOpen(true)} />
                )}
                {menuOpen && (
               <RxCross2 className="cursor-pointer text-lg" onClick={() => setMenuOpen(false)} />
               )}
               </div>
            </div>


            
            {/* Dissapear Div  */}
            {menuOpen && (
            <div className="w-full py-4 bg-black sticky top-0 pb-7 z-0 px-4 flex xl:hidden flex-col text-white">
                {/* <div className="w-full px-3 py-3 mb-10 border-b border-b-white/40"> */}
                   {/* <label className="text-lg font-semibold">IBR Management</label> */}
                 {/* </div> */}
                 <div className="w-full px-3 py-3">
                   <label className="text-sm text-blue-300">Navigation</label>
                 </div>
                    {NavigationList.map((nav, index) => (
                      <Navigation
                        key = {index}
                        icon = {nav.icon}
                        nav = {nav.nav}
                        path = {nav.path}
                      />
                    ))}
             </div>
             )}

            </div>
            



        </header>
       );
}

export default AdminHeader;