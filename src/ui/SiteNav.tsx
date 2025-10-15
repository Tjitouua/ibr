import React from 'react';
import Navigation from './Navigation';
import { FaHome } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";
import { FaMoneyBill1 } from "react-icons/fa6";
import { BsGraphUpArrow } from "react-icons/bs";
import { BiSolidMessageRoundedError } from "react-icons/bi";
import { IoMdSettings } from "react-icons/io";

const SideNav: React.FC = () => {

    const NavigationList = [
        {
            icon: <FaHome />,
            nav: "Dashboard",
        },
                {
            icon: <FaUsers />,
            nav: "Beneficiaries",
        },
                {
            icon: <FaMoneyBill1 />,
            nav: "Payments",
        },
                {
            icon: <BsGraphUpArrow />,
            nav: "Reports",
        },
                {
            icon: <BiSolidMessageRoundedError />,
            nav: "Grievances",
        },
                {
            icon: <IoMdSettings />,
            nav: "Administration",
        },
    ];


    return (
       <div className="w-1/5 h-183 py-4 bg-black sticky top-0 z-0 px-4 hidden xl:flex flex-col text-white">
        <div className="w-full px-3 py-3 mb-10 border-b border-b-white/40">
            <label className="text-lg font-semibold">IBR Management</label>
        </div>
        <div className="w-full px-3 py-3">
            <label className="text-sm text-blue-300">Navigation</label>
        </div>
         {NavigationList.map((nav, index) => (
           <Navigation
               key = {index}
               icon = {nav.icon}
               nav = {nav.nav}
           />
           ))}
       </div>
    ); 
}

export default SideNav;