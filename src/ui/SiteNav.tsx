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
       <div className="w-1/5 h-180 pt-20 bg-black px-6 flex flex-col text-white">
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